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
  type FaqCategory,
} from "@/lib/faq";
import { FaqAccordion } from "./FaqAccordion";

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
  const lang = locale === "en" ? "en" : "ko";

  const sections: { key: FaqCategory; heading: string }[] = [
    { key: "patent", heading: t("patentHeading") },
    { key: "trademark", heading: t("trademarkHeading") },
    { key: "design", heading: t("designHeading") },
  ];

  const faqLd = faqPageLd(
    FAQ_ITEMS.map((it) => ({ q: it.q[lang], a: it.a[lang] }))
  );

  return (
    <>
      <JsonLd
        data={[
          faqLd,
          breadcrumbLd(locale, [
            { name: locale === "en" ? "Home" : "홈", path: "/" },
            { name: t("heroTitle"), path: "/filing-in-korea" },
          ]),
        ]}
      />
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            {t("introHeading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-extrabold text-slate-900">
            {t("faqHeading")}
          </h2>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.key}>
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {s.heading}
                </h3>
                <FaqAccordion
                  items={faqByCategory(s.key).map((it) => ({
                    q: it.q[lang],
                    a: it.a[lang],
                  }))}
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">
            {t("lastReviewed")}: {FAQ_LAST_REVIEWED}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-xl font-extrabold text-slate-900">
            {t("associatesHeading")}
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            {t("associatesBody")}
          </p>
          <p className="mt-6 text-xs text-slate-400">{t("disclaimer")}</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <NewsletterSignup />
        </div>
      </section>

      <CTAContact />
    </>
  );
}
