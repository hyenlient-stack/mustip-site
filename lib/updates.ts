export type UpdateCategory = "law" | "case" | "practice" | "kipo";

export type UpdateArticle = {
  slug: string;
  date: string;
  category: UpdateCategory;
  title: { ko: string; en: string };
  summary: { ko: string; en: string };
  body?: { ko: string; en: string };
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
    },
    summary: {
      ko: "특허청은 2026년 7월 1일부터 상표 출원 및 등록 관납료를 조정한다고 발표했습니다. 류당 기본료 변경 및 온라인 출원 할인 유지 여부를 안내합니다.",
      en: "KIPO announced adjustments to trademark filing and registration fees effective July 1, 2026. Key changes include per-class base fees and maintenance of the online filing discount.",
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

export const CATEGORY_LABELS: Record<UpdateCategory, { ko: string; en: string }> = {
  law:      { ko: "법령 개정", en: "Law & Regulation" },
  case:     { ko: "주요 판례", en: "Case Law" },
  practice: { ko: "실무 가이드", en: "Practice Guide" },
  kipo:     { ko: "KIPO 공지", en: "KIPO Notice" },
};
