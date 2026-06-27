// app/api/newsletter/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_WINDOW_SECONDS = 10 * 60;
const RATE_MAX_REQUESTS = 5;

type Payload = {
  email: string;
  name?: string;
  org?: string;
  consent: boolean;
  hp?: string;
  locale?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clip(str: string, max: number) {
  const s = (str ?? "").toString().trim();
  return s.length > max ? s.slice(0, max) : s;
}
function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() ?? "unknown";
}
function base64UrlEncode(str: string) {
  return Buffer.from(str).toString("base64url");
}

async function upstashCommand(cmd: string[], url: string, token: string) {
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ command: cmd }),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) return { ok: false as const, error: json };
  return { ok: true as const, data: json };
}

async function rateLimitOrThrow(req: Request) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { limited: false };
  const ip = getClientIp(req);
  const windowId = Math.floor(Date.now() / 1000 / RATE_WINDOW_SECONDS);
  const key = base64UrlEncode(`rl:newsletter:${ip}:${windowId}`);
  const incr = await upstashCommand(["INCR", key], url, token);
  if (!incr.ok) return { limited: false };
  const current = Number(incr.data?.result ?? 0);
  if (current === 1) {
    await upstashCommand(["EXPIRE", key, String(RATE_WINDOW_SECONDS + 30)], url, token);
  }
  return { limited: current > RATE_MAX_REQUESTS };
}

async function resendSendEmail(args: {
  apiKey: string;
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${args.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: args.from,
      to: args.to,
      subject: args.subject,
      text: args.text,
      reply_to: args.replyTo,
    }),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok ? { ok: true as const, data } : { ok: false as const, error: data };
}

async function storeSubscriber(sub: {
  email: string;
  name: string;
  org: string;
  locale: string;
}) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return;
  const value = JSON.stringify({ ...sub, ts: new Date().toISOString() });
  await upstashCommand(["RPUSH", "newsletter:subscribers", value], url, token);
}

export async function POST(req: Request) {
  try {
    const rl = await rateLimitOrThrow(req);
    if (rl.limited) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }
    const body = (await req.json()) as Partial<Payload>;
    if (body.hp && body.hp.trim() !== "") return NextResponse.json({ ok: true });

    const email = clip(body.email ?? "", 120);
    const name = clip(body.name ?? "", 60);
    const org = clip(body.org ?? "", 120);
    const locale = body.locale === "en" ? "en" : "ko";

    if (!body.consent) {
      return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    await storeSubscriber({ email, name, org, locale });

    const apiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;
    if (apiKey && mailFrom && mailTo) {
      await resendSendEmail({
        apiKey,
        from: mailFrom,
        to: mailTo,
        subject: `[뉴스레터 구독] ${email}`,
        text: `이메일: ${email}\n이름: ${name || "-"}\n회사/사무소: ${org || "-"}\nLocale: ${locale}\nIP: ${getClientIp(req)}\nTime: ${new Date().toISOString()}`,
        replyTo: email,
      });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "processing_error" }, { status: 500 });
  }
}
