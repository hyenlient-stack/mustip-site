// app/api/trademark-request/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type TrademarkRequestPayload = {
  serviceOption: "agency" | "review";
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  trademarkName: string;
  trademarkType: string;
  applicantType: string;
  goodsByClass: { niceClass: string; goods: string[] }[];
  totalFee: number;
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

function formatKST(d: Date) {
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  const yyyy = kst.getUTCFullYear();
  const mm = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(kst.getUTCDate()).padStart(2, "0");
  const hh = String(kst.getUTCHours()).padStart(2, "0");
  const mi = String(kst.getUTCMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi} (KST)`;
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

function extractEmailAddress(v: string) {
  const m = v.match(/<([^>]+)>/);
  return m ? m[1] : v;
}

function getLabels(locale: string, serviceOption: string) {
  const isEn = locale === "en";
  const isReview = serviceOption === "review";

  return {
    // Office notification (always Korean)
    officeSubject: (name: string, tm: string) =>
      isReview
        ? `[간편 상표출원][변리사 검토 의뢰] ${tm} - ${name}`
        : `[간편 상표출원][출원 대행 요청] ${tm} - ${name}`,
    officeHeading: isReview
      ? "변리사 검토 및 출원 의뢰가 접수되었습니다"
      : "출원 대행 요청이 접수되었습니다",
    serviceLabel: isReview ? "변리사 검토 및 출원 의뢰" : "출원 대행",
    // Client auto-reply
    clientSubject: isEn
      ? isReview
        ? "Your expert review & filing request has been received | MUST Patent Law Firm"
        : "Your filing service request has been received | MUST Patent Law Firm"
      : isReview
        ? "변리사 검토 및 출원 의뢰가 접수되었습니다 | 머스트 특허법률사무소"
        : "출원 대행 요청이 접수되었습니다 | 머스트 특허법률사무소",
    clientGreeting: (n: string) =>
      isEn ? `Dear ${n},` : `${n} 님께,`,
    clientThanks: isEn
      ? "Thank you for using MUST Patent Law Firm's Easy Trademark Filing service."
      : "머스트 특허법률사무소 간편 상표출원 서비스를 이용해 주셔서 감사합니다.",
    clientReceived: isEn
      ? isReview
        ? "Your expert review and filing request has been successfully received."
        : "Your filing service request has been successfully received."
      : isReview
        ? "변리사 검토 및 출원 의뢰가 정상적으로 접수되었습니다."
        : "출원 대행 요청이 정상적으로 접수되었습니다.",
    clientReplyNotice: isEn
      ? "Our patent attorney will review your request and contact you within 1–2 business days."
      : "담당 변리사가 확인 후 영업일 기준 1–2일 내 연락드리겠습니다.",
    clientUrgent: isEn
      ? "For urgent matters, please call +82-2-526-6710."
      : "긴급한 경우에는 02-526-6710 으로 연락 부탁드립니다.",
    clientThankYou: isEn ? "Thank you." : "감사합니다.",
    firmName: isEn ? "MUST Patent Law Firm" : "머스트 특허법률사무소",
    // Errors
    requiredFields: isEn
      ? "Please fill in all required fields."
      : "필수 항목을 입력해 주세요.",
    invalidEmail: isEn
      ? "Invalid email format."
      : "이메일 형식이 올바르지 않습니다.",
    serverConfigError: isEn
      ? "Server configuration missing."
      : "서버 설정이 누락되었습니다.",
    mailFailed: isEn
      ? "Failed to send email."
      : "메일 발송에 실패했습니다.",
    processingError: isEn
      ? "An error occurred while processing your request."
      : "요청 처리 중 오류가 발생했습니다.",
  };
}

function buildGoodsTable(goodsByClass: { niceClass: string; goods: string[] }[]) {
  const rows = goodsByClass
    .map(
      (cls) =>
        `<tr>
          <td style="padding:8px 12px; border:1px solid #e2e8f0; vertical-align:top; font-weight:600; white-space:nowrap; background:#f8fafc;">제${cls.niceClass}류</td>
          <td style="padding:8px 12px; border:1px solid #e2e8f0;">${cls.goods.map(escapeHtml).join(", ")}</td>
        </tr>`
    )
    .join("");

  return `<table style="border-collapse:collapse; width:100%; max-width:720px; margin:12px 0;">
    <thead><tr>
      <th style="padding:8px 12px; border:1px solid #e2e8f0; background:#f1f5f9; text-align:left; width:80px;">분류</th>
      <th style="padding:8px 12px; border:1px solid #e2e8f0; background:#f1f5f9; text-align:left;">지정상품</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function buildGoodsText(goodsByClass: { niceClass: string; goods: string[] }[]) {
  return goodsByClass
    .map((cls) => `[제${cls.niceClass}류] ${cls.goods.join(", ")}`)
    .join("\n");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<TrademarkRequestPayload>;
    const locale = body.locale === "en" ? "en" : "ko";
    const serviceOption = body.serviceOption === "review" ? "review" : "agency";
    const L = getLabels(locale, serviceOption);

    const clientName = clip(body.clientName ?? "", 60);
    const clientPhone = clip(body.clientPhone ?? "", 40);
    const clientEmail = clip(body.clientEmail ?? "", 120);
    const trademarkName = clip(body.trademarkName ?? "", 100);
    const trademarkType = clip(body.trademarkType ?? "", 20);
    const applicantType = clip(body.applicantType ?? "", 20);
    const goodsByClass = body.goodsByClass ?? [];
    const totalFee = body.totalFee ?? 0;

    if (!clientName || !clientPhone || !clientEmail || !trademarkName || goodsByClass.length === 0) {
      return NextResponse.json({ ok: false, error: L.requiredFields }, { status: 400 });
    }
    if (!isValidEmail(clientEmail)) {
      return NextResponse.json({ ok: false, error: L.invalidEmail }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;
    const autoReplyFrom = process.env.AUTO_REPLY_FROM || mailFrom;

    if (!apiKey || !mailFrom || !mailTo || !autoReplyFrom) {
      return NextResponse.json({ ok: false, error: L.serverConfigError }, { status: 500 });
    }

    const now = new Date();
    const trademarkTypeLabel =
      trademarkType === "text" ? "문자" : trademarkType === "logo" ? "로고" : "문자+로고";
    const applicantLabel =
      applicantType === "individual" ? "개인" : "법인";
    const totalClasses = goodsByClass.length;
    const totalGoods = goodsByClass.reduce((s, c) => s + c.goods.length, 0);

    // ── Office notification email ──
    const subjectToOffice = L.officeSubject(clientName, trademarkName);

    const textToOffice = [
      L.officeHeading,
      ``,
      `- 진행 방식: ${L.serviceLabel}`,
      `- 신청자: ${clientName}`,
      `- 연락처: ${clientPhone}`,
      `- 이메일: ${clientEmail}`,
      ``,
      `- 출원 상표: ${trademarkName}`,
      `- 상표 형태: ${trademarkTypeLabel}`,
      `- 출원인 유형: ${applicantLabel}`,
      `- 분류 수: ${totalClasses}류`,
      `- 지정상품 수: ${totalGoods}개`,
      `- 예상 특허청 수수료: ${totalFee.toLocaleString()}원`,
      ``,
      `[지정상품 목록]`,
      buildGoodsText(goodsByClass),
      ``,
      `접수 일시: ${formatKST(now)}`,
    ].join("\n");

    const htmlToOffice = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.6;">
        <h2 style="margin:0 0 16px;color:#1e293b;">${L.officeHeading}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tbody>
            <tr><td style="padding:8px 0;width:140px;color:#555;">진행 방식</td><td style="padding:8px 0;"><b>${escapeHtml(L.serviceLabel)}</b></td></tr>
            <tr><td style="padding:8px 0;color:#555;">신청자</td><td style="padding:8px 0;"><b>${escapeHtml(clientName)}</b></td></tr>
            <tr><td style="padding:8px 0;color:#555;">연락처</td><td style="padding:8px 0;">${escapeHtml(clientPhone)}</td></tr>
            <tr><td style="padding:8px 0;color:#555;">이메일</td><td style="padding:8px 0;">${escapeHtml(clientEmail)}</td></tr>
          </tbody>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tbody>
            <tr><td style="padding:8px 0;width:140px;color:#555;">출원 상표</td><td style="padding:8px 0;"><b style="font-size:18px;">${escapeHtml(trademarkName)}</b></td></tr>
            <tr><td style="padding:8px 0;color:#555;">상표 형태</td><td style="padding:8px 0;">${trademarkTypeLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#555;">출원인 유형</td><td style="padding:8px 0;">${applicantLabel}</td></tr>
            <tr><td style="padding:8px 0;color:#555;">분류 수</td><td style="padding:8px 0;">${totalClasses}류</td></tr>
            <tr><td style="padding:8px 0;color:#555;">지정상품 수</td><td style="padding:8px 0;">${totalGoods}개</td></tr>
            <tr><td style="padding:8px 0;color:#555;">예상 특허청 수수료</td><td style="padding:8px 0;"><b>${totalFee.toLocaleString()}원</b></td></tr>
          </tbody>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <h3 style="margin:0 0 8px;">지정상품 목록</h3>
        ${buildGoodsTable(goodsByClass)}
        <p style="margin:16px 0 0;font-size:13px;color:#94a3b8;">접수 일시: ${escapeHtml(formatKST(now))}</p>
      </div>
    `;

    const office = await resendSendEmail({
      apiKey,
      from: mailFrom,
      to: mailTo,
      subject: subjectToOffice,
      text: textToOffice,
      html: htmlToOffice,
      replyTo: clientEmail,
    });

    if (!office.ok) {
      return NextResponse.json(
        { ok: false, error: L.mailFailed, detail: office.error },
        { status: 500 }
      );
    }

    // ── Client auto-reply ──
    const replyToOffice = extractEmailAddress(mailTo);

    const textToClient = [
      L.clientGreeting(clientName),
      ``,
      L.clientThanks,
      L.clientReceived,
      ``,
      `- 출원 상표: ${trademarkName}`,
      `- 분류 수: ${totalClasses}류`,
      `- 지정상품 수: ${totalGoods}개`,
      `- 접수 일시: ${formatKST(now)}`,
      ``,
      L.clientReplyNotice,
      L.clientUrgent,
      ``,
      L.clientThankYou,
      L.firmName,
    ].join("\n");

    const htmlToClient = `
      <div style="font-family:ui-sans-serif,system-ui;line-height:1.7;color:#111;">
        <p style="margin:0 0 10px;"><b>${escapeHtml(clientName)}</b> ${locale === "en" ? "," : "님께,"}</p>
        <p style="margin:0 0 10px;">
          ${escapeHtml(L.clientThanks)}<br/>
          ${escapeHtml(L.clientReceived)}
        </p>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">
          <tbody>
            <tr><td style="padding:6px 0;width:140px;color:#555;">출원 상표</td><td style="padding:6px 0;"><b>${escapeHtml(trademarkName)}</b></td></tr>
            <tr><td style="padding:6px 0;color:#555;">분류 수</td><td style="padding:6px 0;">${totalClasses}류</td></tr>
            <tr><td style="padding:6px 0;color:#555;">지정상품 수</td><td style="padding:6px 0;">${totalGoods}개</td></tr>
            <tr><td style="padding:6px 0;color:#555;">접수 일시</td><td style="padding:6px 0;">${escapeHtml(formatKST(now))}</td></tr>
          </tbody>
        </table>
        <div style="margin:14px 0;padding:12px;border:1px solid #eee;border-radius:12px;background:#fafafa;">
          <div style="font-size:14px;color:#333;">
            ${escapeHtml(L.clientReplyNotice)}<br/>
            ${escapeHtml(L.clientUrgent)}
          </div>
        </div>
        <p style="margin:16px 0 0;color:#333;">
          ${escapeHtml(L.clientThankYou)}<br/>
          <b>${escapeHtml(L.firmName)}</b>
        </p>
      </div>
    `;

    const clientReply = await resendSendEmail({
      apiKey,
      from: autoReplyFrom,
      to: clientEmail,
      subject: L.clientSubject,
      text: textToClient,
      html: htmlToClient,
      replyTo: replyToOffice,
    });

    if (!clientReply.ok) {
      console.error("Auto-reply email failed:", clientReply.error);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "An error occurred while processing your request. / 요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
