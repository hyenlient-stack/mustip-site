"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

type NewsletterSignupProps = {
  variant?: "default" | "feature";
};

export function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const isFeature = variant === "feature";

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

  /* ── Feature variant ─────────────────────────────────────────────────────── */
  if (isFeature) {
    return (
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Heading row with mail icon */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t("heading")}</h3>
            <p className="mt-0.5 text-sm text-slate-600">{t("desc")}</p>
          </div>
        </div>

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
          <label htmlFor="nl-email-f" className="sr-only">{t("emailPlaceholder")}</label>
          <input
            id="nl-email-f"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="nl-name-f" className="sr-only">{t("namePlaceholder")}</label>
            <input
              id="nl-name-f"
              name="name"
              type="text"
              placeholder={t("namePlaceholder")}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label htmlFor="nl-org-f" className="sr-only">{t("orgPlaceholder")}</label>
            <input
              id="nl-org-f"
              name="org"
              type="text"
              placeholder={t("orgPlaceholder")}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
          className="inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 sm:w-auto"
        >
          {t("submit")}
        </button>
      </form>
    );
  }

  /* ── Default variant (footer / updates pages — unchanged) ────────────────── */
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
