// lib/faq.ts
export type FaqCategory = "patent" | "trademark" | "design";
export type FaqItem = {
  category: FaqCategory;
  q: { ko: string; en: string; ja?: string; zh?: string };
  a: { ko: string; en: string; ja?: string; zh?: string };
};

export const FAQ_LAST_REVIEWED = "2026-06";

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "patent",
    q: {
      ko: "한국 PCT 국내단계 진입 기한은 언제인가요?",
      en: "What is the deadline to enter the PCT national phase in Korea?",
    },
    a: {
      ko: "우선일(최우선일)로부터 31개월 이내입니다. 31개월 내에 연장 신청을 하면 1개월(총 32개월)까지 연장할 수 있습니다.",
      en: "Within 31 months from the earliest priority date. A one-month extension (to 32 months) is available if requested within the 31-month period.",
    },
  },
  {
    category: "patent",
    q: {
      ko: "명세서를 한국어로 번역해야 하나요?",
      en: "Is a Korean translation of the specification required?",
    },
    a: {
      ko: "예. 한국 출원은 한국어로 제출해야 하며, 국내단계 진입 시 31개월 내에 명세서 전체의 한국어 번역을 제출해야 합니다. PCT 19/34조 보정이 있으면 보정된 청구항의 번역도 제출합니다.",
      en: "Yes. Applications must be filed in Korean. The Korean translation of the full specification must be submitted within 31 months at national phase entry. If claims were amended under PCT Art. 19/34, a translation of the amended claims is also required.",
    },
  },
  {
    category: "patent",
    q: {
      ko: "외국 출원인이 직접 출원할 수 있나요?",
      en: "Can a foreign applicant file directly without a local agent?",
    },
    a: {
      ko: "아니요. 한국에 주소나 영업소가 없는 외국 출원인은 한국에 등록된 변리사를 대리인으로 선임해야 합니다.",
      en: "No. A foreign applicant without a domicile or business office in Korea must appoint a patent attorney registered in Korea as their representative.",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "해외 기업이 한국에 상표를 출원하는 방법은?",
      en: "How can a foreign company file a trademark in Korea?",
    },
    a: {
      ko: "KIPO에 직접 출원하거나 마드리드 의정서를 통해 한국을 지정할 수 있습니다. 대부분의 경우 한국 대리인 선임이 필요하며, 심사·이의·무효 절차는 한국 상표법에 따릅니다.",
      en: "Either by filing directly with KIPO or by designating Korea via the Madrid Protocol. In most cases a local representative is required, and examination, opposition, and invalidation follow Korean trademark law.",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국 상표 출원 관납료와 등록까지 기간은?",
      en: "What are the official fees and timeline for a Korean trademark?",
    },
    a: {
      ko: "관납료는 1류당 약 62,000원이며(온라인 출원은 1만원 저렴), 지정상품 10개 초과 시 1개당 추가됩니다. 통상 출원일로부터 등록까지 10~14개월이 소요되며, 우선심사 시 2~3개월로 단축될 수 있습니다.",
      en: "The official fee is approximately KRW 62,000 per class (KRW 10,000 less for online filing), with surcharges for more than ten designated goods. Registration typically takes 10–14 months from filing, or 2–3 months with expedited examination.",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "등록 후 유지 시 주의할 점은?",
      en: "What should I watch out for after registration?",
    },
    a: {
      ko: "등록 상표를 3년간 연속하여 사용하지 않으면 불사용 취소심판의 대상이 될 수 있습니다. KIPO는 형식적 사용이 아닌 실질적·상업적 사용을 요구합니다.",
      en: "Non-use of the registered mark for three consecutive years can expose it to a cancellation action. KIPO requires genuine commercial use, not token use.",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국은 헤이그 협정 가입국인가요? 디자인 보호기간은?",
      en: "Is Korea a Hague member, and how long does design protection last?",
    },
    a: {
      ko: "한국은 헤이그 협정 가입국으로, 국제출원에서 한국을 지정할 수 있습니다. 등록 디자인의 존속기간은 출원일로부터 20년입니다.",
      en: "Korea is a member of the Hague Agreement, so Korea can be designated in an international design application. A registered design is protected for 20 years from the filing date.",
    },
  },
  {
    category: "design",
    q: {
      ko: "파리조약 우선권 주장 기한은?",
      en: "What is the deadline to claim Paris Convention priority?",
    },
    a: {
      ko: "특허·실용신안은 최초 출원일로부터 12개월, 상표·디자인은 6개월 이내에 우선권을 주장하여 한국에 출원할 수 있습니다.",
      en: "12 months from the first filing for patents/utility models, and 6 months for trademarks and designs, to file in Korea with a priority claim.",
    },
  },
];

export function faqByCategory(cat: FaqCategory) {
  return FAQ_ITEMS.filter((it) => it.category === cat);
}
