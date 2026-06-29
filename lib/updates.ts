export type UpdateCategory = "law" | "case" | "practice" | "kipo";
export type UpdateLang = "ko" | "en" | "ja" | "zh";

export type UpdateArticle = {
  slug: string;
  date: string;
  category: UpdateCategory;
  title: Record<UpdateLang, string>;
  summary: Record<UpdateLang, string>;
  body?: Partial<Record<UpdateLang, string>>;
  tags?: string[];
  sourceUrl?: string;
};

export const UPDATE_ARTICLES: UpdateArticle[] = [
  {
    slug: "2026-06-kipo-trademark-fee-update",
    date: "2026-06-01",
    category: "kipo",
    title: {
      ko: "KIPO 상표 관납료 체계 변경 안내 (2026년 하반기)",
      en: "KIPO Trademark Official Fee Schedule Update (H2 2026)",
      ja: "KIPO商標の官庁料金体系の改定について（2026年下半期）",
      zh: "KIPO商标官费体系调整通知（2026年下半年）",
    },
    summary: {
      ko: "특허청은 2026년 7월 1일부터 상표 출원 및 등록 관납료를 조정한다고 발표했습니다. 류당 기본료 변경 및 온라인 출원 할인 유지 여부를 안내합니다.",
      en: "KIPO announced adjustments to trademark filing and registration fees effective July 1, 2026. Key changes include per-class base fees and maintenance of the online filing discount.",
      ja: "韓国特許庁（KIPO）は2026年7月1日より、商標の出願および登録にかかる官庁料金を改定すると発表しました。区分ごとの基本料金の変更、オンライン出願割引の維持の有無についてご案内します。",
      zh: "韩国特许厅（KIPO）宣布自2026年7月1日起调整商标申请及注册的官费。本文介绍每类基本费用的变化以及在线申请折扣是否保留。",
    },
    tags: ["trademark", "fees", "kipo"],
  },
  // TODO(firm): 실제 최신 법령·판례 소식으로 교체. 위 샘플은 예시입니다.
];

export function getAllArticles(): UpdateArticle[] {
  return [...UPDATE_ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): UpdateArticle | undefined {
  return UPDATE_ARTICLES.find((a) => a.slug === slug);
}

export const CATEGORY_LABELS: Record<UpdateCategory, Record<UpdateLang, string>> = {
  law:      { ko: "법령 개정", en: "Law & Regulation", ja: "法令改正",       zh: "法律法规" },
  case:     { ko: "주요 판례", en: "Case Law",          ja: "重要判例",       zh: "重要判例" },
  practice: { ko: "실무 가이드", en: "Practice Guide",  ja: "実務ガイド",     zh: "实务指南" },
  kipo:     { ko: "KIPO 공지", en: "KIPO Notice",       ja: "KIPOのお知らせ", zh: "KIPO公告" },
};
