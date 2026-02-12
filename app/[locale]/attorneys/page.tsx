// app/[locale]/attorneys/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { AttorneysContent } from "./AttorneysContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "attorneys" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AttorneysPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("attorneys");

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        backgroundImage="/attorneys/%ED%8C%80%EC%83%81%EB%8B%A8%EB%B0%B0%EA%B2%BD.jpg"
      />
      <AttorneysContent />
      <CTAContact />
    </>
  );
}
