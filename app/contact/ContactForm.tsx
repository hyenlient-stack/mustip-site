// app/contact/ContactForm.tsx
"use client";

import { useMemo, useState } from "react";

type ReplyMethod = "email" | "phone";

const CATEGORIES = [
  "특허 출원/등록",
  "상표 출원/등록",
  "디자인 출원/등록",
  "FTO/침해 검토",
  "계약/라이선스",
  "분쟁/무효/심판",
  "기타",
] as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>(CATEGORIES[0]);
  const [replyMethod, setReplyMethod] = useState<ReplyMethod>("email");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  // honeypot
  const [hp, setHp] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canSubmit = useMemo(() => {
    if (!name.trim()) return false;
    if (!email.trim() || !isValidEmail(email.trim())) return false;
    if (!category) return false;
    if (!message.trim()) return false;
    if (!consent) return false;
    return true;
  }, [name, email, category, message, consent]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("idle");

    if (!canSubmit) {
      setStatus("error");
      setErrorMsg("필수 항목을 확인해 주세요. (이메일 형식/동의 포함)");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          category,
          replyMethod,
          link,
          message,
          consent,
          hp, // honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border bg-emerald-50 p-5">
        <div className="text-base font-semibold text-emerald-900">문의가 접수되었습니다.</div>
        <div className="mt-2 text-sm leading-6 text-emerald-800">
          접수 확인 메일이 발송되었습니다. 영업일 기준 1–2일 내 회신드리겠습니다.
          <br />
          (메일이 보이지 않으면 스팸함을 확인해 주세요.)
        </div>

        <button
          type="button"
          className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setCategory(CATEGORIES[0]);
            setReplyMethod("email");
            setLink("");
            setMessage("");
            setConsent(false);
            setHp("");
          }}
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot field (숨김) */}
      <div className="hidden">
        <label className="text-sm font-medium">Website</label>
        <input value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">성함/기관 *</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="예) 김영애 / 머스트"
            maxLength={60}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">이메일 *</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="예) name@company.com"
            inputMode="email"
            maxLength={120}
            required
          />
          {email && !isValidEmail(email) && (
            <div className="mt-1 text-xs text-rose-600">이메일 형식이 올바르지 않습니다.</div>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">연락처</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="예) 010-1234-5678"
            maxLength={40}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">문의 유형 *</label>
          <select
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">희망 회신 방법</label>
          <div className="mt-1 flex gap-2">
            <button
              type="button"
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm",
                replyMethod === "email"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
              onClick={() => setReplyMethod("email")}
            >
              이메일
            </button>
            <button
              type="button"
              className={[
                "flex-1 rounded-xl border px-3 py-2 text-sm",
                replyMethod === "phone"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
              onClick={() => setReplyMethod("phone")}
            >
              전화
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">참고 링크</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="예) 관련 자료/웹사이트 링크(선택)"
            maxLength={300}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">문의 내용 *</label>
        <textarea
          className="mt-1 min-h-[160px] w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`예)
- 권리 종류: 특허
- 대상 국가: KR/US
- 현재 단계: 출원 전 검토
- 긴급 여부: 2주 내 진행希望
- 간단한 설명: ...`}
          maxLength={4000}
          required
        />
        <div className="mt-1 text-xs text-slate-500">{message.length}/4000</div>
      </div>

      <div className="rounded-xl border bg-slate-50 p-3">
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            <span className="font-medium text-slate-900">개인정보 수집 및 이용</span>에 동의합니다. *
            <span className="mt-1 block text-xs text-slate-500">
              접수 및 회신을 위해 성함/이메일/연락처(선택)를 수집하며, 목적 달성 후 보관기간 내 파기합니다.
            </span>
          </span>
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {errorMsg || "오류가 발생했습니다."}
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className={[
          "w-full rounded-xl px-4 py-2.5 text-sm font-medium",
          !canSubmit || loading
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-900 text-white hover:bg-slate-800",
        ].join(" ")}
      >
        {loading ? "전송 중..." : "문의 접수하기"}
      </button>

      <p className="text-xs leading-5 text-slate-500">
        전송 시 자동응답 메일이 발송됩니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.
      </p>
    </form>
  );
}
