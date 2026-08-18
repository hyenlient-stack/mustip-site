// app/[locale]/attorneys/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { AttorneysContent } from "./AttorneysContent";
import { JsonLd } from "@/components/json-ld";
import { personLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "attorneys" });
  return pageMetadata({
    locale,
    path: "/attorneys",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function AttorneysPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("attorneys");

  // Person JSON-LD for each attorney (index 3 does not exist)
  const tAtty = await getTranslations({ locale, namespace: "attorneys" });
  type AttyKey = Parameters<typeof tAtty>[0];
  const people = [
    personLd({ name: tAtty("featured1Name" as AttyKey), jobTitle: tAtty("featured1Role" as AttyKey) }),
    personLd({ name: tAtty("featured2Name" as AttyKey), jobTitle: tAtty("featured2Role" as AttyKey) }),
    personLd({ name: tAtty("featured4Name" as AttyKey), jobTitle: tAtty("featured4Role" as AttyKey) }),
    personLd({ name: tAtty("featured3Name" as AttyKey), jobTitle: tAtty("featured3Role" as AttyKey) }),
    personLd({ name: tAtty("featured5Name" as AttyKey) }),
    personLd({ name: tAtty("featured6Name" as AttyKey), jobTitle: tAtty("featured6Role" as AttyKey) }),
    personLd({ name: tAtty("featured7Name" as AttyKey), jobTitle: tAtty("featured7Role" as AttyKey) }),
    personLd({ name: tAtty("featured8Name" as AttyKey), jobTitle: tAtty("featured8Role" as AttyKey) }),
  ];

  return (
    <>
      <JsonLd data={people} />
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
