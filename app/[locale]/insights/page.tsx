// app/[locale]/insights/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { InsightsContent } from "./InsightsContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insights" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("insights");

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />
      <InsightsContent />
      <CTAContact />
    </>
  );
}
