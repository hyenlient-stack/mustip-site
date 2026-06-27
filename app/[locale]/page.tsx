// app/[locale]/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/metadata";
import HomeClient from "./HomeClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return pageMetadata({
    locale,
    path: "/",
    title: t("siteName"),
    description: t("siteDescription"),
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <HomeClient />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
            {t("aboutHeading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {t("aboutBody")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/filing-in-korea"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              {t("ctaFiling")}
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              {t("ctaAbout")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
