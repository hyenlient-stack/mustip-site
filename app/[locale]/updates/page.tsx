// app/[locale]/updates/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { getAllArticles, CATEGORY_LABELS } from "@/lib/updates";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "updates" });
  return pageMetadata({
    locale,
    path: "/updates",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function UpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("updates");
  const lang = locale === "ko" ? "ko" : "en";
  const articles = getAllArticles();

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.title[lang],
      url: `${site.url}/${locale}/updates/${a.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={listLd} />
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />
      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest text-blue-600">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            {t("sectionTitle")}
          </h2>
          {articles.length === 0 ? (
            <p className="mt-8 text-slate-500">{t("noArticles")}</p>
          ) : (
            <ul className="mt-8 space-y-6">
              {articles.map((article) => (
                <li
                  key={article.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="text-blue-600 font-medium">
                      {CATEGORY_LABELS[article.category][lang]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {article.title[lang]}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {article.summary[lang]}
                  </p>
                  <Link
                    href={`/updates/${article.slug}`}
                    className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                  >
                    {t("readMore")} →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
