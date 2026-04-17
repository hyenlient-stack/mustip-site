/* ── 셀프 상표출원 타입 정의 ── */

/** 상표 형태 */
export type TrademarkType = "text" | "logo" | "combined";

/** 출원인 유형 */
export type ApplicantType = "individual" | "corporation";

/** 상표 사용 방식 */
export type UsageType =
  | "goods"
  | "services"
  | "digital_service"
  | "both"
  | "unknown";

/** 지정상품 추천 등급 */
export type GoodsRecommendationType = "essential" | "optional" | "expansion";

/** 진행 방식 */
export type ServiceOption = "self" | "review" | "agency";

/** 지정상품 후보 */
export interface GoodsCandidate {
  id: string;
  name: string;
  niceClass: string;
  type: GoodsRecommendationType;
  description: string;
}

/** 업종 카테고리 */
export interface BusinessCategory {
  id: string;
  label: string;
  icon: string;
  subItems: SubItem[];
}

/** 업종 세부 항목 */
export interface SubItem {
  id: string;
  label: string;
}

/** Step 1 데이터 */
export interface Step1Data {
  trademarkName: string;
  trademarkType: TrademarkType;
  hasLogo: boolean;
  logoFile: File | null;
  applicantType: ApplicantType;
}

/** Step 2 데이터 */
export interface Step2Data {
  usageType: UsageType[];
  businessDescription: string;
}

/** Step 3 데이터 */
export interface Step3Data {
  selectedCategories: string[];
}

/** Step 4 데이터 */
export interface Step4Data {
  selectedSubItems: string[];
}

/** Step 5 데이터 */
export interface Step5Data {
  selectedGoods: string[];
}

/** Step 6: 요약 (입력 없음, 확인만) */
export type Step6Data = Record<string, never>;

/** Step 7 데이터 */
export interface Step7Data {
  serviceOption: ServiceOption;
}

/** 전체 신청 폼 데이터 */
export interface ApplicationData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
  step5: Step5Data;
  step7: Step7Data;
}
