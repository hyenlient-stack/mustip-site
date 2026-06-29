// app/[locale]/updates/[slug]/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { getArticleBySlug, getAllArticles, CATEGORY_LABELS, type UpdateLang } from "@/lib/updates";
import { site } from "@/lib/site";
import { NewsletterSignup } from "@/components/newsletter-signup";

export async function generateStaticParams() {
  const slugs = getAllArticles().map((a) => a.slug);
  const locales = ["ko", "en", "ja", "zh"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const lang: UpdateLang = (["ko", "en", "ja", "zh"] as UpdateLang[]).includes(locale as UpdateLang)
    ? (locale as UpdateLang) : "en";
  return pageMetadata({
    locale,
    path: `/updates/${slug}`,
    title: article.title[lang],
    description: article.summary[lang],
  });
}

export default async function UpdateArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations("updates");
  const lang: UpdateLang = (["ko", "en", "ja", "zh"] as UpdateLang[]).includes(locale as UpdateLang)
    ? (locale as UpdateLang) : "en";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[lang],
    description: article.summary[lang],
    datePublished: article.date,
    dateModified: article.date,
    publisher: {
      "@type": "Organization",
      name: site.nameEn,
      url: site.url,
    },
    inLanguage: locale,
    url: `${site.url}/${locale}/updates/${slug}`,
  };

  return (
    <>
      <JsonLd data={articleLd} />
      {/* PageHero provides the single h1 for this page */}
      <PageHero title={article.title[lang]} />
      <article className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-20">
        <Link href="/updates" className="text-sm text-blue-600 hover:underline">
          ← {t("backToList")}
        </Link>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <span>{article.date}</span>
          <span>·</span>
          <span className="text-blue-600 font-medium">
            {CATEGORY_LABELS[article.category][lang]}
          </span>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {article.summary[lang]}
        </p>
        {article.body?.[lang] && (
          <div className="prose prose-slate mt-8 max-w-none">
            {article.body[lang].split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
        {article.sourceUrl && (
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-blue-600 hover:underline"
          >
            {t("sourceLink")} ↗
          </a>
        )}
      </article>
      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <p className="mb-4 text-lg font-bold text-slate-900">
            {t("subscribeHeading")}
          </p>
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
