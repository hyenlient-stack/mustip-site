// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// =====================
// Config (원하면 조절)
// =====================
const RATE_WINDOW_SECONDS = 10 * 60; // 10 minutes
const RATE_MAX_REQUESTS = 5; // per window per IP

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  replyMethod?: "email" | "phone";
  message: string;
  link?: string;
  consent: boolean;
  hp?: string; // honeypot
};

// ---------------------
// Utils
// ---------------------
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clip(str: string, max: number) {
  const s = (str ?? "").toString().trim();
  return s.length > max ? s.slice(0, max) : s;
}
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(input: string) {
  return escapeHtml(input).replaceAll(" ", "%20");
}
function extractEmailAddress(v: string) {
  const m = v.match(/<([^>]+)>/);
  return m ? m[1] : v;
}
function formatKST(d: Date) {
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  const yyyy = kst.getUTCFullYear();
  const mm = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(kst.getUTCDate()).padStart(2, "0");
  const hh = String(kst.getUTCHours()).padStart(2, "0");
  const mi = String(kst.getUTCMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi} (KST)`;
}

function getClientIp(req: Request) {
  // Vercel에서는 x-forwarded-for가 "client, proxy1, proxy2" 형태일 수 있음
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  // 혹시 모를 케이스
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip.trim();

  return "unknown";
}

function base64UrlEncode(str: string) {
  return Buffer.from(str).toString("base64url");
}

// ---------------------
// Resend (fetch)
// ---------------------
async function resendSendEmail(args: {
  apiKey: string;
  from: string;
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: args.from,
      to: args.to,
      subject: args.subject,
      text: args.text,
      html: args.html,
      reply_to: args.replyTo,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) return { ok: false as const, error: data };
  return { ok: true as const, data };
}

// ---------------------
// Upstash Redis (REST via fetch)
// - INCR + EXPIRE
// - window당 카운트 제한
// ---------------------
async function upstashCommand(cmd: string[], url: string, token: string) {
  // Upstash REST: POST {REST_URL} with JSON body {command:[...]}
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command: cmd }),
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) {
    return { ok: false as const, error: json };
  }
  return { ok: true as const, data: json };
}

async function rateLimitOrThrow(req: Request) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  // Upstash 설정이 없으면(개발 초기), 제한 없이 통과시키되 운영에선 반드시 넣는 걸 권장
  if (!url || !token) return { limited: false, remaining: null as number | null };

  const ip = getClientIp(req);
  const windowId = Math.floor(Date.now() / 1000 / RATE_WINDOW_SECONDS); // 10분 단위 버킷
  const keyRaw = `rl:contact:${ip}:${windowId}`;
  const key = base64UrlEncode(keyRaw); // 안전하게

  // 1) INCR
  const incr = await upstashCommand(["INCR", key], url, token);
  if (!incr.ok) {
    // Redis가 잠깐 죽어도 문의 접수는 막지 않는 게 운영상 유리.
    // 단, 이 경우 rate limit이 적용되지 않음을 감수.
    return { limited: false, remaining: null as number | null };
  }

  const current = Number(incr.data?.result ?? 0);

  // 2) 첫 요청이면 EXPIRE 설정(윈도우 + 약간의 버퍼)
  if (current === 1) {
    await upstashCommand(["EXPIRE", key, String(RATE_WINDOW_SECONDS + 30)], url, token);
  }

  const remaining = Math.max(0, RATE_MAX_REQUESTS - current);
  const limited = current > RATE_MAX_REQUESTS;

  return { limited, remaining };
}

// =====================
// Handler
// =====================
export async function POST(req: Request) {
  try {
    // 0) Rate limit (가장 먼저)
    const rl = await rateLimitOrThrow(req);
    if (rl.limited) {
      return NextResponse.json(
        { ok: false, error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
        {
          status: 429,
          headers: {
            "Retry-After": String(RATE_WINDOW_SECONDS),
          },
        }
      );
    }

    const body = (await req.json()) as Partial<ContactPayload>;

    // 1) Honeypot: 봇이면 조용히 성공 처리
    if (body.hp && body.hp.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // 2) Validate
    const name = clip(body.name ?? "", 60);
    const email = clip(body.email ?? "", 120);
    const phone = clip(body.phone ?? "", 40);
    const category = clip(body.category ?? "", 40);
    const replyMethod = body.replyMethod === "phone" ? "phone" : "email";
    const message = clip(body.message ?? "", 4000);
    const link = clip(body.link ?? "", 300);
    const consent = Boolean(body.consent);

    if (!consent) {
      return NextResponse.json(
        { ok: false, error: "개인정보 수집 및 이용 동의가 필요합니다." },
        { status: 400 }
      );
    }
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { ok: false, error: "필수 항목을 입력해 주세요." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "이메일 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    // 3) Env
    const apiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;
    const autoReplyFrom = process.env.AUTO_REPLY_FROM || mailFrom;

    if (!apiKey || !mailFrom || !mailTo || !autoReplyFrom) {
      return NextResponse.json(
        { ok: false, error: "서버 설정이 누락되었습니다(RESEND_API_KEY/Mail env)." },
        { status: 500 }
      );
    }

    // 4) Compose: office mail
    const subjectToOffice = `[홈페이지 문의][${category}] ${name}`;

    const textToOffice = [
      `문의 접수 (머스트 특허 홈페이지)`,
      ``,
      `- 성함/기관: ${name}`,
      `- 이메일: ${email}`,
      `- 연락처: ${phone || "-"}`,
      `- 문의 유형: ${category}`,
      `- 희망 회신: ${replyMethod === "phone" ? "전화" : "이메일"}`,
      `- 참고 링크: ${link || "-"}`,
      ``,
      `문의 내용:`,
      message,
      ``,
      `----`,
      `User-Agent: ${req.headers.get("user-agent") || "-"}`,
      `IP(참고): ${getClientIp(req)}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    const htmlToOffice = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.6;">
        <h2 style="margin:0 0 12px;">홈페이지 문의가 접수되었습니다</h2>
        <table style="border-collapse: collapse; width:100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding:8px 0; width:140px; color:#555;">성함/기관</td><td style="padding:8px 0;"><b>${escapeHtml(
              name
            )}</b></td></tr>
            <tr><td style="padding:8px 0; color:#555;">이메일</td><td style="padding:8px 0;">${escapeHtml(
              email
            )}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">연락처</td><td style="padding:8px 0;">${escapeHtml(
              phone || "-"
            )}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">문의 유형</td><td style="padding:8px 0;">${escapeHtml(
              category
            )}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">희망 회신</td><td style="padding:8px 0;">${
              replyMethod === "phone" ? "전화" : "이메일"
            }</td></tr>
            <tr><td style="padding:8px 0; color:#555;">참고 링크</td><td style="padding:8px 0;">${
              link ? `<a href="${escapeAttr(link)}">${escapeHtml(link)}</a>` : "-"
            }</td></tr>
          </tbody>
        </table>
        <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
        <h3 style="margin:0 0 8px;">문의 내용</h3>
        <div style="white-space: pre-wrap; background:#fafafa; padding:12px; border-radius:10px; border:1px solid #eee;">${escapeHtml(
          message
        )}</div>
      </div>
    `;

    // 5) Send office mail
    const office = await resendSendEmail({
      apiKey,
      from: mailFrom,
      to: mailTo,
      subject: subjectToOffice,
      text: textToOffice,
      html: htmlToOffice,
      replyTo: email,
    });

    if (!office.ok) {
      return NextResponse.json(
        { ok: false, error: "메일 발송(접수)에 실패했습니다.", detail: office.error },
        { status: 500 }
      );
    }

    // 6) Compose: auto-reply to client
    const subjectToClient = `문의가 접수되었습니다 | 머스트 특허법률사무소`;
    const replyToOffice = extractEmailAddress(mailTo);

    const textToClient = [
      `${name} 님께,`,
      ``,
      `머스트 특허법률사무소에 문의해 주셔서 감사합니다.`,
      `문의가 정상적으로 접수되었습니다.`,
      ``,
      `- 문의 유형: ${category}`,
      `- 희망 회신: ${replyMethod === "phone" ? "전화" : "이메일"}`,
      `- 접수 일시: ${formatKST(new Date())}`,
      ``,
      `담당 변리사가 확인 후 영업일 기준 1–2일 내 회신드리겠습니다.`,
      `긴급한 경우에는 02-526-6710 으로 연락 부탁드립니다.`,
      ``,
      `접수 내용:`,
      `----`,
      message,
      `----`,
      ``,
      `감사합니다.`,
      `머스트 특허법률사무소`,
    ].join("\n");

    const htmlToClient = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.7; color:#111;">
        <p style="margin:0 0 10px;"><b>${escapeHtml(name)}</b> 님께,</p>
        <p style="margin:0 0 10px;">
          머스트 특허법률사무소에 문의해 주셔서 감사합니다.<br/>
          문의가 <b>정상적으로 접수</b>되었습니다.
        </p>

        <table style="border-collapse: collapse; width:100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding:6px 0; width:140px; color:#555;">문의 유형</td><td style="padding:6px 0;"><b>${escapeHtml(
              category
            )}</b></td></tr>
            <tr><td style="padding:6px 0; color:#555;">희망 회신</td><td style="padding:6px 0;">${
              replyMethod === "phone" ? "전화" : "이메일"
            }</td></tr>
            <tr><td style="padding:6px 0; color:#555;">접수 일시</td><td style="padding:6px 0;">${escapeHtml(
              formatKST(new Date())
            )}</td></tr>
          </tbody>
        </table>

        <div style="margin:14px 0; padding:12px; border:1px solid #eee; border-radius:12px; background:#fafafa;">
          <div style="font-size: 14px; color:#333;">
            담당 변리사가 확인 후 <b>영업일 기준 1–2일 내</b> 회신드리겠습니다.<br/>
            긴급한 경우 <b>02-526-6710</b> 으로 연락 부탁드립니다.
          </div>
        </div>

        <p style="margin:0 0 8px; font-weight:600;">접수 내용</p>
        <div style="white-space: pre-wrap; padding:12px; border:1px solid #eee; border-radius:12px;">
          ${escapeHtml(message)}
        </div>

        <p style="margin:16px 0 0; color:#333;">
          감사합니다.<br/>
          <b>머스트 특허법률사무소</b>
        </p>
      </div>
    `;

    const client = await resendSendEmail({
      apiKey,
      from: autoReplyFrom,
      to: email,
      subject: subjectToClient,
      text: textToClient,
      html: htmlToClient,
      replyTo: replyToOffice,
    });

    // 자동응답 실패는 접수 성공을 깨지 않음
    if (!client.ok) {
      return NextResponse.json({
        ok: true,
        auto_reply_failed: true,
        // 디버깅이 필요하면 아래 detail을 잠깐 켜도 되지만,
        // 운영에선 개인정보/내부정보 노출 우려로 기본은 숨기는 게 안전
        // detail: client.error,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
