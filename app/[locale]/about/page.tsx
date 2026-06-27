// app/[locale]/about/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata({
    locale,
    path: "/about",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const items = [1, 2, 3, 4, 5].map((n) => ({
    num: String(n).padStart(2, "0"),
    title: t(`item${n}Title` as Parameters<typeof t>[0]),
    desc: t(`item${n}Desc` as Parameters<typeof t>[0]),
  }));

  return (
    <>
      <JsonLd
        data={breadcrumbLd(locale, [
          { name: locale === "en" ? "Home" : "홈", path: "/" },
          { name: t("heroTitle"), path: "/about" },
        ])}
      />
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <section className="py-10 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            {t("introHeading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="py-6 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              {t("sectionLabel")}
            </p>
            <h2 className="mt-2 text-xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              {t("sectionTitle")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((it) => (
              <div key={it.num} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-blue-600">{it.num}.</span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{it.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAContact />
    </>
  );
}
