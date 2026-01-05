// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "400: missing fields" }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,               // 예: smtp.hiworks.com
      port,                                      // 465 또는 587
      secure: port === 465,                      // 465=SSL, 587=STARTTLS
      auth: {
        user: process.env.SMTP_USER as string,   // yourid@yourfirm.co.kr
        pass: process.env.SMTP_PASS as string,   // 비밀번호
      },
      authMethod: "LOGIN",                       // 하이웍스에서 잘 동작
    });

    // 필요시 인증 사전검증:
    // await transporter.verify();

    await transporter.sendMail({
      from: process.env.SMTP_USER,               // 발신자 (계정과 동일 권장)
      to: process.env.MAIL_TO,                   // 수신자
      subject: `[문의] ${name}`,
      html: `<p><b>From:</b> ${email}</p><pre>${message}</pre>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("[MAIL ERROR]", e);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
