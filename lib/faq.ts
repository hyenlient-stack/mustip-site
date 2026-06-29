// lib/faq.ts
export type FaqCategory = "patent" | "trademark" | "design";
export type FaqItem = {
  category: FaqCategory;
  q: Record<"ko" | "en" | "ja" | "zh", string>;
  a: Record<"ko" | "en" | "ja" | "zh", string>;
};

export const FAQ_LAST_REVIEWED = "2026-06";

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "patent",
    q: {
      ko: "한국 PCT 국내단계 진입 기한은 언제인가요?",
      en: "What is the deadline to enter the PCT national phase in Korea?",
      ja: "韓国でPCT国内段階に移行する期限はいつですか？",
      zh: "进入韩国PCT国家阶段的期限是什么时候？",
    },
    a: {
      ko: "우선일(최우선일)로부터 31개월 이내입니다. 31개월 내에 연장 신청을 하면 1개월(총 32개월)까지 연장할 수 있습니다.",
      en: "Within 31 months from the earliest priority date. A one-month extension (to 32 months) is available if requested within the 31-month period.",
      ja: "最先の優先日から31か月以内です。31か月以内に延長を申請すれば、1か月（合計32か月）まで延長できます。",
      zh: "自最早优先权日起31个月内。如在31个月内提出延期申请，可延长一个月（共32个月）。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "명세서를 한국어로 번역해야 하나요?",
      en: "Is a Korean translation of the specification required?",
      ja: "明細書を韓国語に翻訳する必要がありますか？",
      zh: "是否需要将说明书翻译成韩语？",
    },
    a: {
      ko: "예. 한국 출원은 한국어로 제출해야 하며, 국내단계 진입 시 31개월 내에 명세서 전체의 한국어 번역을 제출해야 합니다. PCT 19/34조 보정이 있으면 보정된 청구항의 번역도 제출합니다.",
      en: "Yes. Applications must be filed in Korean. The Korean translation of the full specification must be submitted within 31 months at national phase entry. If claims were amended under PCT Art. 19/34, a translation of the amended claims is also required.",
      ja: "はい。韓国への出願は韓国語で提出する必要があります。国内段階移行時に、31か月以内に明細書全体の韓国語翻訳を提出しなければなりません。PCT第19条・第34条に基づく補正がある場合は、補正された請求の範囲の翻訳も必要です。",
      zh: "是的。韩国申请须以韩语提交。在国家阶段进入时，须在31个月内提交完整说明书的韩语译文。若依据PCT第19条或第34条修改了权利要求，还须提交修改后权利要求的译文。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "외국 출원인이 직접 출원할 수 있나요?",
      en: "Can a foreign applicant file directly without a local agent?",
      ja: "外国の出願人が現地代理人なしに直接出願できますか？",
      zh: "外国申请人可以不通过当地代理人直接申请吗？",
    },
    a: {
      ko: "아니요. 한국에 주소나 영업소가 없는 외국 출원인은 한국에 등록된 변리사를 대리인으로 선임해야 합니다.",
      en: "No. A foreign applicant without a domicile or business office in Korea must appoint a patent attorney registered in Korea as their representative.",
      ja: "いいえ。韓国に住所または営業所を持たない外国の出願人は、韓国に登録された弁理士を代理人として選任する必要があります。",
      zh: "不可以。在韩国没有住所或营业所的外国申请人，必须委托在韩国注册的专利代理人作为其代理人。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "해외 기업이 한국에 상표를 출원하는 방법은?",
      en: "How can a foreign company file a trademark in Korea?",
      ja: "海外企業が韓国で商標を出願するにはどうすればよいですか？",
      zh: "外国企业如何在韩国申请商标？",
    },
    a: {
      ko: "KIPO에 직접 출원하거나 마드리드 의정서를 통해 한국을 지정할 수 있습니다. 대부분의 경우 한국 대리인 선임이 필요하며, 심사·이의·무효 절차는 한국 상표법에 따릅니다.",
      en: "Either by filing directly with KIPO or by designating Korea via the Madrid Protocol. In most cases a local representative is required, and examination, opposition, and invalidation follow Korean trademark law.",
      ja: "KIPO（韓国特許庁）へ直接出願するか、マドリッド協定議定書を通じて韓国を指定する方法があります。ほとんどの場合、現地代理人の選任が必要です。審査・異議・無効手続きは韓国商標法に従います。",
      zh: "可直接向KIPO（韩国特许厅）提交申请，或通过马德里协议指定韩国。大多数情况下需要委托当地代理人，审查、异议及无效程序均依照韩国商标法进行。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국 상표 출원 관납료와 등록까지 기간은?",
      en: "What are the official fees and timeline for a Korean trademark?",
      ja: "韓国の商標出願の官庁費用と登録までの期間は？",
      zh: "韩国商标申请的官费及注册周期是多少？",
    },
    a: {
      ko: "관납료는 1류당 약 62,000원이며(온라인 출원은 1만원 저렴), 지정상품 10개 초과 시 1개당 추가됩니다. 통상 출원일로부터 등록까지 10~14개월이 소요되며, 우선심사 시 2~3개월로 단축될 수 있습니다.",
      en: "The official fee is approximately KRW 62,000 per class (KRW 10,000 less for online filing), with surcharges for more than ten designated goods. Registration typically takes 10–14 months from filing, or 2–3 months with expedited examination.",
      ja: "官庁費用は1区分あたり約62,000ウォンです（オンライン出願は10,000ウォン安）。指定商品が10品目を超える場合は1品目ごとに追加費用がかかります。通常、出願から登録まで10〜14か月かかりますが、優先審査を利用すれば2〜3か月に短縮できます。",
      zh: "官费约为每类62,000韩元（在线申请优惠10,000韩元），指定商品超过10件时按件加收费用。通常自申请日起至注册约需10至14个月，申请优先审查可缩短至2至3个月。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "등록 후 유지 시 주의할 점은?",
      en: "What should I watch out for after registration?",
      ja: "登録後の維持において注意すべき点は何ですか？",
      zh: "注册后维持商标需要注意什么？",
    },
    a: {
      ko: "등록 상표를 3년간 연속하여 사용하지 않으면 불사용 취소심판의 대상이 될 수 있습니다. KIPO는 형식적 사용이 아닌 실질적·상업적 사용을 요구합니다.",
      en: "Non-use of the registered mark for three consecutive years can expose it to a cancellation action. KIPO requires genuine commercial use, not token use.",
      ja: "登録商標を3年間継続して使用しない場合、不使用取消審判の対象となる可能性があります。KIPOは形式的な使用ではなく、実質的かつ商業的な使用を要求しています。",
      zh: "连续3年不使用注册商标，可能面临不使用撤销申请。KIPO要求真实的商业性使用，而非象征性使用。",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국은 헤이그 협정 가입국인가요? 디자인 보호기간은?",
      en: "Is Korea a Hague member, and how long does design protection last?",
      ja: "韓国はハーグ協定の加盟国ですか？デザインの保護期間は？",
      zh: "韩国是海牙协定成员国吗？外观设计的保护期限是多少？",
    },
    a: {
      ko: "한국은 헤이그 협정 가입국으로, 국제출원에서 한국을 지정할 수 있습니다. 등록 디자인의 존속기간은 출원일로부터 20년입니다.",
      en: "Korea is a member of the Hague Agreement, so Korea can be designated in an international design application. A registered design is protected for 20 years from the filing date.",
      ja: "韓国はハーグ協定の加盟国であり、国際意匠出願において韓国を指定することができます。登録意匠の存続期間は出願日から20年です。",
      zh: "韩国是海牙协定成员国，可在国际外观设计申请中指定韩国。已注册外观设计的保护期限自申请日起为20年。",
    },
  },
  {
    category: "design",
    q: {
      ko: "파리조약 우선권 주장 기한은?",
      en: "What is the deadline to claim Paris Convention priority?",
      ja: "パリ条約の優先権主張の期限はいつですか？",
      zh: "巴黎公约优先权主张的期限是多长？",
    },
    a: {
      ko: "특허·실용신안은 최초 출원일로부터 12개월, 상표·디자인은 6개월 이내에 우선권을 주장하여 한국에 출원할 수 있습니다.",
      en: "12 months from the first filing for patents/utility models, and 6 months for trademarks and designs, to file in Korea with a priority claim.",
      ja: "特許・実用新案は最初の出願日から12か月以内、商標・意匠は6か月以内に、優先権を主張して韓国に出願することができます。",
      zh: "专利和实用新型自最初申请日起12个月内，商标和外观设计自最初申请日起6个月内，可主张优先权在韩国提出申请。",
    },
  },
];

export function faqByCategory(cat: FaqCategory) {
  return FAQ_ITEMS.filter((it) => it.category === cat);
}
