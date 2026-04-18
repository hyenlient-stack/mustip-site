/**
 * 류별 참고 브랜드 데이터
 * 출처: 키프리스(KIPRIS) 등록 상표 기반 / 공개 정보 참고
 * 최종 검토: 2025년
 *
 * 실제 출원 시 지정상품은 키프리스(www.kipris.or.kr)에서 직접 확인하세요.
 */
import type { BrandReference } from "./types";

export const brandReferences: BrandReference[] = [
  /* ── 제1류: 공업용 화학제품 ── */
  {
    id: "brand-lgchem",
    name: "LG화학",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "합성수지", "화학 원료", "전지용 전해질"] },
      { niceClass: "제17류", keyGoods: ["플라스틱 반제품", "합성수지 성형품"] },
    ],
  },
  {
    id: "brand-lottechem",
    name: "롯데케미칼",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "합성수지", "폴리에틸렌"] },
    ],
  },
  {
    id: "brand-oci",
    name: "OCI",
    registrations: [
      { niceClass: "제1류", keyGoods: ["공업용 화학제품", "공업용 산화물", "과산화수소"] },
      { niceClass: "제4류", keyGoods: ["공업용 오일"] },
    ],
  },
  {
    id: "brand-skchem",
    name: "SK케미칼",
    registrations: [
      { niceClass: "제1류", keyGoods: ["합성수지", "화학 원료", "PET 수지"] },
      { niceClass: "제5류", keyGoods: ["의약품", "백신"] },
    ],
  },
  {
    id: "brand-kumhopetrochem",
    name: "금호석유화학",
    registrations: [
      { niceClass: "제1류", keyGoods: ["합성고무", "화학 원료", "스티렌·부타디엔 고무"] },
      { niceClass: "제17류", keyGoods: ["고무제품", "합성고무 성형품"] },
    ],
  },

  /* ── 제2류: 페인트, 도료, 잉크 ── */
  {
    id: "brand-kcc-paint",
    name: "KCC (페인트)",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "코팅제", "방청제", "에나멜"] },
      { niceClass: "제19류", keyGoods: ["건축용 유리", "창호재"] },
    ],
  },
  {
    id: "brand-noroo",
    name: "노루페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["수성 페인트", "유성 페인트", "건축용 도료", "바니시"] },
    ],
  },
  {
    id: "brand-samhwa",
    name: "삼화페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "에나멜", "방청 도료", "목재용 도료"] },
    ],
  },
  {
    id: "brand-jebisco",
    name: "제비스코",
    registrations: [
      { niceClass: "제2류", keyGoods: ["페인트", "바니시", "래커", "옻칠"] },
    ],
  },
  {
    id: "brand-chokwang",
    name: "조광페인트",
    registrations: [
      { niceClass: "제2류", keyGoods: ["선박용 도료", "공업용 페인트", "방오 도료"] },
    ],
  },

  /* ── 제3류: 화장품, 세정용품 ── */
  {
    id: "brand-amorepacific",
    name: "아모레퍼시픽",
    registrations: [
      { niceClass: "제3류", keyGoods: ["화장품", "기초화장품", "색조화장품", "향수", "샴푸"] },
      { niceClass: "제44류", keyGoods: ["미용업", "피부관리업"] },
    ],
  },
  {
    id: "brand-lghhcare",
    name: "LG생활건강",
    registrations: [
      { niceClass: "제3류", keyGoods: ["화장품", "치약", "샴푸", "바디워시", "세정제"] },
      { niceClass: "제5류", keyGoods: ["의약외품", "구강청결제"] },
    ],
  },
  {
    id: "brand-innisfree",
    name: "이니스프리",
    registrations: [
      { niceClass: "제3류", keyGoods: ["기초화장품", "마스크팩", "자외선 차단제", "토너"] },
    ],
  },
  {
    id: "brand-drjart",
    name: "닥터자르트",
    registrations: [
      { niceClass: "제3류", keyGoods: ["스킨케어 화장품", "비비크림", "마스크팩", "세럼"] },
    ],
  },
  {
    id: "brand-missha",
    name: "미샤 (MISSHA)",
    registrations: [
      { niceClass: "제3류", keyGoods: ["기초화장품", "색조화장품", "파운데이션", "선크림"] },
    ],
  },

  /* ── 제4류: 연료, 오일 ── */
  {
    id: "brand-skenergy",
    name: "SK에너지",
    registrations: [
      { niceClass: "제4류", keyGoods: ["가솔린", "경유", "등유", "연료유", "윤활유"] },
    ],
  },
  {
    id: "brand-gscaltex",
    name: "GS칼텍스",
    registrations: [
      { niceClass: "제4류", keyGoods: ["윤활유", "연료", "기어오일", "엔진오일"] },
    ],
  },
  {
    id: "brand-soil",
    name: "S-OIL",
    registrations: [
      { niceClass: "제4류", keyGoods: ["연료", "윤활유", "산업용 오일", "합성 윤활유"] },
    ],
  },
  {
    id: "brand-hdoilbank",
    name: "현대오일뱅크",
    registrations: [
      { niceClass: "제4류", keyGoods: ["연료", "윤활유", "등유", "항공유"] },
    ],
  },
  {
    id: "brand-shell",
    name: "쉘 (Shell)",
    registrations: [
      { niceClass: "제4류", keyGoods: ["윤활유", "그리스", "합성 엔진오일", "유압유"] },
    ],
  },

  /* ── 제5류: 의약품, 건강보조식품 ── */
  {
    id: "brand-yuhan",
    name: "유한양행",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "비타민제", "항생제", "감기약", "소화제"] },
    ],
  },
  {
    id: "brand-dongapharm",
    name: "동아제약",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "드링크제", "비타민", "수액제"] },
    ],
  },
  {
    id: "brand-chongkundang",
    name: "종근당",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "항생제", "고혈압약", "당뇨병 치료제"] },
    ],
  },
  {
    id: "brand-daewoong",
    name: "대웅제약",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "보톡스", "소화제", "위장약"] },
    ],
  },
  {
    id: "brand-hanmi",
    name: "한미약품",
    registrations: [
      { niceClass: "제5류", keyGoods: ["의약품", "인슐린 제제", "항암제", "복합 고혈압약"] },
    ],
  },

  /* ── 제6류: 비귀금속, 철강 ── */
  {
    id: "brand-posco",
    name: "POSCO",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "철강 제품", "강판", "스테인리스강"] },
    ],
  },
  {
    id: "brand-hyundaisteel",
    name: "현대제철",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "철강판", "H형강", "철근"] },
    ],
  },
  {
    id: "brand-dongkuk",
    name: "동국제강",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강철", "형강", "칼라강판", "철근"] },
    ],
  },
  {
    id: "brand-kgsteel",
    name: "KG스틸",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강판", "냉연강판", "아연도금강판", "전기강판"] },
    ],
  },
  {
    id: "brand-seah",
    name: "세아제강",
    registrations: [
      { niceClass: "제6류", keyGoods: ["강관", "파이프", "스테인리스 강관", "구조용 강관"] },
    ],
  },

  /* ── 제7류: 기계류, 공작기계 ── */
  {
    id: "brand-doosanbobcat",
    name: "두산밥캣",
    registrations: [
      { niceClass: "제7류", keyGoods: ["건설기계", "굴착기", "로더", "스키드 스티어 로더"] },
    ],
  },
  {
    id: "brand-hdmodern",
    name: "HD현대 (두산인프라코어)",
    registrations: [
      { niceClass: "제7류", keyGoods: ["굴착기", "건설기계", "지게차", "엔진"] },
    ],
  },
  {
    id: "brand-ls",
    name: "LS산전",
    registrations: [
      { niceClass: "제7류", keyGoods: ["산업용 기계", "변압기", "차단기", "인버터"] },
      { niceClass: "제9류", keyGoods: ["전력 제어 장치", "PLC"] },
    ],
  },
  {
    id: "brand-hwashin",
    name: "화신정공",
    registrations: [
      { niceClass: "제7류", keyGoods: ["공작기계", "프레스 기계", "성형기계"] },
    ],
  },
  {
    id: "brand-hanwha-aero",
    name: "한화에어로스페이스",
    registrations: [
      { niceClass: "제7류", keyGoods: ["항공기 엔진 부품", "공작기계", "산업용 로봇"] },
    ],
  },

  /* ── 제8류: 수공구, 칼날 ── */
  {
    id: "brand-stanley",
    name: "스탠리 (Stanley)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["수공구", "드라이버", "해머", "플라이어"] },
      { niceClass: "제7류", keyGoods: ["전동공구"] },
    ],
  },
  {
    id: "brand-bosch-tool",
    name: "보쉬 공구 (Bosch Tools)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["수공구", "드라이버 세트"] },
      { niceClass: "제7류", keyGoods: ["전동 드릴", "전동공구", "그라인더"] },
    ],
  },
  {
    id: "brand-mck",
    name: "맥가이버 (McGyver)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["다용도 수공구", "포켓 나이프", "캠핑 공구"] },
    ],
  },
  {
    id: "brand-crescent",
    name: "크레센트 (Crescent)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["조절 렌치", "플라이어", "드라이버"] },
    ],
  },
  {
    id: "brand-comeron",
    name: "코메론 (Komelon)",
    registrations: [
      { niceClass: "제8류", keyGoods: ["줄자", "측량 테이프", "수평기"] },
    ],
  },

  /* ── 제9류: 전자기기, 컴퓨터, 소프트웨어 ── */
  {
    id: "brand-samsung-elec",
    name: "삼성전자 (Samsung)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["스마트폰", "태블릿컴퓨터", "반도체", "TV", "노트북"] },
      { niceClass: "제11류", keyGoods: ["냉장고", "세탁기", "에어컨", "전자레인지"] },
      { niceClass: "제35류", keyGoods: ["전자제품 소매업", "온라인 쇼핑몰 운영업"] },
    ],
  },
  {
    id: "brand-lg-elec",
    name: "LG전자",
    registrations: [
      { niceClass: "제9류", keyGoods: ["스마트폰", "TV", "모니터", "노트북"] },
      { niceClass: "제11류", keyGoods: ["냉장고", "에어컨", "세탁기", "건조기"] },
    ],
  },
  {
    id: "brand-apple",
    name: "애플 (Apple)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["아이폰", "맥북", "아이패드", "애플워치", "에어팟"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "클라우드 서비스업"] },
    ],
  },
  {
    id: "brand-skhynix",
    name: "SK하이닉스",
    registrations: [
      { niceClass: "제9류", keyGoods: ["반도체", "메모리", "DRAM", "NAND 플래시"] },
    ],
  },
  {
    id: "brand-kakao-app",
    name: "카카오 (Kakao)",
    registrations: [
      { niceClass: "제9류", keyGoods: ["모바일 애플리케이션 소프트웨어", "다운로드 가능한 앱"] },
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "소셜 네트워크 서비스업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "플랫폼 서비스업"] },
    ],
  },

  /* ── 제10류: 의료기기 ── */
  {
    id: "brand-osstem",
    name: "오스템임플란트",
    registrations: [
      { niceClass: "제10류", keyGoods: ["치과용 임플란트", "치과용 드릴", "치과용 기구"] },
      { niceClass: "제44류", keyGoods: ["치과 진료업"] },
    ],
  },
  {
    id: "brand-inbody",
    name: "인바디 (InBody)",
    registrations: [
      { niceClass: "제10류", keyGoods: ["체성분 분석기", "의료용 체중계", "신체 측정기기"] },
    ],
  },
  {
    id: "brand-vatech",
    name: "바텍 (Vatech)",
    registrations: [
      { niceClass: "제10류", keyGoods: ["치과용 X선 촬영 장치", "디지털 X레이 센서"] },
    ],
  },
  {
    id: "brand-jwmedical",
    name: "JW중외제약",
    registrations: [
      { niceClass: "제10류", keyGoods: ["의료용 봉합사", "수술용 기구"] },
      { niceClass: "제5류", keyGoods: ["수액제", "의약품"] },
    ],
  },
  {
    id: "brand-lutronic",
    name: "루트로닉",
    registrations: [
      { niceClass: "제10류", keyGoods: ["레이저 치료기기", "피부미용 의료기기"] },
    ],
  },

  /* ── 제11류: 냉난방, 조명, 조리기기 ── */
  {
    id: "brand-cuckoo",
    name: "쿠쿠 (Cuckoo)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["전기밥솥", "정수기", "공기청정기", "IH 압력밥솥"] },
    ],
  },
  {
    id: "brand-winix",
    name: "위닉스 (Winix)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["공기청정기", "제습기", "가습기", "에어워셔"] },
    ],
  },
  {
    id: "brand-coway",
    name: "코웨이 (Coway)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["정수기", "공기청정기", "비데", "연수기"] },
    ],
  },
  {
    id: "brand-rinnai",
    name: "린나이 (Rinnai)",
    registrations: [
      { niceClass: "제11류", keyGoods: ["가스레인지", "보일러", "온수기", "가스오븐"] },
    ],
  },
  {
    id: "brand-kdl",
    name: "귀뚜라미",
    registrations: [
      { niceClass: "제11류", keyGoods: ["보일러", "온수기", "전기보일러", "가스보일러"] },
    ],
  },

  /* ── 제12류: 운송기계, 타이어 ── */
  {
    id: "brand-hyundai-motor",
    name: "현대자동차",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "승용차", "전기자동차", "SUV", "자동차 부품"] },
    ],
  },
  {
    id: "brand-kia",
    name: "기아 (KIA)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "SUV", "전기자동차", "세단"] },
    ],
  },
  {
    id: "brand-hankooktire",
    name: "한국타이어 (Hankook)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["타이어", "자동차용 타이어", "트럭용 타이어"] },
    ],
  },
  {
    id: "brand-nexen-tire",
    name: "넥센타이어",
    registrations: [
      { niceClass: "제12류", keyGoods: ["타이어", "승용차용 타이어", "SUV 타이어"] },
    ],
  },
  {
    id: "brand-kgmobility",
    name: "KG모빌리티 (쌍용)",
    registrations: [
      { niceClass: "제12류", keyGoods: ["자동차", "SUV", "픽업트럭"] },
    ],
  },

  /* ── 제13류: 화기, 화약 ── */
  {
    id: "brand-hanwha-def",
    name: "한화 (방산)",
    registrations: [
      { niceClass: "제13류", keyGoods: ["화약", "폭약", "발파 제품"] },
      { niceClass: "제7류", keyGoods: ["산업용 기계"] },
    ],
  },
  {
    id: "brand-poongsan",
    name: "풍산",
    registrations: [
      { niceClass: "제13류", keyGoods: ["탄약", "포탄", "탄두"] },
      { niceClass: "제6류", keyGoods: ["동합금", "황동 소재"] },
    ],
  },
  {
    id: "brand-lignex",
    name: "LIG넥스원",
    registrations: [
      { niceClass: "제13류", keyGoods: ["미사일 부품", "유도무기 부품"] },
    ],
  },
  {
    id: "brand-vicphos",
    name: "빅피스 (VicPhos)",
    registrations: [
      { niceClass: "제13류", keyGoods: ["연막탄", "신호탄"] },
    ],
  },
  {
    id: "brand-samyangchem",
    name: "삼양화학 (방산)",
    registrations: [
      { niceClass: "제13류", keyGoods: ["화약", "공업용 폭약"] },
    ],
  },

  /* ── 제14류: 귀금속, 시계, 장신구 ── */
  {
    id: "brand-jestina",
    name: "제이에스티나 (J.Estina)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["귀금속 장신구", "목걸이", "귀걸이", "반지"] },
      { niceClass: "제18류", keyGoods: ["핸드백", "지갑"] },
    ],
  },
  {
    id: "brand-romanson",
    name: "로만손 (Romanson)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["손목시계", "시계 부품", "시계 밴드"] },
    ],
  },
  {
    id: "brand-goldendew",
    name: "골든듀 (Golden Dew)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["금 장신구", "다이아몬드 주얼리", "귀금속 팔찌"] },
    ],
  },
  {
    id: "brand-stonehenge",
    name: "스톤헨지 (Stonehenge)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["주얼리", "귀금속 목걸이", "귀걸이"] },
      { niceClass: "제18류", keyGoods: ["가죽 지갑", "핸드백"] },
    ],
  },
  {
    id: "brand-minigold",
    name: "미니골드 (Minigold)",
    registrations: [
      { niceClass: "제14류", keyGoods: ["금 주얼리", "귀금속 장신구", "골드 귀걸이"] },
    ],
  },

  /* ── 제15류: 악기 ── */
  {
    id: "brand-samick",
    name: "삼익악기 (Samick)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "전자악기", "기타", "바이올린"] },
    ],
  },
  {
    id: "brand-youngchang",
    name: "영창뮤직 (Young Chang)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "디지털 피아노", "전자 키보드"] },
    ],
  },
  {
    id: "brand-yamaha",
    name: "야마하 (Yamaha)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["피아노", "기타", "드럼", "관악기", "전자악기"] },
    ],
  },
  {
    id: "brand-roland",
    name: "롤랜드 (Roland)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["전자 피아노", "전자 드럼", "디지털 피아노", "신시사이저"] },
    ],
  },
  {
    id: "brand-gibson",
    name: "깁슨 (Gibson)",
    registrations: [
      { niceClass: "제15류", keyGoods: ["기타", "일렉트릭 기타", "어쿠스틱 기타", "베이스 기타"] },
    ],
  },

  /* ── 제16류: 종이, 인쇄물, 문구 ── */
  {
    id: "brand-monami",
    name: "모나미 (Monami)",
    registrations: [
      { niceClass: "제16류", keyGoods: ["볼펜", "사인펜", "색연필", "형광펜", "필기구"] },
    ],
  },
  {
    id: "brand-dongapencil",
    name: "동아연필",
    registrations: [
      { niceClass: "제16류", keyGoods: ["연필", "샤프연필", "지우개", "문구용품"] },
    ],
  },
  {
    id: "brand-hansol-paper",
    name: "한솔제지",
    registrations: [
      { niceClass: "제16류", keyGoods: ["복사지", "인쇄용지", "특수지", "코팅지"] },
    ],
  },
  {
    id: "brand-moonhakdongne",
    name: "문학동네",
    registrations: [
      { niceClass: "제16류", keyGoods: ["도서", "소설", "문학작품", "출판물"] },
    ],
  },
  {
    id: "brand-minimelody",
    name: "스프링노트 (모닝글로리)",
    registrations: [
      { niceClass: "제16류", keyGoods: ["공책", "다이어리", "노트패드", "스티커"] },
    ],
  },

  /* ── 제17류: 고무, 플라스틱 반제품 ── */
  {
    id: "brand-nexen-rubber",
    name: "넥센 (고무소재)",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무제품", "씰링재", "호스"] },
      { niceClass: "제12류", keyGoods: ["타이어"] },
    ],
  },
  {
    id: "brand-pyunghwa",
    name: "평화산업",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무 호스", "씰링재", "방진 고무", "자동차용 고무부품"] },
    ],
  },
  {
    id: "brand-dongahwasung",
    name: "동아화성",
    registrations: [
      { niceClass: "제17류", keyGoods: ["고무패킹", "씰재", "O링", "개스킷"] },
    ],
  },
  {
    id: "brand-kolon-ind",
    name: "코오롱인더스트리",
    registrations: [
      { niceClass: "제17류", keyGoods: ["플라스틱 소재", "아라미드 소재", "엔지니어링 플라스틱"] },
      { niceClass: "제23류", keyGoods: ["아라미드 원사"] },
    ],
  },
  {
    id: "brand-skc-film",
    name: "SKC",
    registrations: [
      { niceClass: "제17류", keyGoods: ["PET 필름", "플라스틱 필름", "반제품 필름"] },
      { niceClass: "제1류", keyGoods: ["화학 원료"] },
    ],
  },

  /* ── 제18류: 가죽제품, 가방 ── */
  {
    id: "brand-mcm",
    name: "MCM",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가죽 핸드백", "여행가방", "지갑", "백팩"] },
      { niceClass: "제25류", keyGoods: ["가죽 벨트", "지갑용 의류 액세서리"] },
    ],
  },
  {
    id: "brand-samsonite",
    name: "쌤소나이트 (Samsonite)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["여행가방", "캐리어", "배낭", "서류 가방"] },
    ],
  },
  {
    id: "brand-louisquatorze",
    name: "루이까또즈 (Louis Quatorze)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["핸드백", "지갑", "토트백", "숄더백"] },
    ],
  },
  {
    id: "brand-mandarinaduck",
    name: "만다리나덕 (Mandarina Duck)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가방", "배낭", "여행가방", "핸드백"] },
    ],
  },
  {
    id: "brand-beanpole",
    name: "빈폴 (Bean Pole)",
    registrations: [
      { niceClass: "제18류", keyGoods: ["가죽가방", "배낭", "지갑", "숄더백"] },
      { niceClass: "제25류", keyGoods: ["의류", "니트", "코트"] },
    ],
  },

  /* ── 제19류: 건축자재 ── */
  {
    id: "brand-lxhausys",
    name: "LX하우시스",
    registrations: [
      { niceClass: "제19류", keyGoods: ["창호", "단열재", "건축용 유리", "방음패널"] },
      { niceClass: "제27류", keyGoods: ["바닥재", "벽지", "PVC 바닥재"] },
    ],
  },
  {
    id: "brand-kccglass",
    name: "KCC글라스",
    registrations: [
      { niceClass: "제19류", keyGoods: ["건축용 유리", "복층유리", "강화유리"] },
    ],
  },
  {
    id: "brand-ssangyong-cement",
    name: "쌍용씨앤이 (시멘트)",
    registrations: [
      { niceClass: "제19류", keyGoods: ["시멘트", "건축용 모르타르", "내화 건축자재"] },
    ],
  },
  {
    id: "brand-byuksan",
    name: "벽산",
    registrations: [
      { niceClass: "제19류", keyGoods: ["단열재", "건축용 보드", "석고보드", "시멘트 보드"] },
    ],
  },
  {
    id: "brand-hanil-cement",
    name: "한일시멘트",
    registrations: [
      { niceClass: "제19류", keyGoods: ["시멘트", "콘크리트 블록", "건축용 석회"] },
    ],
  },

  /* ── 제20류: 가구 ── */
  {
    id: "brand-hanssem",
    name: "한샘 (Hanssem)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["주방가구", "침실가구", "욕실 수납장", "붙박이장"] },
    ],
  },
  {
    id: "brand-ikea",
    name: "이케아 (IKEA)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["가구", "수납장", "책상", "소파", "침대 프레임"] },
    ],
  },
  {
    id: "brand-iloom",
    name: "일룸 (iloom)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["어린이 가구", "서재 가구", "책상", "책장"] },
    ],
  },
  {
    id: "brand-livart",
    name: "리바트 (Livart)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["사무용 가구", "가정용 가구", "사무 의자", "소파"] },
    ],
  },
  {
    id: "brand-acebeds",
    name: "에이스침대 (ACE Beds)",
    registrations: [
      { niceClass: "제20류", keyGoods: ["침대", "매트리스", "침대 프레임", "베드 세트"] },
    ],
  },

  /* ── 제21류: 주방용품, 식기 ── */
  {
    id: "brand-locknlock",
    name: "락앤락 (Lock & Lock)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["밀폐용기", "텀블러", "보온병", "물병"] },
    ],
  },
  {
    id: "brand-glassloc",
    name: "글라스락 (Glasslock)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["유리 밀폐용기", "내열 유리용기", "보관 용기"] },
    ],
  },
  {
    id: "brand-happycall",
    name: "해피콜 (Happycall)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["프라이팬", "냄비", "양면팬", "조리도구 세트"] },
    ],
  },
  {
    id: "brand-tefal",
    name: "테팔 (Tefal)",
    registrations: [
      { niceClass: "제21류", keyGoods: ["프라이팬", "냄비", "조리도구", "전기주전자"] },
    ],
  },
  {
    id: "brand-pnpungnyeon",
    name: "PN풍년",
    registrations: [
      { niceClass: "제21류", keyGoods: ["압력밥솥", "냄비", "솥", "조리용기"] },
    ],
  },

  /* ── 제22류: 로프, 텐트, 천막 ── */
  {
    id: "brand-kovea",
    name: "코베아 (Kovea)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "캠핑 천막", "방수포"] },
      { niceClass: "제11류", keyGoods: ["캠핑용 스토브", "버너"] },
    ],
  },
  {
    id: "brand-coleman",
    name: "콜맨 (Coleman)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "침낭", "해먹", "타프"] },
    ],
  },
  {
    id: "brand-blackyak",
    name: "블랙야크 (BLACKYAK)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["등산 배낭", "캠핑 텐트", "트레킹 폴"] },
      { niceClass: "제25류", keyGoods: ["등산복", "아웃도어 재킷"] },
    ],
  },
  {
    id: "brand-snowpeak",
    name: "스노우피크 (Snow Peak)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "타프", "해먹"] },
    ],
  },
  {
    id: "brand-northface-tent",
    name: "노스페이스 (The North Face)",
    registrations: [
      { niceClass: "제22류", keyGoods: ["텐트", "백팩", "슬리핑백"] },
      { niceClass: "제25류", keyGoods: ["등산복", "패딩 재킷", "트레킹 바지"] },
    ],
  },

  /* ── 제23류: 원사 ── */
  {
    id: "brand-hyosung-tnc",
    name: "효성TNC",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "나일론 원사", "스판덱스 원사"] },
    ],
  },
  {
    id: "brand-taekwang",
    name: "태광산업",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "나일론 원사"] },
    ],
  },
  {
    id: "brand-toray",
    name: "도레이첨단소재",
    registrations: [
      { niceClass: "제23류", keyGoods: ["나일론 원사", "폴리에스터 원사", "탄소섬유 원사"] },
    ],
  },
  {
    id: "brand-kolon-fiber",
    name: "코오롱인더스트리 (섬유)",
    registrations: [
      { niceClass: "제23류", keyGoods: ["아라미드 원사", "나일론 원사", "고강도 섬유"] },
    ],
  },
  {
    id: "brand-huvis",
    name: "휴비스 (Huvis)",
    registrations: [
      { niceClass: "제23류", keyGoods: ["폴리에스터 원사", "복합 섬유", "기능성 원사"] },
    ],
  },

  /* ── 제24류: 직물, 침구 ── */
  {
    id: "brand-evazari",
    name: "이브자리",
    registrations: [
      { niceClass: "제24류", keyGoods: ["침구류", "이불", "베개 커버", "시트"] },
    ],
  },
  {
    id: "brand-kyungbang",
    name: "경방",
    registrations: [
      { niceClass: "제24류", keyGoods: ["면직물", "혼방직물", "폴리에스터 직물"] },
    ],
  },
  {
    id: "brand-hanilcarpet",
    name: "한일카펫",
    registrations: [
      { niceClass: "제24류", keyGoods: ["카펫", "러그", "매트"] },
      { niceClass: "제27류", keyGoods: ["바닥용 카펫"] },
    ],
  },
  {
    id: "brand-hyundaicrafts",
    name: "현대리바트 (직물)",
    registrations: [
      { niceClass: "제24류", keyGoods: ["가구용 직물", "패브릭 소재", "인테리어 직물"] },
    ],
  },
  {
    id: "brand-kolon-tex",
    name: "코오롱글로텍",
    registrations: [
      { niceClass: "제24류", keyGoods: ["자동차 내장 직물", "산업용 직물"] },
    ],
  },

  /* ── 제25류: 의류, 신발 ── */
  {
    id: "brand-nike",
    name: "나이키 (Nike)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "스포츠웨어", "트레이닝복", "모자"] },
      { niceClass: "제28류", keyGoods: ["스포츠용품", "운동 보호대"] },
    ],
  },
  {
    id: "brand-adidas",
    name: "아디다스 (Adidas)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "트레이닝복", "스포츠 양말", "조거팬츠"] },
    ],
  },
  {
    id: "brand-newbalance",
    name: "뉴발란스 (New Balance)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["운동화", "스포츠웨어", "러닝화", "캐주얼 신발"] },
    ],
  },
  {
    id: "brand-musinsa-std",
    name: "무신사스탠다드",
    registrations: [
      { niceClass: "제25류", keyGoods: ["티셔츠", "청바지", "후드티", "슬랙스"] },
    ],
  },
  {
    id: "brand-covernat",
    name: "커버낫 (Covernat)",
    registrations: [
      { niceClass: "제25류", keyGoods: ["스트릿 의류", "후드 스웨트셔츠", "티셔츠", "점퍼"] },
    ],
  },

  /* ── 제26류: 단추, 지퍼, 레이스 ── */
  {
    id: "brand-ykk",
    name: "YKK",
    registrations: [
      { niceClass: "제26류", keyGoods: ["지퍼", "파스너", "금속 지퍼", "플라스틱 지퍼"] },
    ],
  },
  {
    id: "brand-woojin",
    name: "우진화스너",
    registrations: [
      { niceClass: "제26류", keyGoods: ["단추", "금속 파스너", "의류용 버클"] },
    ],
  },
  {
    id: "brand-taekwang-zip",
    name: "태광지퍼",
    registrations: [
      { niceClass: "제26류", keyGoods: ["지퍼", "나일론 지퍼", "의류용 지퍼"] },
    ],
  },
  {
    id: "brand-sungchang-lace",
    name: "성창레이스",
    registrations: [
      { niceClass: "제26류", keyGoods: ["자수", "레이스", "의류 장식용 자수"] },
    ],
  },
  {
    id: "brand-kolon-fnt",
    name: "코오롱글로텍 (파스너)",
    registrations: [
      { niceClass: "제26류", keyGoods: ["부직포 파스너", "벨크로 파스너"] },
    ],
  },

  /* ── 제27류: 바닥재, 벽지 ── */
  {
    id: "brand-donghwa",
    name: "동화기업",
    registrations: [
      { niceClass: "제27류", keyGoods: ["강화마루", "원목마루", "합판마루"] },
    ],
  },
  {
    id: "brand-hanwha-lnc",
    name: "한화L&C",
    registrations: [
      { niceClass: "제27류", keyGoods: ["바닥재", "PVC 타일", "데코타일", "쿠션바닥재"] },
    ],
  },
  {
    id: "brand-noksoo",
    name: "녹수",
    registrations: [
      { niceClass: "제27류", keyGoods: ["마루", "강마루", "바닥 타일"] },
    ],
  },
  {
    id: "brand-kcc-flooring",
    name: "KCC (인테리어소재)",
    registrations: [
      { niceClass: "제27류", keyGoods: ["바닥재", "벽지"] },
      { niceClass: "제19류", keyGoods: ["건축자재"] },
    ],
  },
  {
    id: "brand-daelim-bath",
    name: "대림바스",
    registrations: [
      { niceClass: "제27류", keyGoods: ["욕실용 타일", "세라믹 타일"] },
    ],
  },

  /* ── 제28류: 완구, 스포츠용품 ── */
  {
    id: "brand-lego",
    name: "레고 (LEGO)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["조립 완구", "블록 완구", "퍼즐"] },
    ],
  },
  {
    id: "brand-sonokong",
    name: "손오공",
    registrations: [
      { niceClass: "제28류", keyGoods: ["완구", "변신 로봇", "어린이 게임"] },
    ],
  },
  {
    id: "brand-youngsil",
    name: "영실업",
    registrations: [
      { niceClass: "제28류", keyGoods: ["어린이 완구", "피규어", "봉제인형"] },
    ],
  },
  {
    id: "brand-mizuno",
    name: "미즈노 (Mizuno)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["야구 글러브", "야구 배트", "스포츠 용품"] },
      { niceClass: "제25류", keyGoods: ["야구화", "스포츠화"] },
    ],
  },
  {
    id: "brand-yonex",
    name: "요넥스 (Yonex)",
    registrations: [
      { niceClass: "제28류", keyGoods: ["배드민턴 라켓", "테니스 라켓", "골프채"] },
      { niceClass: "제25류", keyGoods: ["배드민턴화", "테니스화"] },
    ],
  },

  /* ── 제29류: 가공식품, 통조림 ── */
  {
    id: "brand-cj-foods",
    name: "CJ제일제당",
    registrations: [
      { niceClass: "제29류", keyGoods: ["햄", "두부", "냉동식품", "어묵", "소시지"] },
      { niceClass: "제30류", keyGoods: ["밀가루", "설탕", "소스", "즉석밥"] },
    ],
  },
  {
    id: "brand-pulmuone",
    name: "풀무원",
    registrations: [
      { niceClass: "제29류", keyGoods: ["두부", "김치", "냉장 반찬", "냉동식품"] },
    ],
  },
  {
    id: "brand-ottogi",
    name: "오뚜기",
    registrations: [
      { niceClass: "제29류", keyGoods: ["마요네즈", "참기름", "카레", "케첩"] },
      { niceClass: "제30류", keyGoods: ["라면", "즉석 카레", "3분 요리"] },
    ],
  },
  {
    id: "brand-dongwon",
    name: "동원F&B",
    registrations: [
      { niceClass: "제29류", keyGoods: ["참치캔", "통조림", "어육제품", "고등어 통조림"] },
    ],
  },
  {
    id: "brand-sajo",
    name: "사조대림",
    registrations: [
      { niceClass: "제29류", keyGoods: ["통조림", "어육제품", "햄", "소시지"] },
    ],
  },

  /* ── 제30류: 커피, 과자, 빵, 소스 ── */
  {
    id: "brand-starbucks",
    name: "스타벅스 (Starbucks)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["커피", "원두커피", "커피음료", "차"] },
      { niceClass: "제43류", keyGoods: ["커피숍업", "카페업"] },
    ],
  },
  {
    id: "brand-parisbaguette",
    name: "파리바게뜨 (Paris Baguette)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["빵", "케이크", "과자", "샌드위치"] },
      { niceClass: "제43류", keyGoods: ["베이커리 카페업"] },
    ],
  },
  {
    id: "brand-orion",
    name: "오리온 (Orion)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["과자", "쿠키", "파이", "초코파이", "스낵"] },
    ],
  },
  {
    id: "brand-lotte-confect",
    name: "롯데웰푸드",
    registrations: [
      { niceClass: "제30류", keyGoods: ["과자", "초콜릿", "아이스크림", "껌"] },
    ],
  },
  {
    id: "brand-nongshim",
    name: "농심 (Nongshim)",
    registrations: [
      { niceClass: "제30류", keyGoods: ["라면", "스낵", "짜파게티", "신라면"] },
    ],
  },

  /* ── 제31류: 신선농산물, 사료 ── */
  {
    id: "brand-royalcanin",
    name: "로얄캐닌 (Royal Canin)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["반려동물 사료", "강아지 사료", "고양이 사료"] },
    ],
  },
  {
    id: "brand-harim",
    name: "하림",
    registrations: [
      { niceClass: "제31류", keyGoods: ["닭고기", "가공 닭고기", "신선 육류"] },
    ],
  },
  {
    id: "brand-cargill",
    name: "카길 (Cargill)",
    registrations: [
      { niceClass: "제31류", keyGoods: ["사료", "곡물", "가축용 사료"] },
    ],
  },
  {
    id: "brand-namyang-dairy",
    name: "남양유업",
    registrations: [
      { niceClass: "제31류", keyGoods: ["신선 우유", "유제품", "크림"] },
      { niceClass: "제29류", keyGoods: ["가공 유제품", "치즈"] },
    ],
  },
  {
    id: "brand-cjfreshway",
    name: "CJ프레시웨이",
    registrations: [
      { niceClass: "제31류", keyGoods: ["신선식품", "채소", "과일", "신선 유제품"] },
    ],
  },

  /* ── 제32류: 음료, 생수 ── */
  {
    id: "brand-cocacola",
    name: "코카콜라 (Coca-Cola)",
    registrations: [
      { niceClass: "제32류", keyGoods: ["탄산음료", "콜라", "사이다", "주스"] },
    ],
  },
  {
    id: "brand-samdasoo",
    name: "제주삼다수",
    registrations: [
      { niceClass: "제32류", keyGoods: ["생수", "미네랄워터", "먹는 샘물"] },
    ],
  },
  {
    id: "brand-lottechilsung",
    name: "롯데칠성음료",
    registrations: [
      { niceClass: "제32류", keyGoods: ["음료", "주스", "에너지드링크", "커피음료"] },
      { niceClass: "제33류", keyGoods: ["소주", "맥주"] },
    ],
  },
  {
    id: "brand-hitejinro-bev",
    name: "하이트진로음료",
    registrations: [
      { niceClass: "제32류", keyGoods: ["탄산음료", "이온음료", "과채음료"] },
    ],
  },
  {
    id: "brand-woongjin",
    name: "웅진식품",
    registrations: [
      { niceClass: "제32류", keyGoods: ["과즙음료", "과채음료", "홍초 음료"] },
    ],
  },

  /* ── 제33류: 주류 ── */
  {
    id: "brand-hitejinro",
    name: "하이트진로",
    registrations: [
      { niceClass: "제33류", keyGoods: ["소주", "맥주", "위스키", "진로이즈백"] },
    ],
  },
  {
    id: "brand-ob-beer",
    name: "오비맥주 (OB)",
    registrations: [
      { niceClass: "제33류", keyGoods: ["맥주", "카스", "오비라거", "한맥"] },
    ],
  },
  {
    id: "brand-kooksoondang",
    name: "국순당",
    registrations: [
      { niceClass: "제33류", keyGoods: ["막걸리", "쌀 발효주", "전통주"] },
    ],
  },
  {
    id: "brand-mckiss",
    name: "맥키스컴퍼니",
    registrations: [
      { niceClass: "제33류", keyGoods: ["소주", "이슬톡톡", "발효 소주"] },
    ],
  },
  {
    id: "brand-pernod",
    name: "페르노리카코리아",
    registrations: [
      { niceClass: "제33류", keyGoods: ["양주", "위스키", "브랜디", "발렌타인"] },
    ],
  },

  /* ── 제34류: 담배, 전자담배 ── */
  {
    id: "brand-ktng",
    name: "KT&G",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "궐련", "전자담배기기", "릴(lil)"] },
    ],
  },
  {
    id: "brand-pm-iqos",
    name: "필립모리스 (IQOS)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["전자담배기기", "궐련형 전자담배", "히트 스틱"] },
    ],
  },
  {
    id: "brand-bat-korea",
    name: "BAT코리아 (BAT Korea)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "전자담배기기", "글로(GLO)"] },
    ],
  },
  {
    id: "brand-jti-korea",
    name: "JTI코리아",
    registrations: [
      { niceClass: "제34류", keyGoods: ["담배", "에세", "마일드세븐"] },
    ],
  },
  {
    id: "brand-vuse",
    name: "뷰즈 (Vuse)",
    registrations: [
      { niceClass: "제34류", keyGoods: ["전자담배기기", "니코틴 액상 카트리지"] },
    ],
  },

  /* ── 제35류: 광고업, 온라인 소매업 ── */
  {
    id: "brand-coupang",
    name: "쿠팡 (Coupang)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["인터넷 쇼핑몰업", "온라인 소매업", "광고업"] },
      { niceClass: "제39류", keyGoods: ["택배업", "배송 서비스업"] },
    ],
  },
  {
    id: "brand-naver-shop",
    name: "네이버쇼핑 (Naver)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["온라인 쇼핑몰업", "광고 대행업", "가격 비교 서비스업"] },
      { niceClass: "제38류", keyGoods: ["인터넷 정보 제공업"] },
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "플랫폼 서비스업"] },
    ],
  },
  {
    id: "brand-oliveyoung",
    name: "올리브영 (Olive Young)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["화장품 소매업", "건강식품 소매업", "온라인 판매업"] },
    ],
  },
  {
    id: "brand-musinsa",
    name: "무신사 (Musinsa)",
    registrations: [
      { niceClass: "제35류", keyGoods: ["패션 온라인 쇼핑몰업", "의류 소매업", "광고 대행업"] },
    ],
  },
  {
    id: "brand-ssg",
    name: "SSG닷컴",
    registrations: [
      { niceClass: "제35류", keyGoods: ["온라인 소매업", "백화점업", "슈퍼마켓업"] },
    ],
  },

  /* ── 제36류: 금융, 보험, 부동산 ── */
  {
    id: "brand-samsung-life",
    name: "삼성생명",
    registrations: [
      { niceClass: "제36류", keyGoods: ["생명보험업", "연금보험업", "손해보험업"] },
    ],
  },
  {
    id: "brand-kb-bank",
    name: "KB국민은행",
    registrations: [
      { niceClass: "제36류", keyGoods: ["은행업", "신용카드업", "주택담보대출업"] },
    ],
  },
  {
    id: "brand-shinhan-bank",
    name: "신한은행",
    registrations: [
      { niceClass: "제36류", keyGoods: ["은행업", "외환업무", "자산 관리업"] },
    ],
  },
  {
    id: "brand-toss",
    name: "토스 (Toss)",
    registrations: [
      { niceClass: "제36류", keyGoods: ["간편 송금 서비스업", "금융 서비스업", "선불 전자지급 서비스업"] },
    ],
  },
  {
    id: "brand-kakaobank",
    name: "카카오뱅크",
    registrations: [
      { niceClass: "제36류", keyGoods: ["인터넷 전문 은행업", "예금업", "대출업"] },
    ],
  },

  /* ── 제37류: 건설업, 수리업 ── */
  {
    id: "brand-hyundai-const",
    name: "현대건설",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "토목공사업", "아파트 건설업"] },
    ],
  },
  {
    id: "brand-samsung-const",
    name: "삼성물산 건설부문",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "래미안 아파트 건설", "플랜트 공사업"] },
    ],
  },
  {
    id: "brand-gs-const",
    name: "GS건설 (자이)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "주택 건설업", "인테리어 공사업"] },
    ],
  },
  {
    id: "brand-daewoo-const",
    name: "대우건설 (푸르지오)",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "주거용 건물 건설업"] },
    ],
  },
  {
    id: "brand-sk-eco",
    name: "SK에코플랜트",
    registrations: [
      { niceClass: "제37류", keyGoods: ["건설업", "환경 플랜트 공사업", "신재생에너지 공사업"] },
    ],
  },

  /* ── 제38류: 통신업 ── */
  {
    id: "brand-skt",
    name: "SK텔레콤 (SKT)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["이동통신업", "인터넷 서비스업", "IPTV 서비스업"] },
      { niceClass: "제42류", keyGoods: ["클라우드 서비스업"] },
    ],
  },
  {
    id: "brand-kt",
    name: "KT",
    registrations: [
      { niceClass: "제38류", keyGoods: ["인터넷 통신업", "이동통신업", "유선 통신업", "방송업"] },
    ],
  },
  {
    id: "brand-lgu",
    name: "LG유플러스",
    registrations: [
      { niceClass: "제38류", keyGoods: ["이동통신업", "유선 통신업", "IPTV 서비스업"] },
    ],
  },
  {
    id: "brand-kakaotalk",
    name: "카카오톡 (KakaoTalk)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "소셜 네트워크 서비스업", "음성통화 서비스업"] },
    ],
  },
  {
    id: "brand-naver-line",
    name: "네이버 라인 (LINE)",
    registrations: [
      { niceClass: "제38류", keyGoods: ["메신저 서비스업", "소셜 네트워크 서비스업"] },
    ],
  },

  /* ── 제39류: 운송업, 물류업 ── */
  {
    id: "brand-cj-logistics",
    name: "CJ대한통운",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "물류 창고업", "화물 운송업", "국제 물류업"] },
    ],
  },
  {
    id: "brand-hanjin",
    name: "한진",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "항공화물 운송업", "해운 대리업"] },
    ],
  },
  {
    id: "brand-lotte-global",
    name: "롯데글로벌로지스",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "물류 서비스업", "배송 대행업"] },
    ],
  },
  {
    id: "brand-coupang-logistics",
    name: "쿠팡로지스틱스",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택배업", "로켓 배송업", "익일 배달업"] },
    ],
  },
  {
    id: "brand-kakao-t",
    name: "카카오T",
    registrations: [
      { niceClass: "제39류", keyGoods: ["택시 중개업", "이동 서비스업", "배달 대행업"] },
    ],
  },

  /* ── 제40류: 가공처리업 ── */
  {
    id: "brand-samsung-display",
    name: "삼성디스플레이",
    registrations: [
      { niceClass: "제40류", keyGoods: ["디스플레이 패널 제조업", "반도체 소자 가공업"] },
    ],
  },
  {
    id: "brand-lg-innotek",
    name: "LG이노텍",
    registrations: [
      { niceClass: "제40류", keyGoods: ["전자부품 가공업", "PCB 제조업", "카메라 모듈 제조업"] },
    ],
  },
  {
    id: "brand-sk-siltron",
    name: "SK실트론",
    registrations: [
      { niceClass: "제40류", keyGoods: ["반도체 웨이퍼 가공업", "실리콘 기판 제조업"] },
    ],
  },
  {
    id: "brand-hansol-chem",
    name: "한솔케미칼",
    registrations: [
      { niceClass: "제40류", keyGoods: ["반도체용 화학 소재 가공업", "디스플레이 소재 가공업"] },
    ],
  },
  {
    id: "brand-oci-material",
    name: "OCI머티리얼즈",
    registrations: [
      { niceClass: "제40류", keyGoods: ["반도체 가스 공급업", "산업용 화학 처리업"] },
    ],
  },

  /* ── 제41류: 교육업, 오락업, 연예 ── */
  {
    id: "brand-megastudy",
    name: "메가스터디",
    registrations: [
      { niceClass: "제41류", keyGoods: ["온라인 교육업", "수능 강의업", "학원업"] },
    ],
  },
  {
    id: "brand-hybe",
    name: "하이브 (HYBE)",
    registrations: [
      { niceClass: "제41류", keyGoods: ["연예 매니지먼트업", "음반 제작업", "공연 기획업"] },
    ],
  },
  {
    id: "brand-cgv",
    name: "CGV",
    registrations: [
      { niceClass: "제41류", keyGoods: ["영화 상영업", "영화관 운영업", "오락 서비스업"] },
    ],
  },
  {
    id: "brand-sm-ent",
    name: "SM엔터테인먼트",
    registrations: [
      { niceClass: "제41류", keyGoods: ["연예 매니지먼트업", "음반 제작업", "공연업"] },
    ],
  },
  {
    id: "brand-hackers",
    name: "해커스 (Hackers)",
    registrations: [
      { niceClass: "제41류", keyGoods: ["어학 교육업", "토익 교육업", "온라인 강의업"] },
    ],
  },

  /* ── 제42류: IT 서비스업, 소프트웨어 ── */
  {
    id: "brand-naver-it",
    name: "네이버 (Naver)",
    registrations: [
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "클라우드 서비스업", "AI 서비스업", "검색 엔진 서비스업"] },
      { niceClass: "제38류", keyGoods: ["인터넷 정보 제공업"] },
    ],
  },
  {
    id: "brand-kakao-it",
    name: "카카오 IT 서비스",
    registrations: [
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "모바일 서비스업", "플랫폼 서비스업"] },
    ],
  },
  {
    id: "brand-samsung-sds",
    name: "삼성SDS",
    registrations: [
      { niceClass: "제42류", keyGoods: ["IT 서비스업", "클라우드 서비스업", "물류 IT 솔루션업"] },
    ],
  },
  {
    id: "brand-nhn",
    name: "NHN",
    registrations: [
      { niceClass: "제42류", keyGoods: ["소프트웨어 개발업", "게임 플랫폼 서비스업", "클라우드 서비스업"] },
    ],
  },
  {
    id: "brand-nexon",
    name: "넥슨 (Nexon)",
    registrations: [
      { niceClass: "제42류", keyGoods: ["온라인 게임 서비스업", "게임 소프트웨어 개발업"] },
      { niceClass: "제41류", keyGoods: ["전자오락업"] },
    ],
  },

  /* ── 제43류: 음식 제공업, 숙박업 ── */
  {
    id: "brand-starbucks-cafe",
    name: "스타벅스 커피 (카페)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["커피숍업", "카페업", "음료 제공업"] },
      { niceClass: "제30류", keyGoods: ["커피", "원두", "차"] },
    ],
  },
  {
    id: "brand-mcdonalds",
    name: "맥도날드 (McDonald's)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["패스트푸드 음식점업", "햄버거 전문점업", "음식 배달업"] },
    ],
  },
  {
    id: "brand-baemin",
    name: "배달의민족",
    registrations: [
      { niceClass: "제43류", keyGoods: ["음식 배달 중개업", "음식점 예약 서비스업"] },
      { niceClass: "제35류", keyGoods: ["온라인 광고업"] },
    ],
  },
  {
    id: "brand-shilla-hotel",
    name: "신라호텔",
    registrations: [
      { niceClass: "제43류", keyGoods: ["호텔업", "숙박업", "레스토랑업"] },
    ],
  },
  {
    id: "brand-ediya",
    name: "이디야 (Ediya)",
    registrations: [
      { niceClass: "제43류", keyGoods: ["커피전문점업", "카페업", "음료 제공업"] },
    ],
  },

  /* ── 제44류: 의료업, 미용업 ── */
  {
    id: "brand-osstem-dental",
    name: "오스템임플란트 (치과)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["치과 진료업", "구강 건강 관리업"] },
      { niceClass: "제10류", keyGoods: ["치과용 임플란트"] },
    ],
  },
  {
    id: "brand-oliveyoung-beauty",
    name: "올리브영 뷰티 서비스",
    registrations: [
      { niceClass: "제44류", keyGoods: ["미용 서비스업", "피부 관리업"] },
    ],
  },
  {
    id: "brand-drhair",
    name: "닥터포헤어 (Dr.ForHair)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["두피 케어 서비스업", "모발 케어 서비스업"] },
      { niceClass: "제3류", keyGoods: ["두피 샴푸", "헤어 트리트먼트"] },
    ],
  },
  {
    id: "brand-amore-beauty",
    name: "아모레성수 (아모레퍼시픽 스파)",
    registrations: [
      { niceClass: "제44류", keyGoods: ["피부 미용업", "스파 서비스업", "뷰티 케어업"] },
    ],
  },
  {
    id: "brand-seoul-asan",
    name: "서울아산병원",
    registrations: [
      { niceClass: "제44류", keyGoods: ["종합 병원업", "외과 진료업", "의료 서비스업"] },
    ],
  },

  /* ── 제45류: 법률 서비스업, 보안업 ── */
  {
    id: "brand-adtcaps",
    name: "ADT캡스",
    registrations: [
      { niceClass: "제45류", keyGoods: ["보안 서비스업", "경비업", "CCTV 모니터링 서비스업"] },
    ],
  },
  {
    id: "brand-sk-shielders",
    name: "SK쉴더스",
    registrations: [
      { niceClass: "제45류", keyGoods: ["보안 서비스업", "사이버보안 서비스업", "정보보안 컨설팅업"] },
    ],
  },
  {
    id: "brand-sone",
    name: "에스원 (S1)",
    registrations: [
      { niceClass: "제45류", keyGoods: ["경비 서비스업", "출입통제 서비스업", "방범 서비스업"] },
    ],
  },
  {
    id: "brand-kimjang",
    name: "김앤장 법률사무소",
    registrations: [
      { niceClass: "제45류", keyGoods: ["법률 자문업", "변호사업", "특허법률 서비스업"] },
    ],
  },
  {
    id: "brand-kwangrang",
    name: "법무법인 광장",
    registrations: [
      { niceClass: "제45류", keyGoods: ["법률 서비스업", "법무 대리업", "법률 컨설팅업"] },
    ],
  },
];

/**
 * 업종 카테고리 → 주요 Nice 류 매핑
 * Step 4에서 카테고리별 참고 브랜드를 조회할 때 사용
 */
export const categoryPrimaryClasses: Record<string, string[]> = {
  food: ["제43류", "제30류"],
  shopping: ["제35류"],
  cosmetics: ["제3류"],
  fashion: ["제25류", "제18류"],
  health: ["제5류"],
  education: ["제41류"],
  software: ["제42류", "제9류"],
  medical: ["제44류", "제10류"],
  pet: ["제31류", "제44류"],
  consulting: ["제35류", "제36류"],
  furniture: ["제20류"],
  appliances: ["제11류", "제9류"],
  sports: ["제28류", "제25류"],
  alcohol: ["제33류", "제32류"],
  construction: ["제37류", "제19류"],
  automobile: ["제12류"],
  telecom: ["제38류"],
  music: ["제15류", "제41류"],
  manufacturing: ["제7류", "제1류"],
  logistics: ["제39류"],
  realestate: ["제36류"],
  entertainment: ["제41류"],
  other: ["제35류"],
};

/**
 * Nice class → brand reference 인덱스
 * 모듈 로드 시 빌드되어 O(1) 조회
 */
export const brandsByClass: Map<string, BrandReference[]> = (() => {
  const map = new Map<string, BrandReference[]>();
  for (const brand of brandReferences) {
    for (const reg of brand.registrations) {
      const list = map.get(reg.niceClass) ?? [];
      list.push(brand);
      map.set(reg.niceClass, list);
    }
  }
  return map;
})();

/**
 * 특정 류의 참고 브랜드 목록 반환 (최대 limit개)
 */
export function getBrandsForClass(
  niceClass: string,
  limit = 5
): BrandReference[] {
  return (brandsByClass.get(niceClass) ?? []).slice(0, limit);
}

/**
 * 업종 카테고리에 해당하는 참고 브랜드 목록 반환 (최대 limit개)
 * 카테고리의 주요 류에서 중복 없이 수집
 */
export function getBrandsForCategory(
  categoryId: string,
  limit = 5
): BrandReference[] {
  const classes = categoryPrimaryClasses[categoryId];
  if (!classes) return [];

  const seen = new Set<string>();
  const result: BrandReference[] = [];
  for (const cls of classes) {
    for (const brand of brandsByClass.get(cls) ?? []) {
      if (!seen.has(brand.id)) {
        seen.add(brand.id);
        result.push(brand);
        if (result.length >= limit) return result;
      }
    }
  }
  return result;
}
