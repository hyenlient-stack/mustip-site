/**
 * 류별 참고 브랜드 데이터
 * 출처: 키프리스(KIPRIS) 등록 상표 기반 / 공개 정보 참고
 * 최종 검토: 2025년
 *
 * 실제 출원 시 지정상품은 키프리스(www.kipris.or.kr)에서 직접 확인하세요.
 */
import type { BrandReference } from "./types";

export const brandReferences: BrandReference[] = [
  /* ══════════════════════════════════════════════════
     제1류: 공업용 화학제품
     ══════════════════════════════════════════════════ */
  {
    id: "brand-lgchem",
    name: "LG화학",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "합성수지", "화학 원료", "전지용 전해질", "접착제", "계면활성제"] },
      { niceClass: "제9류", keyGoods: ["2차전지", "배터리 셀", "배터리 팩", "에너지저장장치(ESS)"] },
      { niceClass: "제17류", keyGoods: ["플라스틱 반제품", "합성수지 성형품", "절연재", "PVC 소재"] },
      { niceClass: "제35류", keyGoods: ["화학제품 소매업", "온라인 판매업", "수출입 대행업"] },
      { niceClass: "제40류", keyGoods: ["화학 소재 가공업", "플라스틱 성형 가공업", "석유화학 정제업"] },
      { niceClass: "제42류", keyGoods: ["화학 연구업", "소재 연구 개발업", "배터리 기술 연구업"] },
    ],
  },
  {
    id: "brand-lottechem",
    name: "롯데케미칼",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "합성수지", "폴리에틸렌", "폴리프로필렌", "합성고무", "산업용 가스"] },
      { niceClass: "제17류", keyGoods: ["플라스틱 시트", "보온 단열재", "플라스틱 파이프", "발포 플라스틱"] },
      { niceClass: "제35류", keyGoods: ["화학제품 도매업", "소매업", "수출입업"] },
      { niceClass: "제40류", keyGoods: ["석유화학 정제업", "플라스틱 가공업", "화학 소재 처리업"] },
    ],
  },
  {
    id: "brand-oci",
    name: "OCI",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "과산화수소", "소다회", "공업용 산화물", "실리콘 원료", "태양전지용 폴리실리콘"] },
      { niceClass: "제4류", keyGoods: ["공업용 카본블랙", "피치", "타르"] },
      { niceClass: "제19류", keyGoods: ["건축용 화학제품", "건축자재용 접착제"] },
      { niceClass: "제40류", keyGoods: ["화학 처리업", "폴리실리콘 정제업"] },
      { niceClass: "제42류", keyGoods: ["화학 연구업", "태양광 소재 연구업", "소재 시험분석업"] },
    ],
  },
  {
    id: "brand-skchem",
    name: "SK케미칼",
    registrations: [
      { niceClass: "제1류", keyGoods: ["합성수지", "PET 수지", "코폴리에스터", "바이오 소재", "화학 원료", "산업용 접착제"] },
      { niceClass: "제5류", keyGoods: ["백신", "의약품", "바이오시밀러", "혈액제제", "항암제"] },
      { niceClass: "제10류", keyGoods: ["주사기", "의료용 튜브", "의료기기 부품"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "화학제품 소매업", "수출입업"] },
      { niceClass: "제42류", keyGoods: ["바이오 연구업", "신약 개발업", "소재 연구업"] },
    ],
  },
  {
    id: "brand-kumhopetrochem",
    name: "금호석유화학",
    registrations: [
      { niceClass: "제1류", keyGoods: ["합성고무", "SBR 고무", "BR 고무", "페놀수지", "BPA", "에폭시 수지"] },
      { niceClass: "제17류", keyGoods: ["고무제품", "합성고무 시트", "고무 패킹", "고무 호스", "방진 고무"] },
      { niceClass: "제35류", keyGoods: ["화학제품 도매업", "고무제품 소매업", "수출입 대행업"] },
      { niceClass: "제40류", keyGoods: ["고무 가공업", "합성수지 가공업", "화학 소재 가공업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제2류: 페인트, 도료, 잉크
     ══════════════════════════════════════════════════ */
  {
    id: "brand-kcc-paint",
    name: "KCC",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "코팅제", "방청제", "에나멜", "자동차용 도료", "선박용 도료", "방화 도료"] },
      { niceClass: "제1류", keyGoods: ["실리콘 수지", "접착제 원료", "공업용 화학제품"] },
      { niceClass: "제17류", keyGoods: ["실리콘 실란트", "건축용 실리콘", "단열재"] },
      { niceClass: "제19류", keyGoods: ["건축용 유리", "창호재", "복층유리", "방음유리", "건축자재"] },
      { niceClass: "제37류", keyGoods: ["도장 공사업", "건설업", "인테리어 공사업", "페인트 시공업"] },
    ],
  },
  {
    id: "brand-noroo",
    name: "노루페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["수성 페인트", "유성 페인트", "건축용 도료", "바니시", "목재용 스테인", "방수 도료", "친환경 페인트"] },
      { niceClass: "제1류", keyGoods: ["도료용 화학첨가제", "경화제", "희석제"] },
      { niceClass: "제35류", keyGoods: ["도료 소매업", "인테리어 자재 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제37류", keyGoods: ["도장 시공업", "방수 공사업", "건물 외벽 도장업"] },
    ],
  },
  {
    id: "brand-samhwa",
    name: "삼화페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "에나멜", "방청 도료", "목재용 도료", "공업용 도료", "분체 도료"] },
      { niceClass: "제35류", keyGoods: ["도료 소매업", "건축자재 도매업"] },
      { niceClass: "제37류", keyGoods: ["건축물 도장업", "공업 시설 도장업", "교량 도장업"] },
      { niceClass: "제42류", keyGoods: ["도료 연구개발업", "색채 컨설팅업"] },
    ],
  },
  {
    id: "brand-jebisco",
    name: "제비스코",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "바니시", "래커", "옻칠", "건축용 코팅제", "바닥용 도료"] },
      { niceClass: "제35류", keyGoods: ["도료 소매업", "온라인 페인트 판매업"] },
      { niceClass: "제37류", keyGoods: ["도장 시공업", "인테리어 페인팅업"] },
    ],
  },
  {
    id: "brand-chokwang",
    name: "조광페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["선박용 도료", "공업용 페인트", "방오 도료", "중방식 도료", "내열 도료", "형광 도료"] },
      { niceClass: "제35류", keyGoods: ["도료 수출입업", "도매업", "산업용 도료 판매업"] },
      { niceClass: "제37류", keyGoods: ["선박 도장업", "플랜트 도장업", "산업시설 도장업"] },
      { niceClass: "제42류", keyGoods: ["도료 연구업", "부식방지 기술 연구업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제3류: 화장품, 세정용품
     ══════════════════════════════════════════════════ */
  {
    id: "brand-amorepacific",
    name: "아모레퍼시픽",
    registrations: [
      { niceClass: "제3류", keyGoods: ["화장품", "기초화장품", "색조화장품", "향수", "샴푸", "바디워시", "선크림", "마스크팩"] },
      { niceClass: "제5류", keyGoods: ["의약외품", "구강청결제", "위생 패드", "약용 화장품"] },
      { niceClass: "제21류", keyGoods: ["화장용 브러시", "퍼프", "화장용 스펀지", "빗", "거울"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "면세점 판매업", "온라인 쇼핑몰업", "프랜차이즈업", "광고업"] },
      { niceClass: "제42류", keyGoods: ["화장품 연구개발업", "피부 분석 서비스업", "화장품 디자인업"] },
      { niceClass: "제44류", keyGoods: ["피부미용업", "에스테틱업", "스파 서비스업", "두피 관리업", "메이크업 서비스업"] },
    ],
  },
  {
    id: "brand-lghhcare",
    name: "LG생활건강",
    registrations: [
      { niceClass: "제3류", keyGoods: ["화장품", "치약", "샴푸", "바디워시", "세정제", "헤어 염색제", "데오드란트"] },
      { niceClass: "제5류", keyGoods: ["의약외품", "소독제", "구강청결제", "위생 세정제", "살균 티슈"] },
      { niceClass: "제21류", keyGoods: ["칫솔", "화장용구", "세면도구", "비누곽"] },
      { niceClass: "제30류", keyGoods: ["코코아 음료", "차", "커피음료"] },
      { niceClass: "제32류", keyGoods: ["탄산음료", "생수", "비타민 음료"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "생활용품 소매업", "온라인 쇼핑몰업", "광고업"] },
    ],
  },
  {
    id: "brand-innisfree",
    name: "이니스프리",
    registrations: [
      { niceClass: "제3류", keyGoods: ["기초화장품", "마스크팩", "자외선 차단제", "토너", "에센스", "클렌저", "립밤"] },
      { niceClass: "제21류", keyGoods: ["화장용 퍼프", "화장솔", "화장거울"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "온라인 쇼핑몰업", "프랜차이즈업", "광고업"] },
      { niceClass: "제44류", keyGoods: ["피부관리업", "미용 상담업"] },
    ],
  },
  {
    id: "brand-drjart",
    name: "닥터자르트",
    registrations: [
      { niceClass: "제3류", keyGoods: ["스킨케어 화장품", "비비크림", "마스크팩", "세럼", "클렌저", "수분크림", "선크림"] },
      { niceClass: "제5류", keyGoods: ["약용 화장품", "피부 치료용 연고"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "온라인 판매업", "수출입업"] },
      { niceClass: "제42류", keyGoods: ["화장품 연구개발업", "피부과학 연구업"] },
      { niceClass: "제44류", keyGoods: ["피부관리업", "더마 케어 서비스업"] },
    ],
  },
  {
    id: "brand-missha",
    name: "미샤 (MISSHA)",
    registrations: [
      { niceClass: "제3류", keyGoods: ["기초화장품", "색조화장품", "파운데이션", "선크림", "클렌징 오일", "에센스", "쿠션 팩트"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "프랜차이즈업", "온라인 쇼핑몰업", "수출입업"] },
      { niceClass: "제44류", keyGoods: ["피부미용업", "메이크업 서비스업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제4류: 연료, 오일
     ══════════════════════════════════════════════════ */
  {
    id: "brand-skenergy",
    name: "SK에너지",
    registrations: [
      { niceClass: "제4류", keyGoods: ["가솔린", "경유", "등유", "연료유", "윤활유", "LPG", "항공유"] },
      { niceClass: "제1류", keyGoods: ["석유화학 원료", "용제", "아스팔트 원료"] },
      { niceClass: "제35류", keyGoods: ["주유소 프랜차이즈업", "에너지 소매업", "편의점 운영업"] },
      { niceClass: "제37류", keyGoods: ["주유소 설비 공사업", "석유 저장시설 관리업"] },
      { niceClass: "제39류", keyGoods: ["석유 운송업", "유조선 운영업", "파이프라인 운송업"] },
    ],
  },
  {
    id: "brand-gscaltex",
    name: "GS칼텍스",
    registrations: [
      { niceClass: "제4류", keyGoods: ["윤활유", "연료", "기어오일", "엔진오일", "경유", "등유", "그리스"] },
      { niceClass: "제1류", keyGoods: ["석유화학 제품", "방향족 화합물", "파라핀 왁스"] },
      { niceClass: "제35류", keyGoods: ["주유소 운영업", "에너지 소매업", "프랜차이즈업"] },
      { niceClass: "제37류", keyGoods: ["차량 정비업", "주유소 설비 시공업"] },
      { niceClass: "제39류", keyGoods: ["석유 운송업", "유류 배달업"] },
    ],
  },
  {
    id: "brand-soil",
    name: "S-OIL",
    registrations: [
      { niceClass: "제4류", keyGoods: ["연료", "윤활유", "합성 윤활유", "엔진오일", "산업용 오일", "그리스", "유압유"] },
      { niceClass: "제1류", keyGoods: ["석유화학 원료", "파라핀", "왁스"] },
      { niceClass: "제35류", keyGoods: ["주유소 프랜차이즈업", "석유제품 소매업", "광고업"] },
      { niceClass: "제39류", keyGoods: ["석유 운송업", "유조선 운영업"] },
    ],
  },
  {
    id: "brand-hdoilbank",
    name: "현대오일뱅크",
    registrations: [
      { niceClass: "제4류", keyGoods: ["연료", "윤활유", "등유", "항공유", "경유", "가솔린", "선박유"] },
      { niceClass: "제35류", keyGoods: ["주유소 운영업", "편의점 운영업", "에너지 소매업"] },
      { niceClass: "제37류", keyGoods: ["차량 세차업", "차량 정비업"] },
    ],
  },
  {
    id: "brand-shell",
    name: "쉘 (Shell)",
    registrations: [
      { niceClass: "제4류", keyGoods: ["윤활유", "그리스", "합성 엔진오일", "유압유", "기어오일", "터빈오일", "연료"] },
      { niceClass: "제1류", keyGoods: ["석유화학 원료", "산업용 용제", "냉매"] },
      { niceClass: "제35류", keyGoods: ["주유소 프랜차이즈업", "윤활유 소매업", "에너지 소매업", "광고업"] },
      { niceClass: "제37류", keyGoods: ["차량 오일 교환 서비스업", "차량 정비업"] },
      { niceClass: "제42류", keyGoods: ["에너지 연구업", "석유화학 기술 연구업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제5류: 의약품
     ══════════════════════════════════════════════════ */
  {
    id: "brand-yuhan",
    name: "유한양행",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "비타민제", "항생제", "감기약", "소화제", "진통제", "항암제", "당뇨병 치료제"] },
      { niceClass: "제1류", keyGoods: ["동물용 사료 첨가제", "농업용 화학제품"] },
      { niceClass: "제10류", keyGoods: ["의료용 주사기", "진단 키트", "의료기기"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "약국 프랜차이즈업", "건강식품 소매업"] },
      { niceClass: "제42류", keyGoods: ["신약 연구개발업", "바이오 연구업", "임상시험 서비스업"] },
      { niceClass: "제44류", keyGoods: ["약국업", "건강 상담업", "처방 조제업"] },
    ],
  },
  {
    id: "brand-dongapharm",
    name: "동아제약",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "드링크제", "비타민", "수액제", "감기약", "소화제", "구충제"] },
      { niceClass: "제32류", keyGoods: ["에너지 드링크", "건강 음료", "비타민 음료"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "약국 체인업", "건강식품 소매업"] },
      { niceClass: "제42류", keyGoods: ["제약 연구업", "임상시험업", "바이오 기술 연구업"] },
      { niceClass: "제44류", keyGoods: ["건강 상담업", "약사 상담업"] },
    ],
  },
  {
    id: "brand-chongkundang",
    name: "종근당",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "항생제", "고혈압약", "당뇨병 치료제", "비타민제", "건강기능식품"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "건강식품 소매업", "온라인 판매업"] },
      { niceClass: "제42류", keyGoods: ["신약 연구업", "바이오시밀러 개발업"] },
      { niceClass: "제44류", keyGoods: ["건강검진 상담업", "약사 상담업"] },
    ],
  },
  {
    id: "brand-daewoong",
    name: "대웅제약",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "보톡스", "소화제(베아제)", "위장약", "당뇨약", "항암제", "비타민제"] },
      { niceClass: "제10류", keyGoods: ["보톡스 시술기기", "의료용 주입기", "의료기기 부품"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "건강식품 소매업"] },
      { niceClass: "제42류", keyGoods: ["제약 연구업", "바이오 연구업", "AI 신약 개발업"] },
      { niceClass: "제44류", keyGoods: ["미용 시술업(보톡스)", "건강 상담업", "의료 서비스업"] },
    ],
  },
  {
    id: "brand-hanmi",
    name: "한미약품",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "인슐린 제제", "항암제", "고혈압약", "비만 치료제", "비타민제", "건강기능식품"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "약국 소매업", "수출입업"] },
      { niceClass: "제42류", keyGoods: ["신약 개발업", "바이오 연구업", "약물전달 기술 연구업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제6류~제8류: 금속, 기계, 공구
     ══════════════════════════════════════════════════ */
  {
    id: "brand-posco",
    name: "POSCO",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "철강 제품", "강판", "스테인리스강", "전기강판", "철근", "H형강", "아연도금강판"] },
      { niceClass: "제7류", keyGoods: ["산업용 기계 부품", "제철 설비"] },
      { niceClass: "제19류", keyGoods: ["건축용 철골", "철골구조물", "건축용 금속재"] },
      { niceClass: "제37류", keyGoods: ["건설업", "플랜트 공사업", "철강구조물 설치업"] },
      { niceClass: "제40류", keyGoods: ["금속 가공업", "철강 열처리업", "철강 절단 가공업"] },
    ],
  },
  {
    id: "brand-hyundaisteel",
    name: "현대제철",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "철강판", "H형강", "철근", "후판", "봉강", "선재"] },
      { niceClass: "제12류", keyGoods: ["자동차용 강판", "자동차 부품 소재"] },
      { niceClass: "제19류", keyGoods: ["건축용 철골", "교량용 강재"] },
      { niceClass: "제37류", keyGoods: ["건설업", "철강구조물 공사업"] },
      { niceClass: "제40류", keyGoods: ["철강 가공업", "금속 열처리업", "주조업"] },
    ],
  },
  {
    id: "brand-dongkuk",
    name: "동국제강",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "형강", "칼라강판", "철근", "스테인리스강", "도금강판"] },
      { niceClass: "제19류", keyGoods: ["건축용 칼라강판", "지붕재", "외벽재"] },
      { niceClass: "제40류", keyGoods: ["금속 가공업", "표면 처리업", "도금 가공업"] },
    ],
  },
  {
    id: "brand-kgsteel",
    name: "KG스틸",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강판", "냉연강판", "아연도금강판", "전기강판", "칼라강판", "합금강판"] },
      { niceClass: "제19류", keyGoods: ["건축용 강판", "외장재"] },
      { niceClass: "제40류", keyGoods: ["강판 가공업", "금속 절단 가공업", "도금 가공업"] },
    ],
  },
  {
    id: "brand-seah",
    name: "세아제강",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강관", "파이프", "스테인리스 강관", "구조용 강관", "배관용 파이프", "오일가스용 강관"] },
      { niceClass: "제11류", keyGoods: ["보일러용 강관", "열교환기용 관"] },
      { niceClass: "제37류", keyGoods: ["배관 설치업", "강관 시공업", "플랜트 배관 공사업"] },
      { niceClass: "제40류", keyGoods: ["강관 가공업", "금속 절단업", "파이프 도금업"] },
    ],
  },
  {
    id: "brand-doosanbobcat",
    name: "두산밥캣",
    registrations: [
      { niceClass: "제7류", keyGoods: ["건설기계", "굴착기", "로더", "스키드 스티어 로더", "지게차", "크레인", "콤팩트 트랙로더"] },
      { niceClass: "제12류", keyGoods: ["특수차량", "산업용 운반차"] },
      { niceClass: "제35류", keyGoods: ["건설기계 소매업", "장비 렌탈 중개업", "수출입업"] },
      { niceClass: "제37류", keyGoods: ["건설기계 수리업", "정비업", "부품 교환 서비스업"] },
    ],
  },
  {
    id: "brand-hdmodern",
    name: "HD현대",
    registrations: [
      { niceClass: "제7류", keyGoods: ["굴착기", "건설기계", "지게차", "엔진", "발전기", "선박용 엔진", "유압장비"] },
      { niceClass: "제12류", keyGoods: ["선박", "특수차량", "트랙터"] },
      { niceClass: "제35류", keyGoods: ["건설기계 판매업", "중장비 렌탈업"] },
      { niceClass: "제37류", keyGoods: ["선박 수리업", "건설기계 정비업", "엔진 수리업"] },
      { niceClass: "제42류", keyGoods: ["산업기계 설계업", "선박 설계업", "자율운항 기술 연구업"] },
    ],
  },
  {
    id: "brand-ls",
    name: "LS산전",
    registrations: [
      { niceClass: "제7류", keyGoods: ["산업용 기계", "변압기", "차단기", "인버터", "전동기", "자동화 설비"] },
      { niceClass: "제9류", keyGoods: ["전력 제어 장치", "PLC", "전기 계측기", "전력 변환기"] },
      { niceClass: "제37류", keyGoods: ["전기 설비 설치업", "산업기계 수리업", "변전소 공사업"] },
      { niceClass: "제42류", keyGoods: ["전력 시스템 설계업", "에너지 관리 서비스업", "산업 자동화 연구업"] },
    ],
  },
  {
    id: "brand-hwashin",
    name: "화신정공",
    registrations: [
      { niceClass: "제7류", keyGoods: ["공작기계", "프레스 기계", "성형기계", "자동차 부품 제조기계", "산업용 로봇"] },
      { niceClass: "제12류", keyGoods: ["자동차 섀시 부품", "서스펜션 부품"] },
      { niceClass: "제37류", keyGoods: ["기계 수리업", "공작기계 정비업"] },
      { niceClass: "제40류", keyGoods: ["금속 프레스 가공업", "자동차부품 가공업"] },
    ],
  },
  {
    id: "brand-hanwha-aero",
    name: "한화에어로스페이스",
    registrations: [
      { niceClass: "제7류", keyGoods: ["항공기 엔진 부품", "공작기계", "산업용 로봇", "가스터빈", "압축기", "CNC 머신"] },
      { niceClass: "제9류", keyGoods: ["CCTV 카메라", "보안 장비", "영상감시 시스템"] },
      { niceClass: "제13류", keyGoods: ["탄약", "유도무기 부품", "방산 장비"] },
      { niceClass: "제37류", keyGoods: ["항공기 엔진 정비업", "기계 수리업"] },
      { niceClass: "제42류", keyGoods: ["항공우주 연구업", "로봇 기술 연구업", "방산 기술 개발업"] },
    ],
  },
  {
    id: "brand-stanley",
    name: "스탠리 (Stanley)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["수공구", "드라이버", "해머", "플라이어", "렌치", "톱", "줄자", "커터칼"] },
      { niceClass: "제7류", keyGoods: ["전동공구", "전동 드릴", "전동 그라인더", "전동 톱"] },
      { niceClass: "제9류", keyGoods: ["레이저 수평기", "디지털 측정기"] },
      { niceClass: "제21류", keyGoods: ["공구 보관함", "공구 가방"] },
      { niceClass: "제35류", keyGoods: ["공구 소매업", "온라인 공구 판매업", "공구 프랜차이즈업"] },
    ],
  },
  {
    id: "brand-bosch-tool",
    name: "보쉬 (Bosch)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["수공구", "드라이버 비트", "렌치 세트", "소켓 세트"] },
      { niceClass: "제7류", keyGoods: ["전동 드릴", "전동공구", "그라인더", "햄머드릴", "직소", "원형톱", "진공청소기"] },
      { niceClass: "제9류", keyGoods: ["레이저 측정기", "자동차 센서", "자동차 전자부품", "카메라 모듈"] },
      { niceClass: "제11류", keyGoods: ["가스레인지", "오븐", "식기세척기", "보일러", "온수기"] },
      { niceClass: "제12류", keyGoods: ["자동차 부품", "브레이크 시스템", "스파크플러그", "와이퍼"] },
      { niceClass: "제37류", keyGoods: ["자동차 수리업", "전동공구 수리업", "가전 수리업"] },
    ],
  },
  {
    id: "brand-mck",
    name: "맥가이버",
    registrations: [
      { niceClass: "제8류", keyGoods: ["다용도 수공구", "포켓 나이프", "캠핑 공구", "멀티툴", "접이식 톱"] },
      { niceClass: "제21류", keyGoods: ["캠핑용 식기", "코펠", "텀블러"] },
      { niceClass: "제35류", keyGoods: ["아웃도어 용품 소매업", "캠핑용품 판매업"] },
    ],
  },
  {
    id: "brand-crescent",
    name: "크레센트 (Crescent)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["조절 렌치", "플라이어", "드라이버", "소켓 렌치", "니퍼", "바이스그립"] },
      { niceClass: "제7류", keyGoods: ["전동 래칫", "에어공구"] },
      { niceClass: "제35류", keyGoods: ["공구 소매업", "온라인 판매업"] },
    ],
  },
  {
    id: "brand-comeron",
    name: "코메론 (Komelon)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["줄자", "측량 테이프", "수평기", "스틸 줄자", "직각자", "컨벡스"] },
      { niceClass: "제9류", keyGoods: ["레이저 거리측정기", "디지털 수평기", "전자 줄자"] },
      { niceClass: "제35류", keyGoods: ["측정공구 소매업", "수출입업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제9류: 전자기기, 컴퓨터, 소프트웨어
     ══════════════════════════════════════════════════ */
  {
    id: "brand-samsung-elec",
    name: "삼성전자 (Samsung)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["스마트폰", "태블릿컴퓨터", "스마트워치", "노트북", "TV", "모니터", "이어폰", "반도체"] },
      { niceClass: "제11류", keyGoods: ["냉장고", "세탁기", "에어컨", "전자레인지", "식기세척기", "공기청정기", "건조기"] },
      { niceClass: "제35류", keyGoods: ["전자제품 소매업", "온라인 쇼핑몰 운영업", "광고업", "판촉업", "수출입 대행업"] },
      { niceClass: "제37류", keyGoods: ["전자제품 수리업", "가전제품 설치업", "컴퓨터 수리업", "스마트폰 수리업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "클라우드 서비스업", "AI 서비스업", "반도체 설계업", "UX 디자인업"] },
    ],
  },
  {
    id: "brand-lg-elec",
    name: "LG전자",
    registrations: [
      { niceClass: "제9류", keyGoods: ["TV", "모니터", "노트북", "사운드바", "프로젝터", "블루투스 스피커"] },
      { niceClass: "제11류", keyGoods: ["냉장고", "에어컨", "세탁기", "건조기", "식기세척기", "공기청정기", "스타일러"] },
      { niceClass: "제35류", keyGoods: ["전자제품 소매업", "온라인 쇼핑몰업", "광고업", "수출입업"] },
      { niceClass: "제37류", keyGoods: ["가전제품 수리업", "에어컨 설치업", "전자제품 정비업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "스마트홈 서비스업", "AI 연구업", "로봇 연구업"] },
    ],
  },
  {
    id: "brand-apple",
    name: "애플 (Apple)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["아이폰", "맥북", "아이패드", "애플워치", "에어팟", "맥 프로", "비전 프로", "홈팟"] },
      { niceClass: "제35류", keyGoods: ["전자제품 소매업(애플스토어)", "온라인 쇼핑몰업", "광고업"] },
      { niceClass: "제38류", keyGoods: ["스트리밍 서비스업", "데이터 전송업", "메시지 서비스업"] },
      { niceClass: "제41류", keyGoods: ["음악 서비스업(애플뮤직)", "영상 스트리밍업(애플TV+)", "게임 서비스업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "클라우드 서비스업(iCloud)", "AI 서비스업", "앱스토어 운영업"] },
    ],
  },
  {
    id: "brand-skhynix",
    name: "SK하이닉스",
    registrations: [
      { niceClass: "제9류", keyGoods: ["반도체", "DRAM", "NAND 플래시", "SSD", "HBM", "메모리 모듈", "CIS 센서"] },
      { niceClass: "제35류", keyGoods: ["반도체 판매업", "전자부품 도매업", "수출입업"] },
      { niceClass: "제40류", keyGoods: ["반도체 제조업", "웨이퍼 가공업", "패키징 가공업"] },
      { niceClass: "제42류", keyGoods: ["반도체 설계업", "공정 기술 연구업", "AI 칩 연구업"] },
    ],
  },
  {
    id: "brand-kakao-app",
    name: "카카오 (Kakao)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["모바일 앱", "소프트웨어", "AI 스피커", "스마트홈 기기", "디지털 콘텐츠"] },
      { niceClass: "제35류", keyGoods: ["온라인 광고업", "키워드 광고업", "쇼핑 플랫폼 운영업", "데이터 분석업"] },
      { niceClass: "제36류", keyGoods: ["간편결제업(카카오페이)", "송금업", "인터넷 은행업(카카오뱅크)"] },
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "SNS 서비스업", "음성통화 서비스업", "인터넷 방송업"] },
      { niceClass: "제39류", keyGoods: ["택시 중개업(카카오T)", "대리운전 중개업", "배달 서비스업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "플랫폼 서비스업", "클라우드 서비스업", "AI 연구업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제10류: 의료기기
     ══════════════════════════════════════════════════ */
  {
    id: "brand-osstem",
    name: "오스템임플란트",
    registrations: [
      { niceClass: "제10류", keyGoods: ["치과용 임플란트", "치과용 드릴", "치과용 기구", "교정장치", "디지털 인상 채득기"] },
      { niceClass: "제5류", keyGoods: ["치과용 시멘트", "치과용 합금", "골이식재"] },
      { niceClass: "제9류", keyGoods: ["치과용 3D 스캐너", "치과 CAD/CAM 장비", "디지털 X선 센서"] },
      { niceClass: "제35류", keyGoods: ["치과 재료 도매업", "의료기기 소매업", "수출입업"] },
      { niceClass: "제41류", keyGoods: ["치과 의사 교육업", "임플란트 시술 교육업"] },
      { niceClass: "제44류", keyGoods: ["치과 진료업", "구강 건강 관리업", "치과 상담업"] },
    ],
  },
  {
    id: "brand-inbody",
    name: "인바디 (InBody)",
    registrations: [
      { niceClass: "제10류", keyGoods: ["체성분 분석기", "의료용 체중계", "신체 측정기기", "혈압계", "체지방 측정기"] },
      { niceClass: "제9류", keyGoods: ["체성분 분석 소프트웨어", "건강관리 앱", "데이터 분석 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["의료기기 소매업", "건강기기 판매업", "수출입업"] },
      { niceClass: "제42류", keyGoods: ["건강 데이터 분석업", "의료 소프트웨어 개발업"] },
      { niceClass: "제44류", keyGoods: ["건강 상담업", "체성분 분석 서비스업", "영양 상담업"] },
    ],
  },
  {
    id: "brand-vatech",
    name: "바텍 (Vatech)",
    registrations: [
      { niceClass: "제10류", keyGoods: ["치과용 X선 장치", "디지털 X레이 센서", "CT 촬영 장비", "구강 촬영기", "세팔로 촬영기"] },
      { niceClass: "제9류", keyGoods: ["의료 영상 소프트웨어", "AI 진단 보조 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["의료기기 소매업", "치과장비 수출입업"] },
      { niceClass: "제42류", keyGoods: ["의료 AI 연구업", "영상 진단 소프트웨어 개발업"] },
    ],
  },
  {
    id: "brand-jwmedical",
    name: "JW중외제약",
    registrations: [
      { niceClass: "제10류", keyGoods: ["의료용 봉합사", "수술용 기구", "의료용 카테터", "수액 세트", "주사기"] },
      { niceClass: "제5류", keyGoods: ["수액제", "의약품", "항생제", "영양 수액", "비타민 주사제"] },
      { niceClass: "제35류", keyGoods: ["의약품 도매업", "의료기기 소매업"] },
      { niceClass: "제42류", keyGoods: ["의약품 연구업", "바이오 연구업"] },
      { niceClass: "제44류", keyGoods: ["의료 서비스업", "수액 치료 서비스업"] },
    ],
  },
  {
    id: "brand-lutronic",
    name: "루트로닉",
    registrations: [
      { niceClass: "제10류", keyGoods: ["레이저 치료기기", "피부미용 의료기기", "피코세컨드 레이저", "고주파 치료기", "IPL 장비"] },
      { niceClass: "제9류", keyGoods: ["의료기기 제어 소프트웨어", "피부 분석 장치"] },
      { niceClass: "제35류", keyGoods: ["의료기기 소매업", "미용기기 수출입업"] },
      { niceClass: "제44류", keyGoods: ["피부과 진료업", "레이저 시술업", "미용 시술업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제11류~제12류: 가전, 자동차
     ══════════════════════════════════════════════════ */
  {
    id: "brand-cuckoo",
    name: "쿠쿠 (Cuckoo)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["전기밥솥", "정수기", "공기청정기", "IH 압력밥솥", "인덕션", "에어프라이어", "가습기"] },
      { niceClass: "제7류", keyGoods: ["식품 가공 기계", "주방용 전동기기"] },
      { niceClass: "제21류", keyGoods: ["밥솥 내솥", "정수기 필터", "주방 소모품"] },
      { niceClass: "제35류", keyGoods: ["가전 소매업", "정수기 렌탈 중개업", "온라인 쇼핑몰업", "프랜차이즈업"] },
      { niceClass: "제37류", keyGoods: ["가전 수리업", "정수기 설치업", "밥솥 수리업"] },
    ],
  },
  {
    id: "brand-winix",
    name: "위닉스 (Winix)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["공기청정기", "제습기", "가습기", "에어워셔", "건조기", "의류건조기"] },
      { niceClass: "제9류", keyGoods: ["스마트홈 제어 앱", "공기질 측정 센서"] },
      { niceClass: "제35류", keyGoods: ["가전 소매업", "온라인 쇼핑몰업", "렌탈 서비스업"] },
      { niceClass: "제37류", keyGoods: ["공기청정기 수리업", "필터 교체 서비스업"] },
    ],
  },
  {
    id: "brand-coway",
    name: "코웨이 (Coway)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["정수기", "공기청정기", "비데", "연수기", "음식물처리기", "매트리스 케어기"] },
      { niceClass: "제9류", keyGoods: ["스마트 IoT 센서", "건강관리 앱"] },
      { niceClass: "제21류", keyGoods: ["정수기 필터", "비데 부품", "세면도구"] },
      { niceClass: "제35류", keyGoods: ["가전 렌탈업", "프랜차이즈업", "온라인 쇼핑몰업", "방문판매업"] },
      { niceClass: "제37류", keyGoods: ["정수기 설치업", "가전 수리업", "정기 관리 서비스업"] },
    ],
  },
  {
    id: "brand-rinnai",
    name: "린나이 (Rinnai)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["가스레인지", "보일러", "온수기", "가스오븐", "건조기", "가스히터", "환기팬"] },
      { niceClass: "제35류", keyGoods: ["가스기기 소매업", "보일러 판매업", "프랜차이즈업"] },
      { niceClass: "제37류", keyGoods: ["보일러 설치업", "가스기기 수리업", "배관 공사업"] },
    ],
  },
  {
    id: "brand-kdl",
    name: "귀뚜라미",
    registrations: [
      { niceClass: "제11류", keyGoods: ["보일러", "온수기", "전기보일러", "가스보일러", "환기시스템", "온풍기"] },
      { niceClass: "제9류", keyGoods: ["스마트 보일러 제어장치", "온도 조절기"] },
      { niceClass: "제35류", keyGoods: ["보일러 소매업", "난방기기 판매업"] },
      { niceClass: "제37류", keyGoods: ["보일러 설치업", "난방기기 수리업", "배관 공사업", "A/S 서비스업"] },
    ],
  },
  {
    id: "brand-hyundai-motor",
    name: "현대자동차",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "승용차", "전기자동차", "SUV", "트럭", "버스", "자동차 부품"] },
      { niceClass: "제7류", keyGoods: ["자동차 엔진", "모터", "변속기", "수소연료전지"] },
      { niceClass: "제9류", keyGoods: ["자동차 내비게이션", "차량 블랙박스", "자율주행 소프트웨어", "커넥티드카 앱"] },
      { niceClass: "제35류", keyGoods: ["자동차 판매업(딜러십)", "중고차 거래업", "자동차 수출입업"] },
      { niceClass: "제36류", keyGoods: ["자동차 보험업", "자동차 리스업", "할부금융업"] },
      { niceClass: "제37류", keyGoods: ["자동차 정비업", "차량 수리업", "자동차 도장업", "부품 교환업"] },
    ],
  },
  {
    id: "brand-kia",
    name: "기아 (KIA)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "SUV", "전기자동차", "세단", "미니밴", "픽업트럭", "자동차 부품"] },
      { niceClass: "제9류", keyGoods: ["차량 인포테인먼트", "자율주행 센서", "커넥티드카 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["자동차 판매업", "자동차 렌탈 중개업", "온라인 견적 서비스업"] },
      { niceClass: "제36류", keyGoods: ["자동차 할부금융업", "리스업", "보험 중개업"] },
      { niceClass: "제37류", keyGoods: ["자동차 정비업", "차량 수리업", "타이어 교환업"] },
    ],
  },
  {
    id: "brand-hankooktire",
    name: "한국타이어 (Hankook)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["타이어", "승용차 타이어", "트럭 타이어", "SUV 타이어", "런플랫 타이어", "겨울용 타이어"] },
      { niceClass: "제17류", keyGoods: ["고무 소재", "타이어 원료 고무"] },
      { niceClass: "제35류", keyGoods: ["타이어 소매업", "온라인 판매업", "프랜차이즈업"] },
      { niceClass: "제37류", keyGoods: ["타이어 교환업", "차량 정비업", "얼라인먼트 서비스업"] },
    ],
  },
  {
    id: "brand-nexen-tire",
    name: "넥센타이어",
    registrations: [
      { niceClass: "제12류", keyGoods: ["타이어", "승용차 타이어", "SUV 타이어", "사계절 타이어", "고성능 타이어"] },
      { niceClass: "제35류", keyGoods: ["타이어 소매업", "자동차 용품 판매업"] },
      { niceClass: "제37류", keyGoods: ["타이어 교환업", "차량 점검업"] },
    ],
  },
  {
    id: "brand-kgmobility",
    name: "KG모빌리티 (쌍용)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "SUV", "픽업트럭", "전기자동차", "자동차 부품"] },
      { niceClass: "제35류", keyGoods: ["자동차 판매업", "딜러십 운영업"] },
      { niceClass: "제37류", keyGoods: ["자동차 정비업", "차량 수리업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제13류~제16류: 화약, 귀금속, 악기, 문구
     ══════════════════════════════════════════════════ */
  {
    id: "brand-hanwha-def",
    name: "한화 (방산)",
    registrations: [
      { niceClass: "제13류", keyGoods: ["화약", "폭약", "발파 제품", "추진체", "연막탄", "신호탄"] },
      { niceClass: "제7류", keyGoods: ["산업용 기계", "태양광 설비"] },
      { niceClass: "제9류", keyGoods: ["보안 감시 카메라", "레이더 장비", "전자전 장비"] },
      { niceClass: "제37류", keyGoods: ["건설업", "플랜트 공사업", "발전소 건설업"] },
      { niceClass: "제42류", keyGoods: ["방산 기술 연구업", "우주항공 연구업", "태양광 기술 연구업"] },
    ],
  },
  {
    id: "brand-poongsan",
    name: "풍산",
    registrations: [
      { niceClass: "제13류", keyGoods: ["탄약", "포탄", "탄두", "소총탄", "신관", "뇌관"] },
      { niceClass: "제6류", keyGoods: ["동합금", "황동 소재", "인동", "동판", "동선"] },
      { niceClass: "제40류", keyGoods: ["비철금속 가공업", "동합금 주조업", "압연 가공업"] },
    ],
  },
  {
    id: "brand-lignex",
    name: "LIG넥스원",
    registrations: [
      { niceClass: "제13류", keyGoods: ["미사일 부품", "유도무기 부품", "방공 시스템", "어뢰"] },
      { niceClass: "제9류", keyGoods: ["레이더 장비", "통신 장비", "전자전 장비", "감시정찰 장비"] },
      { niceClass: "제42류", keyGoods: ["방산 기술 연구업", "통신 시스템 개발업", "AI 방위 연구업"] },
    ],
  },
  {
    id: "brand-vicphos",
    name: "한국종합화약",
    registrations: [
      { niceClass: "제13류", keyGoods: ["산업용 화약", "발파용 폭약", "뇌관", "도폭선", "전기뇌관"] },
      { niceClass: "제37류", keyGoods: ["발파 공사업", "터널 굴착업", "광산 발파업"] },
    ],
  },
  {
    id: "brand-samyangchem",
    name: "한화시스템 (방산전자)",
    registrations: [
      { niceClass: "제13류", keyGoods: ["미사일 유도장치", "방위 전자 장비"] },
      { niceClass: "제9류", keyGoods: ["항공전자 장비", "레이더", "적외선 감지기", "위성통신 장비", "UAM 시스템"] },
      { niceClass: "제38류", keyGoods: ["위성통신업", "방위 통신 서비스업"] },
      { niceClass: "제42류", keyGoods: ["방위산업 연구업", "항공전자 설계업", "위성 시스템 개발업"] },
    ],
  },
  {
    id: "brand-jestina",
    name: "제이에스티나 (J.Estina)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["귀금속 장신구", "목걸이", "귀걸이", "반지", "팔찌", "브로치", "시계"] },
      { niceClass: "제18류", keyGoods: ["핸드백", "지갑", "숄더백", "크로스백", "카드지갑"] },
      { niceClass: "제25류", keyGoods: ["스카프", "모자", "벨트"] },
      { niceClass: "제35류", keyGoods: ["주얼리 소매업", "핸드백 소매업", "온라인 쇼핑몰업", "면세점 판매업"] },
    ],
  },
  {
    id: "brand-romanson",
    name: "로만손 (Romanson)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["손목시계", "시계 부품", "시계 밴드", "스마트워치", "보석", "귀금속 장신구"] },
      { niceClass: "제9류", keyGoods: ["스마트워치", "웨어러블 기기"] },
      { niceClass: "제35류", keyGoods: ["시계 소매업", "주얼리 소매업", "온라인 판매업"] },
    ],
  },
  {
    id: "brand-goldendew",
    name: "골든듀 (Golden Dew)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["금 장신구", "다이아몬드 주얼리", "귀금속 팔찌", "약혼반지", "결혼반지", "진주 목걸이"] },
      { niceClass: "제35류", keyGoods: ["주얼리 소매업", "온라인 쇼핑몰업", "프랜차이즈업", "백화점 매장 운영업"] },
    ],
  },
  {
    id: "brand-stonehenge",
    name: "스톤헨지 (Stonehenge)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["주얼리", "귀금속 목걸이", "귀걸이", "반지", "팔찌", "커플링"] },
      { niceClass: "제18류", keyGoods: ["가죽 지갑", "카드홀더", "미니백"] },
      { niceClass: "제35류", keyGoods: ["주얼리 소매업", "온라인 쇼핑몰업", "백화점 매장업"] },
    ],
  },
  {
    id: "brand-minigold",
    name: "미니골드 (Minigold)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["금 주얼리", "귀금속 장신구", "귀걸이", "목걸이", "반지", "돌반지"] },
      { niceClass: "제35류", keyGoods: ["주얼리 소매업", "온라인 판매업", "라이브커머스 판매업"] },
    ],
  },
  {
    id: "brand-samick",
    name: "삼익악기 (Samick)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "그랜드피아노", "전자악기", "기타", "바이올린", "디지털 피아노"] },
      { niceClass: "제9류", keyGoods: ["전자음향 장비", "앰프", "음향 믹서"] },
      { niceClass: "제35류", keyGoods: ["악기 소매업", "음향기기 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제37류", keyGoods: ["악기 수리업", "피아노 조율업"] },
      { niceClass: "제41류", keyGoods: ["음악 교육업", "피아노 레슨업", "음악학원업"] },
    ],
  },
  {
    id: "brand-youngchang",
    name: "영창뮤직 (Young Chang)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "디지털 피아노", "전자 키보드", "업라이트 피아노", "그랜드 피아노"] },
      { niceClass: "제35류", keyGoods: ["악기 소매업", "음악교재 판매업"] },
      { niceClass: "제37류", keyGoods: ["피아노 조율업", "악기 수리업"] },
      { niceClass: "제41류", keyGoods: ["음악 교육업", "피아노 교실 운영업"] },
    ],
  },
  {
    id: "brand-yamaha",
    name: "야마하 (Yamaha)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "기타", "드럼", "관악기", "전자악기", "신시사이저", "바이올린", "첼로"] },
      { niceClass: "제9류", keyGoods: ["음향 장비", "앰프", "스피커", "마이크", "믹서", "헤드폰"] },
      { niceClass: "제12류", keyGoods: ["오토바이", "보트", "스노우모빌", "ATV"] },
      { niceClass: "제35류", keyGoods: ["악기 소매업", "음향기기 소매업", "오토바이 판매업"] },
      { niceClass: "제37류", keyGoods: ["악기 수리업", "오토바이 정비업"] },
      { niceClass: "제41류", keyGoods: ["음악 교육업", "공연 기획업", "음악 스쿨 운영업"] },
    ],
  },
  {
    id: "brand-roland",
    name: "롤랜드 (Roland)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["전자 피아노", "전자 드럼", "디지털 피아노", "신시사이저", "기타 앰프", "이펙터"] },
      { niceClass: "제9류", keyGoods: ["녹음 장비", "오디오 인터페이스", "비디오 스위처", "DJ 장비"] },
      { niceClass: "제35류", keyGoods: ["악기 소매업", "음향기기 판매업"] },
    ],
  },
  {
    id: "brand-gibson",
    name: "깁슨 (Gibson)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["기타", "일렉트릭 기타", "어쿠스틱 기타", "베이스 기타", "만돌린", "기타 줄"] },
      { niceClass: "제9류", keyGoods: ["기타 앰프", "기타 이펙터", "오디오 장비"] },
      { niceClass: "제35류", keyGoods: ["악기 소매업", "온라인 판매업", "악기 프랜차이즈업"] },
      { niceClass: "제41류", keyGoods: ["음악 교육업", "기타 레슨업"] },
    ],
  },
  {
    id: "brand-monami",
    name: "모나미 (Monami)",
    registrations: [
      { niceClass: "제16류", keyGoods: ["볼펜", "사인펜", "색연필", "형광펜", "필기구", "만년필", "마커", "노트"] },
      { niceClass: "제2류", keyGoods: ["잉크", "프린터 잉크", "스탬프 잉크"] },
      { niceClass: "제35류", keyGoods: ["문구 소매업", "온라인 쇼핑몰업", "사무용품 판매업"] },
    ],
  },
  {
    id: "brand-dongapencil",
    name: "동아연필",
    registrations: [
      { niceClass: "제16류", keyGoods: ["연필", "샤프연필", "지우개", "문구용품", "크레용", "색연필", "싸인펜"] },
      { niceClass: "제35류", keyGoods: ["문구 소매업", "학용품 판매업", "수출입업"] },
    ],
  },
  {
    id: "brand-hansol-paper",
    name: "한솔제지",
    registrations: [
      { niceClass: "제16류", keyGoods: ["복사지", "인쇄용지", "특수지", "코팅지", "열감지용지", "티슈"] },
      { niceClass: "제35류", keyGoods: ["종이 도매업", "사무용품 판매업"] },
      { niceClass: "제40류", keyGoods: ["종이 제조업", "인쇄업", "펄프 가공업"] },
    ],
  },
  {
    id: "brand-moonhakdongne",
    name: "문학동네",
    registrations: [
      { niceClass: "제16류", keyGoods: ["도서", "소설", "문학작품", "출판물", "에세이", "인문서적"] },
      { niceClass: "제9류", keyGoods: ["전자출판물", "전자책", "오디오북"] },
      { niceClass: "제35류", keyGoods: ["서적 소매업", "온라인 서점 운영업"] },
      { niceClass: "제41류", keyGoods: ["출판업", "문학 이벤트 기획업", "도서 기획업", "작가 에이전시업"] },
    ],
  },
  {
    id: "brand-minimelody",
    name: "모닝글로리",
    registrations: [
      { niceClass: "제16류", keyGoods: ["공책", "다이어리", "노트패드", "스티커", "편지지", "학습장", "지우개", "자"] },
      { niceClass: "제35류", keyGoods: ["문구 소매업", "프랜차이즈업", "온라인 쇼핑몰업", "학용품 판매업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제17류~제21류: 고무, 가방, 건축, 가구, 주방
     ══════════════════════════════════════════════════ */
  {
    id: "brand-nexen-rubber",
    name: "넥센 (고무소재)",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무제품", "씰링재", "호스", "산업용 고무 부품", "방진고무", "패킹"] },
      { niceClass: "제12류", keyGoods: ["타이어", "자동차용 튜브"] },
      { niceClass: "제40류", keyGoods: ["고무 가공업", "타이어 재생업"] },
    ],
  },
  {
    id: "brand-pyunghwa",
    name: "평화산업",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무 호스", "씰링재", "방진 고무", "자동차용 고무부품", "오일씰", "브레이크 호스"] },
      { niceClass: "제12류", keyGoods: ["자동차 부품(고무)", "브레이크 부품"] },
      { niceClass: "제40류", keyGoods: ["고무 가공업", "자동차부품 가공업"] },
    ],
  },
  {
    id: "brand-dongahwasung",
    name: "동아화성",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무패킹", "씰재", "O링", "개스킷", "발포고무", "실리콘 제품"] },
      { niceClass: "제40류", keyGoods: ["고무 가공업", "실리콘 성형업"] },
    ],
  },
  {
    id: "brand-kolon-ind",
    name: "코오롱인더스트리",
    registrations: [
      { niceClass: "제17류", keyGoods: ["엔지니어링 플라스틱", "아라미드 소재", "고강도 섬유", "산업용 필름"] },
      { niceClass: "제23류", keyGoods: ["아라미드 원사", "나일론 원사", "고강도 원사"] },
      { niceClass: "제25류", keyGoods: ["아웃도어 의류(코오롱스포츠)", "등산복", "기능성 의류"] },
      { niceClass: "제35류", keyGoods: ["패션 소매업", "아웃도어 용품 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제42류", keyGoods: ["소재 연구업", "섬유 기술 개발업"] },
    ],
  },
  {
    id: "brand-skc-film",
    name: "SKC",
    registrations: [
      { niceClass: "제17류", keyGoods: ["PET 필름", "플라스틱 필름", "반도체용 필름", "광학 필름", "포장용 필름"] },
      { niceClass: "제1류", keyGoods: ["화학 원료", "반도체 공정 소재"] },
      { niceClass: "제9류", keyGoods: ["반도체 소재", "전자부품용 필름"] },
      { niceClass: "제40류", keyGoods: ["필름 가공업", "코팅 가공업", "반도체 소재 가공업"] },
    ],
  },
  {
    id: "brand-mcm",
    name: "MCM",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가죽 핸드백", "여행가방", "지갑", "백팩", "크로스백", "클러치백", "벨트"] },
      { niceClass: "제14류", keyGoods: ["시계", "주얼리", "귀걸이"] },
      { niceClass: "제25류", keyGoods: ["의류", "스니커즈", "모자", "스카프", "벨트"] },
      { niceClass: "제35류", keyGoods: ["패션 소매업", "면세점 판매업", "온라인 쇼핑몰업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-samsonite",
    name: "쌤소나이트 (Samsonite)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["여행가방", "캐리어", "배낭", "서류 가방", "기내용 가방", "보스턴백", "파우치"] },
      { niceClass: "제25류", keyGoods: ["여행용 의류", "패커블 재킷"] },
      { niceClass: "제35류", keyGoods: ["가방 소매업", "면세점 판매업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-louisquatorze",
    name: "루이까또즈",
    registrations: [
      { niceClass: "제18류", keyGoods: ["핸드백", "지갑", "토트백", "숄더백", "카드지갑", "클러치백"] },
      { niceClass: "제14류", keyGoods: ["시계", "장신구"] },
      { niceClass: "제25류", keyGoods: ["스카프", "벨트", "모자"] },
      { niceClass: "제35류", keyGoods: ["패션 소매업", "온라인 쇼핑몰업", "백화점 매장 운영업"] },
    ],
  },
  {
    id: "brand-mandarinaduck",
    name: "만다리나덕 (Mandarina Duck)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가방", "배낭", "여행가방", "핸드백", "크로스백", "노트북 가방"] },
      { niceClass: "제35류", keyGoods: ["가방 소매업", "패션 소매업", "온라인 판매업"] },
    ],
  },
  {
    id: "brand-beanpole",
    name: "빈폴 (Bean Pole)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가죽가방", "배낭", "지갑", "숄더백", "토트백"] },
      { niceClass: "제25류", keyGoods: ["의류", "니트", "코트", "셔츠", "팬츠", "재킷", "원피스"] },
      { niceClass: "제35류", keyGoods: ["의류 소매업", "패션 프랜차이즈업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-lxhausys",
    name: "LX하우시스",
    registrations: [
      { niceClass: "제19류", keyGoods: ["창호", "단열재", "건축용 유리", "방음패널", "데크재", "외장 패널"] },
      { niceClass: "제17류", keyGoods: ["건축용 실란트", "방수 시트"] },
      { niceClass: "제27류", keyGoods: ["바닥재", "벽지", "PVC 바닥재", "마루", "인테리어 필름"] },
      { niceClass: "제35류", keyGoods: ["건축자재 소매업", "인테리어 소재 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제37류", keyGoods: ["인테리어 시공업", "창호 설치업", "바닥재 시공업"] },
    ],
  },
  {
    id: "brand-kccglass",
    name: "KCC글라스",
    registrations: [
      { niceClass: "제19류", keyGoods: ["건축용 유리", "복층유리", "강화유리", "방탄유리", "거울"] },
      { niceClass: "제11류", keyGoods: ["조명용 유리", "유리 조명기구"] },
      { niceClass: "제37류", keyGoods: ["유리 시공업", "커튼월 공사업"] },
    ],
  },
  {
    id: "brand-ssangyong-cement",
    name: "쌍용씨앤이",
    registrations: [
      { niceClass: "제19류", keyGoods: ["시멘트", "레미콘", "건축용 모르타르", "내화 건축자재", "콘크리트 혼화제"] },
      { niceClass: "제37류", keyGoods: ["건설업", "토목공사업", "레미콘 타설업"] },
      { niceClass: "제40류", keyGoods: ["시멘트 제조업", "골재 가공업"] },
    ],
  },
  {
    id: "brand-byuksan",
    name: "벽산",
    registrations: [
      { niceClass: "제19류", keyGoods: ["단열재", "석고보드", "시멘트보드", "그라스울", "건축용 보드"] },
      { niceClass: "제17류", keyGoods: ["건축용 단열 소재", "방음 소재"] },
      { niceClass: "제37류", keyGoods: ["단열 시공업", "건축 내장 공사업"] },
    ],
  },
  {
    id: "brand-hanil-cement",
    name: "한일시멘트",
    registrations: [
      { niceClass: "제19류", keyGoods: ["시멘트", "콘크리트 블록", "건축용 석회", "속경 시멘트", "포틀랜드 시멘트"] },
      { niceClass: "제37류", keyGoods: ["레미콘 공사업", "시멘트 구조물 시공업"] },
      { niceClass: "제40류", keyGoods: ["시멘트 제조업", "콘크리트 가공업"] },
    ],
  },
  {
    id: "brand-hanssem",
    name: "한샘 (Hanssem)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["주방가구", "침실가구", "욕실 수납장", "붙박이장", "신발장", "옷장", "수납선반"] },
      { niceClass: "제11류", keyGoods: ["빌트인 가전(쿡탑)", "레인지후드", "주방 조명"] },
      { niceClass: "제35류", keyGoods: ["가구 소매업", "인테리어 컨설팅업", "온라인 쇼핑몰업", "프랜차이즈업"] },
      { niceClass: "제37류", keyGoods: ["인테리어 시공업", "주방 리모델링업", "가구 설치업"] },
      { niceClass: "제42류", keyGoods: ["인테리어 디자인업", "주거 공간 설계업"] },
    ],
  },
  {
    id: "brand-ikea",
    name: "이케아 (IKEA)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["가구", "수납장", "책상", "소파", "침대 프레임", "책장", "식탁", "의자"] },
      { niceClass: "제11류", keyGoods: ["조명기구", "전구", "양초홀더"] },
      { niceClass: "제21류", keyGoods: ["주방용품", "식기", "보관용기", "컵"] },
      { niceClass: "제24류", keyGoods: ["침구류", "커튼", "담요", "베개커버"] },
      { niceClass: "제35류", keyGoods: ["가구 소매업", "홈퍼니싱 매장업", "온라인 쇼핑몰업", "프랜차이즈업"] },
      { niceClass: "제43류", keyGoods: ["레스토랑업(이케아 푸드코트)", "카페업"] },
    ],
  },
  {
    id: "brand-iloom",
    name: "일룸 (iloom)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["어린이 가구", "서재 가구", "책상", "책장", "침대", "소파", "학생용 의자"] },
      { niceClass: "제35류", keyGoods: ["가구 소매업", "온라인 쇼핑몰업", "매장 운영업"] },
      { niceClass: "제37류", keyGoods: ["가구 설치업", "가구 배송 설치업"] },
    ],
  },
  {
    id: "brand-livart",
    name: "리바트 (Livart)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["사무용 가구", "가정용 가구", "사무 의자", "소파", "수납장", "책상", "침대"] },
      { niceClass: "제35류", keyGoods: ["가구 소매업", "사무용품 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제37류", keyGoods: ["가구 설치업", "사무실 인테리어 시공업"] },
    ],
  },
  {
    id: "brand-acebeds",
    name: "에이스침대 (ACE Beds)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["침대", "매트리스", "침대 프레임", "베드 세트", "스프링 매트리스", "메모리폼 매트리스"] },
      { niceClass: "제24류", keyGoods: ["침구류", "이불", "베개", "침대시트"] },
      { niceClass: "제35류", keyGoods: ["침대 소매업", "매트리스 판매업", "온라인 쇼핑몰업"] },
      { niceClass: "제37류", keyGoods: ["침대 배송 설치업", "매트리스 케어 서비스업"] },
    ],
  },
  {
    id: "brand-locknlock",
    name: "락앤락 (Lock & Lock)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["밀폐용기", "텀블러", "보온병", "물병", "프라이팬", "냄비", "도시락", "수저세트"] },
      { niceClass: "제11류", keyGoods: ["전기포트", "토스터기"] },
      { niceClass: "제35류", keyGoods: ["주방용품 소매업", "온라인 쇼핑몰업", "수출입업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-glassloc",
    name: "글라스락 (Glasslock)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["유리 밀폐용기", "내열 유리용기", "보관 용기", "유리 밀폐병", "유리 텀블러"] },
      { niceClass: "제35류", keyGoods: ["주방용품 소매업", "온라인 판매업", "수출입업"] },
    ],
  },
  {
    id: "brand-happycall",
    name: "해피콜 (Happycall)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["프라이팬", "냄비", "양면팬", "조리도구 세트", "그릴팬", "웍", "주걱"] },
      { niceClass: "제11류", keyGoods: ["전기그릴", "에어프라이어", "인덕션 레인지"] },
      { niceClass: "제35류", keyGoods: ["주방용품 소매업", "온라인 쇼핑몰업", "홈쇼핑 판매업"] },
    ],
  },
  {
    id: "brand-tefal",
    name: "테팔 (Tefal)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["프라이팬", "냄비", "조리도구", "압력밥솥", "찜기", "도마", "칼세트"] },
      { niceClass: "제7류", keyGoods: ["푸드프로세서", "핸드블렌더", "믹서기", "주서기"] },
      { niceClass: "제11류", keyGoods: ["전기주전자", "토스터", "전기그릴", "스팀다리미", "전기밥솥"] },
      { niceClass: "제35류", keyGoods: ["주방용품 소매업", "온라인 쇼핑몰업", "가전 소매업"] },
    ],
  },
  {
    id: "brand-pnpungnyeon",
    name: "PN풍년",
    registrations: [
      { niceClass: "제21류", keyGoods: ["압력밥솥", "냄비", "솥", "조리용기", "스텐냄비", "프라이팬", "주전자"] },
      { niceClass: "제11류", keyGoods: ["전기밥솥", "전기압력밥솥"] },
      { niceClass: "제35류", keyGoods: ["주방용품 소매업", "온라인 판매업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제22류~제28류: 텐트, 원사, 직물, 의류, 스포츠
     ══════════════════════════════════════════════════ */
  {
    id: "brand-kovea",
    name: "코베아 (Kovea)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "캠핑 천막", "방수포", "타프", "그라운드시트"] },
      { niceClass: "제11류", keyGoods: ["캠핑용 스토브", "버너", "캠핑 랜턴", "히터"] },
      { niceClass: "제21류", keyGoods: ["캠핑 코펠", "캠핑 식기", "보온병"] },
      { niceClass: "제35류", keyGoods: ["캠핑용품 소매업", "아웃도어 용품 판매업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-coleman",
    name: "콜맨 (Coleman)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "침낭", "해먹", "타프", "그라운드시트", "캠핑 로프"] },
      { niceClass: "제11류", keyGoods: ["캠핑 랜턴", "버너", "캠핑용 스토브", "쿨러"] },
      { niceClass: "제20류", keyGoods: ["캠핑 의자", "캠핑 테이블", "에어매트"] },
      { niceClass: "제35류", keyGoods: ["캠핑용품 소매업", "아웃도어 매장업"] },
    ],
  },
  {
    id: "brand-blackyak",
    name: "블랙야크 (BLACKYAK)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["등산 배낭", "캠핑 텐트", "트레킹 폴", "슬리핑백"] },
      { niceClass: "제18류", keyGoods: ["스포츠 가방", "등산 배낭", "허리 가방"] },
      { niceClass: "제25류", keyGoods: ["등산복", "아웃도어 재킷", "등산화", "트레킹 팬츠", "기능성 속옷", "장갑"] },
      { niceClass: "제35류", keyGoods: ["아웃도어 의류 소매업", "프랜차이즈업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-snowpeak",
    name: "스노우피크 (Snow Peak)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "타프", "해먹", "그라운드시트"] },
      { niceClass: "제20류", keyGoods: ["캠핑 의자", "캠핑 테이블", "접이식 가구"] },
      { niceClass: "제21류", keyGoods: ["캠핑 식기", "티탄 머그", "코펠 세트", "캠핑 커틀러리"] },
      { niceClass: "제35류", keyGoods: ["캠핑용품 소매업", "라이프스타일 매장업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-northface-tent",
    name: "노스페이스 (The North Face)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "슬리핑백", "타프"] },
      { niceClass: "제18류", keyGoods: ["배낭", "더플백", "슬링백", "허리가방"] },
      { niceClass: "제25류", keyGoods: ["등산복", "패딩 재킷", "트레킹 바지", "등산화", "플리스", "방수 재킷"] },
      { niceClass: "제35류", keyGoods: ["아웃도어 의류 소매업", "프랜차이즈업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-hyosung-tnc",
    name: "효성TNC",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "나일론 원사", "스판덱스 원사", "재활용 원사", "크레오라 원사"] },
      { niceClass: "제24류", keyGoods: ["직물", "기능성 직물", "스트레치 원단"] },
      { niceClass: "제40류", keyGoods: ["원사 가공업", "섬유 방사업", "염색 가공업"] },
    ],
  },
  {
    id: "brand-taekwang",
    name: "태광산업",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "나일론 원사", "아크릴 원사", "복합 원사"] },
      { niceClass: "제24류", keyGoods: ["직물", "합성섬유 직물"] },
      { niceClass: "제40류", keyGoods: ["원사 방사업", "섬유 가공업"] },
    ],
  },
  {
    id: "brand-toray",
    name: "도레이첨단소재",
    registrations: [
      { niceClass: "제23류", keyGoods: ["나일론 원사", "폴리에스터 원사", "탄소섬유 원사", "고강도 원사", "극세사 원사"] },
      { niceClass: "제17류", keyGoods: ["PET 필름", "산업용 필름"] },
      { niceClass: "제24류", keyGoods: ["부직포", "스웨이드 직물", "에어백용 직물"] },
      { niceClass: "제42류", keyGoods: ["소재 연구업", "섬유 기술 개발업", "탄소섬유 연구업"] },
    ],
  },
  {
    id: "brand-kolon-fiber",
    name: "코오롱인더스트리 (섬유)",
    registrations: [
      { niceClass: "제23류", keyGoods: ["아라미드 원사", "나일론 원사", "고강도 섬유", "방탄섬유 원사"] },
      { niceClass: "제17류", keyGoods: ["산업용 필름", "엔지니어링 플라스틱"] },
      { niceClass: "제42류", keyGoods: ["첨단소재 연구업", "섬유 기술 연구업"] },
    ],
  },
  {
    id: "brand-huvis",
    name: "휴비스 (Huvis)",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "복합 섬유", "기능성 원사", "리사이클 원사", "항균 원사"] },
      { niceClass: "제24류", keyGoods: ["부직포", "산업용 직물", "필터용 직물"] },
      { niceClass: "제40류", keyGoods: ["섬유 방사업", "원사 가공업", "부직포 제조업"] },
    ],
  },
  {
    id: "brand-evazari",
    name: "이브자리",
    registrations: [
      { niceClass: "제24류", keyGoods: ["침구류", "이불", "베개 커버", "시트", "요", "담요", "쿨링 이불"] },
      { niceClass: "제20류", keyGoods: ["침대 매트리스 패드", "토퍼"] },
      { niceClass: "제35류", keyGoods: ["침구 소매업", "온라인 쇼핑몰업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-kyungbang",
    name: "경방",
    registrations: [
      { niceClass: "제24류", keyGoods: ["면직물", "혼방직물", "폴리에스터 직물", "린넨", "방적 직물"] },
      { niceClass: "제23류", keyGoods: ["면사", "혼방사"] },
      { niceClass: "제40류", keyGoods: ["직물 방직업", "염색 가공업", "면방적업"] },
    ],
  },
  {
    id: "brand-hanilcarpet",
    name: "한일카펫",
    registrations: [
      { niceClass: "제24류", keyGoods: ["카펫", "러그", "매트", "인테리어 직물"] },
      { niceClass: "제27류", keyGoods: ["바닥용 카펫", "러그 매트", "바닥 깔개"] },
      { niceClass: "제35류", keyGoods: ["카펫 소매업", "인테리어 직물 판매업"] },
    ],
  },
  {
    id: "brand-hyundaicrafts",
    name: "시몬스 (Simmons)",
    registrations: [
      { niceClass: "제24류", keyGoods: ["침구류", "이불", "베개", "매트리스 커버", "침대시트"] },
      { niceClass: "제20류", keyGoods: ["매트리스", "침대 프레임", "베드 세트"] },
      { niceClass: "제35류", keyGoods: ["침대 소매업", "침구 소매업", "프리미엄 매장 운영업"] },
      { niceClass: "제43류", keyGoods: ["호텔업(시몬스 테라스)", "카페업"] },
    ],
  },
  {
    id: "brand-kolon-tex",
    name: "코오롱글로텍",
    registrations: [
      { niceClass: "제24류", keyGoods: ["자동차 내장 직물", "산업용 직물", "항공기 시트 직물", "인테리어 직물"] },
      { niceClass: "제26류", keyGoods: ["벨크로 파스너", "부직포 파스너"] },
      { niceClass: "제40류", keyGoods: ["직물 가공업", "특수 원단 코팅업"] },
    ],
  },
  {
    id: "brand-nike",
    name: "나이키 (Nike)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "스포츠웨어", "트레이닝복", "모자", "양말", "수영복", "속옷"] },
      { niceClass: "제18류", keyGoods: ["스포츠 가방", "배낭", "더플백", "허리가방", "신발주머니"] },
      { niceClass: "제28류", keyGoods: ["축구공", "농구공", "운동 보호대", "골프클럽", "요가매트", "피트니스 장비"] },
      { niceClass: "제35류", keyGoods: ["스포츠용품 소매업", "온라인 쇼핑몰업", "프랜차이즈업", "광고업"] },
      { niceClass: "제41류", keyGoods: ["스포츠 이벤트 기획업", "운동 교육업", "체육관 운영업"] },
    ],
  },
  {
    id: "brand-adidas",
    name: "아디다스 (Adidas)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "트레이닝복", "스포츠 양말", "조거팬츠", "축구유니폼", "운동화끈", "티셔츠"] },
      { niceClass: "제18류", keyGoods: ["스포츠백", "배낭", "더플백", "체육관 가방"] },
      { niceClass: "제28류", keyGoods: ["축구공", "신가드", "테니스 라켓", "요가매트"] },
      { niceClass: "제35류", keyGoods: ["스포츠 의류 소매업", "온라인 쇼핑몰업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-newbalance",
    name: "뉴발란스 (New Balance)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "러닝화", "캐주얼 신발", "스포츠웨어", "모자", "양말", "트레이닝복"] },
      { niceClass: "제18류", keyGoods: ["배낭", "크로스백", "슬링백"] },
      { niceClass: "제35류", keyGoods: ["스포츠 의류 소매업", "온라인 쇼핑몰업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-musinsa-std",
    name: "무신사스탠다드",
    registrations: [
      { niceClass: "제25류", keyGoods: ["티셔츠", "청바지", "후드티", "슬랙스", "코트", "니트", "속옷", "양말"] },
      { niceClass: "제18류", keyGoods: ["가방", "지갑", "에코백"] },
      { niceClass: "제35류", keyGoods: ["의류 소매업", "온라인 쇼핑몰업", "광고업"] },
    ],
  },
  {
    id: "brand-covernat",
    name: "커버낫 (Covernat)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["스트릿 의류", "후드 스웨트셔츠", "티셔츠", "점퍼", "바지", "모자"] },
      { niceClass: "제18류", keyGoods: ["배낭", "크로스백", "에코백"] },
      { niceClass: "제35류", keyGoods: ["의류 소매업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-ykk",
    name: "YKK",
    registrations: [
      { niceClass: "제26류", keyGoods: ["지퍼", "파스너", "금속 지퍼", "플라스틱 지퍼", "방수 지퍼", "의류용 버클"] },
      { niceClass: "제6류", keyGoods: ["알루미늄 건축자재", "커튼월"] },
      { niceClass: "제19류", keyGoods: ["건축용 창호", "알루미늄 도어"] },
      { niceClass: "제40류", keyGoods: ["지퍼 가공업", "파스너 제조업"] },
    ],
  },
  {
    id: "brand-woojin",
    name: "우진화스너",
    registrations: [
      { niceClass: "제26류", keyGoods: ["단추", "금속 파스너", "의류용 버클", "금속 단추", "스냅 버튼"] },
      { niceClass: "제40류", keyGoods: ["금속 파스너 가공업", "단추 제조업"] },
    ],
  },
  {
    id: "brand-taekwang-zip",
    name: "태광지퍼",
    registrations: [
      { niceClass: "제26류", keyGoods: ["지퍼", "나일론 지퍼", "의류용 지퍼", "가방용 지퍼", "신발용 지퍼"] },
      { niceClass: "제40류", keyGoods: ["지퍼 제조업", "섬유부자재 가공업"] },
    ],
  },
  {
    id: "brand-sungchang-lace",
    name: "성창레이스",
    registrations: [
      { niceClass: "제26류", keyGoods: ["자수", "레이스", "의류 장식용 자수", "테이프", "리본", "의류용 악세사리"] },
      { niceClass: "제24류", keyGoods: ["레이스 직물", "자수 직물"] },
    ],
  },
  {
    id: "brand-kolon-fnt",
    name: "벨크로코리아",
    registrations: [
      { niceClass: "제26류", keyGoods: ["벨크로 파스너", "후크앤루프 파스너", "접착식 파스너", "산업용 벨크로"] },
      { niceClass: "제17류", keyGoods: ["접착 테이프", "산업용 접착 소재"] },
    ],
  },
  {
    id: "brand-donghwa",
    name: "동화기업",
    registrations: [
      { niceClass: "제27류", keyGoods: ["강화마루", "원목마루", "합판마루", "SPC 바닥재", "데코타일"] },
      { niceClass: "제19류", keyGoods: ["MDF", "파티클보드", "합판", "건축용 목재"] },
      { niceClass: "제35류", keyGoods: ["바닥재 소매업", "건축자재 판매업"] },
      { niceClass: "제37류", keyGoods: ["바닥재 시공업", "마루 설치업"] },
    ],
  },
  {
    id: "brand-hanwha-lnc",
    name: "한화L&C",
    registrations: [
      { niceClass: "제27류", keyGoods: ["바닥재", "PVC 타일", "데코타일", "쿠션바닥재", "비닐 바닥재"] },
      { niceClass: "제19류", keyGoods: ["인조대리석", "인테리어 석재"] },
      { niceClass: "제35류", keyGoods: ["건축자재 소매업", "인테리어 판매업"] },
      { niceClass: "제37류", keyGoods: ["바닥재 시공업", "인테리어 공사업"] },
    ],
  },
  {
    id: "brand-noksoo",
    name: "녹수",
    registrations: [
      { niceClass: "제27류", keyGoods: ["마루", "강마루", "바닥 타일", "방음 마루", "원목 마루"] },
      { niceClass: "제37류", keyGoods: ["마루 시공업", "바닥재 설치업"] },
    ],
  },
  {
    id: "brand-kcc-flooring",
    name: "KCC (인테리어)",
    registrations: [
      { niceClass: "제27류", keyGoods: ["바닥재", "벽지", "장판", "타일"] },
      { niceClass: "제2류", keyGoods: ["페인트", "코팅제"] },
      { niceClass: "제19류", keyGoods: ["건축자재", "유리"] },
      { niceClass: "제37류", keyGoods: ["인테리어 시공업", "바닥재 시공업", "도배 시공업"] },
    ],
  },
  {
    id: "brand-daelim-bath",
    name: "대림바스",
    registrations: [
      { niceClass: "제27류", keyGoods: ["욕실용 타일", "세라믹 타일", "욕실 매트"] },
      { niceClass: "제11류", keyGoods: ["욕조", "세면대", "샤워기", "수전", "비데"] },
      { niceClass: "제37류", keyGoods: ["욕실 리모델링업", "욕실 시공업", "타일 시공업"] },
    ],
  },
  {
    id: "brand-lego",
    name: "레고 (LEGO)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["조립 완구", "블록 완구", "퍼즐", "미니피겨", "레고 테크닉", "교육용 완구"] },
      { niceClass: "제9류", keyGoods: ["레고 로봇 키트", "프로그래밍 교구", "레고 앱"] },
      { niceClass: "제16류", keyGoods: ["레고 서적", "레고 잡지", "완구 카탈로그"] },
      { niceClass: "제35류", keyGoods: ["완구 소매업(레고 스토어)", "프랜차이즈업", "온라인 쇼핑몰업"] },
      { niceClass: "제41류", keyGoods: ["테마파크업(레고랜드)", "교육 프로그램업", "레고 체험 교실업"] },
    ],
  },
  {
    id: "brand-sonokong",
    name: "손오공",
    registrations: [
      { niceClass: "제28류", keyGoods: ["완구", "변신 로봇", "어린이 게임", "보드게임", "인형", "RC카"] },
      { niceClass: "제9류", keyGoods: ["전자 학습기", "어린이 태블릿"] },
      { niceClass: "제35류", keyGoods: ["완구 소매업", "온라인 쇼핑몰업", "캐릭터 라이선스업"] },
      { niceClass: "제41류", keyGoods: ["완구 체험관 운영업", "어린이 이벤트 기획업"] },
    ],
  },
  {
    id: "brand-youngsil",
    name: "영실업",
    registrations: [
      { niceClass: "제28류", keyGoods: ["어린이 완구", "피규어", "봉제인형", "로봇 완구", "레일 장난감", "소꿉놀이 세트"] },
      { niceClass: "제35류", keyGoods: ["완구 소매업", "캐릭터 라이선스 사업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-mizuno",
    name: "미즈노 (Mizuno)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["야구 글러브", "야구 배트", "골프클럽", "골프공", "배드민턴 라켓", "축구공"] },
      { niceClass: "제25류", keyGoods: ["야구화", "스포츠화", "골프웨어", "야구 유니폼", "축구화"] },
      { niceClass: "제18류", keyGoods: ["스포츠 가방", "골프백", "배트 가방"] },
      { niceClass: "제35류", keyGoods: ["스포츠용품 소매업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-yonex",
    name: "요넥스 (Yonex)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["배드민턴 라켓", "테니스 라켓", "골프채", "스트링", "그립", "셔틀콕"] },
      { niceClass: "제25류", keyGoods: ["배드민턴화", "테니스화", "스포츠웨어", "스포츠 양말"] },
      { niceClass: "제18류", keyGoods: ["라켓 가방", "스포츠 백팩"] },
      { niceClass: "제35류", keyGoods: ["스포츠용품 소매업", "온라인 판매업"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제29류~제34류: 식품, 음료, 주류, 담배
     ══════════════════════════════════════════════════ */
  {
    id: "brand-cj-foods",
    name: "CJ제일제당",
    registrations: [
      { niceClass: "제29류", keyGoods: ["햄", "두부", "냉동식품", "어묵", "소시지", "만두", "김치", "식용유"] },
      { niceClass: "제30류", keyGoods: ["밀가루", "설탕", "소스", "즉석밥(햇반)", "라면", "고추장", "간장"] },
      { niceClass: "제31류", keyGoods: ["사료", "신선 채소 키트"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "온라인 쇼핑몰업(CJ온스타일)", "프랜차이즈업", "수출입업"] },
      { niceClass: "제43류", keyGoods: ["음식점업(비비고)", "음식 배달업"] },
    ],
  },
  {
    id: "brand-pulmuone",
    name: "풀무원",
    registrations: [
      { niceClass: "제29류", keyGoods: ["두부", "김치", "냉장 반찬", "냉동식품", "계란", "콩나물", "나또"] },
      { niceClass: "제30류", keyGoods: ["면류", "소스", "생라면", "우동"] },
      { niceClass: "제32류", keyGoods: ["녹즙", "건강 음료"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "온라인 쇼핑몰업", "프랜차이즈업"] },
      { niceClass: "제43류", keyGoods: ["음식점업", "뷔페 레스토랑업"] },
    ],
  },
  {
    id: "brand-ottogi",
    name: "오뚜기",
    registrations: [
      { niceClass: "제29류", keyGoods: ["마요네즈", "참기름", "카레(분말)", "케첩", "식용유", "들기름", "가공식품"] },
      { niceClass: "제30류", keyGoods: ["라면", "즉석 카레", "3분 요리", "짜장", "냉면", "밀가루", "소스류"] },
      { niceClass: "제32류", keyGoods: ["과채음료", "건강음료"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "수출입업", "온라인 판매업"] },
    ],
  },
  {
    id: "brand-dongwon",
    name: "동원F&B",
    registrations: [
      { niceClass: "제29류", keyGoods: ["참치캔", "통조림", "어육제품", "고등어캔", "햄", "소시지", "유제품"] },
      { niceClass: "제30류", keyGoods: ["김", "장류", "소스"] },
      { niceClass: "제32류", keyGoods: ["생수(동원샘물)", "음료"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "온라인 쇼핑몰업"] },
      { niceClass: "제43류", keyGoods: ["음식점업", "초밥 프랜차이즈업"] },
    ],
  },
  {
    id: "brand-sajo",
    name: "사조대림",
    registrations: [
      { niceClass: "제29류", keyGoods: ["통조림", "어육제품", "햄", "소시지", "참치캔", "식용유", "김치"] },
      { niceClass: "제30류", keyGoods: ["김", "김밥김", "소스류"] },
      { niceClass: "제35류", keyGoods: ["식품 도매업", "소매업", "수출입업"] },
    ],
  },
  {
    id: "brand-starbucks",
    name: "스타벅스 (Starbucks)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["커피", "원두커피", "커피음료", "차", "쿠키", "케이크", "샌드위치", "초콜릿"] },
      { niceClass: "제21류", keyGoods: ["텀블러", "보온병", "머그컵", "물병", "유리컵"] },
      { niceClass: "제32류", keyGoods: ["커피음료(RTD)", "생수", "주스", "탄산음료"] },
      { niceClass: "제35류", keyGoods: ["커피 소매업", "온라인 쇼핑몰업", "프랜차이즈업", "광고업", "MD 판매업"] },
      { niceClass: "제43류", keyGoods: ["커피숍업", "카페업", "음료 제공업", "음식점업", "테이크아웃업", "케이터링업"] },
    ],
  },
  {
    id: "brand-parisbaguette",
    name: "파리바게뜨 (Paris Baguette)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["빵", "케이크", "과자", "샌드위치", "피자", "아이스크림", "음료", "초콜릿"] },
      { niceClass: "제29류", keyGoods: ["가공유제품", "냉동디저트", "치즈"] },
      { niceClass: "제32류", keyGoods: ["생과일 주스", "스무디", "커피음료"] },
      { niceClass: "제35류", keyGoods: ["베이커리 프랜차이즈업", "식품 소매업", "온라인 쇼핑몰업"] },
      { niceClass: "제43류", keyGoods: ["베이커리 카페업", "음식 제공업", "케이크 주문업"] },
    ],
  },
  {
    id: "brand-orion",
    name: "오리온 (Orion)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["과자", "쿠키", "파이", "초코파이", "스낵", "초콜릿", "비스킷", "젤리"] },
      { niceClass: "제29류", keyGoods: ["가공 견과류", "건과일"] },
      { niceClass: "제32류", keyGoods: ["비알콜 음료"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "과자 도매업", "수출입업"] },
    ],
  },
  {
    id: "brand-lotte-confect",
    name: "롯데웰푸드",
    registrations: [
      { niceClass: "제30류", keyGoods: ["과자", "초콜릿", "아이스크림", "껌", "빵", "쌀과자", "사탕"] },
      { niceClass: "제29류", keyGoods: ["냉동디저트", "유제품", "가공식품"] },
      { niceClass: "제32류", keyGoods: ["음료(칠성사이다)", "에너지드링크", "생수"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "과자 도매업", "수출입업", "프랜차이즈업"] },
    ],
  },
  {
    id: "brand-nongshim",
    name: "농심 (Nongshim)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["라면", "스낵", "짜파게티", "신라면", "새우깡", "냉면", "즉석밥", "소스류"] },
      { niceClass: "제29류", keyGoods: ["김치", "나물", "반찬"] },
      { niceClass: "제32류", keyGoods: ["생수(백산수)", "음료"] },
      { niceClass: "제35류", keyGoods: ["식품 소매업", "온라인 판매업", "수출입업"] },
    ],
  },
  {
    id: "brand-royalcanin",
    name: "로얄캐닌 (Royal Canin)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["반려동물 사료", "강아지 사료", "고양이 사료", "반려동물 간식", "처방식 사료", "습식 사료", "건식 사료"] },
      { niceClass: "제5류", keyGoods: ["동물용 영양보조제", "동물용 식이보조제", "동물용 비타민"] },
      { niceClass: "제35류", keyGoods: ["반려동물 사료 소매업", "온라인 판매업", "동물병원 유통업"] },
      { niceClass: "제44류", keyGoods: ["동물 영양 상담업", "수의 서비스업", "반려동물 건강 관리업"] },
    ],
  },
  {
    id: "brand-harim",
    name: "하림",
    registrations: [
      { niceClass: "제31류", keyGoods: ["생닭", "신선 닭고기", "계란", "오리고기", "살아있는 가금류"] },
      { niceClass: "제29류", keyGoods: ["가공 닭고기", "치킨너겟", "훈제 닭고기", "닭가슴살", "소시지"] },
      { niceClass: "제35류", keyGoods: ["육류 소매업", "식품 도매업", "온라인 판매업"] },
      { niceClass: "제43류", keyGoods: ["치킨 전문점업", "음식점업"] },
    ],
  },
  {
    id: "brand-cargill",
    name: "카길 (Cargill)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["사료", "곡물", "가축용 사료", "양식용 사료", "반려동물 사료"] },
      { niceClass: "제1류", keyGoods: ["사료 첨가제", "농업용 화학제품", "비료"] },
      { niceClass: "제29류", keyGoods: ["식용유", "가공 식물성 단백질"] },
      { niceClass: "제35류", keyGoods: ["사료 도매업", "농산물 거래업", "수출입업"] },
    ],
  },
  {
    id: "brand-namyang-dairy",
    name: "남양유업",
    registrations: [
      { niceClass: "제31류", keyGoods: ["신선 우유 원료", "생유"] },
      { niceClass: "제29류", keyGoods: ["우유", "치즈", "요거트", "버터", "분유", "두유"] },
      { niceClass: "제5류", keyGoods: ["유아용 분유", "영양보조 분유"] },
      { niceClass: "제32류", keyGoods: ["유산균 음료", "두유 음료", "과채음료"] },
      { niceClass: "제35류", keyGoods: ["유제품 소매업", "배달 서비스 중개업"] },
    ],
  },
  {
    id: "brand-cjfreshway",
    name: "CJ프레시웨이",
    registrations: [
      { niceClass: "제31류", keyGoods: ["신선식품", "채소", "과일", "신선 유제품", "수산물", "축산물"] },
      { niceClass: "제29류", keyGoods: ["가공식품", "밀키트", "반찬", "냉동식품"] },
      { niceClass: "제35류", keyGoods: ["식재료 유통업", "급식 서비스 중개업", "식품 도매업"] },
      { niceClass: "제43류", keyGoods: ["단체 급식업", "식단 컨설팅업"] },
    ],
  },
  {
    id: "brand-cocacola",
    name: "코카콜라 (Coca-Cola)",
    registrations: [
      { niceClass: "제32류", keyGoods: ["탄산음료", "콜라", "사이다", "주스", "에너지드링크", "생수", "스포츠음료", "아이스티"] },
      { niceClass: "제30류", keyGoods: ["커피음료(조지아)", "홍차(후르츠티)"] },
      { niceClass: "제33류", keyGoods: ["저도주", "칵테일 음료"] },
      { niceClass: "제35류", keyGoods: ["음료 소매업", "자동판매기 운영업", "프랜차이즈업", "광고업"] },
      { niceClass: "제43류", keyGoods: ["음료 제공업", "카페업"] },
    ],
  },
  {
    id: "brand-samdasoo",
    name: "제주삼다수",
    registrations: [
      { niceClass: "제32류", keyGoods: ["생수", "미네랄워터", "먹는 샘물", "탄산수", "과일향 워터"] },
      { niceClass: "제35류", keyGoods: ["생수 소매업", "온라인 판매업", "자동판매기 운영업"] },
      { niceClass: "제39류", keyGoods: ["생수 배달업", "음료 배송업"] },
    ],
  },
  {
    id: "brand-lottechilsung",
    name: "롯데칠성음료",
    registrations: [
      { niceClass: "제32류", keyGoods: ["음료", "주스", "에너지드링크", "탄산음료", "생수", "비타민워터", "스포츠음료"] },
      { niceClass: "제30류", keyGoods: ["캔커피", "밀크티"] },
      { niceClass: "제33류", keyGoods: ["소주(처음처럼)", "맥주(클라우드)", "와인"] },
      { niceClass: "제35류", keyGoods: ["음료 소매업", "자판기 운영업", "수출입업"] },
    ],
  },
  {
    id: "brand-hitejinro-bev",
    name: "하이트진로음료",
    registrations: [
      { niceClass: "제32류", keyGoods: ["탄산음료", "이온음료", "과채음료", "보리차", "생수", "에너지드링크"] },
      { niceClass: "제35류", keyGoods: ["음료 소매업", "자판기 운영업"] },
    ],
  },
  {
    id: "brand-woongjin",
    name: "웅진식품",
    registrations: [
      { niceClass: "제32류", keyGoods: ["과즙음료", "과채음료", "홍초 음료", "곡물 음료", "차 음료", "아침햇살"] },
      { niceClass: "제30류", keyGoods: ["녹차", "보리차(티백)"] },
      { niceClass: "제35류", keyGoods: ["음료 소매업", "온라인 판매업", "수출입업"] },
    ],
  },
  {
    id: "brand-hitejinro",
    name: "하이트진로",
    registrations: [
      { niceClass: "제33류", keyGoods: ["소주", "맥주", "위스키", "진로이즈백", "참이슬", "테라", "켈리"] },
      { niceClass: "제32류", keyGoods: ["비알콜 맥주", "탄산음료"] },
      { niceClass: "제35류", keyGoods: ["주류 소매업", "수출입업", "프랜차이즈업(진로포차)", "광고업"] },
      { niceClass: "제43류", keyGoods: ["음식점업(진로포차)", "주점업"] },
    ],
  },
  {
    id: "brand-ob-beer",
    name: "오비맥주 (OB)",
    registrations: [
      { niceClass: "제33류", keyGoods: ["맥주", "카스", "오비라거", "한맥", "필굿", "에일 맥주"] },
      { niceClass: "제32류", keyGoods: ["비알콜 맥주", "맥주맛 음료"] },
      { niceClass: "제35류", keyGoods: ["주류 소매업", "수출입업", "광고업"] },
    ],
  },
  {
    id: "brand-kooksoondang",
    name: "국순당",
    registrations: [
      { niceClass: "제33류", keyGoods: ["막걸리", "쌀 발효주", "전통주", "과실주", "약주", "백세주"] },
      { niceClass: "제30류", keyGoods: ["누룩", "발효 식품"] },
      { niceClass: "제35류", keyGoods: ["전통주 소매업", "온라인 판매업", "수출입업"] },
      { niceClass: "제43류", keyGoods: ["전통주 체험관업", "양조장 투어업"] },
    ],
  },
  {
    id: "brand-mckiss",
    name: "맥키스컴퍼니",
    registrations: [
      { niceClass: "제33류", keyGoods: ["소주", "이슬톡톡", "발효 소주", "과일소주", "증류식 소주"] },
      { niceClass: "제32류", keyGoods: ["탄산음료", "과일음료"] },
      { niceClass: "제35류", keyGoods: ["주류 도매업", "수출입업"] },
    ],
  },
  {
    id: "brand-pernod",
    name: "페르노리카코리아",
    registrations: [
      { niceClass: "제33류", keyGoods: ["양주", "위스키", "브랜디", "발렌타인", "시바스리갈", "앱솔루트 보드카", "와인"] },
      { niceClass: "제35류", keyGoods: ["주류 수입업", "주류 도매업", "광고업"] },
      { niceClass: "제43류", keyGoods: ["바(Bar) 운영업", "와인바업"] },
    ],
  },
  {
    id: "brand-ktng",
    name: "KT&G",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "궐련", "전자담배기기(릴)", "히트스틱", "파이프 담배", "시가"] },
      { niceClass: "제9류", keyGoods: ["전자담배 충전기", "전자담배 앱"] },
      { niceClass: "제35류", keyGoods: ["담배 도매업", "편의점 유통업", "수출입업"] },
      { niceClass: "제5류", keyGoods: ["니코틴 패치", "금연 보조제"] },
    ],
  },
  {
    id: "brand-pm-iqos",
    name: "필립모리스 (IQOS)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["전자담배기기", "궐련형 전자담배", "히트 스틱", "담배", "아이코스 전용스틱"] },
      { niceClass: "제9류", keyGoods: ["전자담배 충전기", "전용 케이스"] },
      { niceClass: "제35류", keyGoods: ["담배 소매업", "수출입업"] },
    ],
  },
  {
    id: "brand-bat-korea",
    name: "BAT코리아 (글로)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "전자담배기기(글로)", "네오스틱", "시가", "파이프 담배"] },
      { niceClass: "제9류", keyGoods: ["전자담배 충전 장치", "전용 케이스"] },
      { niceClass: "제35류", keyGoods: ["담배 소매업", "수입업"] },
    ],
  },
  {
    id: "brand-jti-korea",
    name: "JTI코리아",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "궐련(에세)", "시가", "각련"] },
      { niceClass: "제35류", keyGoods: ["담배 수입업", "담배 도매업"] },
    ],
  },
  {
    id: "brand-vuse",
    name: "뷰즈 (Vuse)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["전자담배기기", "니코틴 액상 카트리지", "리필 캡슐", "베이프 기기"] },
      { niceClass: "제9류", keyGoods: ["전자담배 충전기", "USB 충전 케이블"] },
    ],
  },

  /* ══════════════════════════════════════════════════
     제35류~제45류: 서비스업
     ══════════════════════════════════════════════════ */
  {
    id: "brand-coupang",
    name: "쿠팡 (Coupang)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["인터넷 쇼핑몰업", "온라인 소매업", "광고업", "상품 검색 서비스업", "마켓플레이스업"] },
      { niceClass: "제9류", keyGoods: ["쿠팡 앱", "쿠팡플레이 앱", "결제 소프트웨어"] },
      { niceClass: "제36류", keyGoods: ["간편결제업(쿠팡페이)", "소액결제 서비스업"] },
      { niceClass: "제39류", keyGoods: ["택배업(로켓배송)", "배송 서비스업", "새벽배송업", "물류 창고업"] },
      { niceClass: "제41류", keyGoods: ["OTT 서비스업(쿠팡플레이)", "영상 스트리밍업"] },
      { niceClass: "제43류", keyGoods: ["음식 배달 서비스업(쿠팡이츠)"] },
    ],
  },
  {
    id: "brand-naver-shop",
    name: "네이버 (Naver)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["온라인 쇼핑몰업", "광고 대행업", "가격 비교 서비스업", "키워드 광고업", "데이터 분석업"] },
      { niceClass: "제9류", keyGoods: ["네이버 앱", "검색 소프트웨어", "AI 소프트웨어", "웹툰 앱"] },
      { niceClass: "제36류", keyGoods: ["간편결제업(네이버페이)", "전자금융업"] },
      { niceClass: "제38류", keyGoods: ["인터넷 정보 제공업", "블로그 서비스업", "메신저 서비스업(라인)"] },
      { niceClass: "제41류", keyGoods: ["웹툰 서비스업", "웹소설 서비스업", "온라인 교육업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "클라우드 서비스업", "AI 서비스업", "검색 엔진 서비스업"] },
    ],
  },
  {
    id: "brand-oliveyoung",
    name: "올리브영 (Olive Young)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "건강식품 소매업", "온라인 판매업", "프랜차이즈업", "뷰티 큐레이션업"] },
      { niceClass: "제3류", keyGoods: ["올리브영 PB 화장품", "클렌저", "선크림"] },
      { niceClass: "제5류", keyGoods: ["건강기능식품", "비타민"] },
      { niceClass: "제44류", keyGoods: ["뷰티 컨설팅업", "피부 진단 서비스업"] },
    ],
  },
  {
    id: "brand-musinsa",
    name: "무신사 (Musinsa)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["패션 온라인 쇼핑몰업", "의류 소매업", "광고 대행업", "데이터 분석업", "마켓플레이스업"] },
      { niceClass: "제9류", keyGoods: ["무신사 앱", "패션 추천 소프트웨어"] },
      { niceClass: "제25류", keyGoods: ["무신사스탠다드 의류", "티셔츠", "바지"] },
      { niceClass: "제42류", keyGoods: ["패션 테크 서비스업", "쇼핑 플랫폼 개발업"] },
    ],
  },
  {
    id: "brand-ssg",
    name: "SSG닷컴",
    registrations: [
      { niceClass: "제35류", keyGoods: ["온라인 소매업", "백화점업", "슈퍼마켓업", "새벽배송업", "마켓플레이스업"] },
      { niceClass: "제9류", keyGoods: ["SSG 앱", "이커머스 소프트웨어"] },
      { niceClass: "제39류", keyGoods: ["새벽배송업", "택배업", "물류 서비스업"] },
    ],
  },
  {
    id: "brand-samsung-life",
    name: "삼성생명",
    registrations: [
      { niceClass: "제36류", keyGoods: ["생명보험업", "연금보험업", "손해보험업", "투자자문업", "자산관리업", "펀드업"] },
      { niceClass: "제9류", keyGoods: ["보험 앱", "금융 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["보험 설계사 관리업", "재무설계 상담업"] },
    ],
  },
  {
    id: "brand-kb-bank",
    name: "KB국민은행",
    registrations: [
      { niceClass: "제36류", keyGoods: ["은행업", "신용카드업", "주택담보대출업", "외환업무", "펀드 판매업", "자산관리업"] },
      { niceClass: "제9류", keyGoods: ["모바일뱅킹 앱(KB스타뱅킹)", "금융 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["금융상품 광고업", "고객 데이터 분석업"] },
      { niceClass: "제42류", keyGoods: ["핀테크 서비스업", "금융 IT 서비스업", "보안 기술 연구업"] },
    ],
  },
  {
    id: "brand-shinhan-bank",
    name: "신한은행",
    registrations: [
      { niceClass: "제36류", keyGoods: ["은행업", "외환업무", "자산 관리업", "대출업", "신탁업", "투자중개업"] },
      { niceClass: "제9류", keyGoods: ["모바일뱅킹 앱(쏠)", "금융 소프트웨어"] },
      { niceClass: "제42류", keyGoods: ["금융 IT 서비스업", "블록체인 연구업"] },
    ],
  },
  {
    id: "brand-toss",
    name: "토스 (Toss)",
    registrations: [
      { niceClass: "제36류", keyGoods: ["간편 송금 서비스업", "금융 서비스업", "전자지급 서비스업", "증권 중개업", "보험 비교업"] },
      { niceClass: "제9류", keyGoods: ["토스 앱", "금융 플랫폼 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["금융 광고업", "데이터 분석업"] },
      { niceClass: "제42류", keyGoods: ["핀테크 개발업", "AI 금융 서비스업", "보안 기술 연구업"] },
    ],
  },
  {
    id: "brand-kakaobank",
    name: "카카오뱅크",
    registrations: [
      { niceClass: "제36류", keyGoods: ["인터넷 전문 은행업", "예금업", "대출업", "환전업", "카드업"] },
      { niceClass: "제9류", keyGoods: ["카카오뱅크 앱", "뱅킹 소프트웨어"] },
      { niceClass: "제42류", keyGoods: ["금융 소프트웨어 개발업", "보안 기술업"] },
    ],
  },
  {
    id: "brand-hyundai-const",
    name: "현대건설 (힐스테이트)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "토목공사업", "아파트 건설업", "플랜트 건설업", "인테리어 공사업", "리모델링업"] },
      { niceClass: "제19류", keyGoods: ["건축자재", "레미콘", "아스팔트"] },
      { niceClass: "제36류", keyGoods: ["부동산 분양업", "부동산 개발업", "부동산 관리업"] },
      { niceClass: "제42류", keyGoods: ["건축 설계업", "건설 엔지니어링업", "스마트홈 기술 연구업"] },
    ],
  },
  {
    id: "brand-samsung-const",
    name: "삼성물산 (래미안)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "래미안 아파트 건설", "플랜트 공사업", "도시개발 사업", "리모델링업"] },
      { niceClass: "제36류", keyGoods: ["부동산 분양업", "부동산 개발업"] },
      { niceClass: "제42류", keyGoods: ["건축 설계업", "스마트시티 연구업"] },
    ],
  },
  {
    id: "brand-gs-const",
    name: "GS건설 (자이)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "주택 건설업", "인테리어 공사업", "토목공사업", "리모델링업"] },
      { niceClass: "제36류", keyGoods: ["부동산 분양업", "부동산 관리업"] },
      { niceClass: "제42류", keyGoods: ["건축 설계업", "인테리어 디자인업"] },
    ],
  },
  {
    id: "brand-daewoo-const",
    name: "대우건설 (푸르지오)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "주거용 건물 건설업", "토목공사업", "플랜트 건설업"] },
      { niceClass: "제36류", keyGoods: ["부동산 분양업", "부동산 관리업"] },
    ],
  },
  {
    id: "brand-sk-eco",
    name: "SK에코플랜트",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "환경 플랜트 공사업", "신재생에너지 공사업", "소각 시설 건설업", "폐수처리 시설업"] },
      { niceClass: "제40류", keyGoods: ["폐기물 처리업", "재활용 가공업"] },
      { niceClass: "제42류", keyGoods: ["환경 기술 연구업", "신재생에너지 연구업"] },
    ],
  },
  {
    id: "brand-skt",
    name: "SK텔레콤 (SKT)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["이동통신업", "인터넷 서비스업", "IPTV 서비스업(Btv)", "5G 통신업", "위성통신업"] },
      { niceClass: "제9류", keyGoods: ["T전화 앱", "AI 스피커(누구)", "스마트홈 기기"] },
      { niceClass: "제35류", keyGoods: ["통신상품 소매업", "광고업", "데이터 분석업"] },
      { niceClass: "제41류", keyGoods: ["음악 스트리밍업(FLO)", "게임 서비스업"] },
      { niceClass: "제42류", keyGoods: ["클라우드 서비스업", "AI 서비스업(에이닷)", "빅데이터 분석업", "보안 서비스업"] },
    ],
  },
  {
    id: "brand-kt",
    name: "KT",
    registrations: [
      { niceClass: "제38류", keyGoods: ["인터넷 통신업", "이동통신업", "유선 통신업", "방송업(올레tv)", "5G 통신업", "VoIP"] },
      { niceClass: "제9류", keyGoods: ["AI 스피커(기가지니)", "셋톱박스", "통신 장비"] },
      { niceClass: "제35류", keyGoods: ["통신상품 소매업", "광고업"] },
      { niceClass: "제42류", keyGoods: ["클라우드 서비스업", "AI 서비스업", "IDC 호스팅업", "보안 기술 연구업"] },
    ],
  },
  {
    id: "brand-lgu",
    name: "LG유플러스",
    registrations: [
      { niceClass: "제38류", keyGoods: ["이동통신업", "유선 통신업", "IPTV 서비스업(U+tv)", "5G 통신업", "인터넷 서비스업"] },
      { niceClass: "제9류", keyGoods: ["AI 스피커(클로바)", "IoT 기기", "셋톱박스"] },
      { niceClass: "제35류", keyGoods: ["통신상품 소매업", "광고업"] },
      { niceClass: "제42류", keyGoods: ["클라우드 서비스업", "IoT 플랫폼 서비스업"] },
    ],
  },
  {
    id: "brand-kakaotalk",
    name: "카카오톡 (KakaoTalk)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "SNS 서비스업", "음성통화 서비스업", "영상통화 서비스업", "인터넷 방송업"] },
      { niceClass: "제9류", keyGoods: ["카카오톡 앱", "이모티콘", "카카오 선물하기 앱"] },
      { niceClass: "제35류", keyGoods: ["선물하기 소매업", "광고업", "이모티콘 판매업"] },
      { niceClass: "제42류", keyGoods: ["메신저 플랫폼 개발업", "AI 챗봇 서비스업"] },
    ],
  },
  {
    id: "brand-naver-line",
    name: "라인 (LINE)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "SNS 서비스업", "인터넷 전화업", "영상통화업"] },
      { niceClass: "제9류", keyGoods: ["라인 앱", "라인 스티커", "디지털 콘텐츠"] },
      { niceClass: "제35류", keyGoods: ["라인 쇼핑업", "광고업", "스티커 판매업"] },
      { niceClass: "제36류", keyGoods: ["라인페이 전자결제업", "송금업"] },
      { niceClass: "제41류", keyGoods: ["웹툰 서비스업(라인웹툰)", "게임 서비스업", "음악 서비스업"] },
    ],
  },
  {
    id: "brand-cj-logistics",
    name: "CJ대한통운",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "물류 창고업", "화물 운송업", "국제 물류업", "3PL 서비스업", "냉장물류업"] },
      { niceClass: "제35류", keyGoods: ["물류 컨설팅업", "창고 관리 서비스업"] },
      { niceClass: "제42류", keyGoods: ["물류 IT 솔루션업", "물류 자동화 연구업"] },
    ],
  },
  {
    id: "brand-hanjin",
    name: "한진",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "항공화물 운송업", "해운 대리업", "창고업", "국제 물류업"] },
      { niceClass: "제35류", keyGoods: ["물류 컨설팅업"] },
    ],
  },
  {
    id: "brand-lotte-global",
    name: "롯데글로벌로지스",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "물류 서비스업", "배송 대행업", "풀필먼트 서비스업", "냉장배송업"] },
      { niceClass: "제35류", keyGoods: ["물류 컨설팅업", "이커머스 물류 서비스업"] },
    ],
  },
  {
    id: "brand-coupang-logistics",
    name: "쿠팡로지스틱스",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "로켓 배송업", "익일 배달업", "새벽배송업", "물류 창고업", "풀필먼트업"] },
      { niceClass: "제35류", keyGoods: ["물류 플랫폼 운영업"] },
    ],
  },
  {
    id: "brand-kakao-t",
    name: "카카오T",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택시 중개업", "대리운전 중개업", "카풀 중개업", "주차장 안내업", "네비게이션업"] },
      { niceClass: "제9류", keyGoods: ["카카오T 앱", "교통 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["교통광고업", "차량 관련 광고업"] },
      { niceClass: "제42류", keyGoods: ["모빌리티 플랫폼 개발업", "자율주행 연구업"] },
    ],
  },
  {
    id: "brand-samsung-display",
    name: "삼성디스플레이",
    registrations: [
      { niceClass: "제40류", keyGoods: ["디스플레이 패널 제조업", "OLED 제조업", "LCD 제조업", "반도체 소자 가공업"] },
      { niceClass: "제9류", keyGoods: ["OLED 패널", "디스플레이 모듈", "터치스크린 패널"] },
      { niceClass: "제42류", keyGoods: ["디스플레이 연구업", "OLED 기술 연구업", "플렉서블 디스플레이 연구업"] },
    ],
  },
  {
    id: "brand-lg-innotek",
    name: "LG이노텍",
    registrations: [
      { niceClass: "제40류", keyGoods: ["전자부품 가공업", "PCB 제조업", "카메라 모듈 제조업", "LED 제조업"] },
      { niceClass: "제9류", keyGoods: ["카메라 모듈", "센서 모듈", "전장 부품"] },
      { niceClass: "제42류", keyGoods: ["전자부품 연구업", "광학기술 연구업"] },
    ],
  },
  {
    id: "brand-sk-siltron",
    name: "SK실트론",
    registrations: [
      { niceClass: "제40류", keyGoods: ["반도체 웨이퍼 가공업", "실리콘 기판 제조업", "에피택셜 웨이퍼 가공업"] },
      { niceClass: "제42류", keyGoods: ["반도체 소재 연구업", "결정 성장 기술 연구업"] },
    ],
  },
  {
    id: "brand-hansol-chem",
    name: "한솔케미칼",
    registrations: [
      { niceClass: "제40류", keyGoods: ["반도체용 과산화수소 정제업", "디스플레이 소재 가공업", "화학 소재 가공업"] },
      { niceClass: "제1류", keyGoods: ["전자급 과산화수소", "반도체 세정제"] },
      { niceClass: "제42류", keyGoods: ["반도체 소재 연구업", "화학 분석업"] },
    ],
  },
  {
    id: "brand-oci-material",
    name: "OCI머티리얼즈",
    registrations: [
      { niceClass: "제40류", keyGoods: ["NF3 가스 제조업", "반도체 특수가스 공급업", "산업용 가스 처리업", "태양광 소재 가공업"] },
      { niceClass: "제1류", keyGoods: ["반도체 공정 가스", "NF3", "모노실란"] },
      { niceClass: "제42류", keyGoods: ["반도체 소재 연구업", "특수가스 분석업"] },
    ],
  },
  {
    id: "brand-megastudy",
    name: "메가스터디",
    registrations: [
      { niceClass: "제41류", keyGoods: ["온라인 교육업", "수능 강의업", "학원업", "인강 서비스업", "자격시험 교육업", "공무원 교육업"] },
      { niceClass: "제9류", keyGoods: ["교육 앱", "전자교재", "온라인 강의 소프트웨어"] },
      { niceClass: "제16류", keyGoods: ["교재", "문제집", "학습 참고서"] },
      { niceClass: "제35류", keyGoods: ["교육 서비스 광고업", "교재 소매업"] },
      { niceClass: "제42류", keyGoods: ["AI 학습 분석업", "교육 플랫폼 개발업"] },
    ],
  },
  {
    id: "brand-hybe",
    name: "하이브 (HYBE)",
    registrations: [
      { niceClass: "제41류", keyGoods: ["연예 매니지먼트업", "음반 제작업", "공연 기획업", "팬 커뮤니티 운영업", "뮤직비디오 제작업"] },
      { niceClass: "제9류", keyGoods: ["위버스 앱", "음반(CD/LP)", "디지털 음원", "포토카드 앱"] },
      { niceClass: "제16류", keyGoods: ["포토카드", "포스터", "화보집", "팬 매거진"] },
      { niceClass: "제25류", keyGoods: ["아티스트 MD 의류", "콘서트 티셔츠", "후드티"] },
      { niceClass: "제35류", keyGoods: ["MD 소매업(위버스샵)", "온라인 쇼핑몰업", "팬클럽 운영업"] },
      { niceClass: "제38류", keyGoods: ["음악 스트리밍업", "라이브 스트리밍업(위버스 라이브)"] },
    ],
  },
  {
    id: "brand-cgv",
    name: "CGV",
    registrations: [
      { niceClass: "제41류", keyGoods: ["영화 상영업", "영화관 운영업", "IMAX 상영업", "4DX 상영업", "스크린X 상영업"] },
      { niceClass: "제9류", keyGoods: ["CGV 앱", "티켓 예매 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["영화관 광고업", "팝콘/음료 매점업"] },
      { niceClass: "제43류", keyGoods: ["영화관 매점(음식 제공업)", "카페업"] },
    ],
  },
  {
    id: "brand-sm-ent",
    name: "SM엔터테인먼트",
    registrations: [
      { niceClass: "제41류", keyGoods: ["연예 매니지먼트업", "음반 제작업", "공연업", "콘서트 기획업", "뮤직비디오 제작업"] },
      { niceClass: "제9류", keyGoods: ["음반(CD)", "디지털 음원", "버블 앱"] },
      { niceClass: "제16류", keyGoods: ["포토카드", "포스터", "화보집"] },
      { niceClass: "제25류", keyGoods: ["아이돌 MD 의류", "콘서트 굿즈"] },
      { niceClass: "제35류", keyGoods: ["MD 소매업", "팬클럽 운영업", "온라인 쇼핑몰업"] },
    ],
  },
  {
    id: "brand-hackers",
    name: "해커스 (Hackers)",
    registrations: [
      { niceClass: "제41류", keyGoods: ["어학 교육업", "토익 교육업", "온라인 강의업", "유학 컨설팅업", "학원업", "공무원 교육업"] },
      { niceClass: "제9류", keyGoods: ["교육 앱", "전자 교재", "오디오 학습 콘텐츠"] },
      { niceClass: "제16류", keyGoods: ["토익 교재", "영어 학습서", "문제집"] },
      { niceClass: "제35류", keyGoods: ["교육 서비스 광고업", "교재 소매업"] },
    ],
  },
  {
    id: "brand-naver-it",
    name: "네이버 클라우드",
    registrations: [
      { niceClass: "제42류", keyGoods: ["클라우드 서비스업", "AI 서비스업", "소프트웨어 개발업", "검색 엔진업", "데이터 호스팅업", "보안 서비스업"] },
      { niceClass: "제9류", keyGoods: ["클라우드 소프트웨어", "AI 소프트웨어", "보안 소프트웨어"] },
      { niceClass: "제38류", keyGoods: ["인터넷 정보 제공업", "데이터 전송업"] },
    ],
  },
  {
    id: "brand-kakao-it",
    name: "카카오 (IT 서비스)",
    registrations: [
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "모바일 서비스업", "플랫폼 서비스업", "AI 연구업", "클라우드 서비스업"] },
      { niceClass: "제9류", keyGoods: ["카카오 플랫폼 소프트웨어", "AI 소프트웨어(카카오브레인)"] },
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "SNS 서비스업"] },
    ],
  },
  {
    id: "brand-samsung-sds",
    name: "삼성SDS",
    registrations: [
      { niceClass: "제42류", keyGoods: ["IT 서비스업", "클라우드 서비스업", "물류 IT 솔루션업", "블록체인 서비스업", "보안 서비스업"] },
      { niceClass: "제9류", keyGoods: ["기업용 소프트웨어", "물류 관리 소프트웨어", "보안 솔루션"] },
      { niceClass: "제35류", keyGoods: ["IT 컨설팅업", "비즈니스 프로세스 아웃소싱업"] },
    ],
  },
  {
    id: "brand-nhn",
    name: "NHN",
    registrations: [
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "게임 플랫폼 서비스업", "클라우드 서비스업(토스트클라우드)", "결제 기술 서비스업"] },
      { niceClass: "제9류", keyGoods: ["게임 소프트웨어", "결제 소프트웨어(페이코)"] },
      { niceClass: "제36류", keyGoods: ["전자결제업(페이코)", "간편결제업"] },
      { niceClass: "제41류", keyGoods: ["온라인 게임업", "e스포츠 운영업"] },
    ],
  },
  {
    id: "brand-nexon",
    name: "넥슨 (Nexon)",
    registrations: [
      { niceClass: "제42류", keyGoods: ["온라인 게임 서비스업", "게임 소프트웨어 개발업", "서버 호스팅업", "AI 게임 연구업"] },
      { niceClass: "제9류", keyGoods: ["게임 소프트웨어", "모바일 게임 앱", "게임 컨트롤러"] },
      { niceClass: "제28류", keyGoods: ["게임용 피규어", "게임 완구"] },
      { niceClass: "제41류", keyGoods: ["전자오락업", "e스포츠 대회 운영업", "게임 방송업"] },
    ],
  },
  {
    id: "brand-starbucks-cafe",
    name: "스타벅스 (카페)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["커피숍업", "카페업", "음료 제공업", "음식점업", "테이크아웃업", "케이터링업"] },
      { niceClass: "제30류", keyGoods: ["커피", "원두", "차", "케이크", "샌드위치"] },
      { niceClass: "제35류", keyGoods: ["프랜차이즈업", "온라인 쇼핑몰업", "광고업"] },
    ],
  },
  {
    id: "brand-mcdonalds",
    name: "맥도날드 (McDonald's)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["패스트푸드 음식점업", "햄버거 전문점업", "음식 배달업", "드라이브스루업", "카페업"] },
      { niceClass: "제29류", keyGoods: ["치킨너겟", "가공 감자(프렌치프라이)"] },
      { niceClass: "제30류", keyGoods: ["햄버거", "아이스크림", "맥머핀", "커피", "소스"] },
      { niceClass: "제32류", keyGoods: ["탄산음료", "주스", "밀크셰이크"] },
      { niceClass: "제35류", keyGoods: ["패스트푸드 프랜차이즈업", "광고업", "키오스크 운영업"] },
    ],
  },
  {
    id: "brand-baemin",
    name: "배달의민족",
    registrations: [
      { niceClass: "제43류", keyGoods: ["음식 배달 중개업", "음식점 예약 서비스업", "배달 플랫폼업"] },
      { niceClass: "제9류", keyGoods: ["배달 앱", "음식 주문 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["온라인 광고업", "음식점 광고업", "배달 중개업"] },
      { niceClass: "제39류", keyGoods: ["음식 배달업(배민라이더스)", "퀵배송업"] },
      { niceClass: "제42류", keyGoods: ["배달 플랫폼 개발업", "AI 주문 시스템 개발업"] },
    ],
  },
  {
    id: "brand-shilla-hotel",
    name: "신라호텔",
    registrations: [
      { niceClass: "제43류", keyGoods: ["호텔업", "숙박업", "레스토랑업", "연회업", "뷔페업", "룸서비스업"] },
      { niceClass: "제35류", keyGoods: ["면세점 운영업(신라면세점)", "호텔 광고업"] },
      { niceClass: "제41류", keyGoods: ["호텔 이벤트 기획업", "웨딩 서비스업", "컨퍼런스 운영업"] },
      { niceClass: "제44류", keyGoods: ["호텔 스파업", "사우나업", "피트니스업"] },
    ],
  },
  {
    id: "brand-ediya",
    name: "이디야 (Ediya)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["커피전문점업", "카페업", "음료 제공업", "베이커리 카페업"] },
      { niceClass: "제30류", keyGoods: ["커피", "커피 음료", "원두", "차"] },
      { niceClass: "제35류", keyGoods: ["커피 프랜차이즈업", "카페 체인 운영업", "커피 소매업"] },
    ],
  },
  {
    id: "brand-osstem-dental",
    name: "오스템 (치과서비스)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["치과 진료업", "구강 건강 관리업", "치과 상담업", "임플란트 시술업", "치아 미백업"] },
      { niceClass: "제10류", keyGoods: ["치과용 임플란트", "치과용 드릴", "교정장치"] },
      { niceClass: "제41류", keyGoods: ["치과의사 교육업", "임플란트 교육업"] },
    ],
  },
  {
    id: "brand-oliveyoung-beauty",
    name: "올리브영 (뷰티 서비스)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["미용 서비스업", "피부 관리업", "뷰티 상담업", "메이크업 서비스업"] },
      { niceClass: "제3류", keyGoods: ["PB 화장품", "스킨케어 제품"] },
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "뷰티 큐레이션업"] },
    ],
  },
  {
    id: "brand-drhair",
    name: "닥터포헤어 (Dr.ForHair)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["두피 케어 서비스업", "모발 케어 서비스업", "탈모 관리업", "두피 진단업"] },
      { niceClass: "제3류", keyGoods: ["두피 샴푸", "헤어 트리트먼트", "두피 세럼", "탈모 방지 샴푸"] },
      { niceClass: "제35류", keyGoods: ["두피케어 프랜차이즈업", "헤어제품 소매업"] },
      { niceClass: "제42류", keyGoods: ["두피 분석 기술 연구업", "모발과학 연구업"] },
    ],
  },
  {
    id: "brand-amore-beauty",
    name: "아모레성수 (아모레퍼시픽 뷰티)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["피부 미용업", "스파 서비스업", "뷰티 케어업", "메이크업 서비스업", "아로마테라피업"] },
      { niceClass: "제3류", keyGoods: ["화장품", "기초화장품", "향수"] },
      { niceClass: "제35류", keyGoods: ["뷰티 체험관 운영업", "화장품 소매업"] },
    ],
  },
  {
    id: "brand-seoul-asan",
    name: "서울아산병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["종합 병원업", "외과 진료업", "의료 서비스업", "건강검진업", "원격진료업"] },
      { niceClass: "제41류", keyGoods: ["의학 교육업", "의료진 연수업", "의학 세미나업"] },
      { niceClass: "제42류", keyGoods: ["의학 연구업", "임상시험 서비스업", "바이오 연구업"] },
    ],
  },
  {
    id: "brand-adtcaps",
    name: "ADT캡스",
    registrations: [
      { niceClass: "제45류", keyGoods: ["보안 서비스업", "경비업", "CCTV 모니터링업", "출입통제 서비스업", "화재감시 서비스업"] },
      { niceClass: "제9류", keyGoods: ["CCTV 카메라", "보안 감시 시스템", "출입통제 장치", "화재감지기"] },
      { niceClass: "제37류", keyGoods: ["보안 장비 설치업", "CCTV 설치업"] },
      { niceClass: "제42류", keyGoods: ["사이버보안 서비스업", "보안 소프트웨어 개발업"] },
    ],
  },
  {
    id: "brand-sk-shielders",
    name: "SK쉴더스",
    registrations: [
      { niceClass: "제45류", keyGoods: ["보안 서비스업", "사이버보안 서비스업", "정보보안 컨설팅업", "보안 관제업", "보안 인증업"] },
      { niceClass: "제9류", keyGoods: ["보안 소프트웨어", "방화벽 시스템", "침입탐지 시스템"] },
      { niceClass: "제42류", keyGoods: ["보안 기술 연구업", "취약점 분석업", "보안 컨설팅업"] },
    ],
  },
  {
    id: "brand-sone",
    name: "에스원 (S1)",
    registrations: [
      { niceClass: "제45류", keyGoods: ["경비 서비스업", "출입통제 서비스업", "방범 서비스업", "안전관리 서비스업", "건물관리업"] },
      { niceClass: "제9류", keyGoods: ["보안 카메라", "출입카드 시스템", "주차관제 시스템"] },
      { niceClass: "제37류", keyGoods: ["보안 장비 설치업", "건물 유지관리업"] },
    ],
  },
  {
    id: "brand-kimjang",
    name: "김앤장 법률사무소",
    registrations: [
      { niceClass: "제45류", keyGoods: ["법률 자문업", "변호사업", "특허법률 서비스업", "세무 자문업", "기업 법률 자문업", "M&A 법률 서비스업"] },
      { niceClass: "제35류", keyGoods: ["경영 컨설팅업", "기업 구조조정 자문업"] },
      { niceClass: "제36류", keyGoods: ["금융 법률 자문업", "투자 자문업"] },
    ],
  },
  {
    id: "brand-kwangrang",
    name: "법무법인 광장",
    registrations: [
      { niceClass: "제45류", keyGoods: ["법률 서비스업", "법무 대리업", "법률 컨설팅업", "중재 서비스업", "지식재산권 서비스업"] },
      { niceClass: "제35류", keyGoods: ["경영 컨설팅업", "규제 자문업"] },
    ],
  },

  /* ── 교육 (추가 브랜드) ── */
  {
    id: "brand-eduwill",
    name: "에듀윌",
    registrations: [
      { niceClass: "제41류", keyGoods: ["자격증 교육업", "공무원 시험 교육업", "온라인 강좌 제공업", "학원업", "인터넷 교육업", "직업 교육업", "교육 콘텐츠 제작업"] },
      { niceClass: "제16류", keyGoods: ["교재", "문제집", "학습서", "수험서", "자격증 교재", "공무원 수험서", "학습 교구"] },
      { niceClass: "제9류", keyGoods: ["교육용 소프트웨어", "교육용 앱", "전자 교재", "학습 관리 소프트웨어", "온라인 시험 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["교육 서비스 광고업", "교육기관 가맹업", "교재 소매업", "마케팅업", "경영정보 제공업"] },
    ],
  },
  {
    id: "brand-daekyo",
    name: "대교",
    registrations: [
      { niceClass: "제41류", keyGoods: ["학원업", "방문 교육업", "눈높이 학습 교육업", "어린이 학습 교육업", "독서 교육업", "수학 교육업", "영어 교육업"] },
      { niceClass: "제16류", keyGoods: ["교재", "학습지", "어린이 학습 교재", "문제집", "교육 도서", "학습 카드", "아동 도서"] },
      { niceClass: "제9류", keyGoods: ["교육용 소프트웨어", "교육용 앱", "전자 학습기", "어린이 학습 기기", "학습 태블릿"] },
      { niceClass: "제35류", keyGoods: ["교육 서비스 광고업", "방문 교육 가맹업", "교재 소매업", "마케팅업"] },
    ],
  },
  {
    id: "brand-ybm",
    name: "YBM",
    registrations: [
      { niceClass: "제41류", keyGoods: ["어학 교육업", "영어 교육업", "토익 교육업", "어학원업", "온라인 어학 강좌업", "외국어 교육업", "어학 시험 대행업"] },
      { niceClass: "제16류", keyGoods: ["어학 교재", "토익 교재", "영어 학습서", "외국어 사전", "어학 문제집", "영어 참고서"] },
      { niceClass: "제9류", keyGoods: ["어학 학습 소프트웨어", "어학 학습 앱", "전자 사전", "어학 학습기", "영어 학습 소프트웨어"] },
      { niceClass: "제35류", keyGoods: ["어학원 광고업", "어학 교재 소매업", "어학 관련 정보 제공업", "마케팅업"] },
    ],
  },

  /* ── 소프트웨어 (추가 브랜드) ── */
  {
    id: "brand-krafton",
    name: "크래프톤",
    registrations: [
      { niceClass: "제42류", keyGoods: ["게임 소프트웨어 개발업", "모바일 게임 개발업", "온라인 게임 개발업", "게임 서버 운영업", "게임 엔진 개발업", "게임 AI 개발업", "게임 플랫폼 개발업"] },
      { niceClass: "제9류", keyGoods: ["게임 소프트웨어", "모바일 게임 앱", "온라인 게임 소프트웨어", "PUBG 모바일", "배틀그라운드 소프트웨어", "e스포츠 소프트웨어"] },
      { niceClass: "제41류", keyGoods: ["e스포츠 대회 운영업", "게임 콘텐츠 제작업", "온라인 게임 제공업", "게임 방송업", "게임 이벤트 운영업"] },
      { niceClass: "제35류", keyGoods: ["게임 광고업", "게임 마케팅업", "게임 콘텐츠 소매업", "경영정보 제공업"] },
    ],
  },

  /* ── 의료 (추가 브랜드) ── */
  {
    id: "brand-severance",
    name: "세브란스병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["병원업", "의료업", "외과 서비스업", "내과 서비스업", "건강검진업", "의료 연구업", "건강 상담업", "영상 의학업", "심장 전문 의료업", "뇌신경 전문 의료업"] },
      { niceClass: "제10류", keyGoods: ["의료기기", "수술기구", "진단기기", "의료용 로봇", "내시경 기기"] },
      { niceClass: "제5류", keyGoods: ["의약품", "진단 시약", "의료용 패치", "영양 수액제"] },
      { niceClass: "제41류", keyGoods: ["의학 교육업", "보건 교육업", "의료인 양성 교육업", "건강 세미나업"] },
    ],
  },
  {
    id: "brand-samsung-medical",
    name: "삼성서울병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["병원업", "의료업", "암 전문 의료업", "건강검진업", "심장 전문 의료업", "건강 상담업", "의료 서비스업", "뇌신경 전문 의료업", "재활치료업", "정신건강 의료업"] },
      { niceClass: "제10류", keyGoods: ["의료기기", "수술기구", "진단기기", "의료 로봇", "방사선 치료 기기"] },
      { niceClass: "제5류", keyGoods: ["의약품", "진단 시약", "의료용 패치", "항암제"] },
      { niceClass: "제42류", keyGoods: ["의료 소프트웨어 개발업", "의료 AI 연구업", "의료 데이터 분석업"] },
    ],
  },
  {
    id: "brand-snuh",
    name: "서울대병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["병원업", "의료업", "건강검진업", "의료 연구업", "건강 상담업", "외과 서비스업", "내과 서비스업", "소아과 서비스업", "산부인과 서비스업", "재활치료업"] },
      { niceClass: "제10류", keyGoods: ["의료기기", "진단기기", "수술기구", "의료 영상기기"] },
      { niceClass: "제5류", keyGoods: ["의약품", "진단 시약", "의료용 패치"] },
      { niceClass: "제41류", keyGoods: ["의학 교육업", "의료인 양성 교육업", "보건 교육업", "건강 세미나업"] },
    ],
  },
  {
    id: "brand-cha-medical",
    name: "차병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["병원업", "의료업", "여성 의료업", "난임 시술업", "건강검진업", "산부인과 서비스업", "소아과 서비스업", "건강 상담업", "미용 의료업", "피부과 서비스업"] },
      { niceClass: "제10류", keyGoods: ["의료기기", "진단기기", "수술기구"] },
      { niceClass: "제5류", keyGoods: ["의약품", "호르몬제", "진단 시약", "의료용 패치"] },
      { niceClass: "제42류", keyGoods: ["의료 연구업", "줄기세포 연구업", "바이오 연구업"] },
    ],
  },

  /* ── 반려동물 (추가 브랜드) ── */
  {
    id: "brand-purina",
    name: "퓨리나 (Purina)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["반려동물 사료", "반려동물 건식 사료", "반려동물 습식 사료", "반려동물 처방식", "고양이 사료", "강아지 사료", "반려동물 기능성 사료", "반려동물 유기농 사료"] },
      { niceClass: "제5류", keyGoods: ["반려동물용 영양보조제", "반려동물 유산균 제제", "반려동물 관절 보조제", "반려동물용 건강기능식품"] },
      { niceClass: "제35류", keyGoods: ["반려동물 식품 소매업", "온라인 반려동물 식품 판매업", "반려동물 식품 도매업", "수출입 대행업", "광고업"] },
      { niceClass: "제44류", keyGoods: ["반려동물 영양 상담업", "반려동물 건강 상담업"] },
    ],
  },
  {
    id: "brand-hillspet",
    name: "힐스 (Hill's Pet)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["반려동물 처방식 사료", "반려동물 과학식 사료", "고양이 처방식", "강아지 처방식", "반려동물 기능성 사료", "반려동물 노령견 사료", "비만 관리 반려동물 사료"] },
      { niceClass: "제5류", keyGoods: ["반려동물용 의약품", "반려동물용 영양보조제", "반려동물 의료용 식이 보충제"] },
      { niceClass: "제35류", keyGoods: ["반려동물 식품 소매업", "반려동물 처방식 판매업", "수출입 대행업", "광고업", "반려동물 제품 도매업"] },
    ],
  },
  {
    id: "brand-naturalbalance",
    name: "내추럴발란스 (Natural Balance)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["반려동물 자연식 사료", "반려동물 유기농 사료", "제한 재료 반려동물 사료", "알러지 배려 반려동물 사료", "반려동물 글루텐 프리 사료", "반려동물 생식 사료"] },
      { niceClass: "제30류", keyGoods: ["반려동물 자연식 간식", "반려동물 유기농 간식", "반려동물 동결건조 간식"] },
      { niceClass: "제35류", keyGoods: ["반려동물 식품 소매업", "온라인 반려동물 식품 판매업", "수출입 대행업", "광고업"] },
    ],
  },

  /* ── 컨설팅/전문서비스 (추가 브랜드) ── */
  {
    id: "brand-samil-pwc",
    name: "삼일PwC",
    registrations: [
      { niceClass: "제35류", keyGoods: ["경영 컨설팅업", "회계 감사업", "세무 자문업", "기업 자문업", "경영정보 제공업", "인수합병 자문업", "재무 자문업"] },
      { niceClass: "제36류", keyGoods: ["재무 컨설팅업", "투자 자문업", "자산 관리업", "기업 가치 평가업", "금융 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["IT 컨설팅업", "디지털 전환 컨설팅업", "데이터 분석업", "기업 보안 컨설팅업"] },
      { niceClass: "제41류", keyGoods: ["경영 교육업", "기업 연수업", "세무 세미나업", "회계 교육업"] },
    ],
  },
  {
    id: "brand-samjong-kpmg",
    name: "삼정KPMG",
    registrations: [
      { niceClass: "제35류", keyGoods: ["경영 컨설팅업", "회계 감사업", "세무 자문업", "기업 전략 컨설팅업", "경영정보 제공업", "기업 실사 서비스업", "인수합병 자문업"] },
      { niceClass: "제36류", keyGoods: ["재무 컨설팅업", "투자 자문업", "기업 가치 평가업", "금융 정보 제공업", "자산 관리업"] },
      { niceClass: "제42류", keyGoods: ["IT 컨설팅업", "기업 보안 컨설팅업", "데이터 분석업", "디지털 트랜스포메이션 컨설팅업"] },
      { niceClass: "제41류", keyGoods: ["경영 교육업", "기업 연수업", "세미나 개최업", "회계 교육업"] },
    ],
  },
  {
    id: "brand-deloitte-anjin",
    name: "딜로이트안진",
    registrations: [
      { niceClass: "제35류", keyGoods: ["경영 컨설팅업", "회계 감사업", "세무 자문업", "기업 자문업", "인수합병 자문업", "경영정보 제공업", "전략 컨설팅업"] },
      { niceClass: "제36류", keyGoods: ["재무 컨설팅업", "투자 자문업", "기업 가치 평가업", "금융 자문업", "금융 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["IT 컨설팅업", "사이버 보안 컨설팅업", "데이터 분석업", "AI 컨설팅업"] },
      { niceClass: "제41류", keyGoods: ["경영 교육업", "기업 연수업", "세미나 개최업"] },
    ],
  },

  /* ── 부동산 (추가 브랜드) ── */
  {
    id: "brand-zigbang",
    name: "직방",
    registrations: [
      { niceClass: "제36류", keyGoods: ["부동산 중개업", "임대차 중개업", "부동산 정보 제공업", "온라인 부동산 중개업", "부동산 자문업", "부동산 시세 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["부동산 앱 개발업", "부동산 플랫폼 개발업", "부동산 데이터 분석업", "AI 부동산 서비스업", "부동산 AR/VR 서비스업"] },
      { niceClass: "제9류", keyGoods: ["부동산 모바일 앱", "부동산 소프트웨어", "부동산 정보 제공 앱"] },
      { niceClass: "제35류", keyGoods: ["부동산 광고업", "부동산 마케팅업", "부동산 관련 정보 제공업"] },
    ],
  },
  {
    id: "brand-dabang",
    name: "다방",
    registrations: [
      { niceClass: "제36류", keyGoods: ["부동산 중개업", "원룸 임대차 중개업", "오피스텔 중개업", "온라인 부동산 중개업", "부동산 정보 제공업", "임대 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["부동산 앱 개발업", "부동산 플랫폼 개발업", "부동산 데이터 분석업"] },
      { niceClass: "제9류", keyGoods: ["부동산 모바일 앱", "부동산 검색 소프트웨어", "부동산 정보 제공 앱"] },
      { niceClass: "제35류", keyGoods: ["부동산 광고업", "부동산 마케팅업", "부동산 관련 정보 제공업"] },
    ],
  },
  {
    id: "brand-naver-realestate",
    name: "네이버 부동산",
    registrations: [
      { niceClass: "제36류", keyGoods: ["부동산 정보 제공업", "부동산 시세 정보 제공업", "부동산 중개 플랫폼업", "임대차 정보 제공업", "온라인 부동산 정보 서비스업"] },
      { niceClass: "제42류", keyGoods: ["부동산 플랫폼 개발업", "부동산 데이터 분석업", "AI 부동산 정보 서비스업"] },
      { niceClass: "제9류", keyGoods: ["부동산 검색 소프트웨어", "부동산 앱", "부동산 정보 플랫폼 SW"] },
      { niceClass: "제35류", keyGoods: ["부동산 광고업", "부동산 마케팅업", "부동산 매물 광고 대행업"] },
    ],
  },
  {
    id: "brand-kb-realestate",
    name: "KB부동산",
    registrations: [
      { niceClass: "제36류", keyGoods: ["부동산 시세 정보 제공업", "부동산 자문업", "부동산 금융 서비스업", "부동산 담보 대출업", "부동산 투자 자문업", "부동산 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["부동산 데이터 분석업", "부동산 플랫폼 개발업", "AI 부동산 가격 예측 서비스업"] },
      { niceClass: "제9류", keyGoods: ["부동산 분석 소프트웨어", "부동산 앱", "부동산 가격 정보 앱"] },
      { niceClass: "제35류", keyGoods: ["부동산 정보 제공업", "부동산 광고업", "경영정보 제공업"] },
    ],
  },
  {
    id: "brand-raemian",
    name: "삼성물산 래미안",
    registrations: [
      { niceClass: "제37류", keyGoods: ["아파트 건설업", "주택 건설업", "건축 공사업", "인테리어 공사업", "재건축 공사업", "건물 수리업", "주거 시설 건설업"] },
      { niceClass: "제36류", keyGoods: ["부동산 분양업", "아파트 분양업", "분양권 거래업", "부동산 자문업", "임대 관리업"] },
      { niceClass: "제19류", keyGoods: ["건축 자재", "콘크리트 제품", "건설용 벽돌", "건축용 석재"] },
      { niceClass: "제35류", keyGoods: ["건설 광고업", "부동산 마케팅업", "분양 대행업"] },
    ],
  },

  /* ── 엔터테인먼트 (추가 브랜드) ── */
  {
    id: "brand-jyp",
    name: "JYP엔터테인먼트",
    registrations: [
      { niceClass: "제41류", keyGoods: ["음악 공연업", "연예 기획업", "아티스트 매니지먼트업", "음반 제작업", "콘서트 기획업", "뮤직비디오 제작업", "음악 콘텐츠 제작업", "아이돌 그룹 기획업"] },
      { niceClass: "제9류", keyGoods: ["음반", "음악 소프트웨어", "스트리밍 서비스 앱", "팬 플랫폼 앱", "음악 영상 콘텐츠"] },
      { niceClass: "제35류", keyGoods: ["연예 관련 광고업", "마케팅업", "MD 상품 소매업", "팬 굿즈 판매업"] },
      { niceClass: "제25류", keyGoods: ["아티스트 의류", "아이돌 굿즈 의류", "공연 의상"] },
    ],
  },
  {
    id: "brand-yg",
    name: "YG엔터테인먼트",
    registrations: [
      { niceClass: "제41류", keyGoods: ["음악 공연업", "연예 기획업", "아티스트 매니지먼트업", "음반 제작업", "콘서트 기획업", "뮤직비디오 제작업", "음악 콘텐츠 제작업", "엔터테인먼트 기획업"] },
      { niceClass: "제9류", keyGoods: ["음반", "음악 소프트웨어", "스트리밍 서비스 앱", "팬 플랫폼 앱", "음악 영상 콘텐츠"] },
      { niceClass: "제35류", keyGoods: ["연예 관련 광고업", "마케팅업", "MD 상품 소매업", "팬 굿즈 판매업"] },
      { niceClass: "제25류", keyGoods: ["아티스트 의류", "아이돌 굿즈 의류", "공연 의상"] },
    ],
  },
];

/**
 * 업종 카테고리 → 브랜드 ID 직접 매핑
 * 각 카테고리별로 적절한 브랜드를 명시적으로 지정 (카테고리 간 중복 없음)
 */
export const categoryBrands: Record<string, string[]> = {
  food:          ["brand-starbucks",      "brand-parisbaguette", "brand-mcdonalds",       "brand-ediya",           "brand-baemin"],
  shopping:      ["brand-coupang",        "brand-naver-shop",    "brand-musinsa",         "brand-ssg",             "brand-oliveyoung"],
  cosmetics:     ["brand-amorepacific",   "brand-lghhcare",      "brand-innisfree",       "brand-drjart",          "brand-missha"],
  fashion:       ["brand-nike",           "brand-adidas",        "brand-newbalance",      "brand-musinsa-std",     "brand-covernat"],
  health:        ["brand-yuhan",          "brand-dongapharm",    "brand-chongkundang",    "brand-daewoong",        "brand-hanmi"],
  education:     ["brand-megastudy",      "brand-hackers",       "brand-eduwill",         "brand-daekyo",          "brand-ybm"],
  software:      ["brand-kakao-it",       "brand-samsung-sds",   "brand-nhn",             "brand-nexon",           "brand-krafton"],
  medical:       ["brand-seoul-asan",     "brand-severance",     "brand-samsung-medical", "brand-snuh",            "brand-cha-medical"],
  pet:           ["brand-royalcanin",     "brand-harim",         "brand-purina",          "brand-hillspet",        "brand-naturalbalance"],
  consulting:    ["brand-kimjang",        "brand-kwangrang",     "brand-samil-pwc",       "brand-samjong-kpmg",    "brand-deloitte-anjin"],
  furniture:     ["brand-hanssem",        "brand-ikea",          "brand-iloom",           "brand-livart",          "brand-acebeds"],
  appliances:    ["brand-samsung-elec",   "brand-lg-elec",       "brand-cuckoo",          "brand-winix",           "brand-coway"],
  sports:        ["brand-mizuno",         "brand-yonex",         "brand-kovea",           "brand-blackyak",        "brand-snowpeak"],
  alcohol:       ["brand-hitejinro",      "brand-lottechilsung", "brand-kooksoondang",    "brand-mckiss",          "brand-pernod"],
  construction:  ["brand-hyundai-const",  "brand-samsung-const", "brand-gs-const",        "brand-daewoo-const",    "brand-sk-eco"],
  automobile:    ["brand-hyundai-motor",  "brand-kia",           "brand-kgmobility",      "brand-hankooktire",     "brand-nexen-tire"],
  telecom:       ["brand-skt",            "brand-kt",            "brand-lgu",             "brand-kakaotalk",       "brand-naver-line"],
  music:         ["brand-samick",         "brand-youngchang",    "brand-yamaha",          "brand-roland",          "brand-gibson"],
  manufacturing: ["brand-doosanbobcat",   "brand-hdmodern",      "brand-ls",              "brand-hwashin",         "brand-hanwha-aero"],
  logistics:     ["brand-cj-logistics",   "brand-hanjin",        "brand-lotte-global",    "brand-coupang-logistics","brand-kakao-t"],
  realestate:    ["brand-zigbang",        "brand-dabang",        "brand-naver-realestate","brand-kb-realestate",   "brand-raemian"],
  entertainment: ["brand-hybe",           "brand-sm-ent",        "brand-cgv",             "brand-jyp",             "brand-yg"],
  other:         [],
};

/**
 * 업종 카테고리에 해당하는 참고 브랜드 목록 반환 (최대 limit개)
 * 카테고리별 직접 매핑으로 중복 없이 적절한 브랜드 반환
 */
export function getBrandsForCategory(
  categoryId: string,
  limit = 5
): BrandReference[] {
  const ids = categoryBrands[categoryId];
  if (!ids || ids.length === 0) return [];
  const brandMap = new Map(brandReferences.map((b) => [b.id, b]));
  return ids.slice(0, limit).map((id) => brandMap.get(id)!).filter(Boolean);
}
