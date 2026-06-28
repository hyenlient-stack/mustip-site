// lib/structured-data.ts
import { site } from "@/lib/site";

const ORG_ID = `${site.url}/#organization`;

export function organizationLd(locale: string) {
  const isEn = locale === "en";
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService"],
    "@id": ORG_ID,
    name: isEn ? site.nameEn : site.name,
    legalName: site.legalName,
    url: `${site.url}/${locale}`,
    logo: `${site.url}/logo-header.png`,
    image: `${site.url}/og.png`,
    email: site.email,
    telephone: site.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: isEn ? site.address.streetEn : site.address.street,
      addressLocality: isEn ? "Songpa-gu, Seoul" : "서울특별시 송파구",
      postalCode: site.address.postalCode,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: ["KR", "US", "EP", "JP", "CN", "WO"],
    knowsLanguage: ["ko", "en"],
    knowsAbout: [
      "Patent prosecution in Korea",
      "Trademark registration in Korea",
      "Industrial design registration",
      "PCT national phase entry",
      "Madrid Protocol designation of Korea",
      "Freedom to operate analysis",
      "IP valuation and technology transfer",
    ],
  };
  if (site.foundingDate) ld.foundingDate = site.foundingDate;
  const sameAs = [site.socials.linkedin].filter(Boolean);
  if (sameAs.length) ld.sameAs = sameAs;
  return ld;
}

export function websiteLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/${locale}`,
    name: locale === "en" ? site.nameEn : site.name,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

export type PersonInput = {
  name: string;
  jobTitle?: string;
  knowsAbout?: string[];
  alumniOf?: string[];
};

export function personLd(p: PersonInput) {
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    worksFor: { "@id": ORG_ID },
  };
  if (p.jobTitle) ld.jobTitle = p.jobTitle;
  if (p.knowsAbout?.length) ld.knowsAbout = p.knowsAbout;
  if (p.alumniOf?.length) ld.alumniOf = p.alumniOf;
  return ld;
}

export function faqPageLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbLd(
  locale: string,
  trail: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}/${locale}${t.path === "/" ? "" : t.path}`,
    })),
  };
}
