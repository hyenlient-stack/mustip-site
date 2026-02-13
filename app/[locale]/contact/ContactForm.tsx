// app/[locale]/contact/ContactForm.tsx
"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type ReplyMethod = "email" | "phone";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type ContactApiError = { error?: string };

const CATEGORY_KEYS = [
  "cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7",
] as const;

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const locale = useLocale();

  const categories = CATEGORY_KEYS.map((key) => t(key));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(categories[0]);
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
      setErrorMsg(t("validationError"));
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
          hp,
          locale,
        }),
      });

      const data: ContactApiError = await res
        .json()
        .catch(() => ({} as ContactApiError));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || t("sendError"));
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg(t("networkError"));
    } finally {
      setLoading(false);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border bg-emerald-50 p-5">
        <div className="text-base font-semibold text-emerald-900">{t("successTitle")}</div>
        <div className="mt-2 text-sm leading-6 text-emerald-800">
          {t("successMessage")}
          <br />
          {t("successSpam")}
        </div>

        <button
          type="button"
          className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setCategory(categories[0]);
            setReplyMethod("email");
            setLink("");
            setMessage("");
            setConsent(false);
            setHp("");
          }}
        >
          {t("newInquiry")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot field */}
      <div className="hidden">
        <label className="text-sm font-medium">Website</label>
        <input value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">{t("nameLabel")}</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("namePlaceholder")}
            maxLength={60}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">{t("emailLabel")}</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            inputMode="email"
            maxLength={120}
            required
          />
          {email && !isValidEmail(email) && (
            <div className="mt-1 text-xs text-rose-600">{t("emailInvalid")}</div>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">{t("phoneLabel")}</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t("phonePlaceholder")}
            maxLength={40}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">{t("categoryLabel")}</label>
          <select
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">{t("replyMethodLabel")}</label>
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
              {t("replyEmail")}
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
              {t("replyPhone")}
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">{t("linkLabel")}</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder={t("linkPlaceholder")}
            maxLength={300}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">{t("messageLabel")}</label>
        <textarea
          className="mt-1 min-h-[120px] md:min-h-[160px] w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("messagePlaceholder")}
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
            <span className="font-medium text-slate-900">{t("consentTitle")}</span>
            {t("consentAgree")}
            <span className="mt-1 block text-xs text-slate-500">
              {t("consentText")}
            </span>
          </span>
        </label>
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {errorMsg || t("genericError")}
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
        {loading ? t("submitting") : t("submitButton")}
      </button>

      <p className="text-xs leading-5 text-slate-500">
        {t("footerNote")}
      </p>
    </form>
  );
}
