// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_WINDOW_SECONDS = 10 * 60;
const RATE_MAX_REQUESTS = 5;

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  category: string;
  replyMethod?: "email" | "phone";
  message: string;
  link?: string;
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
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xrip = req.headers.get("x-real-ip");
  if (xrip) return xrip.trim();
  return "unknown";
}

function base64UrlEncode(str: string) {
  return Buffer.from(str).toString("base64url");
}

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

async function upstashCommand(cmd: string[], url: string, token: string) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ command: cmd }),
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) return { ok: false as const, error: json };
  return { ok: true as const, data: json };
}

async function rateLimitOrThrow(req: Request) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { limited: false, remaining: null as number | null };

  const ip = getClientIp(req);
  const windowId = Math.floor(Date.now() / 1000 / RATE_WINDOW_SECONDS);
  const keyRaw = `rl:contact:${ip}:${windowId}`;
  const key = base64UrlEncode(keyRaw);

  const incr = await upstashCommand(["INCR", key], url, token);
  if (!incr.ok) return { limited: false, remaining: null as number | null };

  const current = Number(incr.data?.result ?? 0);
  if (current === 1) {
    await upstashCommand(["EXPIRE", key, String(RATE_WINDOW_SECONDS + 30)], url, token);
  }

  const remaining = Math.max(0, RATE_MAX_REQUESTS - current);
  const limited = current > RATE_MAX_REQUESTS;
  return { limited, remaining };
}

/* ── Locale-aware text helpers ── */
function getLabels(locale: string) {
  const isEn = locale === "en";
  return {
    rateLimited: isEn
      ? "Too many requests. Please try again later."
      : "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.",
    consentRequired: isEn
      ? "Consent to privacy policy is required."
      : "개인정보 수집 및 이용 동의가 필요합니다.",
    requiredFields: isEn
      ? "Please fill in all required fields."
      : "필수 항목을 입력해 주세요.",
    invalidEmail: isEn
      ? "Invalid email format."
      : "이메일 형식이 올바르지 않습니다.",
    serverConfigError: isEn
      ? "Server configuration missing (RESEND_API_KEY/Mail env)."
      : "서버 설정이 누락되었습니다(RESEND_API_KEY/Mail env).",
    mailFailed: isEn
      ? "Failed to send email."
      : "메일 발송(접수)에 실패했습니다.",
    processingError: isEn
      ? "An error occurred while processing your request."
      : "요청 처리 중 오류가 발생했습니다.",
    replyPhone: isEn ? "Phone" : "전화",
    replyEmail: isEn ? "Email" : "이메일",
    // Office notification (always Korean for internal use)
    officeSubject: (cat: string, n: string) => `[홈페이지 문의][${cat}] ${n}`,
    officeHeading: "문의 접수 (머스트 특허 홈페이지)",
    officeHtmlHeading: "홈페이지 문의가 접수되었습니다",
    // Client auto-reply
    clientSubject: isEn
      ? "Your inquiry has been received | MUST Patent Law Firm"
      : "문의가 접수되었습니다 | 머스트 특허법률사무소",
    clientGreeting: (n: string) =>
      isEn ? `Dear ${n},` : `${n} 님께,`,
    clientThanks: isEn
      ? "Thank you for contacting MUST Patent Law Firm."
      : "머스트 특허법률사무소에 문의해 주셔서 감사합니다.",
    clientReceived: isEn
      ? "Your inquiry has been successfully received."
      : "문의가 정상적으로 접수되었습니다.",
    clientReplyNotice: isEn
      ? "Our patent attorney will respond within 1–2 business days."
      : "담당 변리사가 확인 후 영업일 기준 1–2일 내 회신드리겠습니다.",
    clientUrgent: isEn
      ? "For urgent matters, please call +82-2-526-6710."
      : "긴급한 경우에는 02-526-6710 으로 연락 부탁드립니다.",
    clientThankYou: isEn ? "Thank you." : "감사합니다.",
    firmName: isEn ? "MUST Patent Law Firm" : "머스트 특허법률사무소",
    labelName: isEn ? "Name/Organization" : "성함/기관",
    labelEmail: isEn ? "Email" : "이메일",
    labelPhone: isEn ? "Phone" : "연락처",
    labelCategory: isEn ? "Inquiry Type" : "문의 유형",
    labelReply: isEn ? "Preferred Reply" : "희망 회신",
    labelLink: isEn ? "Reference Link" : "참고 링크",
    labelMessage: isEn ? "Message" : "문의 내용",
    labelTime: isEn ? "Received At" : "접수 일시",
    labelReceivedContent: isEn ? "Submitted Content" : "접수 내용",
  };
}

export async function POST(req: Request) {
  try {
    const rl = await rateLimitOrThrow(req);
    const body = (await req.json()) as Partial<ContactPayload>;
    const locale = body.locale === "en" ? "en" : "ko";
    const L = getLabels(locale);

    if (rl.limited) {
      return NextResponse.json(
        { ok: false, error: L.rateLimited },
        { status: 429, headers: { "Retry-After": String(RATE_WINDOW_SECONDS) } }
      );
    }

    if (body.hp && body.hp.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const name = clip(body.name ?? "", 60);
    const email = clip(body.email ?? "", 120);
    const phone = clip(body.phone ?? "", 40);
    const category = clip(body.category ?? "", 40);
    const replyMethod = body.replyMethod === "phone" ? "phone" : "email";
    const message = clip(body.message ?? "", 4000);
    const link = clip(body.link ?? "", 300);
    const consent = Boolean(body.consent);

    if (!consent) {
      return NextResponse.json({ ok: false, error: L.consentRequired }, { status: 400 });
    }
    if (!name || !email || !category || !message) {
      return NextResponse.json({ ok: false, error: L.requiredFields }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: L.invalidEmail }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;
    const autoReplyFrom = process.env.AUTO_REPLY_FROM || mailFrom;

    if (!apiKey || !mailFrom || !mailTo || !autoReplyFrom) {
      return NextResponse.json({ ok: false, error: L.serverConfigError }, { status: 500 });
    }

    const replyLabel = replyMethod === "phone" ? L.replyPhone : L.replyEmail;

    // Office mail (always Korean labels for internal use)
    const subjectToOffice = L.officeSubject(category, name);
    const textToOffice = [
      L.officeHeading,
      ``,
      `- 성함/기관: ${name}`,
      `- 이메일: ${email}`,
      `- 연락처: ${phone || "-"}`,
      `- 문의 유형: ${category}`,
      `- 희망 회신: ${replyMethod === "phone" ? "전화" : "이메일"}`,
      `- 참고 링크: ${link || "-"}`,
      `- Locale: ${locale}`,
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
        <h2 style="margin:0 0 12px;">${L.officeHtmlHeading}</h2>
        <table style="border-collapse: collapse; width:100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding:8px 0; width:140px; color:#555;">성함/기관</td><td style="padding:8px 0;"><b>${escapeHtml(name)}</b></td></tr>
            <tr><td style="padding:8px 0; color:#555;">이메일</td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">연락처</td><td style="padding:8px 0;">${escapeHtml(phone || "-")}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">문의 유형</td><td style="padding:8px 0;">${escapeHtml(category)}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">희망 회신</td><td style="padding:8px 0;">${replyMethod === "phone" ? "전화" : "이메일"}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">참고 링크</td><td style="padding:8px 0;">${link ? `<a href="${escapeAttr(link)}">${escapeHtml(link)}</a>` : "-"}</td></tr>
            <tr><td style="padding:8px 0; color:#555;">Locale</td><td style="padding:8px 0;">${locale}</td></tr>
          </tbody>
        </table>
        <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
        <h3 style="margin:0 0 8px;">문의 내용</h3>
        <div style="white-space: pre-wrap; background:#fafafa; padding:12px; border-radius:10px; border:1px solid #eee;">${escapeHtml(message)}</div>
      </div>
    `;

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
        { ok: false, error: L.mailFailed, detail: office.error },
        { status: 500 }
      );
    }

    // Client auto-reply (locale-aware)
    const subjectToClient = L.clientSubject;
    const replyToOffice = extractEmailAddress(mailTo);

    const textToClient = [
      L.clientGreeting(name),
      ``,
      L.clientThanks,
      L.clientReceived,
      ``,
      `- ${L.labelCategory}: ${category}`,
      `- ${L.labelReply}: ${replyLabel}`,
      `- ${L.labelTime}: ${formatKST(new Date())}`,
      ``,
      L.clientReplyNotice,
      L.clientUrgent,
      ``,
      `${L.labelReceivedContent}:`,
      `----`,
      message,
      `----`,
      ``,
      L.clientThankYou,
      L.firmName,
    ].join("\n");

    const htmlToClient = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.7; color:#111;">
        <p style="margin:0 0 10px;"><b>${escapeHtml(name)}</b> ${locale === "en" ? "" : "님께,"}${locale === "en" ? "," : ""}</p>
        <p style="margin:0 0 10px;">
          ${escapeHtml(L.clientThanks)}<br/>
          ${escapeHtml(L.clientReceived)}
        </p>

        <table style="border-collapse: collapse; width:100%; max-width: 720px;">
          <tbody>
            <tr><td style="padding:6px 0; width:140px; color:#555;">${L.labelCategory}</td><td style="padding:6px 0;"><b>${escapeHtml(category)}</b></td></tr>
            <tr><td style="padding:6px 0; color:#555;">${L.labelReply}</td><td style="padding:6px 0;">${replyLabel}</td></tr>
            <tr><td style="padding:6px 0; color:#555;">${L.labelTime}</td><td style="padding:6px 0;">${escapeHtml(formatKST(new Date()))}</td></tr>
          </tbody>
        </table>

        <div style="margin:14px 0; padding:12px; border:1px solid #eee; border-radius:12px; background:#fafafa;">
          <div style="font-size: 14px; color:#333;">
            ${escapeHtml(L.clientReplyNotice)}<br/>
            ${escapeHtml(L.clientUrgent)}
          </div>
        </div>

        <p style="margin:0 0 8px; font-weight:600;">${L.labelReceivedContent}</p>
        <div style="white-space: pre-wrap; padding:12px; border:1px solid #eee; border-radius:12px;">
          ${escapeHtml(message)}
        </div>

        <p style="margin:16px 0 0; color:#333;">
          ${escapeHtml(L.clientThankYou)}<br/>
          <b>${escapeHtml(L.firmName)}</b>
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

    if (!client.ok) {
      return NextResponse.json({ ok: true, auto_reply_failed: true });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
