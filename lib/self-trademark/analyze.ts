import type { UsageType } from "./types";

const GOODS_KEYWORDS = [
  "판매",
  "제품",
  "상품",
  "제조",
  "만들",
  "생산",
  "식품",
  "화장품",
  "의류",
  "간식",
  "음료",
  "건강식품",
  "영양제",
  "가방",
  "신발",
  "잡화",
  "소품",
  "문구",
  "장난감",
  "전자제품",
  "가구",
  "인테리어",
  "원두",
  "쿠키",
  "빵",
  "케이크",
];

const SERVICE_KEYWORDS = [
  "서비스",
  "매장",
  "가게",
  "업소",
  "카페",
  "식당",
  "음식점",
  "학원",
  "병원",
  "의원",
  "미용실",
  "컨설팅",
  "상담",
  "교육",
  "수리",
  "세탁",
  "배달",
  "청소",
  "인테리어 시공",
  "운송",
  "호텔",
  "숙박",
  "여행",
];

const DIGITAL_KEYWORDS = [
  "앱",
  "어플",
  "플랫폼",
  "온라인",
  "소프트웨어",
  "SaaS",
  "saas",
  "웹",
  "디지털",
  "AI",
  "인공지능",
  "데이터",
  "클라우드",
  "모바일",
  "구독",
  "스트리밍",
];

/**
 * 사업 설명 텍스트를 분석하여 UsageType을 추천합니다.
 * 키워드 기반 규칙 매칭 (AI API 미사용)
 */
export function analyzeBusinessDescription(description: string): UsageType {
  const text = description.toLowerCase();

  let goodsScore = 0;
  let serviceScore = 0;
  let digitalScore = 0;

  for (const kw of GOODS_KEYWORDS) {
    if (text.includes(kw)) goodsScore++;
  }
  for (const kw of SERVICE_KEYWORDS) {
    if (text.includes(kw)) serviceScore++;
  }
  for (const kw of DIGITAL_KEYWORDS) {
    if (text.includes(kw)) digitalScore++;
  }

  const total = goodsScore + serviceScore + digitalScore;
  if (total === 0) return "unknown";

  // 디지털 우세
  if (digitalScore > goodsScore && digitalScore > serviceScore) {
    return "digital_service";
  }

  // 상품+서비스 혼합
  if (goodsScore > 0 && (serviceScore > 0 || digitalScore > 0)) {
    return "both";
  }

  // 서비스(오프라인) 우세
  if (serviceScore > goodsScore) {
    return "services";
  }

  // 상품 우세
  if (goodsScore > 0) {
    return "goods";
  }

  return "unknown";
}

/** 카테고리별 키워드 매핑 (기타 → 사업 분야 추천용) */
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  food: ["음식", "카페", "커피", "식당", "음식점", "베이커리", "빵", "디저트", "케이크", "배달", "테이크아웃", "레스토랑", "분식", "치킨", "피자"],
  shopping: ["쇼핑", "쇼핑몰", "소매", "판매", "마켓", "오픈마켓", "도매", "구독"],
  cosmetics: ["화장품", "스킨케어", "향수", "뷰티", "메이크업", "미용"],
  fashion: ["의류", "패션", "옷", "신발", "가방", "잡화", "액세서리", "직물", "원단", "섬유"],
  health: ["건강", "영양제", "비타민", "건강식품", "다이어트", "유기농", "보충제"],
  education: ["교육", "학원", "과외", "튜터링", "강의", "수업", "온라인 교육"],
  software: ["앱", "어플", "소프트웨어", "SaaS", "saas", "플랫폼", "개발", "데이터", "AI", "인공지능", "웹"],
  medical: ["병원", "의원", "치과", "피부과", "약국", "의료", "진료", "한의원"],
  pet: ["반려동물", "강아지", "고양이", "펫", "사료", "동물병원", "펫시터"],
  consulting: ["컨설팅", "전문서비스", "법률", "회계", "세무", "마케팅", "광고", "디자인"],
  furniture: ["가구", "인테리어", "소품", "조명", "커튼", "카펫", "러그", "침구", "매트리스", "블라인드"],
  appliances: ["가전", "생활용품", "주방용품", "세제", "전자제품", "냉장고", "세탁기", "청소기", "에어컨"],
  sports: ["스포츠", "운동", "레저", "캠핑", "아웃도어", "장난감", "완구", "피트니스", "헬스", "요가", "골프", "등산"],
  alcohol: ["주류", "술", "와인", "맥주", "소주", "막걸리", "위스키", "양주", "바", "주점", "크래프트"],
  construction: ["건설", "시공", "건축", "인테리어 시공", "수리", "보수", "철물", "자재", "배관", "설비"],
  automobile: ["자동차", "차량", "자동차 부품", "정비", "수리", "렌트카", "리스", "세차", "타이어", "전기차"],
  telecom: ["통신", "방송", "스트리밍", "미디어", "인터넷", "OTT", "콘텐츠", "채널"],
  music: ["음악", "악기", "음반", "공연", "콘서트", "이벤트", "피아노", "기타", "드럼", "작곡"],
  manufacturing: ["제조", "공장", "생산", "가공", "화학", "도료", "페인트", "고무", "플라스틱", "공구", "연료", "원료"],
  logistics: ["물류", "운송", "택배", "배송", "창고"],
  realestate: ["부동산", "중개", "임대", "매매", "건물"],
  entertainment: ["엔터테인먼트", "연예", "영상", "공연", "게임", "방송"],
};

/**
 * 사업 설명 텍스트를 분석하여 관련 카테고리 ID 목록을 추천합니다.
 */
export function analyzeCategoryDescription(description: string): string[] {
  const text = description.toLowerCase();
  const scores: { id: string; score: number }[] = [];

  for (const [catId, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    for (const kw of keywords) {
      if (text.includes(kw.toLowerCase())) score++;
    }
    if (score > 0) {
      scores.push({ id: catId, score });
    }
  }

  scores.sort((a, b) => b.score - a.score);
  return scores.map((s) => s.id);
}
