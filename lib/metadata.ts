// lib/metadata.ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Generates per-page canonical + hreflang(ko/en/x-default) + OpenGraph.
 * path examples: "" or "/" (home), "/about", "/filing-in-korea"
 * x-default points to English (primary target: foreign applicants).
 */
export function pageMetadata(opts: {
  locale: string;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const { locale, path, title, description, absoluteTitle } = opts;
  const p = path === "/" ? "" : path;
  const url = `${site.url}/${locale}${p}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ko: `${site.url}/ko${p}`,
        en: `${site.url}/en${p}`,
        "x-default": `${site.url}/en${p}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
