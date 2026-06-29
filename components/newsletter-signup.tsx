"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export function NewsletterSignup() {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const consent = data.get("consent") === "on";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError(t("errorEmail"));
      return;
    }
    if (!consent) {
      setStatus("error");
      setError(t("errorConsent"));
      return;
    }
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: data.get("name") ?? "",
          org: data.get("org") ?? "",
          consent,
          hp: data.get("company_website") ?? "",
          locale,
        }),
      });
      if (!res.ok) throw new Error();
      try {
        // PostHog event — import dynamically to avoid SSR issues
        const posthog = (await import("posthog-js")).default;
        posthog.capture("newsletter_signup", { locale });
      } catch {}
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError(t("errorGeneric"));
    }
  }

  if (status === "ok") {
    return <p className="text-sm text-emerald-700">{t("success")}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <h3 className="text-lg font-bold text-slate-900">{t("heading")}</h3>
      <p className="text-sm text-slate-600">{t("desc")}</p>
      {/* honeypot — hidden from real users */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="nl-email" className="sr-only">{t("emailPlaceholder")}</label>
        <input
          id="nl-email"
          name="email"
          type="email"
          required
          placeholder={t("emailPlaceholder")}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="nl-name" className="sr-only">{t("namePlaceholder")}</label>
          <input
            id="nl-name"
            name="name"
            type="text"
            placeholder={t("namePlaceholder")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="nl-org" className="sr-only">{t("orgPlaceholder")}</label>
          <input
            id="nl-org"
            name="org"
            type="text"
            placeholder={t("orgPlaceholder")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>
      <label className="flex items-start gap-2 text-xs text-slate-600">
        <input name="consent" type="checkbox" className="mt-0.5" />
        <span>{t("consent")}</span>
      </label>
      {status === "error" && (
        <p role="alert" aria-live="polite" className="text-xs text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {t("submit")}
      </button>
    </form>
  );
}
