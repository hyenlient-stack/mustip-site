import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { StartFlow } from "./StartFlow";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "selfTrademark" });
  return { title: t("startMetaTitle"), description: t("startMetaDescription") };
}

export default async function SelfTrademarkStartPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StartFlow />;
}
