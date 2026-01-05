// components/seo.tsx
export function JsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "머스트 특허법률사무소",
    url: "https://mustip.co.kr",
    logo: "https://mustip.co.kr/og.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "서울시 송파구 법원로8길 8, 312호",
      addressLocality: "Seoul",
      postalCode: "06000",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-2-1234-5678",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/yourfirm"
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
