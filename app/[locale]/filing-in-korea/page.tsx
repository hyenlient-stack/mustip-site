// app/[locale]/filing-in-korea/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { JsonLd } from "@/components/json-ld";
import { faqPageLd, breadcrumbLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";
import {
  FAQ_ITEMS,
  FAQ_LAST_REVIEWED,
  faqByCategory,
  faqPlainText,
} from "@/lib/faq";
import FilingFaq from "./FilingFaq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "filingInKorea" });
  return pageMetadata({
    locale,
    path: "/filing-in-korea",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function FilingInKoreaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("filingInKorea");
  const tc = await getTranslations("common");
  const VALID_FAQ_LANGS = ["ko", "en", "ja", "zh"] as const;
  type FaqLang = typeof VALID_FAQ_LANGS[number];
  const lang: FaqLang = VALID_FAQ_LANGS.includes(locale as FaqLang) ? (locale as FaqLang) : "en";

  const faqGroups = [
    {
      key: "patent" as const,
      label: t("tabPatent"),
      items: faqByCategory("patent").map((it) => ({
        q: it.q[lang],
        a: it.a[lang],
      })),
    },
    {
      key: "trademark" as const,
      label: t("tabTrademark"),
      items: faqByCategory("trademark").map((it) => ({
        q: it.q[lang],
        a: it.a[lang],
      })),
    },
    {
      key: "design" as const,
      label: t("tabDesign"),
      items: faqByCategory("design").map((it) => ({
        q: it.q[lang],
        a: it.a[lang],
      })),
    },
  ];

  const faqLd = faqPageLd(
    FAQ_ITEMS.map((it) => ({ q: it.q[lang], a: faqPlainText(it.a[lang]) }))
  );

  return (
    <>
      <JsonLd
        data={[
          faqLd,
          breadcrumbLd(locale, [
            { name: tc("homeLabel"), path: "/" },
            { name: t("heroTitle"), path: "/filing-in-korea" },
          ]),
        ]}
      />
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          {/* Eyebrow chip */}
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700 mb-4">
            Korea IP
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            {t("introHeading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="pb-10 md:pb-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6 pt-10 md:pt-16">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-slate-900">
            {t("faqHeading")}
          </h2>
          <FilingFaq groups={faqGroups} />
          <p className="mt-6 text-xs text-slate-400">
            {t("lastReviewed")}: {FAQ_LAST_REVIEWED}
          </p>
        </div>
      </section>

      {/* ── For Foreign Associates ────────────────────────────────────────── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 md:p-8 shadow-sm">
            {/* Globe icon badge */}
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </span>

            <h2 className="text-xl font-extrabold text-slate-900">
              {t("associatesHeading")}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              {t("associatesBody")}
            </p>

            {/* Highlight point */}
            <ul className="mt-5">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600" aria-hidden="true">
                  {/* Clock icon */}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-slate-700">{t("associatesPoint1")}</span>
              </li>
            </ul>

            {/* Prominent email CTA */}
            <a
              href="mailto:mustip@mustip.co.kr"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              mustip@mustip.co.kr
            </a>
          </div>

          {/* Disclaimer — outside card, muted */}
          <p className="mt-4 px-1 text-xs text-slate-400">{t("disclaimer")}</p>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 md:p-10 shadow-sm">
            <NewsletterSignup variant="feature" />
          </div>
        </div>
      </section>

      <CTAContact />
    </>
  );
}
