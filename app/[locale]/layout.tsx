// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AppShell from "./AppShell";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(site.url),
    title: { default: t("siteName"), template: `%s | ${t("siteName")}` },
    description: t("siteDescription"),
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: {
        ko: `${site.url}/ko`,
        en: `${site.url}/en`,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico?v=2", type: "image/x-icon" },
        { url: "/favicon.svg?v=2", type: "image/svg+xml" },
        { url: "/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
      shortcut: ["/favicon.ico?v=2"],
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      url: `${site.url}/${locale}`,
      siteName: t("siteName"),
      title: t("siteName"),
      description: t("siteDescription"),
      images: [{ url: "/og.png", width: 1200, height: 630 }],
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteName"),
      description: t("siteDescription"),
      images: ["/og.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="scroll-smooth">
      <head />
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <AppShell>{children}</AppShell>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
