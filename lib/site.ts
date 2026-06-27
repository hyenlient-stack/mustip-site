// lib/site.ts
export const site = {
  name: "머스트 특허법률사무소",
  nameEn: "MUST Patent Law Firm",
  legalName: "머스트 특허법률사무소",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "지식재산의 가치를 높이는 종합 IP 파트너 (특허·상표·디자인·분쟁·가치평가)",
  descriptionEn:
    "A Seoul-based IP firm representing foreign applicants in Korea — patents, trademarks, designs, PCT national phase entry, FTO, and IP valuation.",
  email: "mustip@mustip.co.kr",
  telephone: "+82-2-526-6710",
  foundingDate: "", // TODO(firm): 설립연도 확인 후 "YYYY" 입력. 미상이면 빈 문자열 유지(스키마에서 생략됨).
  address: {
    street: "서울특별시 송파구 법원로8길 8, 312호",
    streetEn: "312, 8 Beopwon-ro 8-gil, Songpa-gu",
    postalCode: "05854", // TODO(firm): 우편번호 확인
  },
  geo: { lat: 37.4839509, lng: 127.1218362 }, // contact 페이지 지도 좌표와 동일
  socials: {
    linkedin: "", // TODO(firm): 실제 LinkedIn 회사 URL. 없으면 빈 문자열(sameAs에서 제외됨).
  },
};
