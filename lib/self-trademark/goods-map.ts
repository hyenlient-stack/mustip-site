import type { GoodsCandidate } from "./types";

/**
 * 세부 항목(subItem) ID → 지정상품 후보 매핑
 * 각 후보는 essential / optional / expansion 으로 구분
 */
export const goodsMap: Record<string, GoodsCandidate[]> = {
  /* ── 음식점/카페 ── */
  "food-coffee": [
    { id: "g-food-coffee-1", name: "커피", niceClass: "제30류", type: "essential", description: "커피 제품 자체를 판매하는 경우 기본 추천됩니다." },
    { id: "g-food-coffee-2", name: "커피음료 제공업", niceClass: "제43류", type: "essential", description: "카페에서 커피를 제공하는 서비스입니다." },
    { id: "g-food-coffee-3", name: "차", niceClass: "제30류", type: "optional", description: "커피와 함께 차류를 판매하는 경우 추천됩니다." },
    { id: "g-food-coffee-4", name: "커피음료", niceClass: "제32류", type: "optional", description: "RTD(바로 마시는) 음료를 제조·판매하는 경우입니다." },
    { id: "g-food-coffee-5", name: "온라인 음료 판매업", niceClass: "제35류", type: "expansion", description: "온라인 판매 채널 확장 시 검토됩니다." },
  ],
  "food-dessert": [
    { id: "g-food-dessert-1", name: "빵", niceClass: "제30류", type: "essential", description: "빵, 케이크류 판매에 기본 추천됩니다." },
    { id: "g-food-dessert-2", name: "과자", niceClass: "제30류", type: "essential", description: "디저트/과자류 판매 시 기본 추천됩니다." },
    { id: "g-food-dessert-3", name: "디저트 카페업", niceClass: "제43류", type: "optional", description: "매장에서 디저트를 제공하는 서비스입니다." },
    { id: "g-food-dessert-4", name: "온라인 식품 판매업", niceClass: "제35류", type: "expansion", description: "온라인 판매 확장 시 검토됩니다." },
  ],
  "food-restaurant": [
    { id: "g-food-rest-1", name: "음식점업", niceClass: "제43류", type: "essential", description: "음식점 서비스에 기본 추천됩니다." },
    { id: "g-food-rest-2", name: "음식 조리 및 제공업", niceClass: "제43류", type: "essential", description: "음식 조리 서비스 전반입니다." },
    { id: "g-food-rest-3", name: "가공식품", niceClass: "제29류", type: "optional", description: "자체 가공식품을 제조·판매하는 경우입니다." },
    { id: "g-food-rest-4", name: "소스류", niceClass: "제30류", type: "expansion", description: "자체 소스를 상품화하는 경우 검토됩니다." },
  ],
  "food-cafe": [
    { id: "g-food-cafe-1", name: "카페업", niceClass: "제43류", type: "essential", description: "카페 서비스에 기본 추천됩니다." },
    { id: "g-food-cafe-2", name: "커피", niceClass: "제30류", type: "optional", description: "자체 원두/드립백 등을 판매하는 경우입니다." },
    { id: "g-food-cafe-3", name: "빵", niceClass: "제30류", type: "optional", description: "카페에서 빵류를 함께 판매하는 경우입니다." },
  ],
  "food-takeout": [
    { id: "g-food-take-1", name: "테이크아웃 음식 서비스업", niceClass: "제43류", type: "essential", description: "포장 판매 서비스입니다." },
    { id: "g-food-take-2", name: "음식 배달업", niceClass: "제43류", type: "optional", description: "배달 서비스를 겸하는 경우입니다." },
  ],
  "food-bakery": [
    { id: "g-food-bake-1", name: "빵", niceClass: "제30류", type: "essential", description: "베이커리 제품 판매에 기본 추천됩니다." },
    { id: "g-food-bake-2", name: "베이커리 카페업", niceClass: "제43류", type: "essential", description: "매장 운영 서비스입니다." },
    { id: "g-food-bake-3", name: "케이크", niceClass: "제30류", type: "optional", description: "케이크 제조·판매 시 추천됩니다." },
  ],
  "food-delivery": [
    { id: "g-food-del-1", name: "음식 배달업", niceClass: "제43류", type: "essential", description: "음식 배달 서비스에 기본 추천됩니다." },
    { id: "g-food-del-2", name: "음식점업", niceClass: "제43류", type: "optional", description: "배달과 매장을 겸하는 경우입니다." },
  ],

  /* ── 온라인 쇼핑몰 ── */
  "shop-retail": [
    { id: "g-shop-ret-1", name: "상품 소매업", niceClass: "제35류", type: "essential", description: "온라인 소매업에 기본 추천됩니다." },
    { id: "g-shop-ret-2", name: "상품 판매대행업", niceClass: "제35류", type: "optional", description: "위탁 판매 시 추천됩니다." },
    { id: "g-shop-ret-3", name: "광고업", niceClass: "제35류", type: "expansion", description: "쇼핑몰 내 광고 사업 확장 시 검토됩니다." },
  ],
  "shop-platform": [
    { id: "g-shop-plat-1", name: "오픈마켓 운영업", niceClass: "제35류", type: "essential", description: "쇼핑 플랫폼 운영에 기본 추천됩니다." },
    { id: "g-shop-plat-2", name: "전자상거래 플랫폼 제공업", niceClass: "제42류", type: "essential", description: "플랫폼 기술 서비스입니다." },
    { id: "g-shop-plat-3", name: "전자결제 서비스업", niceClass: "제36류", type: "expansion", description: "자체 결제 시스템 도입 시 검토됩니다." },
  ],
  "shop-wholesale": [
    { id: "g-shop-whole-1", name: "상품 도매업", niceClass: "제35류", type: "essential", description: "도매업에 기본 추천됩니다." },
    { id: "g-shop-whole-2", name: "수출입 대행업", niceClass: "제35류", type: "optional", description: "수출입을 겸하는 경우입니다." },
  ],
  "shop-subscription": [
    { id: "g-shop-sub-1", name: "상품 소매업", niceClass: "제35류", type: "essential", description: "구독 상품 판매에 기본 추천됩니다." },
    { id: "g-shop-sub-2", name: "구독 기반 상품 배송업", niceClass: "제39류", type: "optional", description: "정기 배송 서비스입니다." },
  ],

  /* ── 화장품 ── */
  "cos-cosmetics": [
    { id: "g-cos-1", name: "화장품", niceClass: "제3류", type: "essential", description: "화장품 브랜드에 기본 추천됩니다." },
    { id: "g-cos-2", name: "메이크업 화장품", niceClass: "제3류", type: "optional", description: "색조 화장품을 구분하는 경우입니다." },
    { id: "g-cos-3", name: "화장품 소매업", niceClass: "제35류", type: "expansion", description: "유통 사업 확장 시 검토됩니다." },
  ],
  "cos-skincare": [
    { id: "g-cos-skin-1", name: "스킨케어 화장품", niceClass: "제3류", type: "essential", description: "스킨케어 제품에 기본 추천됩니다." },
    { id: "g-cos-skin-2", name: "마스크팩", niceClass: "제3류", type: "optional", description: "마스크팩 제품을 포함하는 경우입니다." },
    { id: "g-cos-skin-3", name: "피부미용업", niceClass: "제44류", type: "expansion", description: "에스테틱 서비스 확장 시 검토됩니다." },
  ],
  "cos-perfume": [
    { id: "g-cos-perf-1", name: "향수", niceClass: "제3류", type: "essential", description: "향수 브랜드에 기본 추천됩니다." },
    { id: "g-cos-perf-2", name: "방향제", niceClass: "제3류", type: "optional", description: "생활 방향 제품을 포함하는 경우입니다." },
  ],
  "cos-retail": [
    { id: "g-cos-ret-1", name: "화장품 소매업", niceClass: "제35류", type: "essential", description: "화장품 유통/소매에 기본 추천됩니다." },
    { id: "g-cos-ret-2", name: "화장품", niceClass: "제3류", type: "optional", description: "자체 브랜드 제품을 포함하는 경우입니다." },
  ],
  "cos-online": [
    { id: "g-cos-on-1", name: "화장품 소매업", niceClass: "제35류", type: "essential", description: "온라인 화장품 판매에 기본 추천됩니다." },
    { id: "g-cos-on-2", name: "화장품", niceClass: "제3류", type: "optional", description: "자체 브랜드 제품이 있는 경우입니다." },
  ],

  /* ── 의류/패션 ── */
  "fash-clothing": [
    { id: "g-fash-1", name: "의류", niceClass: "제25류", type: "essential", description: "의류 브랜드에 기본 추천됩니다." },
    { id: "g-fash-2", name: "의류 소매업", niceClass: "제35류", type: "optional", description: "유통 채널을 운영하는 경우입니다." },
    { id: "g-fash-3", name: "의류 디자인업", niceClass: "제42류", type: "expansion", description: "디자인 서비스 확장 시 검토됩니다." },
  ],
  "fash-shoes": [
    { id: "g-fash-shoe-1", name: "신발", niceClass: "제25류", type: "essential", description: "신발 브랜드에 기본 추천됩니다." },
    { id: "g-fash-shoe-2", name: "운동화", niceClass: "제25류", type: "optional", description: "운동화 카테고리를 구분하는 경우입니다." },
  ],
  "fash-bags": [
    { id: "g-fash-bag-1", name: "가방", niceClass: "제18류", type: "essential", description: "가방 브랜드에 기본 추천됩니다." },
    { id: "g-fash-bag-2", name: "지갑", niceClass: "제18류", type: "optional", description: "소가죽 제품을 포함하는 경우입니다." },
  ],
  "fash-accessories": [
    { id: "g-fash-acc-1", name: "장신구", niceClass: "제14류", type: "essential", description: "액세서리 브랜드에 기본 추천됩니다." },
    { id: "g-fash-acc-2", name: "시계", niceClass: "제14류", type: "optional", description: "시계를 포함하는 경우입니다." },
  ],
  "fash-textiles": [
    { id: "g-fash-txt-1", name: "직물", niceClass: "제24류", type: "essential", description: "직물/원단 판매에 기본 추천됩니다." },
    { id: "g-fash-txt-2", name: "실", niceClass: "제23류", type: "optional", description: "실/사 제품을 포함하는 경우입니다." },
    { id: "g-fash-txt-3", name: "레이스/리본", niceClass: "제26류", type: "optional", description: "부자재를 포함하는 경우입니다." },
    { id: "g-fash-txt-4", name: "직물 소매업", niceClass: "제35류", type: "expansion", description: "원단 유통 사업 확장 시 검토됩니다." },
  ],
  "fash-retail": [
    { id: "g-fash-ret-1", name: "의류 소매업", niceClass: "제35류", type: "essential", description: "의류 소매 사업에 기본 추천됩니다." },
    { id: "g-fash-ret-2", name: "의류", niceClass: "제25류", type: "optional", description: "자체 브랜드 의류가 있는 경우입니다." },
  ],

  /* ── 건강기능식품 ── */
  "health-supplement": [
    { id: "g-health-1", name: "건강기능식품", niceClass: "제5류", type: "essential", description: "건강기능식품 브랜드에 기본 추천됩니다." },
    { id: "g-health-2", name: "건강기능식품 소매업", niceClass: "제35류", type: "optional", description: "유통 채널을 운영하는 경우입니다." },
  ],
  "health-vitamin": [
    { id: "g-health-vit-1", name: "비타민제", niceClass: "제5류", type: "essential", description: "비타민/영양제에 기본 추천됩니다." },
    { id: "g-health-vit-2", name: "건강기능식품", niceClass: "제5류", type: "optional", description: "건강식품 전반을 포함하는 경우입니다." },
  ],
  "health-diet": [
    { id: "g-health-diet-1", name: "다이어트 보조식품", niceClass: "제5류", type: "essential", description: "다이어트 식품에 기본 추천됩니다." },
    { id: "g-health-diet-2", name: "다이어트 음료", niceClass: "제32류", type: "optional", description: "음료 형태의 제품인 경우입니다." },
  ],
  "health-organic": [
    { id: "g-health-org-1", name: "유기농 식품", niceClass: "제29류", type: "essential", description: "유기농 식품에 기본 추천됩니다." },
    { id: "g-health-org-2", name: "유기농 곡물", niceClass: "제30류", type: "optional", description: "곡물류를 포함하는 경우입니다." },
  ],
  "health-retail": [
    { id: "g-health-ret-1", name: "건강식품 소매업", niceClass: "제35류", type: "essential", description: "건강식품 소매에 기본 추천됩니다." },
    { id: "g-health-ret-2", name: "건강기능식품", niceClass: "제5류", type: "optional", description: "자체 브랜드 제품이 있는 경우입니다." },
  ],

  /* ── 교육/학원 ── */
  "edu-academy": [
    { id: "g-edu-aca-1", name: "학원업", niceClass: "제41류", type: "essential", description: "학원 운영에 기본 추천됩니다." },
    { id: "g-edu-aca-2", name: "교육업", niceClass: "제41류", type: "optional", description: "교육 서비스 전반을 포함합니다." },
    { id: "g-edu-aca-3", name: "인쇄물", niceClass: "제16류", type: "expansion", description: "자체 교재를 출판하는 경우 검토됩니다." },
  ],
  "edu-online": [
    { id: "g-edu-on-1", name: "온라인 교육업", niceClass: "제41류", type: "essential", description: "온라인 교육 서비스에 기본 추천됩니다." },
    { id: "g-edu-on-2", name: "교육용 소프트웨어 제공업", niceClass: "제42류", type: "optional", description: "학습 플랫폼을 운영하는 경우입니다." },
  ],
  "edu-tutoring": [
    { id: "g-edu-tut-1", name: "교육업", niceClass: "제41류", type: "essential", description: "튜터링 서비스에 기본 추천됩니다." },
  ],
  "edu-contents": [
    { id: "g-edu-con-1", name: "교육 콘텐츠 제작업", niceClass: "제41류", type: "essential", description: "교육 콘텐츠 제작에 기본 추천됩니다." },
    { id: "g-edu-con-2", name: "전자출판물", niceClass: "제9류", type: "optional", description: "전자 형태의 교재를 제공하는 경우입니다." },
  ],
  "edu-consulting": [
    { id: "g-edu-cons-1", name: "교육 컨설팅업", niceClass: "제41류", type: "essential", description: "교육 컨설팅에 기본 추천됩니다." },
  ],

  /* ── 소프트웨어/앱 ── */
  "sw-app": [
    { id: "g-sw-app-1", name: "다운로드 가능한 모바일 애플리케이션 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-app-2", name: "스마트폰용 애플리케이션(앱)", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-app-3", name: "모바일 앱을 이용한 정보 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-app-4", name: "앱을 이용한 전자상거래 중개업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-app-5", name: "컴퓨터 애플리케이션 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-app-6", name: "태블릿 컴퓨터용 애플리케이션 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-app-7", name: "모바일 애플리케이션 개발업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-app-8", name: "소프트웨어 임시 사용 제공업(SaaS)", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-app-9", name: "온라인 광고업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-app-10", name: "모바일 광고 대행업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-app-11", name: "데이터 처리용 컴퓨터 프로그램", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-app-12", name: "앱을 이용한 상품판매대행업", niceClass: "제35류", type: "expansion", description: "" },
    { id: "g-sw-app-13", name: "인터넷 쇼핑몰 운영업", niceClass: "제35류", type: "expansion", description: "" },
    { id: "g-sw-app-14", name: "웹사이트를 통한 컴퓨터 기술 정보 제공업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-app-15", name: "앱을 이용한 판촉업", niceClass: "제35류", type: "expansion", description: "" },
  ],
  "sw-saas": [
    { id: "g-sw-saas-1", name: "소프트웨어 임시 사용 제공업(SaaS)", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-saas-2", name: "클라우드 컴퓨팅 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-saas-3", name: "다운로드 가능한 컴퓨터 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-saas-4", name: "온라인 소프트웨어 판매대행업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-saas-5", name: "컴퓨터 소프트웨어 플랫폼 제공업(PaaS)", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-saas-6", name: "클라우드 컴퓨팅 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-saas-7", name: "컴퓨터 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-saas-8", name: "소프트웨어 라이선스 관리업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-saas-9", name: "소프트웨어 설계 및 개발업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-saas-10", name: "전자 데이터 저장업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-saas-11", name: "컴퓨터 기술 지원 서비스업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-saas-12", name: "소프트웨어 유지보수업", niceClass: "제42류", type: "expansion", description: "" },
  ],
  "sw-platform": [
    { id: "g-sw-plat-1", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-plat-2", name: "인터넷 정보 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-plat-3", name: "전자상거래 중개업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-plat-4", name: "다운로드 가능한 컴퓨터 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-plat-5", name: "컴퓨터 소프트웨어 플랫폼 제공업(PaaS)", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-plat-6", name: "온라인 전자게시판 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-plat-7", name: "인터넷 쇼핑몰 운영업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-plat-8", name: "전자상거래용 컴퓨터 소프트웨어 플랫폼", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-plat-9", name: "온라인 커뮤니티 운영업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-plat-10", name: "온라인 마켓플레이스 운영업", niceClass: "제35류", type: "expansion", description: "" },
    { id: "g-sw-plat-11", name: "소셜 네트워킹 서비스업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-plat-12", name: "온라인 리뷰 및 평가 서비스업", niceClass: "제35류", type: "expansion", description: "" },
  ],
  "sw-data": [
    { id: "g-sw-data-1", name: "컴퓨터를 이용한 데이터 분석업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-data-2", name: "전자 데이터 처리업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-data-3", name: "데이터 관리용 컴퓨터 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-data-4", name: "데이터를 이용한 시장조사업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-data-5", name: "클라우드 컴퓨팅 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-data-6", name: "빅데이터 분석 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-data-7", name: "데이터 처리용 컴퓨터 프로그램", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-data-8", name: "데이터 분석 자문업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-data-9", name: "데이터베이스 관리업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-data-10", name: "전자 데이터 저장업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-data-11", name: "통계조사업", niceClass: "제35류", type: "expansion", description: "" },
    { id: "g-sw-data-12", name: "데이터 시각화 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
  ],
  "sw-dev": [
    { id: "g-sw-dev-1", name: "소프트웨어 설계 및 개발업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-dev-2", name: "컴퓨터 프로그래밍업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-dev-3", name: "다운로드 가능한 컴퓨터 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-dev-4", name: "소프트웨어 기술 자문업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-dev-5", name: "컴퓨터 소프트웨어 자문업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-dev-6", name: "컴퓨터 시스템 분석업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-dev-7", name: "컴퓨터 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-dev-8", name: "정보기술(IT) 컨설팅업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-dev-9", name: "웹사이트 설계 및 개발업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-dev-10", name: "컴퓨터 소프트웨어 테스트업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-dev-11", name: "컴퓨터 기술 지원 서비스업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-dev-12", name: "소프트웨어 유지보수업", niceClass: "제42류", type: "expansion", description: "" },
  ],

  /* ── 병원/의원 ── */
  "med-clinic": [
    { id: "g-med-1", name: "의료업", niceClass: "제44류", type: "essential", description: "의원/병원 운영에 기본 추천됩니다." },
    { id: "g-med-2", name: "건강검진 서비스업", niceClass: "제44류", type: "optional", description: "건강검진을 제공하는 경우입니다." },
  ],
  "med-dental": [
    { id: "g-med-den-1", name: "치과의원업", niceClass: "제44류", type: "essential", description: "치과 운영에 기본 추천됩니다." },
  ],
  "med-derma": [
    { id: "g-med-der-1", name: "피부과의원업", niceClass: "제44류", type: "essential", description: "피부과/미용의원에 기본 추천됩니다." },
    { id: "g-med-der-2", name: "피부미용업", niceClass: "제44류", type: "optional", description: "미용 시술 서비스입니다." },
  ],
  "med-pharmacy": [
    { id: "g-med-pha-1", name: "약국업", niceClass: "제44류", type: "essential", description: "약국 운영에 기본 추천됩니다." },
    { id: "g-med-pha-2", name: "약제", niceClass: "제5류", type: "optional", description: "자체 조제 약품이 있는 경우입니다." },
  ],
  "med-device": [
    { id: "g-med-dev-1", name: "의료기기", niceClass: "제10류", type: "essential", description: "의료기기 제품에 기본 추천됩니다." },
    { id: "g-med-dev-2", name: "의료기기 소매업", niceClass: "제35류", type: "optional", description: "의료기기 유통을 겸하는 경우입니다." },
  ],

  /* ── 반려동물 ── */
  "pet-food": [
    { id: "g-pet-food-1", name: "반려동물용 사료", niceClass: "제31류", type: "essential", description: "반려동물 사료/간식에 기본 추천됩니다." },
    { id: "g-pet-food-2", name: "반려동물용 간식", niceClass: "제31류", type: "essential", description: "반려동물 간식 제품입니다." },
    { id: "g-pet-food-3", name: "반려동물용품 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "pet-supplies": [
    { id: "g-pet-sup-1", name: "반려동물용품", niceClass: "제21류", type: "essential", description: "반려동물 용품에 기본 추천됩니다." },
    { id: "g-pet-sup-2", name: "반려동물 의류", niceClass: "제18류", type: "optional", description: "반려동물 의류를 포함하는 경우입니다." },
  ],
  "pet-grooming": [
    { id: "g-pet-groom-1", name: "반려동물 미용업", niceClass: "제44류", type: "essential", description: "반려동물 미용 서비스에 기본 추천됩니다." },
  ],
  "pet-hospital": [
    { id: "g-pet-hos-1", name: "동물병원업", niceClass: "제44류", type: "essential", description: "동물병원 운영에 기본 추천됩니다." },
  ],
  "pet-hotel": [
    { id: "g-pet-hot-1", name: "반려동물 돌봄업", niceClass: "제43류", type: "essential", description: "반려동물 호텔/돌봄에 기본 추천됩니다." },
  ],

  /* ── 컨설팅/전문서비스 ── */
  "con-management": [
    { id: "g-con-mgmt-1", name: "경영 컨설팅업", niceClass: "제35류", type: "essential", description: "경영 컨설팅에 기본 추천됩니다." },
    { id: "g-con-mgmt-2", name: "사업 자문업", niceClass: "제35류", type: "optional", description: "사업 자문을 겸하는 경우입니다." },
  ],
  "con-legal": [
    { id: "g-con-legal-1", name: "법률 서비스업", niceClass: "제45류", type: "essential", description: "법률 서비스에 기본 추천됩니다." },
  ],
  "con-accounting": [
    { id: "g-con-acc-1", name: "회계업", niceClass: "제35류", type: "essential", description: "회계/세무 서비스에 기본 추천됩니다." },
    { id: "g-con-acc-2", name: "세무 자문업", niceClass: "제35류", type: "optional", description: "세무 자문을 겸하는 경우입니다." },
  ],
  "con-marketing": [
    { id: "g-con-mkt-1", name: "광고업", niceClass: "제35류", type: "essential", description: "마케팅/광고 대행에 기본 추천됩니다." },
    { id: "g-con-mkt-2", name: "마케팅업", niceClass: "제35류", type: "essential", description: "마케팅 서비스입니다." },
  ],
  "con-design": [
    { id: "g-con-des-1", name: "디자인업", niceClass: "제42류", type: "essential", description: "디자인 서비스에 기본 추천됩니다." },
    { id: "g-con-des-2", name: "산업디자인업", niceClass: "제42류", type: "optional", description: "산업/제품 디자인을 포함하는 경우입니다." },
  ],

  /* ── 가구/인테리어 ── */
  "fur-furniture": [
    { id: "g-fur-1", name: "가구", niceClass: "제20류", type: "essential", description: "가구 브랜드에 기본 추천됩니다." },
    { id: "g-fur-2", name: "매트리스", niceClass: "제20류", type: "optional", description: "침구/매트리스를 포함하는 경우입니다." },
    { id: "g-fur-3", name: "가구 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "fur-lighting": [
    { id: "g-fur-light-1", name: "조명기구", niceClass: "제11류", type: "essential", description: "조명 제품에 기본 추천됩니다." },
    { id: "g-fur-light-2", name: "인테리어 소품", niceClass: "제20류", type: "optional", description: "장식 소품을 포함하는 경우입니다." },
  ],
  "fur-carpet": [
    { id: "g-fur-carp-1", name: "카펫", niceClass: "제27류", type: "essential", description: "카펫/러그 제품에 기본 추천됩니다." },
    { id: "g-fur-carp-2", name: "매트", niceClass: "제27류", type: "optional", description: "매트류를 포함하는 경우입니다." },
    { id: "g-fur-carp-3", name: "벽지", niceClass: "제27류", type: "optional", description: "벽지/바닥재를 포함하는 경우입니다." },
  ],
  "fur-curtain": [
    { id: "g-fur-curt-1", name: "커튼", niceClass: "제24류", type: "essential", description: "커튼/블라인드에 기본 추천됩니다." },
    { id: "g-fur-curt-2", name: "침구류", niceClass: "제24류", type: "optional", description: "침구/이불을 포함하는 경우입니다." },
  ],
  "fur-retail": [
    { id: "g-fur-ret-1", name: "가구 소매업", niceClass: "제35류", type: "essential", description: "가구/인테리어 소매에 기본 추천됩니다." },
    { id: "g-fur-ret-2", name: "인테리어 디자인업", niceClass: "제42류", type: "optional", description: "인테리어 디자인 서비스를 겸하는 경우입니다." },
  ],

  /* ── 가전/생활용품 ── */
  "app-home": [
    { id: "g-app-home-1", name: "가정용 전기기기", niceClass: "제11류", type: "essential", description: "가전제품 브랜드에 기본 추천됩니다." },
    { id: "g-app-home-2", name: "냉난방 장치", niceClass: "제11류", type: "optional", description: "냉난방 기기를 포함하는 경우입니다." },
    { id: "g-app-home-3", name: "전자제품 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "app-kitchen": [
    { id: "g-app-kit-1", name: "주방용품", niceClass: "제21류", type: "essential", description: "주방용품에 기본 추천됩니다." },
    { id: "g-app-kit-2", name: "조리기구", niceClass: "제21류", type: "essential", description: "조리기구 제품입니다." },
    { id: "g-app-kit-3", name: "가정용 조리기계", niceClass: "제11류", type: "optional", description: "전기 조리기기를 포함하는 경우입니다." },
  ],
  "app-cleaning": [
    { id: "g-app-clean-1", name: "세정제", niceClass: "제3류", type: "essential", description: "세정제/세제에 기본 추천됩니다." },
    { id: "g-app-clean-2", name: "살균소독제", niceClass: "제5류", type: "optional", description: "소독/살균 제품을 포함하는 경우입니다." },
  ],
  "app-daily": [
    { id: "g-app-daily-1", name: "생활용품", niceClass: "제21류", type: "essential", description: "생활용품에 기본 추천됩니다." },
    { id: "g-app-daily-2", name: "비전기식 조리기구", niceClass: "제21류", type: "optional", description: "비전기식 가정용품을 포함하는 경우입니다." },
  ],
  "app-retail": [
    { id: "g-app-ret-1", name: "가전제품 소매업", niceClass: "제35류", type: "essential", description: "가전/생활용품 소매에 기본 추천됩니다." },
    { id: "g-app-ret-2", name: "상품 소매업", niceClass: "제35류", type: "optional", description: "종합 소매를 겸하는 경우입니다." },
  ],

  /* ── 스포츠/레저 ── */
  "spt-equipment": [
    { id: "g-spt-eq-1", name: "스포츠 용품", niceClass: "제28류", type: "essential", description: "스포츠 용품에 기본 추천됩니다." },
    { id: "g-spt-eq-2", name: "운동기구", niceClass: "제28류", type: "optional", description: "운동기구를 포함하는 경우입니다." },
    { id: "g-spt-eq-3", name: "스포츠용품 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "spt-outdoor": [
    { id: "g-spt-out-1", name: "텐트", niceClass: "제22류", type: "essential", description: "캠핑/아웃도어 제품에 기본 추천됩니다." },
    { id: "g-spt-out-2", name: "배낭", niceClass: "제18류", type: "essential", description: "아웃도어 가방류에 추천됩니다." },
    { id: "g-spt-out-3", name: "아웃도어 의류", niceClass: "제25류", type: "optional", description: "아웃도어 의류를 포함하는 경우입니다." },
    { id: "g-spt-out-4", name: "캠핑용품", niceClass: "제28류", type: "optional", description: "캠핑 장비를 포함하는 경우입니다." },
  ],
  "spt-toys": [
    { id: "g-spt-toy-1", name: "장난감", niceClass: "제28류", type: "essential", description: "장난감/완구에 기본 추천됩니다." },
    { id: "g-spt-toy-2", name: "인형", niceClass: "제28류", type: "optional", description: "인형류를 포함하는 경우입니다." },
    { id: "g-spt-toy-3", name: "완구 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "spt-games": [
    { id: "g-spt-game-1", name: "보드게임", niceClass: "제28류", type: "essential", description: "보드게임/테이블게임에 기본 추천됩니다." },
    { id: "g-spt-game-2", name: "전자오락기기", niceClass: "제28류", type: "optional", description: "전자 게임 기기를 포함하는 경우입니다." },
    { id: "g-spt-game-3", name: "게임 소프트웨어", niceClass: "제9류", type: "optional", description: "디지털 게임을 제공하는 경우입니다." },
  ],
  "spt-gym": [
    { id: "g-spt-gym-1", name: "체육관업", niceClass: "제41류", type: "essential", description: "체육관/피트니스 운영에 기본 추천됩니다." },
    { id: "g-spt-gym-2", name: "스포츠 교육업", niceClass: "제41류", type: "optional", description: "스포츠 교육/레슨을 제공하는 경우입니다." },
    { id: "g-spt-gym-3", name: "운동기구", niceClass: "제28류", type: "expansion", description: "자체 운동기구를 판매하는 경우 검토됩니다." },
  ],
  "spt-retail": [
    { id: "g-spt-ret-1", name: "스포츠용품 소매업", niceClass: "제35류", type: "essential", description: "스포츠용품 소매에 기본 추천됩니다." },
    { id: "g-spt-ret-2", name: "스포츠 용품", niceClass: "제28류", type: "optional", description: "자체 브랜드 제품이 있는 경우입니다." },
  ],

  /* ── 주류 ── */
  "alc-wine": [
    { id: "g-alc-wine-1", name: "포도주(와인)", niceClass: "제33류", type: "essential", description: "와인 브랜드에 기본 추천됩니다." },
    { id: "g-alc-wine-2", name: "주류 소매업", niceClass: "제35류", type: "optional", description: "와인 유통을 겸하는 경우입니다." },
  ],
  "alc-beer": [
    { id: "g-alc-beer-1", name: "맥주", niceClass: "제32류", type: "essential", description: "맥주/크래프트 비어에 기본 추천됩니다." },
    { id: "g-alc-beer-2", name: "주류 소매업", niceClass: "제35류", type: "optional", description: "맥주 유통을 겸하는 경우입니다." },
  ],
  "alc-soju": [
    { id: "g-alc-soju-1", name: "소주", niceClass: "제33류", type: "essential", description: "소주/전통주에 기본 추천됩니다." },
    { id: "g-alc-soju-2", name: "전통주", niceClass: "제33류", type: "essential", description: "전통주/막걸리 등을 포함합니다." },
    { id: "g-alc-soju-3", name: "주류 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "alc-spirits": [
    { id: "g-alc-spr-1", name: "증류주(양주)", niceClass: "제33류", type: "essential", description: "양주/증류주에 기본 추천됩니다." },
    { id: "g-alc-spr-2", name: "칵테일주", niceClass: "제33류", type: "optional", description: "칵테일/혼합주를 포함하는 경우입니다." },
  ],
  "alc-bar": [
    { id: "g-alc-bar-1", name: "주점업", niceClass: "제43류", type: "essential", description: "바/주점 운영에 기본 추천됩니다." },
    { id: "g-alc-bar-2", name: "음식점업", niceClass: "제43류", type: "optional", description: "음식 제공을 겸하는 경우입니다." },
  ],
  "alc-retail": [
    { id: "g-alc-ret-1", name: "주류 소매업", niceClass: "제35류", type: "essential", description: "주류 소매/유통에 기본 추천됩니다." },
    { id: "g-alc-ret-2", name: "주류", niceClass: "제33류", type: "optional", description: "자체 브랜드 주류가 있는 경우입니다." },
  ],

  /* ── 건설/시공 ── */
  "const-building": [
    { id: "g-const-bld-1", name: "건축업", niceClass: "제37류", type: "essential", description: "건축/시공업에 기본 추천됩니다." },
    { id: "g-const-bld-2", name: "건설업", niceClass: "제37류", type: "essential", description: "건설 서비스 전반입니다." },
    { id: "g-const-bld-3", name: "건축 설계업", niceClass: "제42류", type: "optional", description: "건축 설계를 겸하는 경우입니다." },
  ],
  "const-interior": [
    { id: "g-const-int-1", name: "실내 인테리어 시공업", niceClass: "제37류", type: "essential", description: "인테리어 시공에 기본 추천됩니다." },
    { id: "g-const-int-2", name: "인테리어 디자인업", niceClass: "제42류", type: "optional", description: "디자인 서비스를 겸하는 경우입니다." },
  ],
  "const-materials": [
    { id: "g-const-mat-1", name: "건축자재", niceClass: "제19류", type: "essential", description: "건축자재에 기본 추천됩니다." },
    { id: "g-const-mat-2", name: "시멘트", niceClass: "제19류", type: "optional", description: "시멘트/콘크리트를 포함하는 경우입니다." },
    { id: "g-const-mat-3", name: "건축자재 소매업", niceClass: "제35류", type: "expansion", description: "자재 유통을 겸하는 경우입니다." },
  ],
  "const-repair": [
    { id: "g-const-rep-1", name: "건물 수리업", niceClass: "제37류", type: "essential", description: "수리/보수 서비스에 기본 추천됩니다." },
    { id: "g-const-rep-2", name: "설비 공사업", niceClass: "제37류", type: "optional", description: "설비/배관 공사를 포함하는 경우입니다." },
  ],
  "const-metal": [
    { id: "g-const-met-1", name: "건축용 금속제품", niceClass: "제6류", type: "essential", description: "금속자재에 기본 추천됩니다." },
    { id: "g-const-met-2", name: "철물", niceClass: "제6류", type: "optional", description: "철물/금속 부품을 포함하는 경우입니다." },
    { id: "g-const-met-3", name: "금속가공업", niceClass: "제40류", type: "expansion", description: "금속 가공 서비스를 겸하는 경우입니다." },
  ],

  /* ── 자동차 ── */
  "auto-vehicle": [
    { id: "g-auto-veh-1", name: "자동차", niceClass: "제12류", type: "essential", description: "자동차/차량에 기본 추천됩니다." },
    { id: "g-auto-veh-2", name: "전기자동차", niceClass: "제12류", type: "optional", description: "전기차를 포함하는 경우입니다." },
  ],
  "auto-parts": [
    { id: "g-auto-part-1", name: "자동차 부품", niceClass: "제12류", type: "essential", description: "자동차 부품에 기본 추천됩니다." },
    { id: "g-auto-part-2", name: "자동차 용품", niceClass: "제12류", type: "optional", description: "자동차 액세서리를 포함하는 경우입니다." },
    { id: "g-auto-part-3", name: "자동차 부품 소매업", niceClass: "제35류", type: "expansion", description: "유통 채널 확장 시 검토됩니다." },
  ],
  "auto-repair": [
    { id: "g-auto-rep-1", name: "자동차 수리업", niceClass: "제37류", type: "essential", description: "자동차 정비/수리에 기본 추천됩니다." },
    { id: "g-auto-rep-2", name: "자동차 세차업", niceClass: "제37류", type: "optional", description: "세차 서비스를 겸하는 경우입니다." },
  ],
  "auto-rental": [
    { id: "g-auto-rent-1", name: "자동차 임대업", niceClass: "제39류", type: "essential", description: "렌터카/리스에 기본 추천됩니다." },
    { id: "g-auto-rent-2", name: "차량 운송업", niceClass: "제39류", type: "optional", description: "운송 서비스를 겸하는 경우입니다." },
  ],
  "auto-retail": [
    { id: "g-auto-ret-1", name: "자동차용품 소매업", niceClass: "제35류", type: "essential", description: "자동차용품 소매에 기본 추천됩니다." },
    { id: "g-auto-ret-2", name: "자동차 부품", niceClass: "제12류", type: "optional", description: "자체 브랜드 부품이 있는 경우입니다." },
  ],

  /* ── 통신/미디어 ── */
  "tel-telecom": [
    { id: "g-tel-1", name: "전기통신업", niceClass: "제38류", type: "essential", description: "통신 서비스에 기본 추천됩니다." },
    { id: "g-tel-2", name: "무선통신업", niceClass: "제38류", type: "optional", description: "무선/모바일 통신을 포함하는 경우입니다." },
    { id: "g-tel-3", name: "통신기기", niceClass: "제9류", type: "expansion", description: "통신 장비를 판매하는 경우 검토됩니다." },
  ],
  "tel-broadcast": [
    { id: "g-tel-bc-1", name: "방송업", niceClass: "제38류", type: "essential", description: "방송/스트리밍에 기본 추천됩니다." },
    { id: "g-tel-bc-2", name: "영상 스트리밍 제공업", niceClass: "제38류", type: "essential", description: "OTT/스트리밍 서비스입니다." },
    { id: "g-tel-bc-3", name: "영상물 제작업", niceClass: "제41류", type: "optional", description: "콘텐츠 제작을 겸하는 경우입니다." },
  ],
  "tel-media": [
    { id: "g-tel-med-1", name: "영상물 제작업", niceClass: "제41류", type: "essential", description: "미디어/콘텐츠 제작에 기본 추천됩니다." },
    { id: "g-tel-med-2", name: "광고업", niceClass: "제35류", type: "optional", description: "광고 콘텐츠를 제작하는 경우입니다." },
    { id: "g-tel-med-3", name: "온라인 정보 전송업", niceClass: "제38류", type: "optional", description: "온라인 콘텐츠 전송을 포함하는 경우입니다." },
  ],
  "tel-internet": [
    { id: "g-tel-int-1", name: "인터넷 접속 제공업", niceClass: "제38류", type: "essential", description: "인터넷 서비스에 기본 추천됩니다." },
    { id: "g-tel-int-2", name: "데이터 전송업", niceClass: "제38류", type: "optional", description: "데이터 전송 서비스를 포함하는 경우입니다." },
  ],

  /* ── 음악/공연 ── */
  "mus-instrument": [
    { id: "g-mus-inst-1", name: "악기", niceClass: "제15류", type: "essential", description: "악기 브랜드에 기본 추천됩니다." },
    { id: "g-mus-inst-2", name: "전자악기", niceClass: "제15류", type: "optional", description: "전자/디지털 악기를 포함하는 경우입니다." },
    { id: "g-mus-inst-3", name: "악기 소매업", niceClass: "제35류", type: "expansion", description: "악기 유통을 겸하는 경우입니다." },
  ],
  "mus-production": [
    { id: "g-mus-prod-1", name: "음반 제작업", niceClass: "제41류", type: "essential", description: "음반/음악 제작에 기본 추천됩니다." },
    { id: "g-mus-prod-2", name: "음악 녹음물", niceClass: "제9류", type: "optional", description: "디지털 음원을 판매하는 경우입니다." },
  ],
  "mus-performance": [
    { id: "g-mus-perf-1", name: "공연 기획업", niceClass: "제41류", type: "essential", description: "공연/이벤트 기획에 기본 추천됩니다." },
    { id: "g-mus-perf-2", name: "이벤트 대행업", niceClass: "제41류", type: "optional", description: "이벤트 대행을 겸하는 경우입니다." },
  ],
  "mus-education": [
    { id: "g-mus-edu-1", name: "음악 교육업", niceClass: "제41류", type: "essential", description: "음악 교육/레슨에 기본 추천됩니다." },
    { id: "g-mus-edu-2", name: "악기", niceClass: "제15류", type: "optional", description: "악기 판매를 겸하는 경우입니다." },
  ],
  "mus-retail": [
    { id: "g-mus-ret-1", name: "악기 소매업", niceClass: "제35류", type: "essential", description: "악기/음반 소매에 기본 추천됩니다." },
    { id: "g-mus-ret-2", name: "악기", niceClass: "제15류", type: "optional", description: "자체 브랜드 악기가 있는 경우입니다." },
  ],

  /* ── 제조업 ── */
  "mfg-general": [
    { id: "g-mfg-gen-1", name: "공업용 기계", niceClass: "제7류", type: "essential", description: "제조업 관련 기본 추천입니다." },
    { id: "g-mfg-gen-2", name: "제품 제조 대행업", niceClass: "제40류", type: "optional", description: "위탁 제조를 하는 경우입니다." },
  ],
  "mfg-chemical": [
    { id: "g-mfg-chem-1", name: "공업용 화학제품", niceClass: "제1류", type: "essential", description: "화학제품/원료에 기본 추천됩니다." },
    { id: "g-mfg-chem-2", name: "접착제", niceClass: "제1류", type: "optional", description: "공업용 접착제를 포함하는 경우입니다." },
    { id: "g-mfg-chem-3", name: "화학제품 가공업", niceClass: "제40류", type: "expansion", description: "화학 가공 서비스를 제공하는 경우입니다." },
  ],
  "mfg-paint": [
    { id: "g-mfg-paint-1", name: "페인트", niceClass: "제2류", type: "essential", description: "도료/페인트에 기본 추천됩니다." },
    { id: "g-mfg-paint-2", name: "방청제", niceClass: "제2류", type: "optional", description: "방청/코팅 제품을 포함하는 경우입니다." },
    { id: "g-mfg-paint-3", name: "잉크", niceClass: "제2류", type: "optional", description: "잉크/인쇄용 도료를 포함하는 경우입니다." },
  ],
  "mfg-rubber": [
    { id: "g-mfg-rub-1", name: "고무제품", niceClass: "제17류", type: "essential", description: "고무/플라스틱 제품에 기본 추천됩니다." },
    { id: "g-mfg-rub-2", name: "플라스틱 반제품", niceClass: "제17류", type: "optional", description: "플라스틱 소재를 포함하는 경우입니다." },
    { id: "g-mfg-rub-3", name: "단열재", niceClass: "제17류", type: "optional", description: "단열/방음 소재를 포함하는 경우입니다." },
  ],
  "mfg-tools": [
    { id: "g-mfg-tool-1", name: "수공구", niceClass: "제8류", type: "essential", description: "공구/수공구에 기본 추천됩니다." },
    { id: "g-mfg-tool-2", name: "칼·가위류", niceClass: "제8류", type: "optional", description: "절단용 수공구를 포함하는 경우입니다." },
    { id: "g-mfg-tool-3", name: "공구 소매업", niceClass: "제35류", type: "expansion", description: "공구 유통을 겸하는 경우입니다." },
  ],
  "mfg-energy": [
    { id: "g-mfg-energy-1", name: "공업용 오일", niceClass: "제4류", type: "essential", description: "연료/오일에 기본 추천됩니다." },
    { id: "g-mfg-energy-2", name: "윤활유", niceClass: "제4류", type: "optional", description: "윤활유를 포함하는 경우입니다." },
    { id: "g-mfg-energy-3", name: "양초", niceClass: "제4류", type: "optional", description: "양초/왁스 제품을 포함하는 경우입니다." },
  ],

  /* ── 기존 기타 (하위 호환) ── */
  "other-manufacturing": [
    { id: "g-other-mfg-1", name: "공업용 기계", niceClass: "제7류", type: "essential", description: "제조업 관련 기본 추천입니다." },
    { id: "g-other-mfg-2", name: "제품 제조 대행업", niceClass: "제40류", type: "optional", description: "위탁 제조를 하는 경우입니다." },
  ],
  "other-logistics": [
    { id: "g-other-log-1", name: "운송업", niceClass: "제39류", type: "essential", description: "물류/운송에 기본 추천됩니다." },
    { id: "g-other-log-2", name: "물류 창고업", niceClass: "제39류", type: "optional", description: "창고 운영을 겸하는 경우입니다." },
  ],
  "other-realestate": [
    { id: "g-other-re-1", name: "부동산 중개업", niceClass: "제36류", type: "essential", description: "부동산 관련 기본 추천입니다." },
    { id: "g-other-re-2", name: "부동산 관리업", niceClass: "제36류", type: "optional", description: "부동산 관리를 겸하는 경우입니다." },
  ],
  "other-entertainment": [
    { id: "g-other-ent-1", name: "연예 오락업", niceClass: "제41류", type: "essential", description: "엔터테인먼트에 기본 추천됩니다." },
    { id: "g-other-ent-2", name: "영상물 제작업", niceClass: "제41류", type: "optional", description: "영상 제작을 겸하는 경우입니다." },
  ],
  "other-etc": [
    { id: "g-other-etc-1", name: "광고업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-other-etc-2", name: "사업관리업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-other-etc-3", name: "경영 컨설팅업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-other-etc-4", name: "마케팅업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-other-etc-5", name: "시장조사업", niceClass: "제35류", type: "expansion", description: "" },
  ],

  /* ── 신규 세부항목 (음식점/카페 확장) ── */
  "food-tea": [
    { id: "g-food-tea-1", name: "차", niceClass: "제30류", type: "essential", description: "차/티 제품에 기본 추천됩니다." },
    { id: "g-food-tea-2", name: "차 음료 제공업", niceClass: "제43류", type: "essential", description: "티 전문점 서비스입니다." },
  ],
  "food-juice": [
    { id: "g-food-juice-1", name: "과일주스", niceClass: "제32류", type: "essential", description: "주스/스무디에 기본 추천됩니다." },
    { id: "g-food-juice-2", name: "음료 제공업", niceClass: "제43류", type: "optional", description: "매장 운영 서비스입니다." },
  ],
  "food-icecream": [
    { id: "g-food-ice-1", name: "아이스크림", niceClass: "제30류", type: "essential", description: "아이스크림/젤라토에 기본 추천됩니다." },
    { id: "g-food-ice-2", name: "디저트 카페업", niceClass: "제43류", type: "optional", description: "매장 판매 서비스입니다." },
  ],
  "food-snack": [
    { id: "g-food-snack-1", name: "과자", niceClass: "제30류", type: "essential", description: "분식/간식에 기본 추천됩니다." },
    { id: "g-food-snack-2", name: "음식점업", niceClass: "제43류", type: "essential", description: "분식집 운영 서비스입니다." },
  ],
  "food-meat": [
    { id: "g-food-meat-1", name: "식육", niceClass: "제29류", type: "essential", description: "정육점/고기 전문점에 기본 추천됩니다." },
    { id: "g-food-meat-2", name: "음식점업", niceClass: "제43류", type: "optional", description: "고기 식당 운영 서비스입니다." },
  ],
  "food-seafood": [
    { id: "g-food-sea-1", name: "수산물", niceClass: "제29류", type: "essential", description: "수산물/해산물에 기본 추천됩니다." },
    { id: "g-food-sea-2", name: "생선", niceClass: "제31류", type: "optional", description: "신선 수산물 판매입니다." },
  ],
  "food-sauce": [
    { id: "g-food-sauce-1", name: "소스류", niceClass: "제30류", type: "essential", description: "소스/양념에 기본 추천됩니다." },
    { id: "g-food-sauce-2", name: "조미료", niceClass: "제30류", type: "optional", description: "조미료를 포함하는 경우입니다." },
  ],
  "food-frozen": [
    { id: "g-food-frz-1", name: "냉동식품", niceClass: "제29류", type: "essential", description: "냉동식품에 기본 추천됩니다." },
    { id: "g-food-frz-2", name: "냉동식품 소매업", niceClass: "제35류", type: "optional", description: "유통 채널 운영 시 추천됩니다." },
  ],
  "food-catering": [
    { id: "g-food-cat-1", name: "케이터링업", niceClass: "제43류", type: "essential", description: "출장 음식 서비스에 기본 추천됩니다." },
    { id: "g-food-cat-2", name: "연회 서비스업", niceClass: "제43류", type: "optional", description: "연회/뷔페 서비스입니다." },
  ],
  "food-franchise": [
    { id: "g-food-fran-1", name: "프랜차이즈업", niceClass: "제35류", type: "essential", description: "프랜차이즈 운영에 기본 추천됩니다." },
    { id: "g-food-fran-2", name: "음식점업", niceClass: "제43류", type: "essential", description: "음식점 서비스입니다." },
  ],
  "food-vegan": [
    { id: "g-food-veg-1", name: "채식 식품", niceClass: "제29류", type: "essential", description: "비건/채식 식품에 기본 추천됩니다." },
    { id: "g-food-veg-2", name: "식물성 음료", niceClass: "제32류", type: "optional", description: "식물성 음료를 포함하는 경우입니다." },
  ],

  /* ── 쇼핑 확장 ── */
  "shop-secondhand": [
    { id: "g-shop-2nd-1", name: "중고품 소매업", niceClass: "제35류", type: "essential", description: "중고거래에 기본 추천됩니다." },
    { id: "g-shop-2nd-2", name: "전자상거래 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "플랫폼 운영 서비스입니다." },
  ],
  "shop-groupbuy": [
    { id: "g-shop-grp-1", name: "공동구매 대행업", niceClass: "제35류", type: "essential", description: "공동구매/소셜커머스에 기본 추천됩니다." },
  ],
  "shop-livecommerce": [
    { id: "g-shop-live-1", name: "상품 소매업", niceClass: "제35류", type: "essential", description: "라이브커머스에 기본 추천됩니다." },
    { id: "g-shop-live-2", name: "방송업", niceClass: "제38류", type: "optional", description: "라이브 방송 서비스입니다." },
  ],
  "shop-dropship": [
    { id: "g-shop-drop-1", name: "상품 판매대행업", niceClass: "제35류", type: "essential", description: "위탁판매에 기본 추천됩니다." },
  ],
  "shop-import": [
    { id: "g-shop-imp-1", name: "수출입 대행업", niceClass: "제35류", type: "essential", description: "수입대행에 기본 추천됩니다." },
    { id: "g-shop-imp-2", name: "상품 소매업", niceClass: "제35류", type: "optional", description: "해외직구 판매입니다." },
  ],
  "shop-gift": [
    { id: "g-shop-gift-1", name: "선물용품 소매업", niceClass: "제35류", type: "essential", description: "선물/기프트 서비스에 기본 추천됩니다." },
  ],
  "shop-rental": [
    { id: "g-shop-rent-1", name: "상품 대여업", niceClass: "제35류", type: "essential", description: "렌탈 서비스에 기본 추천됩니다." },
  ],
  "shop-auction": [
    { id: "g-shop-auc-1", name: "경매업", niceClass: "제35류", type: "essential", description: "경매 서비스에 기본 추천됩니다." },
  ],
  "shop-comparison": [
    { id: "g-shop-comp-1", name: "가격비교 정보 제공업", niceClass: "제35류", type: "essential", description: "가격비교 서비스에 기본 추천됩니다." },
    { id: "g-shop-comp-2", name: "온라인 정보 제공업", niceClass: "제42류", type: "optional", description: "정보 플랫폼 서비스입니다." },
  ],
  "shop-membership": [
    { id: "g-shop-mem-1", name: "회원제 소매업", niceClass: "제35류", type: "essential", description: "멤버십 쇼핑에 기본 추천됩니다." },
  ],

  /* ── 화장품 확장 ── */
  "cos-makeup": [
    { id: "g-cos-mk-1", name: "색조 화장품", niceClass: "제3류", type: "essential", description: "색조 화장품에 기본 추천됩니다." },
  ],
  "cos-suncare": [
    { id: "g-cos-sun-1", name: "자외선 차단제", niceClass: "제3류", type: "essential", description: "선케어 제품에 기본 추천됩니다." },
  ],
  "cos-hair": [
    { id: "g-cos-hair-1", name: "헤어케어 제품", niceClass: "제3류", type: "essential", description: "샴푸/린스/헤어에센스에 기본 추천됩니다." },
  ],
  "cos-bodycare": [
    { id: "g-cos-body-1", name: "바디 세정제", niceClass: "제3류", type: "essential", description: "바디워시/로션에 기본 추천됩니다." },
  ],
  "cos-nail": [
    { id: "g-cos-nail-1", name: "네일 화장품", niceClass: "제3류", type: "essential", description: "네일 제품에 기본 추천됩니다." },
    { id: "g-cos-nail-2", name: "네일아트업", niceClass: "제44류", type: "optional", description: "네일 서비스를 겸하는 경우입니다." },
  ],
  "cos-mask": [
    { id: "g-cos-mask-1", name: "마스크팩", niceClass: "제3류", type: "essential", description: "마스크팩에 기본 추천됩니다." },
  ],
  "cos-men": [
    { id: "g-cos-men-1", name: "남성용 화장품", niceClass: "제3류", type: "essential", description: "남성 화장품에 기본 추천됩니다." },
  ],
  "cos-baby": [
    { id: "g-cos-baby-1", name: "유아용 화장품", niceClass: "제3류", type: "essential", description: "유아/아동 화장품에 기본 추천됩니다." },
  ],
  "cos-organic": [
    { id: "g-cos-org-1", name: "유기농 화장품", niceClass: "제3류", type: "essential", description: "자연/유기농 화장품에 기본 추천됩니다." },
  ],
  "cos-tools": [
    { id: "g-cos-tool-1", name: "뷰티 기기", niceClass: "제11류", type: "essential", description: "뷰티 도구/기기에 기본 추천됩니다." },
    { id: "g-cos-tool-2", name: "화장용구", niceClass: "제21류", type: "optional", description: "브러시/퍼프 등 화장도구입니다." },
  ],
  "cos-salon": [
    { id: "g-cos-salon-1", name: "미용업", niceClass: "제44류", type: "essential", description: "미용실/헤어살롱에 기본 추천됩니다." },
    { id: "g-cos-salon-2", name: "헤어케어 제품", niceClass: "제3류", type: "optional", description: "자체 헤어제품을 판매하는 경우입니다." },
  ],

  /* ── 패션 확장 ── */
  "fash-sportswear": [
    { id: "g-fash-sport-1", name: "운동복", niceClass: "제25류", type: "essential", description: "스포츠웨어/애슬레저에 기본 추천됩니다." },
  ],
  "fash-underwear": [
    { id: "g-fash-under-1", name: "속옷", niceClass: "제25류", type: "essential", description: "속옷/이너웨어에 기본 추천됩니다." },
  ],
  "fash-kids": [
    { id: "g-fash-kids-1", name: "아동복", niceClass: "제25류", type: "essential", description: "아동복에 기본 추천됩니다." },
  ],
  "fash-luxury": [
    { id: "g-fash-lux-1", name: "가방", niceClass: "제18류", type: "essential", description: "럭셔리 가방에 기본 추천됩니다." },
    { id: "g-fash-lux-2", name: "장신구", niceClass: "제14류", type: "essential", description: "명품 액세서리입니다." },
    { id: "g-fash-lux-3", name: "의류", niceClass: "제25류", type: "optional", description: "럭셔리 의류를 포함하는 경우입니다." },
  ],
  "fash-jewelry": [
    { id: "g-fash-jew-1", name: "귀금속 보석류", niceClass: "제14류", type: "essential", description: "주얼리에 기본 추천됩니다." },
    { id: "g-fash-jew-2", name: "시계", niceClass: "제14류", type: "optional", description: "시계를 포함하는 경우입니다." },
  ],
  "fash-hat": [
    { id: "g-fash-hat-1", name: "모자", niceClass: "제25류", type: "essential", description: "모자/헤드웨어에 기본 추천됩니다." },
  ],
  "fash-eyewear": [
    { id: "g-fash-eye-1", name: "안경", niceClass: "제9류", type: "essential", description: "안경/선글라스에 기본 추천됩니다." },
    { id: "g-fash-eye-2", name: "안경 소매업", niceClass: "제35류", type: "optional", description: "안경 유통을 겸하는 경우입니다." },
  ],
  "fash-uniform": [
    { id: "g-fash-uni-1", name: "의류", niceClass: "제25류", type: "essential", description: "유니폼/단체복에 기본 추천됩니다." },
    { id: "g-fash-uni-2", name: "의류 제조업", niceClass: "제40류", type: "optional", description: "맞춤 제조 서비스입니다." },
  ],
  "fash-secondhand": [
    { id: "g-fash-2nd-1", name: "의류 소매업", niceClass: "제35류", type: "essential", description: "빈티지/중고 패션 소매에 기본 추천됩니다." },
    { id: "g-fash-2nd-2", name: "의류", niceClass: "제25류", type: "optional", description: "자체 브랜드를 겸하는 경우입니다." },
  ],
  "fash-custom": [
    { id: "g-fash-cst-1", name: "의류 수선업", niceClass: "제37류", type: "essential", description: "맞춤/수선 서비스에 기본 추천됩니다." },
    { id: "g-fash-cst-2", name: "의류", niceClass: "제25류", type: "optional", description: "맞춤 의류 제품입니다." },
  ],

  /* ── 건강 확장 ── */
  "health-protein": [
    { id: "g-health-pro-1", name: "단백질 보충제", niceClass: "제5류", type: "essential", description: "프로틴/운동 보충제에 기본 추천됩니다." },
    { id: "g-health-pro-2", name: "단백질 음료", niceClass: "제32류", type: "optional", description: "음료 형태의 제품입니다." },
  ],
  "health-probiotics": [
    { id: "g-health-prb-1", name: "유산균 제제", niceClass: "제5류", type: "essential", description: "프로바이오틱스에 기본 추천됩니다." },
  ],
  "health-herbal": [
    { id: "g-health-herb-1", name: "한방 건강식품", niceClass: "제5류", type: "essential", description: "한방/약초 식품에 기본 추천됩니다." },
    { id: "g-health-herb-2", name: "의약외품", niceClass: "제5류", type: "optional", description: "의약외품을 포함하는 경우입니다." },
  ],
  "health-collagen": [
    { id: "g-health-col-1", name: "콜라겐 식품", niceClass: "제5류", type: "essential", description: "콜라겐/이너뷰티에 기본 추천됩니다." },
  ],
  "health-kids": [
    { id: "g-health-kid-1", name: "어린이 건강식품", niceClass: "제5류", type: "essential", description: "어린이 건강식품에 기본 추천됩니다." },
  ],
  "health-senior": [
    { id: "g-health-sen-1", name: "건강기능식품", niceClass: "제5류", type: "essential", description: "시니어 건강식품에 기본 추천됩니다." },
  ],
  "health-functional": [
    { id: "g-health-func-1", name: "기능성 음료", niceClass: "제32류", type: "essential", description: "기능성 음료에 기본 추천됩니다." },
  ],
  "health-powder": [
    { id: "g-health-pwd-1", name: "건강식품", niceClass: "제5류", type: "essential", description: "분말/환/즙 제품에 기본 추천됩니다." },
    { id: "g-health-pwd-2", name: "가공식품", niceClass: "제29류", type: "optional", description: "식품 가공 형태인 경우입니다." },
  ],
  "health-detox": [
    { id: "g-health-dtx-1", name: "건강기능식품", niceClass: "제5류", type: "essential", description: "디톡스/클렌즈에 기본 추천됩니다." },
    { id: "g-health-dtx-2", name: "건강 음료", niceClass: "제32류", type: "optional", description: "음료 형태인 경우입니다." },
  ],

  /* ── 교육 확장 ── */
  "edu-language": [
    { id: "g-edu-lang-1", name: "어학원업", niceClass: "제41류", type: "essential", description: "외국어 교육에 기본 추천됩니다." },
  ],
  "edu-coding": [
    { id: "g-edu-code-1", name: "컴퓨터 교육업", niceClass: "제41류", type: "essential", description: "코딩/IT 교육에 기본 추천됩니다." },
  ],
  "edu-art": [
    { id: "g-edu-art-1", name: "예술 교육업", niceClass: "제41류", type: "essential", description: "미술/음악/예체능 교육에 기본 추천됩니다." },
  ],
  "edu-exam": [
    { id: "g-edu-exam-1", name: "학원업", niceClass: "제41류", type: "essential", description: "입시/시험 대비에 기본 추천됩니다." },
    { id: "g-edu-exam-2", name: "교재", niceClass: "제16류", type: "optional", description: "자체 교재 출판 시 추천됩니다." },
  ],
  "edu-certificate": [
    { id: "g-edu-cert-1", name: "직업 훈련업", niceClass: "제41류", type: "essential", description: "자격증/직업 교육에 기본 추천됩니다." },
  ],
  "edu-kindergarten": [
    { id: "g-edu-kinder-1", name: "유아교육업", niceClass: "제41류", type: "essential", description: "유치원/어린이집에 기본 추천됩니다." },
    { id: "g-edu-kinder-2", name: "아동 돌봄업", niceClass: "제45류", type: "optional", description: "돌봄 서비스를 겸하는 경우입니다." },
  ],
  "edu-study": [
    { id: "g-edu-study-1", name: "독서실 운영업", niceClass: "제41류", type: "essential", description: "스터디카페/독서실에 기본 추천됩니다." },
    { id: "g-edu-study-2", name: "카페업", niceClass: "제43류", type: "optional", description: "카페 서비스를 겸하는 경우입니다." },
  ],
  "edu-book": [
    { id: "g-edu-book-1", name: "교재", niceClass: "제16류", type: "essential", description: "교재/학습교구에 기본 추천됩니다." },
    { id: "g-edu-book-2", name: "전자출판물", niceClass: "제9류", type: "optional", description: "전자교재를 포함하는 경우입니다." },
  ],
  "edu-camp": [
    { id: "g-edu-camp-1", name: "교육업", niceClass: "제41류", type: "essential", description: "캠프/체험학습에 기본 추천됩니다." },
  ],
  "edu-corporate": [
    { id: "g-edu-corp-1", name: "기업 교육업", niceClass: "제41류", type: "essential", description: "기업 교육/연수에 기본 추천됩니다." },
    { id: "g-edu-corp-2", name: "경영 컨설팅업", niceClass: "제35류", type: "optional", description: "컨설팅을 겸하는 경우입니다." },
  ],

  /* ── SW/앱 확장 ── */
  "sw-ai": [
    { id: "g-sw-ai-1", name: "인공지능 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-ai-2", name: "인공지능을 이용한 데이터 분석업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-ai-3", name: "다운로드 가능한 인공지능 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-ai-4", name: "인공지능을 이용한 마케팅 자문업", niceClass: "제35류", type: "essential", description: "" },
    { id: "g-sw-ai-5", name: "머신러닝 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-ai-6", name: "자연어 처리 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-ai-7", name: "인공지능을 이용한 컴퓨터 프로그래밍업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-ai-8", name: "인공지능 데이터 처리업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-ai-9", name: "인공지능을 이용한 사업분석업", niceClass: "제35류", type: "optional", description: "" },
    { id: "g-sw-ai-10", name: "인공지능 기반 음성인식 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-ai-11", name: "인공지능 기반 이미지 인식 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-ai-12", name: "인공지능 기술 자문업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-ai-13", name: "챗봇 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-ai-14", name: "인공지능을 이용한 번역 서비스업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-ai-15", name: "인공지능을 이용한 시장조사업", niceClass: "제35류", type: "expansion", description: "" },
  ],
  "sw-security": [
    { id: "g-sw-sec-1", name: "컴퓨터 보안 서비스업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-sec-2", name: "컴퓨터 바이러스 방지 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-sec-3", name: "네트워크 보안 관리 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-sec-4", name: "데이터 암호화 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-sec-5", name: "방화벽 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-sec-6", name: "정보보안 컨설팅업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-sec-7", name: "개인정보 보호 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-sec-8", name: "보안 모니터링 서비스업", niceClass: "제42류", type: "expansion", description: "" },
  ],
  "sw-cloud": [
    { id: "g-sw-cloud-1", name: "클라우드 컴퓨팅 서비스업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-cloud-2", name: "전자 데이터 저장업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-cloud-3", name: "서버 호스팅업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-cloud-4", name: "컴퓨터 소프트웨어 플랫폼 제공업(PaaS)", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-cloud-5", name: "클라우드 컴퓨팅 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-cloud-6", name: "웹 호스팅업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-cloud-7", name: "인프라스트럭처 제공업(IaaS)", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-cloud-8", name: "컴퓨터 서버 관리업", niceClass: "제42류", type: "expansion", description: "" },
  ],
  "sw-erp": [
    { id: "g-sw-erp-1", name: "기업 자원 관리 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-erp-2", name: "업무 자동화 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-erp-3", name: "경영 정보 시스템 설계업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-erp-4", name: "다운로드 가능한 업무관리 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-erp-5", name: "소프트웨어 임시 사용 제공업(SaaS)", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-erp-6", name: "경영 컨설팅업", niceClass: "제35류", type: "expansion", description: "" },
    { id: "g-sw-erp-7", name: "프로젝트 관리 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-erp-8", name: "회계 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
  ],
  "sw-fintech": [
    { id: "g-sw-fin-1", name: "전자결제 대행 서비스업", niceClass: "제36류", type: "essential", description: "" },
    { id: "g-sw-fin-2", name: "금융 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-fin-3", name: "모바일 전자결제 서비스업", niceClass: "제36류", type: "essential", description: "" },
    { id: "g-sw-fin-4", name: "금융정보 제공업", niceClass: "제36류", type: "optional", description: "" },
    { id: "g-sw-fin-5", name: "다운로드 가능한 금융거래 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-fin-6", name: "전자화폐 관련 금융거래업", niceClass: "제36류", type: "optional", description: "" },
    { id: "g-sw-fin-7", name: "금융 데이터 분석 서비스업", niceClass: "제42류", type: "expansion", description: "" },
    { id: "g-sw-fin-8", name: "보험 대리업", niceClass: "제36류", type: "expansion", description: "" },
  ],
  "sw-iot": [
    { id: "g-sw-iot-1", name: "사물인터넷(IoT) 전자기기", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-iot-2", name: "사물인터넷 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-iot-3", name: "스마트홈 제어 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-iot-4", name: "원격 모니터링 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-iot-5", name: "센서장치", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-iot-6", name: "스마트 가전기기", niceClass: "제11류", type: "expansion", description: "" },
    { id: "g-sw-iot-7", name: "무선통신기기", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-iot-8", name: "임베디드 소프트웨어 개발업", niceClass: "제42류", type: "expansion", description: "" },
  ],
  "sw-blockchain": [
    { id: "g-sw-bc-1", name: "블록체인 기술 서비스업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-bc-2", name: "가상자산 거래업", niceClass: "제36류", type: "essential", description: "" },
    { id: "g-sw-bc-3", name: "블록체인 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-bc-4", name: "NFT(대체불가능토큰) 인증 서비스업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-bc-5", name: "전자지갑 서비스업", niceClass: "제36류", type: "optional", description: "" },
    { id: "g-sw-bc-6", name: "분산원장 기술 자문업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-bc-7", name: "스마트계약 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-bc-8", name: "디지털 토큰 발행업", niceClass: "제36류", type: "expansion", description: "" },
  ],
  "sw-game": [
    { id: "g-sw-game-1", name: "다운로드 가능한 게임 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-game-2", name: "온라인 게임 제공업", niceClass: "제41류", type: "essential", description: "" },
    { id: "g-sw-game-3", name: "모바일 게임 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-game-4", name: "게임 개발업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-game-5", name: "비디오 게임기용 프로그램", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-game-6", name: "전자오락기구", niceClass: "제28류", type: "optional", description: "" },
    { id: "g-sw-game-7", name: "가상현실(VR) 게임 소프트웨어", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-game-8", name: "e스포츠 대회 개최업", niceClass: "제41류", type: "expansion", description: "" },
  ],
  "sw-edtech": [
    { id: "g-sw-edt-1", name: "교육용 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-edt-2", name: "온라인 교육업", niceClass: "제41류", type: "essential", description: "" },
    { id: "g-sw-edt-3", name: "다운로드 가능한 교육용 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-edt-4", name: "교육정보 제공업", niceClass: "제41류", type: "essential", description: "" },
    { id: "g-sw-edt-5", name: "교육용 전자출판물 제공업", niceClass: "제41류", type: "optional", description: "" },
    { id: "g-sw-edt-6", name: "교육용 애플리케이션 소프트웨어", niceClass: "제9류", type: "optional", description: "" },
    { id: "g-sw-edt-7", name: "온라인 강좌 제공업", niceClass: "제41류", type: "optional", description: "" },
    { id: "g-sw-edt-8", name: "학습관리시스템(LMS) 제공업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-edt-9", name: "직업훈련 서비스업", niceClass: "제41류", type: "optional", description: "" },
    { id: "g-sw-edt-10", name: "교육 컨설팅업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-11", name: "세미나 개최업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-12", name: "교육연수업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-13", name: "어학교육업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-14", name: "교육시험 서비스업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-15", name: "교육교재 출판업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-16", name: "교육용 비디오 제작업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-17", name: "온라인 학원업", niceClass: "제41류", type: "expansion", description: "" },
    { id: "g-sw-edt-18", name: "교육용 오디오녹음물", niceClass: "제9류", type: "expansion", description: "" },
  ],
  "sw-healthtech": [
    { id: "g-sw-ht-1", name: "의료 소프트웨어 제공업", niceClass: "제42류", type: "essential", description: "" },
    { id: "g-sw-ht-2", name: "다운로드 가능한 건강관리 소프트웨어", niceClass: "제9류", type: "essential", description: "" },
    { id: "g-sw-ht-3", name: "건강정보 제공업", niceClass: "제44류", type: "optional", description: "" },
    { id: "g-sw-ht-4", name: "원격 건강 모니터링 서비스업", niceClass: "제44류", type: "optional", description: "" },
    { id: "g-sw-ht-5", name: "의료 데이터 분석업", niceClass: "제42류", type: "optional", description: "" },
    { id: "g-sw-ht-6", name: "피트니스 모니터링용 전자장치", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-ht-7", name: "건강관리 애플리케이션(앱)", niceClass: "제9류", type: "expansion", description: "" },
    { id: "g-sw-ht-8", name: "원격 의료 서비스업", niceClass: "제44류", type: "expansion", description: "" },
  ],

  /* ── 병원 확장 ── */
  "med-oriental": [
    { id: "g-med-ori-1", name: "한의원업", niceClass: "제44류", type: "essential", description: "한의원/한방에 기본 추천됩니다." },
  ],
  "med-eye": [
    { id: "g-med-eye-1", name: "안과의원업", niceClass: "제44류", type: "essential", description: "안과/시력교정에 기본 추천됩니다." },
  ],
  "med-plastic": [
    { id: "g-med-pla-1", name: "성형외과의원업", niceClass: "제44류", type: "essential", description: "성형외과에 기본 추천됩니다." },
  ],
  "med-mental": [
    { id: "g-med-ment-1", name: "정신건강 상담업", niceClass: "제44류", type: "essential", description: "정신건강/심리상담에 기본 추천됩니다." },
  ],
  "med-rehab": [
    { id: "g-med-reh-1", name: "물리치료업", niceClass: "제44류", type: "essential", description: "재활/물리치료에 기본 추천됩니다." },
  ],
  "med-nursing": [
    { id: "g-med-nur-1", name: "간호 서비스업", niceClass: "제44류", type: "essential", description: "간호/요양 서비스에 기본 추천됩니다." },
  ],
  "med-lab": [
    { id: "g-med-lab-1", name: "의료 검사업", niceClass: "제44류", type: "essential", description: "의료 검사/진단에 기본 추천됩니다." },
    { id: "g-med-lab-2", name: "의료기기", niceClass: "제10류", type: "optional", description: "진단기기를 포함하는 경우입니다." },
  ],
  "med-telemedicine": [
    { id: "g-med-tele-1", name: "원격진료업", niceClass: "제44류", type: "essential", description: "원격진료에 기본 추천됩니다." },
    { id: "g-med-tele-2", name: "의료용 앱", niceClass: "제9류", type: "optional", description: "앱 기반 서비스입니다." },
  ],
  "med-vet": [
    { id: "g-med-vet-1", name: "동물병원업", niceClass: "제44류", type: "essential", description: "수의과/동물 의료에 기본 추천됩니다." },
  ],

  /* ── 반려동물 확장 ── */
  "pet-training": [
    { id: "g-pet-train-1", name: "반려동물 훈련업", niceClass: "제41류", type: "essential", description: "반려동물 훈련에 기본 추천됩니다." },
  ],
  "pet-clothing": [
    { id: "g-pet-cloth-1", name: "반려동물 의류", niceClass: "제18류", type: "essential", description: "반려동물 패션에 기본 추천됩니다." },
  ],
  "pet-health": [
    { id: "g-pet-health-1", name: "반려동물 건강식품", niceClass: "제31류", type: "essential", description: "반려동물 건강식품에 기본 추천됩니다." },
  ],
  "pet-toy": [
    { id: "g-pet-toy-1", name: "반려동물 장난감", niceClass: "제28류", type: "essential", description: "반려동물 장난감에 기본 추천됩니다." },
  ],
  "pet-funeral": [
    { id: "g-pet-fun-1", name: "반려동물 장례업", niceClass: "제45류", type: "essential", description: "반려동물 장례/추모에 기본 추천됩니다." },
  ],
  "pet-insurance": [
    { id: "g-pet-ins-1", name: "동물 보험업", niceClass: "제36류", type: "essential", description: "반려동물 보험에 기본 추천됩니다." },
  ],
  "pet-app": [
    { id: "g-pet-app-1", name: "반려동물 앱", niceClass: "제9류", type: "essential", description: "반려동물 앱/플랫폼에 기본 추천됩니다." },
    { id: "g-pet-app-2", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "플랫폼 서비스입니다." },
  ],
  "pet-cafe": [
    { id: "g-pet-cafe-1", name: "동물카페업", niceClass: "제43류", type: "essential", description: "애견카페/동물카페에 기본 추천됩니다." },
  ],
  "pet-breeding": [
    { id: "g-pet-breed-1", name: "동물 분양업", niceClass: "제44류", type: "essential", description: "브리딩/분양에 기본 추천됩니다." },
  ],

  /* ── 컨설팅 확장 ── */
  "con-hr": [
    { id: "g-con-hr-1", name: "인사 컨설팅업", niceClass: "제35류", type: "essential", description: "인사/채용 컨설팅에 기본 추천됩니다." },
  ],
  "con-it": [
    { id: "g-con-it-1", name: "IT 컨설팅업", niceClass: "제42류", type: "essential", description: "IT 컨설팅에 기본 추천됩니다." },
  ],
  "con-patent": [
    { id: "g-con-pat-1", name: "특허 서비스업", niceClass: "제45류", type: "essential", description: "특허/지식재산 서비스에 기본 추천됩니다." },
  ],
  "con-realestate": [
    { id: "g-con-re-1", name: "부동산 자문업", niceClass: "제36류", type: "essential", description: "부동산 컨설팅에 기본 추천됩니다." },
  ],
  "con-finance": [
    { id: "g-con-fin-1", name: "금융 자문업", niceClass: "제36류", type: "essential", description: "금융/투자 자문에 기본 추천됩니다." },
  ],
  "con-startup": [
    { id: "g-con-start-1", name: "창업 컨설팅업", niceClass: "제35류", type: "essential", description: "창업/스타트업 컨설팅에 기본 추천됩니다." },
  ],
  "con-trade": [
    { id: "g-con-trade-1", name: "무역 컨설팅업", niceClass: "제35류", type: "essential", description: "무역/수출입 컨설팅에 기본 추천됩니다." },
  ],
  "con-environment": [
    { id: "g-con-env-1", name: "환경 컨설팅업", niceClass: "제42류", type: "essential", description: "환경/ESG 컨설팅에 기본 추천됩니다." },
  ],
  "con-translation": [
    { id: "g-con-trans-1", name: "번역업", niceClass: "제41류", type: "essential", description: "번역/통역 서비스에 기본 추천됩니다." },
  ],
  "con-research": [
    { id: "g-con-res-1", name: "시장조사업", niceClass: "제35류", type: "essential", description: "시장조사/리서치에 기본 추천됩니다." },
  ],

  /* ── 가구 확장 ── */
  "fur-office": [
    { id: "g-fur-off-1", name: "사무용 가구", niceClass: "제20류", type: "essential", description: "사무용 가구에 기본 추천됩니다." },
  ],
  "fur-kitchen": [
    { id: "g-fur-kit-1", name: "주방 가구", niceClass: "제20류", type: "essential", description: "주방 가구/수납에 기본 추천됩니다." },
  ],
  "fur-bed": [
    { id: "g-fur-bed-1", name: "침대", niceClass: "제20류", type: "essential", description: "침대/매트리스에 기본 추천됩니다." },
    { id: "g-fur-bed-2", name: "침구류", niceClass: "제24류", type: "optional", description: "침구를 포함하는 경우입니다." },
  ],
  "fur-kids": [
    { id: "g-fur-kids-1", name: "유아용 가구", niceClass: "제20류", type: "essential", description: "유아/아동 가구에 기본 추천됩니다." },
  ],
  "fur-outdoor": [
    { id: "g-fur-out-1", name: "야외용 가구", niceClass: "제20류", type: "essential", description: "야외용 가구에 기본 추천됩니다." },
  ],
  "fur-wallpaper": [
    { id: "g-fur-wall-1", name: "벽지", niceClass: "제27류", type: "essential", description: "벽지/도배에 기본 추천됩니다." },
  ],
  "fur-flooring": [
    { id: "g-fur-floor-1", name: "바닥재", niceClass: "제27류", type: "essential", description: "바닥재/타일에 기본 추천됩니다." },
    { id: "g-fur-floor-2", name: "타일", niceClass: "제19류", type: "optional", description: "건축용 타일을 포함하는 경우입니다." },
  ],
  "fur-custom": [
    { id: "g-fur-cst-1", name: "맞춤 가구 제조업", niceClass: "제40류", type: "essential", description: "맞춤 가구 제작에 기본 추천됩니다." },
    { id: "g-fur-cst-2", name: "가구", niceClass: "제20류", type: "optional", description: "가구 제품 자체입니다." },
  ],
  "fur-antique": [
    { id: "g-fur-ant-1", name: "골동품 소매업", niceClass: "제35류", type: "essential", description: "앤틱/빈티지 가구 소매에 기본 추천됩니다." },
    { id: "g-fur-ant-2", name: "가구", niceClass: "제20류", type: "optional", description: "가구 제품입니다." },
  ],

  /* ── 가전 확장 ── */
  "app-aircon": [
    { id: "g-app-air-1", name: "냉난방 장치", niceClass: "제11류", type: "essential", description: "냉난방/공기청정기에 기본 추천됩니다." },
  ],
  "app-laundry": [
    { id: "g-app-laun-1", name: "세탁기", niceClass: "제7류", type: "essential", description: "세탁기/건조기에 기본 추천됩니다." },
  ],
  "app-vacuum": [
    { id: "g-app-vac-1", name: "청소기", niceClass: "제7류", type: "essential", description: "청소기/로봇청소기에 기본 추천됩니다." },
  ],
  "app-water": [
    { id: "g-app-wat-1", name: "정수기", niceClass: "제11류", type: "essential", description: "정수기에 기본 추천됩니다." },
  ],
  "app-smart": [
    { id: "g-app-smart-1", name: "스마트홈 기기", niceClass: "제9류", type: "essential", description: "스마트홈에 기본 추천됩니다." },
    { id: "g-app-smart-2", name: "가정자동화 시스템", niceClass: "제9류", type: "optional", description: "홈 오토메이션 시스템입니다." },
  ],
  "app-bathroom": [
    { id: "g-app-bath-1", name: "욕실용품", niceClass: "제21류", type: "essential", description: "욕실/위생용품에 기본 추천됩니다." },
  ],
  "app-storage": [
    { id: "g-app-stor-1", name: "수납용품", niceClass: "제20류", type: "essential", description: "수납/정리 용품에 기본 추천됩니다." },
  ],
  "app-stationery": [
    { id: "g-app-stat-1", name: "문구류", niceClass: "제16류", type: "essential", description: "문구/사무용품에 기본 추천됩니다." },
  ],
  "app-candle": [
    { id: "g-app-cand-1", name: "양초", niceClass: "제4류", type: "essential", description: "캔들 제품에 기본 추천됩니다." },
    { id: "g-app-cand-2", name: "방향제", niceClass: "제3류", type: "optional", description: "디퓨저/방향제를 포함하는 경우입니다." },
  ],

  /* ── 스포츠 확장 ── */
  "spt-golf": [
    { id: "g-spt-golf-1", name: "골프 용품", niceClass: "제28류", type: "essential", description: "골프 용품에 기본 추천됩니다." },
    { id: "g-spt-golf-2", name: "골프장 운영업", niceClass: "제41류", type: "optional", description: "골프장 운영 서비스입니다." },
  ],
  "spt-swim": [
    { id: "g-spt-swim-1", name: "수영용품", niceClass: "제28류", type: "essential", description: "수영/수상 스포츠에 기본 추천됩니다." },
    { id: "g-spt-swim-2", name: "수영복", niceClass: "제25류", type: "optional", description: "수영복을 포함하는 경우입니다." },
  ],
  "spt-bike": [
    { id: "g-spt-bike-1", name: "자전거", niceClass: "제12류", type: "essential", description: "자전거/사이클링에 기본 추천됩니다." },
    { id: "g-spt-bike-2", name: "자전거 용품", niceClass: "제12류", type: "optional", description: "자전거 부품/액세서리입니다." },
  ],
  "spt-yoga": [
    { id: "g-spt-yoga-1", name: "체육관업", niceClass: "제41류", type: "essential", description: "요가/필라테스에 기본 추천됩니다." },
    { id: "g-spt-yoga-2", name: "운동용 매트", niceClass: "제28류", type: "optional", description: "요가 매트 등 용품입니다." },
  ],
  "spt-ski": [
    { id: "g-spt-ski-1", name: "스키 용품", niceClass: "제28류", type: "essential", description: "스키/보드에 기본 추천됩니다." },
  ],
  "spt-fishing": [
    { id: "g-spt-fish-1", name: "낚시 용품", niceClass: "제28류", type: "essential", description: "낚시 용품에 기본 추천됩니다." },
  ],
  "spt-martial": [
    { id: "g-spt-mart-1", name: "무술 교육업", niceClass: "제41류", type: "essential", description: "무술/격투기 도장에 기본 추천됩니다." },
  ],
  "spt-esports": [
    { id: "g-spt-esp-1", name: "e스포츠 운영업", niceClass: "제41류", type: "essential", description: "e스포츠/게이밍에 기본 추천됩니다." },
    { id: "g-spt-esp-2", name: "게임 장비", niceClass: "제9류", type: "optional", description: "게이밍 장비를 포함하는 경우입니다." },
  ],
  "spt-travel": [
    { id: "g-spt-trav-1", name: "여행업", niceClass: "제39류", type: "essential", description: "여행/관광에 기본 추천됩니다." },
    { id: "g-spt-trav-2", name: "숙박 예약업", niceClass: "제43류", type: "optional", description: "숙박 예약을 겸하는 경우입니다." },
  ],
  "spt-theme": [
    { id: "g-spt-theme-1", name: "오락 시설 운영업", niceClass: "제41류", type: "essential", description: "테마파크/놀이공원에 기본 추천됩니다." },
  ],

  /* ── 주류 확장 ── */
  "alc-sake": [
    { id: "g-alc-sake-1", name: "사케", niceClass: "제33류", type: "essential", description: "사케/일본주에 기본 추천됩니다." },
  ],
  "alc-makgeolli": [
    { id: "g-alc-mak-1", name: "탁주(막걸리)", niceClass: "제33류", type: "essential", description: "막걸리/탁주에 기본 추천됩니다." },
  ],
  "alc-cocktail": [
    { id: "g-alc-cock-1", name: "칵테일주", niceClass: "제33류", type: "essential", description: "칵테일/RTD에 기본 추천됩니다." },
    { id: "g-alc-cock-2", name: "알코올 음료", niceClass: "제32류", type: "optional", description: "저알코올 음료를 포함하는 경우입니다." },
  ],
  "alc-brewery": [
    { id: "g-alc-brew-1", name: "양조업", niceClass: "제40류", type: "essential", description: "양조장/브루어리에 기본 추천됩니다." },
    { id: "g-alc-brew-2", name: "맥주", niceClass: "제32류", type: "optional", description: "자체 맥주를 판매하는 경우입니다." },
  ],
  "alc-winery": [
    { id: "g-alc-win-1", name: "포도주 양조업", niceClass: "제40류", type: "essential", description: "와이너리에 기본 추천됩니다." },
    { id: "g-alc-win-2", name: "포도주(와인)", niceClass: "제33류", type: "optional", description: "와인 제품입니다." },
  ],
  "alc-import": [
    { id: "g-alc-imp-1", name: "주류 수입업", niceClass: "제35류", type: "essential", description: "수입주류 유통에 기본 추천됩니다." },
    { id: "g-alc-imp-2", name: "주류", niceClass: "제33류", type: "optional", description: "자체 브랜드 주류입니다." },
  ],
  "alc-snack": [
    { id: "g-alc-snk-1", name: "가공식품", niceClass: "제29류", type: "essential", description: "안주/푸드페어링에 기본 추천됩니다." },
    { id: "g-alc-snk-2", name: "주점업", niceClass: "제43류", type: "optional", description: "주점 서비스를 겸하는 경우입니다." },
  ],

  /* ── 건설 확장 ── */
  "const-electrical": [
    { id: "g-const-elec-1", name: "전기 공사업", niceClass: "제37류", type: "essential", description: "전기/전선 공사에 기본 추천됩니다." },
  ],
  "const-plumbing": [
    { id: "g-const-plumb-1", name: "배관 공사업", niceClass: "제37류", type: "essential", description: "배관/설비 공사에 기본 추천됩니다." },
  ],
  "const-painting": [
    { id: "g-const-paint-1", name: "도장 공사업", niceClass: "제37류", type: "essential", description: "도장/도배 공사에 기본 추천됩니다." },
  ],
  "const-window": [
    { id: "g-const-win-1", name: "창호 시공업", niceClass: "제37류", type: "essential", description: "창호/유리 시공에 기본 추천됩니다." },
    { id: "g-const-win-2", name: "유리 제품", niceClass: "제19류", type: "optional", description: "건축용 유리 제품입니다." },
  ],
  "const-roof": [
    { id: "g-const-roof-1", name: "방수 공사업", niceClass: "제37류", type: "essential", description: "지붕/방수 공사에 기본 추천됩니다." },
  ],
  "const-demolition": [
    { id: "g-const-demo-1", name: "해체 공사업", niceClass: "제37류", type: "essential", description: "철거/해체 공사에 기본 추천됩니다." },
  ],
  "const-landscape": [
    { id: "g-const-land-1", name: "조경업", niceClass: "제44류", type: "essential", description: "조경/정원 시공에 기본 추천됩니다." },
    { id: "g-const-land-2", name: "조경 공사업", niceClass: "제37류", type: "optional", description: "시공을 겸하는 경우입니다." },
  ],
  "const-civil": [
    { id: "g-const-civil-1", name: "토목 공사업", niceClass: "제37류", type: "essential", description: "토목 공사에 기본 추천됩니다." },
  ],
  "const-safety": [
    { id: "g-const-safe-1", name: "소방설비 공사업", niceClass: "제37류", type: "essential", description: "안전 설비/소방에 기본 추천됩니다." },
    { id: "g-const-safe-2", name: "소방 기구", niceClass: "제9류", type: "optional", description: "소방 기구를 포함하는 경우입니다." },
  ],

  /* ── 자동차 확장 ── */
  "auto-ev": [
    { id: "g-auto-ev-1", name: "전기자동차", niceClass: "제12류", type: "essential", description: "전기차에 기본 추천됩니다." },
    { id: "g-auto-ev-2", name: "충전기", niceClass: "제9류", type: "optional", description: "충전 인프라를 포함하는 경우입니다." },
  ],
  "auto-wash": [
    { id: "g-auto-wash-1", name: "세차업", niceClass: "제37류", type: "essential", description: "세차/디테일링에 기본 추천됩니다." },
  ],
  "auto-insurance": [
    { id: "g-auto-ins-1", name: "자동차 보험업", niceClass: "제36류", type: "essential", description: "자동차 보험에 기본 추천됩니다." },
  ],
  "auto-used": [
    { id: "g-auto-used-1", name: "중고 자동차 소매업", niceClass: "제35류", type: "essential", description: "중고차 매매에 기본 추천됩니다." },
    { id: "g-auto-used-2", name: "자동차", niceClass: "제12류", type: "optional", description: "차량 제품입니다." },
  ],
  "auto-tires": [
    { id: "g-auto-tire-1", name: "타이어", niceClass: "제12류", type: "essential", description: "타이어/휠에 기본 추천됩니다." },
  ],
  "auto-audio": [
    { id: "g-auto-aud-1", name: "자동차 전자장비", niceClass: "제9류", type: "essential", description: "카오디오/전자장비에 기본 추천됩니다." },
  ],
  "auto-wrap": [
    { id: "g-auto-wrap-1", name: "자동차 도장업", niceClass: "제37류", type: "essential", description: "래핑/튜닝에 기본 추천됩니다." },
  ],
  "auto-driving": [
    { id: "g-auto-drv-1", name: "운전학원업", niceClass: "제41류", type: "essential", description: "운전 교육에 기본 추천됩니다." },
  ],
  "auto-parking": [
    { id: "g-auto-park-1", name: "주차장 운영업", niceClass: "제39류", type: "essential", description: "주차장/발렛에 기본 추천됩니다." },
  ],

  /* ── 통신 확장 ── */
  "tel-podcast": [
    { id: "g-tel-pod-1", name: "오디오 콘텐츠 제공업", niceClass: "제38류", type: "essential", description: "팟캐스트/오디오에 기본 추천됩니다." },
    { id: "g-tel-pod-2", name: "음성 녹음물", niceClass: "제9류", type: "optional", description: "음성 콘텐츠 제품입니다." },
  ],
  "tel-news": [
    { id: "g-tel-news-1", name: "뉴스 제공업", niceClass: "제38류", type: "essential", description: "뉴스/언론에 기본 추천됩니다." },
    { id: "g-tel-news-2", name: "출판업", niceClass: "제41류", type: "optional", description: "출판을 겸하는 경우입니다." },
  ],
  "tel-sns": [
    { id: "g-tel-sns-1", name: "소셜네트워크 서비스업", niceClass: "제38류", type: "essential", description: "SNS/소셜미디어에 기본 추천됩니다." },
    { id: "g-tel-sns-2", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "플랫폼 기술 서비스입니다." },
  ],
  "tel-advertising": [
    { id: "g-tel-ad-1", name: "온라인 광고업", niceClass: "제35류", type: "essential", description: "디지털 광고에 기본 추천됩니다." },
  ],
  "tel-video": [
    { id: "g-tel-vid-1", name: "영상 촬영업", niceClass: "제41류", type: "essential", description: "영상 촬영/편집에 기본 추천됩니다." },
  ],
  "tel-webtoon": [
    { id: "g-tel-wt-1", name: "전자출판물", niceClass: "제9류", type: "essential", description: "웹툰/웹소설에 기본 추천됩니다." },
    { id: "g-tel-wt-2", name: "만화 제작업", niceClass: "제41류", type: "optional", description: "콘텐츠 제작 서비스입니다." },
  ],
  "tel-publishing": [
    { id: "g-tel-pub-1", name: "출판업", niceClass: "제41류", type: "essential", description: "출판에 기본 추천됩니다." },
    { id: "g-tel-pub-2", name: "인쇄물", niceClass: "제16류", type: "optional", description: "인쇄 출판물입니다." },
  ],
  "tel-photo": [
    { id: "g-tel-photo-1", name: "사진 촬영업", niceClass: "제41류", type: "essential", description: "사진/포토 서비스에 기본 추천됩니다." },
  ],

  /* ── 음악 확장 ── */
  "mus-studio": [
    { id: "g-mus-stud-1", name: "녹음 스튜디오업", niceClass: "제41류", type: "essential", description: "녹음 스튜디오에 기본 추천됩니다." },
  ],
  "mus-streaming": [
    { id: "g-mus-str-1", name: "음악 스트리밍 제공업", niceClass: "제38류", type: "essential", description: "음원 스트리밍에 기본 추천됩니다." },
    { id: "g-mus-str-2", name: "음악 녹음물", niceClass: "제9류", type: "optional", description: "디지털 음원 제품입니다." },
  ],
  "mus-dj": [
    { id: "g-mus-dj-1", name: "공연업", niceClass: "제41류", type: "essential", description: "DJ/사운드 서비스에 기본 추천됩니다." },
  ],
  "mus-karaoke": [
    { id: "g-mus-kar-1", name: "노래방업", niceClass: "제41류", type: "essential", description: "노래방/코인노래방에 기본 추천됩니다." },
  ],
  "mus-ticket": [
    { id: "g-mus-tick-1", name: "티켓 예매업", niceClass: "제39류", type: "essential", description: "공연 티켓 예매에 기본 추천됩니다." },
    { id: "g-mus-tick-2", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "예매 플랫폼 서비스입니다." },
  ],
  "mus-rental": [
    { id: "g-mus-rent-1", name: "악기 대여업", niceClass: "제41류", type: "essential", description: "악기/음향 대여에 기본 추천됩니다." },
  ],
  "mus-composition": [
    { id: "g-mus-comp-1", name: "작곡업", niceClass: "제41류", type: "essential", description: "작곡/편곡 서비스에 기본 추천됩니다." },
  ],

  /* ── 제조업 확장 ── */
  "mfg-electronics": [
    { id: "g-mfg-elec-1", name: "전자부품", niceClass: "제9류", type: "essential", description: "전자부품/반도체에 기본 추천됩니다." },
  ],
  "mfg-textile": [
    { id: "g-mfg-text-1", name: "원사", niceClass: "제23류", type: "essential", description: "섬유/원사 제조에 기본 추천됩니다." },
    { id: "g-mfg-text-2", name: "직물", niceClass: "제24류", type: "optional", description: "직물을 포함하는 경우입니다." },
  ],
  "mfg-paper": [
    { id: "g-mfg-paper-1", name: "종이", niceClass: "제16류", type: "essential", description: "종이/포장재에 기본 추천됩니다." },
    { id: "g-mfg-paper-2", name: "포장재", niceClass: "제16류", type: "optional", description: "포장용지를 포함하는 경우입니다." },
  ],
  "mfg-food": [
    { id: "g-mfg-food-1", name: "식품 가공업", niceClass: "제40류", type: "essential", description: "식품 가공/제조에 기본 추천됩니다." },
    { id: "g-mfg-food-2", name: "가공식품", niceClass: "제29류", type: "optional", description: "가공식품 제품입니다." },
  ],
  "mfg-printing": [
    { id: "g-mfg-print-1", name: "인쇄업", niceClass: "제40류", type: "essential", description: "인쇄/출력 서비스에 기본 추천됩니다." },
    { id: "g-mfg-print-2", name: "인쇄물", niceClass: "제16류", type: "optional", description: "인쇄물 제품입니다." },
  ],
  "mfg-metal": [
    { id: "g-mfg-met-1", name: "금속제품", niceClass: "제6류", type: "essential", description: "금속 제품 제조에 기본 추천됩니다." },
    { id: "g-mfg-met-2", name: "금속가공업", niceClass: "제40류", type: "optional", description: "금속 가공 서비스입니다." },
  ],
  "mfg-glass": [
    { id: "g-mfg-glass-1", name: "유리 제품", niceClass: "제21류", type: "essential", description: "유리/세라믹 제조에 기본 추천됩니다." },
    { id: "g-mfg-glass-2", name: "건축용 유리", niceClass: "제19류", type: "optional", description: "건축용 유리를 포함하는 경우입니다." },
  ],
  "mfg-oem": [
    { id: "g-mfg-oem-1", name: "제품 제조 대행업", niceClass: "제40류", type: "essential", description: "OEM/ODM 위탁생산에 기본 추천됩니다." },
  ],

  /* ── 물류 확장 ── */
  "log-courier": [
    { id: "g-log-cour-1", name: "택배업", niceClass: "제39류", type: "essential", description: "택배/퀵서비스에 기본 추천됩니다." },
  ],
  "log-warehouse": [
    { id: "g-log-ware-1", name: "물류 창고업", niceClass: "제39류", type: "essential", description: "풀필먼트/창고에 기본 추천됩니다." },
  ],
  "log-international": [
    { id: "g-log-intl-1", name: "국제 운송업", niceClass: "제39류", type: "essential", description: "국제 물류에 기본 추천됩니다." },
  ],
  "log-moving": [
    { id: "g-log-mov-1", name: "이사 서비스업", niceClass: "제39류", type: "essential", description: "이사/포장 서비스에 기본 추천됩니다." },
  ],
  "log-cold": [
    { id: "g-log-cold-1", name: "냉장 운송업", niceClass: "제39류", type: "essential", description: "냉장/냉동 물류에 기본 추천됩니다." },
  ],
  "log-lastmile": [
    { id: "g-log-last-1", name: "배달 서비스업", niceClass: "제39류", type: "essential", description: "라스트마일 배송에 기본 추천됩니다." },
  ],
  "log-freight": [
    { id: "g-log-frgt-1", name: "화물 운송업", niceClass: "제39류", type: "essential", description: "화물 운송에 기본 추천됩니다." },
  ],
  "log-customs": [
    { id: "g-log-cust-1", name: "통관 대행업", niceClass: "제39류", type: "essential", description: "통관/관세 대행에 기본 추천됩니다." },
  ],
  "log-storage": [
    { id: "g-log-stor-1", name: "보관업", niceClass: "제39류", type: "essential", description: "보관/창고 대여에 기본 추천됩니다." },
  ],

  /* ── 부동산 확장 ── */
  "re-management": [
    { id: "g-re-mgmt-1", name: "부동산 관리업", niceClass: "제36류", type: "essential", description: "부동산 관리에 기본 추천됩니다." },
  ],
  "re-development": [
    { id: "g-re-dev-1", name: "부동산 개발업", niceClass: "제36류", type: "essential", description: "부동산 개발에 기본 추천됩니다." },
    { id: "g-re-dev-2", name: "건설업", niceClass: "제37류", type: "optional", description: "건설을 겸하는 경우입니다." },
  ],
  "re-lease": [
    { id: "g-re-lease-1", name: "부동산 임대업", niceClass: "제36류", type: "essential", description: "임대/리스에 기본 추천됩니다." },
  ],
  "re-appraisal": [
    { id: "g-re-appr-1", name: "부동산 감정평가업", niceClass: "제36류", type: "essential", description: "감정평가에 기본 추천됩니다." },
  ],
  "re-commercial": [
    { id: "g-re-comm-1", name: "상업용 부동산 중개업", niceClass: "제36류", type: "essential", description: "상업용 부동산에 기본 추천됩니다." },
  ],
  "re-officetel": [
    { id: "g-re-off-1", name: "부동산 임대업", niceClass: "제36류", type: "essential", description: "오피스텔/원룸 임대에 기본 추천됩니다." },
  ],
  "re-coworking": [
    { id: "g-re-cow-1", name: "사무실 임대업", niceClass: "제36류", type: "essential", description: "공유오피스에 기본 추천됩니다." },
    { id: "g-re-cow-2", name: "카페업", niceClass: "제43류", type: "optional", description: "카페를 겸하는 경우입니다." },
  ],
  "re-platform": [
    { id: "g-re-plat-1", name: "부동산 정보 제공업", niceClass: "제36류", type: "essential", description: "부동산 플랫폼에 기본 추천됩니다." },
    { id: "g-re-plat-2", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "플랫폼 기술 서비스입니다." },
  ],
  "re-interior": [
    { id: "g-re-int-1", name: "인테리어 중개업", niceClass: "제35류", type: "essential", description: "인테리어 중개에 기본 추천됩니다." },
  ],

  /* ── 엔터테인먼트 확장 ── */
  "ent-film": [
    { id: "g-ent-film-1", name: "영화 제작업", niceClass: "제41류", type: "essential", description: "영화 제작/배급에 기본 추천됩니다." },
  ],
  "ent-drama": [
    { id: "g-ent-drama-1", name: "드라마 제작업", niceClass: "제41류", type: "essential", description: "드라마/시리즈 제작에 기본 추천됩니다." },
  ],
  "ent-animation": [
    { id: "g-ent-anim-1", name: "애니메이션 제작업", niceClass: "제41류", type: "essential", description: "애니메이션에 기본 추천됩니다." },
    { id: "g-ent-anim-2", name: "애니메이션 캐릭터 상품", niceClass: "제28류", type: "optional", description: "캐릭터 상품을 겸하는 경우입니다." },
  ],
  "ent-talent": [
    { id: "g-ent-tal-1", name: "연예 매니지먼트업", niceClass: "제41류", type: "essential", description: "연예 매니지먼트에 기본 추천됩니다." },
  ],
  "ent-fanplatform": [
    { id: "g-ent-fan-1", name: "온라인 커뮤니티 운영업", niceClass: "제38류", type: "essential", description: "팬 플랫폼에 기본 추천됩니다." },
    { id: "g-ent-fan-2", name: "온라인 플랫폼 제공업", niceClass: "제42류", type: "optional", description: "플랫폼 기술 서비스입니다." },
  ],
  "ent-character": [
    { id: "g-ent-char-1", name: "캐릭터 상품", niceClass: "제28류", type: "essential", description: "캐릭터/IP 사업에 기본 추천됩니다." },
    { id: "g-ent-char-2", name: "캐릭터 라이선스업", niceClass: "제35류", type: "optional", description: "라이선스 사업입니다." },
  ],
  "ent-vr": [
    { id: "g-ent-vr-1", name: "VR/AR 콘텐츠 제공업", niceClass: "제41류", type: "essential", description: "VR/AR 콘텐츠에 기본 추천됩니다." },
    { id: "g-ent-vr-2", name: "VR 기기", niceClass: "제9류", type: "optional", description: "VR/AR 하드웨어입니다." },
  ],
  "ent-arcade": [
    { id: "g-ent-arc-1", name: "오락실 운영업", niceClass: "제41류", type: "essential", description: "오락실/게임센터에 기본 추천됩니다." },
  ],
  "ent-escape": [
    { id: "g-ent-esc-1", name: "오락 시설 운영업", niceClass: "제41류", type: "essential", description: "방탈출/체험형 놀이에 기본 추천됩니다." },
  ],
  "ent-party": [
    { id: "g-ent-party-1", name: "파티 공간 대여업", niceClass: "제43류", type: "essential", description: "파티/이벤트 공간에 기본 추천됩니다." },
    { id: "g-ent-party-2", name: "이벤트 기획업", niceClass: "제41류", type: "optional", description: "이벤트 기획을 겸하는 경우입니다." },
  ],
};
