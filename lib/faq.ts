// lib/faq.ts
export type FaqCategory = "patent" | "trademark" | "design";
export type FaqItem = {
  category: FaqCategory;
  q: Record<"ko" | "en" | "ja" | "zh", string>;
  a: Record<"ko" | "en" | "ja" | "zh", string>;
};

export const FAQ_LAST_REVIEWED = "2026-06";

/** Strip rich-text markers for JSON-LD FAQPage plain-text answers. */
export function faqPlainText(a: string): string {
  return a
    .split(/\n+/)
    .map((l) => l.replace(/^-\s+/, ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export const FAQ_ITEMS: FaqItem[] = [
  // ─── PATENTS ──────────────────────────────────────────────────────────────
  {
    category: "patent",
    q: {
      ko: "외국 출원인이 반드시 한국 대리인을 선임해야 하나요? 위임장 요건은?",
      en: "Must a foreign applicant appoint a Korean patent attorney? What are the POA formalities?",
      ja: "外国の出願人は韓国の弁理士を必ず選任しなければなりませんか？委任状の要件は？",
      zh: "外国申请人必须委托韩国专利代理人吗？委托书有哪些形式要求？",
    },
    a: {
      ko: "한국에 주소 또는 영업소가 없는 외국 출원인은 반드시 한국 특허청에 등록된 변리사(또는 특허법인)를 대리인으로 선임해야 합니다. 이는 특허법 §5 및 특허관리인 제도에 따른 강행 규정으로, 직접 출원은 허용되지 않습니다.\n\n위임장은 공증이나 아포스티유 없이 대리인 서명만으로 유효합니다. 출원 당시 제출하지 못한 경우에도 KIPO가 지정하는 기간 내에 사후 보완할 수 있습니다. 다만 PCT 국내단계 진입 시에는 위임장을 조기에 준비해 두는 것이 절차 지연을 방지하는 데 유리합니다.",
      en: "A foreign applicant without a domicile or business office in Korea must appoint a patent attorney (or patent firm) registered with KIPO. This is a mandatory requirement under Patent Act §5 and the patent administrator system — self-representation is not permitted.\n\nThe power of attorney (POA) requires no notarization or apostille; a simple signed document is sufficient. If the POA is not submitted at filing, it can be filed as a subsequent supplement within the period designated by KIPO. For PCT national-phase entries, preparing the POA in advance avoids procedural delays.",
      ja: "韓国に住所または営業所を持たない外国の出願人は、KIPOに登録された弁理士（または特許法人）を代理人として選任することが必須です。これは特許法第5条および特許管理人制度に基づく強行規定であり、直接出願は認められていません。\n\n委任状は公証やアポスティーユが不要で、簡易な署名付き書類で有効です。出願時に提出できなかった場合でも、KIPOが指定する期間内に事後補完が可能です。PCT国内段階移行の場合は、手続の遅延を避けるため早めに委任状を準備することを推奨します。",
      zh: "在韩国没有住所或营业所的外国申请人，必须委托在KIPO注册的专利代理人（或专利事务所）担任代理人。这是《专利法》第5条及专利管理人制度的强制性规定，不允许自行申请。\n\n委托书无需公证或附加认证（apostille），简单的签名文件即可生效。若申请时未提交，可在KIPO指定的期限内事后补交。对于PCT国家阶段进入，建议提前准备委托书以避免程序延误。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "PCT 국내단계 진입 기한은? 기한을 놓치면 회복할 수 있나요?",
      en: "What is the PCT national-phase deadline for Korea, and can a missed deadline be restored?",
      ja: "韓国へのPCT国内段階移行期限は？期限を逃した場合、回復できますか？",
      zh: "韩国PCT国家阶段进入期限是多少？错过期限能否恢复？",
    },
    a: {
      ko: "한국의 PCT 국내단계 진입 기한은 최우선일로부터 31개월입니다. 31개월 기한 내에 연장을 신청하면 1개월(총 32개월)까지 연장이 가능합니다.\n\n중요한 점은, 한국은 PCT 규칙 49.6(국내단계 기한 도과 회복)을 채택하지 않았습니다. 따라서 31개월(또는 연장 신청 후 32개월) 기한을 도과하면 그 출원은 취하 간주되며, 회복 수단이 없습니다. 이 기한 관리는 특허 포트폴리오에서 가장 치명적인 리스크 중 하나이므로, 조기에 대리인에게 사전 통보하여 기한 관리를 철저히 해야 합니다.",
      en: "The PCT national-phase deadline for Korea is 31 months from the earliest priority date. A one-month extension (to 32 months total) is available if requested within the 31-month period.\n\nCritically, Korea has not adopted PCT Rule 49.6, which provides for restoration of the right to enter the national phase after the deadline. This means that if the 31-month deadline (or 32 months after an extension request) is missed, the application is deemed withdrawn with no means of recovery. Deadline management is one of the most consequential risks in an international patent portfolio — early notification to local counsel is essential.",
      ja: "韓国へのPCT国内段階移行期限は、最先の優先日から31か月です。31か月の期限内に延長を申請すれば、1か月延長（合計32か月）することができます。\n\n重要な点は、韓国はPCT規則49.6（国内段階期限の権利回復）を採択していないことです。したがって、31か月（または延長申請後の32か月）の期限を過ぎると、その出願は取下擬制となり、回復の手段はありません。この期限管理は国際特許ポートフォリオにおける最も重大なリスクの一つであり、現地代理人への早期通知が不可欠です。",
      zh: "韩国PCT国家阶段进入期限为自最早优先权日起31个月。若在31个月期限内提出延期申请，可延长1个月（共32个月）。\n\n重要提示：韩国未采纳PCT规则49.6（国家阶段期限恢复条款）。因此，若错过31个月期限（或申请延期后的32个月期限），申请将被视为撤回，且无任何恢复途径。期限管理是国际专利组合中最关键的风险之一，务必提前通知当地代理人进行期限把控。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "한국 특허는 심사청구를 별도로 해야 하나요? 기한은?",
      en: "Does Korea require a separate Request for Examination, and when is it due?",
      ja: "韓国特許は審査請求を別途行う必要がありますか？期限はいつですか？",
      zh: "韩国专利需要单独提出审查请求吗？期限是什么时候？",
    },
    a: {
      ko: "한국은 출원심사청구제도를 채택하고 있습니다. 2017년 3월 1일 이후 출원된 모든 특허 출원은 출원일로부터 3년 이내에 심사청구를 해야 하며, 청구하지 않으면 취하 간주됩니다. 이는 최근 개정이 아닌 상시 운용 규칙으로, PCT 국내단계 진입 출원에도 동일하게 적용됩니다.\n\n심사청구는 출원인뿐 아니라 제3자도 할 수 있습니다. 심사청구 후 실제 심사가 시작되기까지는 통상적으로 수 개월의 대기 기간이 있습니다. 조기 권리화가 필요한 경우 우선심사(조기심사) 제도를 활용할 수 있으며, PPH 협정 체결국의 대리인이라면 PPH 신청으로 심사를 빠르게 진행할 수 있습니다.",
      en: "Korea operates an examination-on-request system. For all patent applications filed on or after March 1, 2017, a Request for Examination (RFE) must be filed within three years from the filing date; failure to do so results in the application being deemed withdrawn. This is a standing rule — not a recent amendment — and applies equally to PCT national-phase entries.\n\nThe RFE may be filed by the applicant or any third party. Once filed, there is typically a waiting period of several months before substantive examination begins. Applicants requiring early grant can use the Priority Examination (우선심사) system, and those from PPH-partner jurisdictions can request accelerated examination under the relevant PPH program.",
      ja: "韓国は出願審査請求制度を採用しています。2017年3月1日以降に出願されたすべての特許出願は、出願日から3年以内に審査請求を行う必要があり、請求しない場合は取下擬制となります。これは最近の改正ではなく、常時運用されている規則であり、PCT国内段階移行出願にも同様に適用されます。\n\n審査請求は出願人のみならず第三者も行うことができます。審査請求後、実体審査が開始されるまでには通常数か月の待機期間があります。早期権利化が必要な場合は優先審査（조기심사）制度を利用でき、PPH協定締結国の代理人であればPPH申請により審査を早めることができます。",
      zh: "韩国采用申请审查请求制度。2017年3月1日及之后提交的所有专利申请，须在申请日起3年内提出审查请求，否则视为撤回。这是长期执行的常规规则，而非近期修订，同样适用于PCT国家阶段进入申请。\n\n审查请求可由申请人或任何第三方提出。提出后，通常需等待数月实质审查才会开始。需要早日获权的申请人可利用优先审查（조기심사）制度；来自PPH协议国的代理人还可通过相应PPH程序申请加速审查。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "한국어 번역문 제출 기한은? 오역이 발견되면 어떻게 정정하나요?",
      en: "When must the Korean translation be filed, and how can translation errors be corrected?",
      ja: "韓国語翻訳文の提出期限は？翻訳の誤りが見つかった場合、どのように訂正しますか？",
      zh: "韩语译文须何时提交？发现翻译错误如何更正？",
    },
    a: {
      ko: "PCT 국내단계 진입 시 한국어 번역문은 31개월 기한 내에 제출해야 하며, 이는 국내단계 진입 절차의 핵심 요건입니다. 한국어 외국어출원 제도(외국어로 작성된 명세서로 출원 후 번역문 제출)를 활용하면 출원일을 우선 확보하고 번역문을 일정 기간 후 보완할 수 있습니다.\n\n번역문에 오류가 있는 경우, 한국 특허법은 원문(외국어 명세서) 기준으로 정정을 허용합니다. 다만 번역 오류를 이유로 특허 범위를 실질적으로 확장하는 보정은 허용되지 않습니다. 번역 정확도는 권리 범위를 결정하므로, KIPO 심사 경험이 풍부한 전문 번역팀을 통해 세밀하게 진행하는 것이 중요합니다.",
      en: "At PCT national-phase entry, the Korean translation must be submitted within the 31-month deadline. Korea's foreign-language application system allows a foreign-language specification to be filed first to secure the filing date, with the Korean translation submitted within a prescribed supplemental period.\n\nIf translation errors are found after filing, the Korean Patent Act permits corrections based on the original foreign-language document. However, corrections that would substantially expand the scope of the claims are not permitted. Since translation quality directly determines the scope of protection, it is critical to use a professional translation team experienced with KIPO prosecution, and to verify technical terminology against the original carefully.",
      ja: "PCT国内段階移行時には、31か月の期限内に韓国語翻訳文を提出しなければなりません。韓国の外国語出願制度を利用すれば、まず外国語明細書で出願日を確保し、その後一定期間内に韓国語翻訳文を補完することができます。\n\n出願後に翻訳の誤りが発見された場合、韓国特許法は原文（外国語明細書）に基づく訂正を認めています。ただし、翻訳誤りを理由として特許の範囲を実質的に拡大する補正は許可されません。翻訳の精度が権利範囲を直接決定するため、KIPO審査経験が豊富な専門翻訳チームを使用し、技術用語を原文と照合して確認することが重要です。",
      zh: "PCT国家阶段进入时，须在31个月期限内提交韩语译文。韩国外文申请制度允许先以外文说明书申请以确保申请日，再在规定的补充期限内提交韩语译文。\n\n申请后若发现翻译错误，《韩国专利法》允许依据原始外文文件进行更正。但不允许以翻译错误为由实质性扩大权利要求范围的修改。由于译文质量直接决定保护范围，务必使用熟悉KIPO审查程序的专业翻译团队，并仔细核对原文技术术语。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "한국 특허 심사를 앞당기는 방법은? PPH는 어떻게 활용하나요?",
      en: "How can patent prosecution be accelerated in Korea? How does PPH work?",
      ja: "韓国での特許審査を早める方法は？PPHはどのように活用できますか？",
      zh: "如何加快韩国专利审查？如何利用PPH？",
    },
    a: {
      ko: "한국은 두 가지 주요 가속 제도를 운영합니다. 첫째, 우선심사(Priority Examination)는 실시 중이거나 실시 준비 중인 발명, 국가·공익 관련 발명, 환경·에너지 발명 등에 적용되며, 요건 충족 시 첫 OA(심사결과통지)를 2~4개월 내에 받을 수 있습니다. 둘째, PPH(Patent Prosecution Highway)는 KIPO와 협정을 체결한 US, EP, JP, CN 등 30여 개 특허청에서 특허 허가 결정을 받은 청구항을 기반으로 한국에서 신속 심사를 신청하는 제도입니다.\n\nPPH 신청 시 요건으로는 청구항이 허가받은 외국 청구항의 범위 내에 있어야 하고, 해당 외국 심사 문서(OA, 허가 통지)를 제출해야 합니다. PPH를 통해 첫 OA를 수 주~수 개월 내에 받는 것이 가능합니다. 복잡한 기술 분야에서도 PPH와 우선심사를 조합하면 출원에서 등록까지의 총 기간을 1~2년으로 단축하는 것이 가능합니다.",
      en: "Korea offers two principal acceleration routes. First, Priority Examination (우선심사) is available for inventions being commercialized, inventions with national or public-interest relevance, and green-technology inventions, among others. When qualifying criteria are met, the first office action (OA) typically issues within two to four months.\n\nSecond, Korea's Patent Prosecution Highway (PPH) programs allow applicants whose claims have been allowed by a partner office — including the USPTO, EPO, JPO, CNIPA, and approximately 30 others — to request accelerated examination at KIPO. Requirements include that the Korean claims must fall within the scope of the allowed foreign claims, and the relevant foreign prosecution documents must be submitted. Through PPH, receiving the first OA within weeks to a few months is achievable. Combining PPH with Priority Examination in complex technology fields can bring the total prosecution timeline down to one to two years.",
      ja: "韓国には二つの主要な審査加速制度があります。第一は優先審査（우선심사）で、実施中または実施準備中の発明、国家・公益関連の発明、グリーン技術発明などに適用され、要件を満たせばファーストOA（審査結果通知）を2〜4か月以内に受け取ることができます。\n\n第二はPPH（特許審査ハイウェイ）で、USPTO、EPO、JPO、CNIPAなど約30か国・地域の特許庁で許可された請求項を基に、KIPOで迅速審査を申請する制度です。韓国の請求項が許可済みの外国請求項の範囲内にあること、関連する外国審査書類の提出が要件です。PPHを活用すれば、数週間〜数か月以内にファーストOAを受け取ることが可能です。複雑な技術分野でも、PPHと優先審査を組み合わせることで出願から登録までの期間を1〜2年に短縮できます。",
      zh: "韩国提供两种主要加速审查途径。第一种是优先审查（우선심사），适用于正在实施或准备实施的发明、涉及国家或公共利益的发明、绿色技术发明等。符合条件时，通常可在2至4个月内收到第一次审查意见通知（OA）。\n\n第二种是PPH（专利审查高速路），允许申请人凭在美国专利商标局、欧洲专利局、日本特许厅、中国国家知识产权局等约30个合作局获得授权的权利要求，向KIPO申请加速审查。要求韩国权利要求须在已授权的境外权利要求范围内，并需提交相关境外审查文件。通过PPH，可在数周至数月内收到第一次OA。在复杂技术领域，将PPH与优先审查结合使用，可将从申请到授权的总周期缩短至1至2年。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "한국 특허 등록 후 연차료는 어떻게, 언제 납부하나요?",
      en: "How and when are Korean patent annuities (maintenance fees) paid?",
      ja: "韓国特許の登録後の年金（維持費）はいつ、どのように支払いますか？",
      zh: "韩国专利注册后年费如何缴纳？什么时候缴纳？",
    },
    a: {
      ko: "한국 특허의 연차료 구조는 다음과 같습니다. 설정등록 시 1~3년차 연차료를 일괄 납부합니다. 4년차 이후부터는 매년 해당 연차료를 납부기간(등록일 기준 연간 기준일 전 3개월 이내) 내에 납부해야 합니다.\n\n납부기간 경과 후 6개월 이내에는 가산료를 납부하고 추납할 수 있습니다. 추납 기간도 도과하면 특허권은 소멸됩니다. 특허권 소멸 후에도 정당한 사유가 있는 경우 권리 회복 신청이 가능하지만 요건이 엄격합니다. 대리인을 통해 기한 관리 시스템을 운영하면 이런 리스크를 최소화할 수 있습니다.",
      en: "Korean patent annuities follow this structure: at the time of registration, years 1–3 are paid as a lump sum. From year 4 onward, annuities must be paid annually within the designated payment period (within three months before the annual anniversary of the registration date).\n\nA six-month grace period with surcharge is available after the payment deadline. Missing both the regular and grace deadlines results in lapse of the patent right. Restoration after lapse is available for just cause but subject to strict requirements. Using a docketing system managed by local counsel is the most reliable way to avoid these risks.",
      ja: "韓国特許の年金構造は以下の通りです。設定登録時に第1〜3年分の年金を一括して納付します。第4年度以降は毎年、指定された納付期間（登録日の年次記念日の3か月前まで）内に年金を納付しなければなりません。\n\n納付期限後6か月以内であれば、割増料を支払うことで追納が可能です。通常の納付期限と追納期間の両方を過ぎると、特許権は消滅します。消滅後も正当な理由があれば権利回復申請が可能ですが、要件は厳格です。現地代理人によるドケット管理システムを活用することで、このリスクを最小化できます。",
      zh: "韩国专利年费结构如下：设定注册时，第1至3年的年费须一次性缴清。从第4年起，须每年在规定缴费期（注册日年度届满日前3个月内）内缴纳年费。\n\n缴费期届满后6个月内，可加收滞纳金后补缴。若同时错过正常缴费期和补缴期，专利权将消灭。消灭后若有正当理由，可申请权利恢复，但条件严格。通过当地代理人的期限管理系统可有效规避上述风险。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "공지예외(신규성 상실 예외)를 주장하려면 어떤 조건이 필요한가요?",
      en: "What are the conditions for claiming the novelty grace period (public disclosure exception) in Korea?",
      ja: "韓国で新規性喪失の例外（公知例外）を主張するための条件は何ですか？",
      zh: "在韩国主张新颖性丧失例外（公知例外）需满足哪些条件？",
    },
    a: {
      ko: "한국 특허법 제30조에 따라, 발명자 또는 출원인이 의도적으로 공개한 발명(논문 발표, 학회 발표, 제품 전시 등)은 공개일로부터 12개월 이내에 출원하면 신규성 상실의 예외를 주장할 수 있습니다.\n\n주의할 점은 공지예외 적용을 받으려면 출원 시 또는 출원일로부터 30일 이내에 취지를 기재한 서면을 KIPO에 제출해야 합니다. 또한 공지예외는 출원 후에 소급하여 주장할 수 없으므로, 사전에 충분한 검토가 필요합니다. 제3자의 공개(예: 무단 공개 또는 도용 후 공개)에 대해서도 일정 요건 하에 예외가 인정되므로, 구체적인 상황은 대리인에게 문의하시기 바랍니다.",
      en: "Under Korean Patent Act §30, an invention that has been publicly disclosed by the inventor or applicant — such as in a journal paper, conference presentation, or product exhibition — can still be patented in Korea if the application is filed within 12 months of the disclosure date.\n\nTo invoke the grace period, a written statement of intent must be submitted to KIPO at the time of filing or within 30 days of the filing date. Importantly, the grace period cannot be invoked retroactively after the application is filed without having submitted the required statement. The exception also applies in some cases to disclosures made by third parties without the applicant's consent (e.g., unauthorized disclosure or misappropriation). We recommend consulting a Korean patent attorney early if any disclosure has occurred before filing.",
      ja: "韓国特許法第30条に基づき、発明者または出願人が意図的に公開した発明（論文発表、学会発表、製品展示など）は、公開日から12か月以内に出願すれば新規性喪失の例外を主張できます。\n\n注意が必要なのは、この例外の適用を受けるには、出願時または出願日から30日以内に、その旨を記載した書面をKIPOに提出しなければならない点です。また、この例外は所定の書面を提出せずに出願した後に遡及して主張することはできません。第三者による無断公開（例：無断開示や盗用後の公開）についても一定の要件の下で例外が認められます。出願前に何らかの公開が生じた場合は、早めに韓国弁理士にご相談ください。",
      zh: "根据《韩国专利法》第30条，发明人或申请人有意公开的发明（如发表论文、参加学术会议、产品展示等），若在公开日起12个月内提出申请，可主张新颖性丧失例外。\n\n需要注意的是，须在申请时或申请日起30天内向KIPO提交声明书方可适用该例外。若提交申请时未提交声明书，事后无法追溯主张。在某些情况下，第三方在未经申请人同意的情况下进行的公开（如未经授权的披露或盗用后的公开）也可适用该例外。若申请前发生了任何公开情况，建议尽早咨询韩国专利代理人。",
    },
  },
  {
    category: "patent",
    q: {
      ko: "한국 실용신안은 특허와 어떻게 다른가요? 언제 활용하면 유리한가요?",
      en: "How does a Korean utility model differ from a patent, and when is it strategically useful?",
      ja: "韓国の実用新案は特許とどのように異なりますか？どのような場合に活用すると有利ですか？",
      zh: "韩国实用新型与专利有何不同？何时适合选用实用新型？",
    },
    a: {
      ko: "한국 실용신안은 물품의 형상·구조·조합에 한정되며, 방법·화학물질·조성물은 보호 대상이 아닙니다. 존속기간은 출원일로부터 10년(특허는 20년)입니다. 2006년 이후 실용신안도 심사주의를 채택하여 특허와 동일한 심사 과정을 거칩니다.\n\n실용신안이 유리한 경우는 주로 ①비교적 단순한 구조 개선으로 빠른 권리화가 필요한 경우, ②특허 요건(진보성)을 충족하기 어려운 개량 발명, ③제품 사이클이 짧아 10년 보호로 충분한 경우입니다. 특허와 실용신안을 함께 출원하는 전략(이중출원)도 가능하므로, 발명의 성격과 사업 계획에 따라 대리인과 상담하여 최적의 전략을 선택하는 것이 좋습니다.",
      en: "A Korean utility model is limited to articles with a definite shape, structure, or combination — methods, chemical substances, and compositions are excluded. The term is 10 years from the filing date, compared to 20 years for patents. Since 2006, utility model applications undergo the same substantive examination process as patents.\n\nUtility models are strategically advantageous when: (1) quick protection is needed for a relatively simple structural improvement; (2) an improvement invention may not satisfy the higher inventive-step threshold of a patent; or (3) the product cycle is short enough that ten years of protection is sufficient. Dual filing of both a patent and a utility model application for the same invention is permissible in Korea, providing a layered protection strategy. Consult your Korean attorney to determine the optimal approach based on the nature of the invention and business objectives.",
      ja: "韓国の実用新案は、物品の形状・構造・組み合わせに限定され、方法・化学物質・組成物は保護の対象外です。存続期間は出願日から10年（特許は20年）です。2006年以降、実用新案も審査主義を採用し、特許と同じ実体審査プロセスを経ることになっています。\n\n実用新案が有利なケースは主に①比較的シンプルな構造改良で早期権利化が必要な場合、②特許の進歩性要件を満たしにくい改良発明、③製品サイクルが短く10年の保護で十分な場合です。同一発明について特許と実用新案を同時に出願する二重出願戦略も韓国では認められています。発明の性格とビジネス目標に基づき、韓国代理人と相談して最適な戦略を選択することをお勧めします。",
      zh: "韩国实用新型仅保护具有一定形状、构造或组合的物品，不保护方法、化学物质和组合物。保护期限自申请日起10年（专利为20年）。自2006年起，实用新型也采用审查制，经历与专利相同的实质审查程序。\n\n实用新型在以下情形具有战略优势：①对结构较为简单的改良需要快速获权；②改良发明可能难以达到专利的创造性要求；③产品周期较短，10年保护期已足够。韩国允许对同一发明同时提交专利和实用新型申请（双重申请策略），提供多层次保护。建议根据发明特性和商业目标咨询韩国代理人，选择最佳策略。",
    },
  },

  // ─── TRADEMARKS ────────────────────────────────────────────────────────────
  {
    category: "trademark",
    q: {
      ko: "마드리드 의정서 지정과 KIPO 직접 출원, 어떻게 선택해야 하나요?",
      en: "Should I designate Korea through the Madrid Protocol or file directly with KIPO?",
      ja: "マドリッド協定議定書による韓国指定とKIPO直接出願、どちらを選ぶべきですか？",
      zh: "应通过马德里议定书指定韩国，还是直接向KIPO申请？如何选择？",
    },
    a: {
      ko: "마드리드 의정서를 통한 한국 지정은 다수 국가를 한 번에 지정할 수 있어 관리 편의성이 높습니다. 단, 기초출원/등록에 대한 중앙공격 리스크가 있고, 지정상품 기재는 KIPO 기준을 따르지 않으면 거절될 수 있습니다. 마드리드 출원에서도 KIPO의 심사결과통지(OA)를 받으면 현지 대리인을 선임해야 하므로, 실질적으로는 한국 대리인과의 협업이 필요합니다.\n\n반면 KIPO 직접 출원은 지정상품을 KIPO 기준에 맞게 처음부터 정교하게 작성할 수 있어 OA 발생률이 낮고, 절차가 빠를 수 있습니다. 한국 단독 출원이거나 한국 전략이 핵심인 경우, 또는 한글 표장을 함께 출원하는 경우라면 직접 출원이 유리합니다.",
      en: "Designating Korea through the Madrid Protocol is administratively convenient when filing in multiple countries simultaneously. However, it carries a central-attack risk if the base mark is cancelled within five years, and the goods/services description must conform to KIPO standards — non-conforming entries are frequently refused. When KIPO issues an office action on a Madrid-designated application, a local Korean attorney must be appointed anyway, so practical collaboration with Korean counsel is unavoidable.\n\nDirect filing with KIPO allows the goods and services list to be crafted to KIPO standards from the outset, typically resulting in fewer OAs and faster prosecution. Direct filing is preferable for Korea-focused filings, when filing a Hangul-transliterated version of the mark concurrently, or when maximum flexibility in prosecution strategy is desired.",
      ja: "マドリッド議定書による韓国指定は、複数国を一度に指定できるため管理上便利です。ただし、基礎出願・登録が5年以内に消滅した場合の中央攻撃リスクがあり、指定商品・役務の記載がKIPO基準に合わない場合は拒絶される可能性があります。KIPOが審査結果通知（OA）を発行した場合は現地代理人を選任しなければならないため、実質的には韓国代理人との協働が不可欠です。\n\n一方、KIPO直接出願はKIPO基準に合わせた指定商品・役務の記載を最初から作成できるため、OAの発生率が低く、審査が早く進む場合があります。韓国単独の出願、韓国戦略が重要な場合、またはハングル音訳商標を同時出願する場合は直接出願が有利です。",
      zh: "通过马德里议定书指定韩国在同时指定多个国家时管理便捷。但存在基础申请/注册在五年内被撤销的中心攻击风险，且商品/服务描述若不符合KIPO标准，可能遭到驳回。当KIPO对马德里指定申请发出审查意见通知（OA）时，仍须委托当地代理人，实际上与韩国代理人的合作不可避免。\n\n直接向KIPO申请则可从一开始就按KIPO标准精确撰写商品/服务清单，通常OA发生率较低，审查进展也更快。以下情形建议直接申请：仅在韩国申请、韩国战略至关重要、或需同时申请品牌的韩文音译商标。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국은 선출원주의인가요? 등록 전·후에 사용 증명이 필요한가요?",
      en: "Is Korea first-to-file for trademarks? Is proof of use required before or after registration?",
      ja: "韓国の商標は先願主義ですか？登録前・後に使用証明は必要ですか？",
      zh: "韩国商标是先申请制吗？注册前后需要提交使用证明吗？",
    },
    a: {
      ko: "한국은 엄격한 선출원주의를 채택하고 있습니다. 미국과 달리 사용 사실이나 사용 의향을 증명하지 않아도 출원·등록이 가능하며, 사용 선언 제도도 없습니다. 따라서 한국에서의 사업 계획이 확정되기 전이라도, 상표 도용을 방지하기 위해 조기 출원이 매우 중요합니다.\n\n특히 외국 브랜드의 경우 원어 표장 외에 한글 음역 표장도 함께 조기 출원하는 것이 강력히 권장됩니다. 한국 소비자들은 외국 브랜드를 한글로 음역하여 사용하는 경향이 있어, 한글 버전을 선제적으로 등록하지 않으면 제3자가 먼저 등록해 버리는 경우가 발생합니다. 상표 전문 변리사와 함께 포괄적인 한국 상표 전략을 수립하시기 바랍니다.",
      en: "Korea is a strict first-to-file jurisdiction. Unlike the United States, there is no requirement to prove actual use or a bona fide intent to use before or after registration, and there are no use-declaration requirements. This makes early filing critically important to prevent trademark squatting, even before business plans for Korea are finalized.\n\nFor foreign brands in particular, it is strongly advisable to file the Hangul transliteration of your mark concurrently with the original-language mark. Korean consumers instinctively render foreign brand names in Hangul, and a third party can register the Hangul equivalent as a separate mark before you do. Consult a Korean trademark attorney to develop a comprehensive registration strategy covering both versions of your mark.",
      ja: "韓国は厳格な先願主義を採用しています。米国と異なり、出願・登録前後を問わず実際の使用証明や使用意思の立証は不要であり、使用宣言制度もありません。そのため、韓国でのビジネス計画が確定する前であっても、商標の無断先占を防ぐために早期出願が非常に重要です。\n\n特に外国ブランドの場合、原語商標と同時にハングル音訳商標を出願することが強く推奨されます。韓国の消費者は外国ブランドをハングルに音訳して使用する傾向があり、先にハングル版を登録しておかないと第三者に先越される可能性があります。韓国の商標専門弁理士に相談して、両バージョンをカバーする包括的な登録戦略を策定することをお勧めします。",
      zh: "韩国实行严格的先申请制。与美国不同，无需在注册前后证明实际使用或真实使用意图，也没有使用声明制度。因此，即使韩国业务计划尚未敲定，也应尽早申请以防商标被抢注。\n\n尤其对于外国品牌，强烈建议在申请原语商标的同时，一并申请品牌名称的韩文（韩语音译）商标。韩国消费者习惯将外国品牌名称音译成韩文，若未提前注册韩文版本，第三方可能抢先注册。建议咨询韩国商标专利代理人，制定涵盖两种版本商标的全面注册策略。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "인용 상표 문제를 동의서(Letter of Consent)로 해결할 수 있나요?",
      en: "Can a Letter of Consent (LOC) from the cited mark's owner overcome a refusal in Korea?",
      ja: "被引用商標権者の同意書（Letter of Consent）で韓国での拒絶を克服できますか？",
      zh: "被引证商标权人出具的同意书（LOC）能克服韩国的驳回吗？",
    },
    a: {
      ko: "2024년 5월 1일 시행 개정 상표법에 따라, 한국에 동의서(병존등록동의서) 제도가 도입되었습니다. 인용 상표의 상표권자가 출원 상표와의 병존에 동의하는 경우, KIPO는 이를 참작하여 등록을 허용할 수 있습니다.\n\n단, 동의서로도 등록이 불가능한 경우가 있습니다. 표장과 지정상품이 모두 인용 상표와 동일한 경우에는 동의서를 제출하더라도 병존 등록이 허용되지 않습니다. 표장 또는 상품 중 하나라도 다른 경우에만 동의서 제도가 작동합니다. 또한 동의서 제출만으로 자동 등록이 보장되는 것은 아니며, KIPO의 최종 판단에 달려 있습니다. 인용 상표권자와의 협상 전략은 사안의 복잡성을 고려해 전문 변리사와 상의하기를 권합니다.",
      en: "As of May 1, 2024, Korea's revised Trademark Act introduced a Letter of Consent (LOC) system. When the owner of the cited mark consents in writing to coexistence, KIPO can take that consent into account and allow the applied-for mark to register.\n\nHowever, there is an important limitation: if both the mark itself and the designated goods/services are identical to those of the cited mark, coexistence is not permitted even with an LOC. The LOC system only operates when there is at least one point of difference — either in the mark or the goods/services. Moreover, submitting an LOC does not guarantee registration; KIPO retains discretion. We recommend consulting a Korean trademark attorney regarding negotiation strategy with the cited mark owner, as the analysis is highly fact-specific.",
      ja: "2024年5月1日施行の改正商標法により、韓国に同意書（병존등록동의서）制度が導入されました。被引用商標の権利者が出願商標との共存に書面で同意した場合、KIPOはこれを参酌して登録を認めることができます。\n\nただし、同意書でも登録が認められない場合があります。商標と指定商品・役務の両方が被引用商標と同一である場合は、同意書を提出しても共存登録は認められません。商標または商品・役務のいずれかに相違点がある場合のみ、同意書制度が機能します。また、同意書の提出だけで自動的に登録が保証されるわけではなく、KIPOの最終判断によります。被引用商標権者との交渉戦略については、事案の複雑性を考慮して韓国の商標専門弁理士にご相談ください。",
      zh: "根据2024年5月1日起施行的修订《商标法》，韩国引入了同意书（병존등록동의서）制度。若被引证商标权人书面同意与申请商标共存，KIPO可据此允许申请商标注册。\n\n但存在重要限制：若申请商标与被引证商标在商标本身和指定商品/服务两方面均相同，即使提交同意书，也不允许共存注册。只有在商标或商品/服务至少有一项不同时，同意书制度方可适用。此外，提交同意书并不保证自动获准注册，最终由KIPO裁量决定。关于与被引证商标权人的谈判策略，建议咨询韩国商标代理人，因为分析高度依赖具体事实。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국 상표 지정상품 기재 방법은? 유사군코드란 무엇인가요?",
      en: "How should goods and services be described in a Korean trademark application? What are similarity group codes?",
      ja: "韓国商標出願における指定商品・役務の記載方法は？類似群コードとは何ですか？",
      zh: "韩国商标申请中商品/服务应如何描述？类似群代码是什么？",
    },
    a: {
      ko: "한국은 NICE 분류를 채택하지만, 지정상품 기재에서는 단순 NICE 클래스 헤딩이 아닌 구체적인 상품/서비스명을 기재해야 합니다. KIPO는 자체적으로 유사군코드(類似群코드) 시스템을 운용합니다. 유사군코드는 동일·유사 상품군을 묶어 혼동 가능성 판단에 활용됩니다. 출원 시 지정상품에 적합한 유사군코드를 병기하면 심사가 원활해집니다.\n\n자유롭게 기재한 지정상품은 KIPO 사전 승인 상품과 다를 경우 보정 요청을 받을 가능성이 높습니다. KIPO 상표 심사지침에서 제공하는 사전 승인 상품 목록(상품류 구분 고시)을 기반으로 작성하는 것이 실무상 권장됩니다. 지정상품의 범위 설정은 권리 범위와 직결되므로, 한국 상표 전문 변리사와 협력하여 사업에 맞는 최적의 지정상품 구성을 설계하는 것이 중요합니다.",
      en: "Korea follows the NICE Classification but requires goods and services to be described in specific terms, not merely by class headings. KIPO operates its own 'similarity group code' (유사군코드) system, which groups similar goods and services and is used to assess likelihood of confusion between marks.\n\nFreehand descriptions that deviate from KIPO's pre-approved goods/services list (as published in the official goods-classification notice) often trigger office actions requiring amendment. Using KIPO's approved terminology minimizes prosecution risk. Because the scope of designated goods and services directly determines the scope of trademark rights, working closely with a Korean trademark attorney to tailor the goods/services list to your business activities is essential.",
      ja: "韓国はNICE分類を採用していますが、指定商品・役務の記載はクラスの表題を記載するだけでなく、具体的な商品・役務名を記載する必要があります。KIPOは独自の「類似群コード」（유사군코드）システムを運用しており、類似する商品・役務をグループ化して商標間の混同可能性の判断に活用しています。\n\nKIPOの事前承認商品・役務リスト（商品区分告示）から逸脱した自由記載の商品は、補正を求める審査結果通知を受けやすいです。KIPO承認の用語を使用することで審査リスクを最小化できます。指定商品・役務の範囲は商標権の範囲に直結するため、韓国の商標専門弁理士と緊密に連携して、事業内容に合った最適な指定商品・役務リストを設計することが重要です。",
      zh: "韩国遵循尼斯分类，但要求用具体名称描述商品/服务，而非仅写类别标题。KIPO运行独有的\"类似群代码\"（유사군코드）系统，将类似商品/服务归组，用于判断商标之间的混淆可能性。\n\n不符合KIPO预审批商品/服务清单（商品区分公告）的自由撰写内容，往往会引发要求修改的审查意见通知。使用KIPO批准的标准用语可有效降低审查风险。由于指定商品/服务的范围直接决定商标权的范围，建议与韩国商标代理人密切合作，量身设计符合业务需要的最佳商品/服务清单。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "외국 브랜드의 한글 음역 상표도 별도로 출원해야 하나요?",
      en: "Should the Hangul transliteration of a foreign brand name be registered as a separate Korean trademark?",
      ja: "外国ブランドのハングル音訳商標も別途出願すべきですか？",
      zh: "外国品牌的韩文音译商标是否也需要单独申请注册？",
    },
    a: {
      ko: "강력히 권장됩니다. 한국 소비자들은 외국 브랜드를 한글로 음역하여 사용하는 것이 일반적입니다. 예를 들어 'Apple'은 '애플', 'Google'은 '구글'로 불립니다. 상표법상 외국 브랜드의 한글 음역은 별개의 독립된 표장으로 취급되어, 원어 상표 등록이 있더라도 한글 음역 표장을 제3자가 먼저 출원하면 그 제3자가 권리자가 됩니다.\n\n상표 도용 방지를 위해 원어 상표 출원과 동시에 대표적인 한글 음역 표장을 함께 출원하는 것이 실무상 표준입니다. 발음에 따라 복수의 한글 표기가 가능한 경우에는 주요 형태를 모두 커버하는 전략이 필요합니다. 한국 상표 전문 변리사가 브랜드에 맞는 최적의 한글 음역을 제안해 드릴 수 있습니다.",
      en: "Strongly advisable. Korean consumers routinely transliterate foreign brand names into Hangul — for example, 'Apple' becomes '애플' and 'Google' becomes '구글'. Under Korean trademark law, the Hangul transliteration of a foreign brand is treated as a separate and independent mark. Even if the original-language mark is registered, a third party can register the Hangul equivalent first and become the rightful owner of that Hangul mark in Korea.\n\nConcurrent filing of the primary Hangul transliteration alongside the original-language mark is standard practice for brand protection. Where multiple Hangul spellings are phonetically plausible for the same foreign name, a comprehensive strategy covering the primary variations is advisable. A Korean trademark attorney can recommend the most appropriate Hangul transliteration for your brand.",
      ja: "強く推奨されます。韓国の消費者は外国ブランドをハングルに音訳して使用するのが一般的です。例えば、'Apple'は'애플'、'Google'は'구글'と呼ばれます。韓国商標法上、外国ブランドのハングル音訳は独立した別の商標として扱われます。原語商標が登録されていても、第三者が先にハングル音訳商標を出願すれば、その第三者が韓国でのハングル商標の権利者となります。\n\n原語商標と同時に主要なハングル音訳商標を出願することが、ブランド保護の標準的な実務です。同一の外国語名称について複数のハングル表記が音声的に可能な場合は、主要なバリエーションをすべてカバーする戦略が必要です。韓国の商標専門弁理士がブランドに適した最適なハングル音訳を提案します。",
      zh: "强烈建议。韩国消费者习惯将外国品牌名称音译成韩文，例如\"Apple\"译为\"애플\"，\"Google\"译为\"구글\"。根据韩国商标法，外国品牌的韩文音译被视为独立的单独商标。即使原语商标已注册，若第三方抢先申请韩文音译版本，该第三方将成为该韩文商标在韩国的合法权利人。\n\n在申请原语商标的同时一并申请主要韩文音译商标，是品牌保护的标准实务做法。若同一外国名称存在多种可能的韩文拼写，建议制定涵盖主要变体的全面策略。韩国商标代理人可为您的品牌推荐最合适的韩文音译方案。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국 상표 출원 비용과 심사 기간은? 이의신청 기간은 얼마인가요?",
      en: "What are the costs and timeline for Korean trademark registration? How long is the opposition period?",
      ja: "韓国商標登録の費用と審査期間は？異議申立期間はどのくらいですか？",
      zh: "韩国商标注册费用和审查周期如何？异议期是多长？",
    },
    a: {
      ko: "관납료(KIPO 공식 수수료)는 2023년 8월 1일 개정 기준으로 류(class)당 약 5만원대 수준이며, 정확한 현행 금액은 KIPO 수수료 고시를 확인하거나 대리인에게 문의하시기 바랍니다. 지정상품이 20개를 초과하면 10개마다 추가 수수료가 발생합니다.\n\n전체 심사 기간은 통상 출원일로부터 12~16개월입니다. 우선심사(조기심사)를 이용하면 2~4개월로 단축될 수 있습니다. 등록 결정 후 공고되면 이의신청 기간이 개시됩니다. 2025년 7월 22일 시행 개정법에 따라 이의신청 기간은 30일로 단축되었습니다. 이 기간 내에 이해관계인은 KIPO에 이의신청을 할 수 있습니다.",
      en: "Official government fees (KIPO fees) were revised effective August 1, 2023, to approximately KRW 50,000–60,000 per class at filing; please verify the current exact amount with KIPO's official fee schedule or your representative, as fees are subject to revision. Additional charges apply when designated goods exceed 20 items per class (in increments of 10).\n\nThe overall examination period is typically 12–16 months from the filing date. Priority (expedited) examination can reduce this to 2–4 months. After an approval decision is published, the opposition period begins. Under the revised Trademark Act effective July 22, 2025, the opposition period has been shortened to 30 days, during which any interested party may file an opposition with KIPO.",
      ja: "官庁費用（KIPO公式費用）は2023年8月1日改正基準で1区分あたり約5万ウォン台です。現行の正確な金額はKIPOの官費告示またはご担当代理人にご確認ください。1区分の指定商品が20品目を超える場合は10品目ごとに追加費用が発生します。\n\n全体の審査期間は通常、出願日から12〜16か月です。優先審査（조기심사）を利用すれば2〜4か月に短縮できます。登録決定後に公告されると異議申立期間が開始されます。2025年7月22日施行の改正法により、異議申立期間は30日に短縮されました。この期間中、利害関係人はKIPOに異議申立を行うことができます。",
      zh: "官费（KIPO官方费用）已于2023年8月1日修订，每类申请费约为5万韩元左右，请向KIPO官方费用公告或代理人确认现行准确金额，因费用可能随时调整。每类指定商品超过20件时，每增加10件需额外缴费。\n\n整体审查周期通常为自申请日起12至16个月。优先审查（조기심사）可缩短至2至4个月。批准决定公告后，进入异议期。根据2025年7月22日起施行的修订《商标法》，异议期已缩短为30天，在此期间，任何利害关系人均可向KIPO提出异议。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국에서 3년 불사용 취소심판이란? 어떻게 방어하나요?",
      en: "What is the 3-year non-use cancellation action in Korea, and how can registrants defend against it?",
      ja: "韓国の不使用取消審判とは何ですか？どのように防御できますか？",
      zh: "什么是韩国3年不使用撤销审判？如何进行抗辩？",
    },
    a: {
      ko: "상표권자가 정당한 이유 없이 등록 상표를 계속하여 3년 이상 한국에서 사용하지 않으면, 이해관계인이 KIPO에 불사용 취소심판을 청구할 수 있습니다. 취소가 확정되면 상표권은 취소 청구일로 소급하여 소멸하고, 해당 상표 권리자는 3년간 동일·유사 상표를 재등록할 수 없습니다.\n\n방어를 위해서는 한국 내에서의 실질적인 상업적 사용 사실을 입증해야 합니다. '사용'에는 상품에 상표 부착, 포장재 표시, 광고, 인터넷 판매 등이 포함되나, 형식적·상징적 사용은 인정되지 않습니다. 한국 내 직접 판매 외에도 한국 소비자를 대상으로 한 웹사이트 운영, 소셜미디어 사용 등도 사용의 증거가 될 수 있습니다. 사용 증거는 상시적으로 수집·보관하고, 연간 1회 이상 증거 파일을 갱신하도록 권고합니다.",
      en: "If a trademark owner fails to use a registered mark in Korea for three consecutive years without legitimate justification, any interested party may file a non-use cancellation trial with KIPO. Upon successful cancellation, the trademark right is extinguished retroactively from the date the cancellation was filed, and the former registrant is barred from re-registering the same or similar mark for three years.\n\nTo defend against a cancellation action, the registrant must prove genuine commercial use of the mark in Korea. Use includes affixing the mark to goods, labelling packaging, advertising, and sales through Korean channels including e-commerce. Token or symbolic use is not sufficient. Evidence of use targeting Korean consumers — such as a Korean-language website, domestic distribution, or Korean social media presence — is relevant. We recommend maintaining a use-evidence file updated at least once a year.",
      ja: "商標権者が正当な理由なく登録商標を韓国において継続して3年以上使用しない場合、利害関係人はKIPOに不使用取消審判を請求することができます。取消が確定すると、商標権は審判請求日に遡って消滅し、元の権利者は3年間、同一・類似商標の再登録ができません。\n\n防御するためには、韓国での実質的な商業的使用を立証しなければなりません。「使用」には商品への商標表示、包装材への記載、広告、韓国国内での販売（ECサイト含む）などが含まれますが、形式的・象徴的な使用は認められません。韓国語のウェブサイト、国内流通、韓国のSNSアカウントなど、韓国の消費者を対象とした活動も使用の証拠として有効です。使用証拠は常時収集・保管し、年1回以上更新することをお勧めします。",
      zh: "若商标权人无正当理由连续3年在韩国不使用其注册商标，任何利害关系人均可向KIPO提出不使用撤销审判。撤销确定后，商标权自审判请求之日起溯及消灭，原权利人3年内不得重新注册相同或类似商标。\n\n抗辩需证明商标在韩国有真实的商业性使用。\"使用\"包括在商品上附加商标、标注包装、广告宣传及通过韩国渠道（含电商）销售等，仅有象征性使用不被认可。针对韩国消费者的活动——如韩语网站、国内分销、韩国社交媒体账号——均可作为使用证明。建议持续收集并保存使用证据，至少每年更新一次证据档案。",
    },
  },
  {
    category: "trademark",
    q: {
      ko: "한국에서 상표 도용(브로커 선점) 피해를 당했을 때 어떤 구제 방법이 있나요?",
      en: "What remedies are available if my brand has been squatted on by a trademark broker in Korea?",
      ja: "韓国で商標ブローカーにブランドを先占された場合、どのような救済手段がありますか？",
      zh: "如果我的品牌在韩国遭到商标抢注，有哪些救济途径？",
    },
    a: {
      ko: "한국 상표법 제34조 제1항 제21호는 부정한 목적으로 출원된 상표를 등록받을 수 없도록 하고 있습니다. 국내외에 널리 알려진 타인의 상표와 동일·유사한 표장을 부정한 목적으로 출원하면 거절되거나 등록 무효가 될 수 있습니다. 이미 등록된 경우에는 무효심판(KIPO 심판원 또는 법원)을 통해 권리를 다툴 수 있습니다.\n\n미등록 상태라면 공고기간 중 이의신청(출원 공고 후 30일 이내)을 활용할 수 있습니다. 또한 KIPO 직권 취소 제도, 부정경쟁방지법상 부정경쟁행위로 민사·형사 청구, 불공정거래행위 신고 등의 수단도 있습니다. 빠른 대응이 중요하므로, 도용 사실을 인지한 즉시 한국 상표 전문 변리사에게 연락하여 최적의 전략을 수립하시기 바랍니다.",
      en: "Korean Trademark Act §34(1)(21) bars registration of marks filed in bad faith, including marks identical or similar to a mark well-known domestically or internationally that were filed with fraudulent intent. Such applications can be refused at examination or, if already registered, invalidated through a trial for invalidity before KIPO's Trial Board or the courts.\n\nIf the infringing application has not yet been registered, an opposition can be filed within 30 days of the publication notice. Additional remedies include the Unfair Competition Prevention Act (civil and criminal claims for misappropriation of trade identity), KIPO's ex officio cancellation mechanism, and consumer-protection complaints. Because rapid response is critical, we recommend contacting a Korean trademark attorney immediately upon becoming aware of the squatting activity.",
      ja: "韓国商標法第34条第1項第21号は、不正な目的で出願された商標の登録を禁止しています。国内外で広く認知された他人の商標と同一・類似の商標を不正な目的で出願した場合、拒絶または登録無効となる可能性があります。すでに登録されている場合は、KIPOの審判院または裁判所への無効審判を通じて権利を争うことができます。\n\n未登録の場合は、公告期間中（出願公告後30日以内）に異議申立を活用できます。また、KIPOの職権取消制度、不正競争防止法に基づく民事・刑事請求、不公正取引行為の申告なども手段として存在します。迅速な対応が重要ですので、商標先占を認識したらすぐに韓国の商標専門弁理士に連絡し、最善の戦略を立ててください。",
      zh: "《韩国商标法》第34条第1款第21项禁止以不正当目的申请的商标获得注册，包括以欺诈意图申请与国内外知名商标相同或类似的商标。此类申请可在审查中被驳回，若已注册，可通过向KIPO审判委员会或法院提起无效审判来撤销。\n\n若侵权申请尚未注册，可在公告后30天内提出异议。其他救济手段包括：《反不正当竞争法》（民事和刑事索赔）、KIPO的职权撤销机制，以及消费者保护投诉。由于快速响应至关重要，建议一旦发现抢注行为，立即联系韩国商标代理人制定最佳应对策略。",
    },
  },

  // ─── DESIGNS ──────────────────────────────────────────────────────────────
  {
    category: "design",
    q: {
      ko: "헤이그 협정으로 한국을 지정할 수 있나요? KIPO는 실체심사를 하나요?",
      en: "Can Korea be designated through the Hague System? Does KIPO conduct substantive examination?",
      ja: "ハーグ協定で韓国を指定できますか？KIPOは実体審査を行いますか？",
      zh: "可以通过海牙体系指定韩国吗？KIPO会进行实质审查吗？",
    },
    a: {
      ko: "한국은 헤이그 협정 가입국으로, 국제 디자인 출원에서 한국을 지정할 수 있습니다. 단, 한국은 유럽(EUIPO)과 달리 실체심사를 시행합니다. KIPO는 신규성, 창작 용이성(선행 디자인과의 유사성), 불등록 사유 등을 심사합니다. 따라서 헤이그 루트로 출원하더라도 KIPO로부터 거절이유통지를 받을 수 있습니다.\n\n헤이그 출원에서 KIPO로부터 심사결과통지(OA)를 받으면, 대응 기간 내에 한국 대리인을 선임하고 의견서·보정서를 제출해야 합니다. 실체적 판단이 필요한 복잡한 디자인은 KIPO 직접 출원을 통해 처음부터 전략적으로 접근하는 것도 좋은 방법입니다.",
      en: "Korea is a member of the Hague Agreement, so it can be designated in an international design application. However, unlike the EUIPO (which does not conduct substantive examination for Hague-designated applications), KIPO performs full substantive examination. KIPO examines novelty, creative ease (similarity to prior designs), and absolute grounds for refusal. Accordingly, a Hague application designating Korea may receive a refusal notification from KIPO.\n\nIf KIPO issues an office action on a Hague-designated application, a Korean local agent must be appointed within the response period to file a written argument and/or amendment. For technically complex or aesthetically nuanced designs, direct filing with KIPO, supported by local counsel from the outset, may provide a more strategically effective approach.",
      ja: "韓国はハーグ協定の加盟国であり、国際意匠出願において韓国を指定することができます。ただし、EUIPO（ハーグ指定出願に実体審査を行わない）とは異なり、KIPOは完全な実体審査を実施します。KIPOは新規性、創作容易性（先行意匠との類似性）、不登録事由などを審査します。そのため、韓国を指定するハーグ出願であっても、KIPOから拒絶理由通知を受ける可能性があります。\n\nKIPOがハーグ指定出願に対して審査結果通知（OA）を発行した場合は、応答期間内に韓国の現地代理人を選任し、意見書・補正書を提出しなければなりません。技術的に複雑または美的に繊細な意匠については、最初から現地代理人のサポートを受けてKIPO直接出願を行うことも戦略的に有効です。",
      zh: "韩国是海牙协定成员国，可在国际外观设计申请中指定韩国。但与欧洲知识产权局（EUIPO，对海牙指定申请不进行实质审查）不同，KIPO会进行完整的实质审查，审查新颖性、创作容易性（与现有设计的相似性）及绝对驳回事由。因此，指定韩国的海牙申请可能会收到KIPO的驳回通知。\n\n若KIPO对海牙指定申请发出审查意见通知（OA），须在答复期内委托韩国当地代理人提交意见书和/或修改书。对于技术复杂或美学细节丰富的外观设计，从一开始就通过当地代理人直接向KIPO申请，可能是更具战略优势的方式。",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국 디자인에서 심사 등록과 일부심사 등록의 차이는 무엇인가요?",
      en: "What is the difference between the full-examination and partial-examination (PSES) tracks in Korean design prosecution?",
      ja: "韓国意匠における審査登録と一部審査登録（PSES）の違いは何ですか？",
      zh: "韩国外观设计全面审查与部分审查（PSES）两种途径有何不同？",
    },
    a: {
      ko: "한국 디자인보호법은 두 가지 심사 트랙을 운영합니다. 심사 등록(Full Examination)은 모든 디자인 출원에 기본적으로 적용되며, 신규성·창작 용이성 등 실체 심사를 거칩니다. 일부심사 등록(일부심사, PSES)은 특정 물품류(패션·직물·의류, 문구, 장신구, 침구류 등)에 한하여 운용됩니다.\n\n일부심사는 방식 심사 위주로 진행되어 등록이 매우 빠릅니다(통상 1~3개월). 단, 제3자가 신규성 등을 이유로 이의신청 또는 무효심판을 제기할 수 있어 권리 안정성이 상대적으로 낮습니다. 트렌드 사이클이 짧은 패션 산업 등에서는 빠른 권리화의 이점이 크지만, 장기적인 권리 보호가 중요한 경우에는 심사 등록을 선택하는 것이 일반적입니다.",
      en: "The Korean Design Protection Act operates two examination tracks. Full Examination applies to all design applications by default and involves substantive review of novelty, creative ease, and other grounds. Partial Substantive Examination (일부심사, PSES) is available only for certain article classes, primarily fast-fashion goods such as textiles, apparel, stationery, accessories, and bedding.\n\nUnder PSES, examination is primarily formal, resulting in very rapid registration (typically one to three months). The trade-off is that registered designs under PSES are more vulnerable to post-registration invalidity — third parties may file opposition or a trial for invalidity on novelty grounds. For industries with short trend cycles, the speed advantage is substantial; for technology-focused products requiring long-term protection, the full-examination track is generally preferable.",
      ja: "韓国意匠保護法は二つの審査トラックを運用しています。審査登録（Full Examination）はすべての意匠出願にデフォルトで適用され、新規性・創作容易性などの実体審査が行われます。一部審査登録（일부심사、PSES）は特定の物品類（ファッション・繊維・衣料、文具、装身具、寝具類など）に限り利用できます。\n\n一部審査は方式審査中心で進行するため登録が非常に早く（通常1〜3か月）、スピードの利点があります。ただし、第三者が新規性等を理由に異議申立や無効審判を請求できるため、権利の安定性は相対的に低くなります。トレンドサイクルが短いファッション産業などではスピードの優位性が大きいですが、長期的な権利保護が重要な場合は審査登録を選ぶのが一般的です。",
      zh: "韩国《外观设计保护法》设有两种审查途径。全面审查适用于所有外观设计申请，须经过新颖性、创作容易性等实质审查。部分审查（일부심사，PSES）仅适用于特定物品类别，主要包括时尚、纺织品、服装、文具、饰品和寝具等。\n\n部分审查主要进行形式审查，注册极快（通常1至3个月），速度优势明显。但其缺点是，第三方可以新颖性等理由提出异议或无效审判，权利稳定性相对较低。对于趋势周期短的时尚行业，速度优势显著；若需要长期权利保护，通常选择全面审查途径更为合适。",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국에서 부분디자인 보호가 가능한가요?",
      en: "Is partial design protection available in Korea?",
      ja: "韓国では部分意匠保護が可能ですか？",
      zh: "韩国是否提供部分外观设计保护？",
    },
    a: {
      ko: "한국은 2001년부터 부분디자인 제도를 시행하고 있습니다. 부분디자인은 물품 전체가 아닌 특정 부분의 형태·모양·색채를 보호 대상으로 합니다. 도면에서 보호받고자 하는 부분은 실선으로, 나머지 부분은 파선(점선)으로 표시하여 구분합니다.\n\n부분디자인의 전략적 장점은 경쟁사가 전체 형태를 달리하더라도 핵심 디자인 요소를 모방하면 침해가 성립될 수 있다는 점입니다. 예를 들어, 제품의 특정 그립 형태, 손잡이, UI 요소의 배치 등을 부분디자인으로 보호할 수 있습니다. 부분디자인 침해 판단은 권리 범위(청구항 기재 부분)와 대비 제품의 해당 부분 간의 유사 여부로 결정됩니다.",
      en: "Korea has recognized partial design protection since 2001. A partial design protects the shape, pattern, or color of a specific portion of an article, not the article as a whole. In the design drawings, the portion claimed for protection is depicted in solid lines, while the remainder is shown in broken (dashed) lines.\n\nThe strategic value of partial design protection lies in its ability to capture infringement even when a competitor's overall product shape differs — if the key design element is reproduced in a substantially similar form, infringement may be established. Examples of protectable partial designs include a distinctive grip area, a handle, or the arrangement of UI elements on a device. Infringement is assessed by comparing the claimed portion (as shown in solid lines) with the corresponding portion of the accused product.",
      ja: "韓国は2001年から部分意匠保護制度を施行しています。部分意匠は物品全体ではなく、特定の部分の形状・模様・色彩を保護の対象とします。図面において、保護を求める部分は実線で、それ以外の部分は破線（点線）で示して区別します。\n\n部分意匠の戦略的な優位性は、競合他社が物品全体の形状を変えても、主要なデザイン要素を模倣すれば侵害が成立しうる点にあります。たとえば、製品の特定のグリップ形状、ハンドル、UI要素の配置などを部分意匠として保護することができます。部分意匠の侵害判断は、権利範囲（実線で示された部分）と対比製品の該当部分の類似性によって決定されます。",
      zh: "韩国自2001年起实施部分外观设计保护制度。部分外观设计保护的是物品特定部分的形状、图案或颜色，而非整个物品。在设计图中，主张保护的部分用实线绘制，其余部分用虚线（点线）表示以示区分。\n\n部分外观设计保护的战略价值在于：即使竞争对手整体产品形状不同，若复制了关键设计元素，仍可能构成侵权。可受保护的部分外观设计示例包括：独特的握持区域、把手，或设备上UI元素的排列方式等。侵权判断通过比较权利范围（实线所示部分）与被控侵权产品对应部分的相似性来确定。",
    },
  },
  {
    category: "design",
    q: {
      ko: "관련디자인 제도는 무엇이고, 출원 기간이 최근 변경되었나요?",
      en: "What is Korea's related-design system, and was the filing window recently extended?",
      ja: "韓国の関連意匠制度とは何ですか？出願期間は最近変更されましたか？",
      zh: "什么是韩国的关联外观设计制度？申请期限是否有近期调整？",
    },
    a: {
      ko: "관련디자인 제도는 기본디자인과 유사한 변형 디자인을 동일 출원인이 일정 기간 내에 출원하여 디자인 패밀리를 구축할 수 있는 제도입니다. 관련디자인은 기본디자인의 등록 여부와 무관하게 출원 가능하며, 관련디자인 간의 유사 여부는 불등록 사유가 되지 않습니다.\n\n2023년 12월 21일 시행 개정 디자인보호법에 따라 관련디자인의 출원 기간이 기본디자인 출원일로부터 1년에서 3년으로 연장되었습니다. 이 개정은 2022년 12월 22일 이후 출원된 기본디자인에 적용됩니다. 기본디자인의 권리 존속기간(출원일로부터 20년)은 관련디자인에도 동일하게 적용됩니다. 이 제도는 연속적인 디자인 개발 프로젝트에서 폭넓은 디자인 패밀리를 전략적으로 구성하는 데 특히 유용합니다.",
      en: "The related-design system allows the same applicant to file design variations similar to a base design within a defined period, building a design family. Related designs may be filed regardless of whether the base design has been registered, and similarity among related designs is not a ground for refusal.\n\nUnder the revised Design Protection Act effective December 21, 2023, the filing window for related designs was extended from one year to three years from the filing date of the base design. This extension applies to base designs filed on or after December 22, 2022. The term of a related design runs concurrently with the base design (20 years from the filing date of the base design). This system is particularly valuable for ongoing product development programs where design variants are progressively developed over time.",
      ja: "関連意匠制度は、同一の出願人が基本意匠に類似した変形意匠を一定期間内に出願して意匠ファミリーを構築できる制度です。関連意匠は基本意匠の登録の有無にかかわらず出願でき、関連意匠間の類似は不登録事由になりません。\n\n2023年12月21日施行の改正意匠保護法により、関連意匠の出願期間が基本意匠の出願日から1年から3年に延長されました。この改正は2022年12月22日以降に出願された基本意匠に適用されます。関連意匠の存続期間は基本意匠と同じく出願日から20年です。この制度は、段階的に意匠バリエーションが開発される継続的な製品開発プロジェクトにおいて、幅広い意匠ファミリーを戦略的に構築するうえで特に有用です。",
      zh: "关联外观设计制度允许同一申请人在规定期限内申请与基本外观设计相似的变体设计，从而构建外观设计家族。关联外观设计无论基本外观设计是否已注册均可申请，关联外观设计之间的相似性不构成不予注册的理由。\n\n根据2023年12月21日起施行的修订《外观设计保护法》，关联外观设计的申请期限从基本外观设计申请日起由1年延长至3年。此修订适用于2022年12月22日及之后提交的基本外观设计申请。关联外观设计的保护期限与基本外观设计相同（自基本外观设计申请日起20年）。该制度对于阶段性开发外观设计变体的持续产品开发项目，在战略上构建广泛的外观设计家族尤为有益。",
    },
  },
  {
    category: "design",
    q: {
      ko: "비밀디자인 제도란 무엇인가요? 언제 활용하면 유리한가요?",
      en: "What is Korea's secret design system, and when is it strategically useful?",
      ja: "韓国の秘密意匠制度とは何ですか？どのような場合に活用すると有利ですか？",
      zh: "什么是韩国的秘密外观设计制度？何时适合使用？",
    },
    a: {
      ko: "비밀디자인 제도(디자인보호법 §43)는 등록된 디자인의 내용을 일정 기간 동안 공개하지 않고 비밀로 유지할 수 있도록 하는 제도입니다. 비밀 기간은 등록일로부터 최장 3년이며, 출원 시 또는 등록 후에 비밀 기간을 신청할 수 있습니다.\n\n비밀디자인이 유리한 경우는 제품 출시까지 상당한 시간이 필요한 경우(예: 대형 가전, 자동차 부품, 패션 시즌 전 디자인)입니다. 비밀 기간 중에는 디자인 내용이 공개되지 않아 경쟁사가 내용을 파악하기 어렵습니다. 단, 비밀디자인 존재 자체(번호, 비밀 지정 사실)는 공개됩니다. 비밀 기간을 단축하거나 비밀 지정을 해제하는 것은 언제든 가능합니다.",
      en: "The secret design system (Design Protection Act §43) allows the contents of a registered design to remain confidential for a specified period. The secrecy period may be up to three years from the registration date, and a request for secrecy may be made at the time of application or after registration.\n\nSecret design registration is most advantageous when there is a substantial lead time between design finalization and product launch — for example, large appliances, automotive components, or fashion-season designs. During the secrecy period, the design's visual content is not disclosed to the public, making it difficult for competitors to assess the scope of protection. Note that the existence of the registration itself (registration number and the fact of secrecy designation) remains publicly visible. The secrecy period can be shortened or the designation lifted at any time by request.",
      ja: "秘密意匠制度（意匠保護法第43条）は、登録された意匠の内容を一定期間非公開にできる制度です。非公開期間は登録日から最長3年で、出願時または登録後に申請できます。\n\n秘密意匠が有利なのは、デザインの確定から製品発売まで相当の期間が必要な場合（例：大型家電、自動車部品、ファッションシーズン前の意匠など）です。非公開期間中は意匠の内容が公開されないため、競合他社が権利範囲を把握しにくくなります。ただし、登録の存在自体（登録番号と秘密指定の事実）は公開されます。非公開期間の短縮や秘密指定の解除はいつでも申請できます。",
      zh: "秘密外观设计制度（《外观设计保护法》第43条）允许已注册的外观设计内容在一定期间内保持保密状态。保密期限自注册日起最长3年，可在申请时或注册后申请。\n\n秘密外观设计注册最适用于设计定稿到产品上市之间存在较长周期的情形，例如大型家用电器、汽车零部件或时装季前设计等。保密期间，外观设计的视觉内容不公开，竞争对手难以了解保护范围。但注意，注册本身的存在（注册号及保密指定事实）仍为公开信息。保密期限可随时申请缩短，保密指定也可随时解除。",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국에서도 신규성 상실 예외를 디자인에 적용할 수 있나요?",
      en: "Does the novelty grace period apply to designs in Korea?",
      ja: "韓国では意匠にも新規性喪失の例外が適用されますか？",
      zh: "韩国外观设计也适用新颖性丧失例外吗？",
    },
    a: {
      ko: "예. 디자인보호법에도 신규성 상실 예외(공지예외) 규정이 있으며, 공개일로부터 12개월 이내에 출원하면 그 공개를 이유로 신규성 거절을 피할 수 있습니다. 2023년 12월 21일 시행 개정법에 따라 출원 후에도 공지예외를 소급하여 주장할 수 있도록 확대되었습니다.\n\n다만 상표와 마찬가지로 출원 시 또는 출원일로부터 30일 이내에 공지예외 적용 취지를 명시한 서면을 제출해야 합니다. 디자인은 시각적 정보이므로 SNS·전시회·제품 배포 등을 통한 공개가 특히 빈번합니다. 제품 출시 전에 디자인 출원을 완료하는 것이 가장 안전하며, 불가피하게 사전 공개가 된 경우에는 공개예외 적용 가능 여부를 즉시 전문가와 확인하시기 바랍니다.",
      en: "Yes. The Design Protection Act contains a novelty grace-period provision analogous to the patent grace period. An applicant who publicly disclosed the design and then files within 12 months of the disclosure date can invoke the exception to avoid a novelty-based refusal. Under the revised Design Protection Act effective December 21, 2023, the ability to claim the grace period retroactively after filing was expanded.\n\nAs with patents, a written notice invoking the exception must be submitted at the time of filing or within 30 days of the filing date. Because designs are inherently visual, pre-filing public disclosure through social media, exhibitions, or product distribution is particularly common. Filing before any public launch remains the safest approach; if unintended pre-filing disclosure has occurred, consult a Korean design attorney immediately to assess eligibility for the grace period.",
      ja: "はい。意匠保護法にも新規性喪失の例外規定があり、公開日から12か月以内に出願すれば、その公開を理由とした新規性拒絶を回避できます。2023年12月21日施行の改正法により、出願後に遡って公知例外を主張することが可能に拡大されました。\n\n特許と同様に、出願時または出願日から30日以内に公知例外適用の旨を記載した書面をKIPOに提出する必要があります。意匠は視覚的情報であるため、SNS・展示会・製品配布などを通じた事前公開が特に多いです。製品発売前に意匠出願を完了させることが最も安全ですが、意図せず事前に公開された場合は、早急に韓国の意匠専門弁理士に公知例外の適用可能性を確認することをお勧めします。",
      zh: "是的。《外观设计保护法》也有新颖性丧失例外条款，申请人在公开日起12个月内提交申请，可据此避免因该公开导致的新颖性驳回。根据2023年12月21日起施行的修订法，申请人在提交申请后追溯主张该例外的能力有所扩展。\n\n与专利类似，须在申请时或申请日起30天内向KIPO提交书面声明以援引该例外。由于外观设计本质上是视觉信息，通过社交媒体、展览或产品分发进行申请前公开的情况尤为普遍。最安全的做法是在任何公开发布前完成外观设计申请；若已发生无意的提前公开，请立即咨询韩国外观设计代理人以评估是否符合例外条件。",
    },
  },
  {
    category: "design",
    q: {
      ko: "UI, 아이콘, AR 이미지 등 화면 디자인도 한국에서 보호받을 수 있나요?",
      en: "Can UI elements, icons, and AR images be protected as designs in Korea?",
      ja: "UI要素、アイコン、AR画像などの画面デザインも韓国で保護できますか？",
      zh: "UI元素、图标和AR图像等屏幕设计在韩国能受到外观设计保护吗？",
    },
    a: {
      ko: "한국은 2021년 10월 21일부터 물리적 화면에 표시되지 않는 이미지 디자인(화상디자인)도 독립적으로 보호받을 수 있도록 디자인보호법을 개정했습니다. 이전에는 화상(이미지)이 반드시 물리적 제품(화면)과 결합된 형태로만 출원 가능했으나, 개정 이후에는 공중에 표시되는 영상(AR/홀로그램 포함), 프로젝션 이미지, 화면에 표시되는 GUI 레이아웃·아이콘·애니메이션 등을 독립적인 디자인으로 출원할 수 있습니다.\n\n이는 특히 소프트웨어·디지털 서비스·메타버스·AR·VR 분야의 기업에 중요한 변화입니다. UI 화면 구성, 아이콘 세트, 애니메이션 전환 효과, AR 오버레이 등이 보호 대상이 될 수 있습니다. 디지털 IP 포트폴리오를 구축하려는 기업은 한국 디자인보호법상 화상디자인 출원 전략을 적극 검토하시기 바랍니다.",
      en: "Since October 21, 2021, Korea's amended Design Protection Act allows image designs (화상디자인) to be protected independently of any physical display. Prior to the amendment, digital images could only be filed in combination with a physical article (the screen on which they appeared). Under the current law, images displayed in the air — including AR and holographic imagery — projected images, GUI layouts, icon sets, and animated transitions can all be filed as standalone designs.\n\nThis is a significant development for companies in software, digital services, the metaverse, and AR/VR sectors. UI screen compositions, icon suites, animated transition effects, and AR overlays are all now protectable. Companies building digital IP portfolios should actively explore image-design filing strategies under the Korean Design Protection Act.",
      ja: "2021年10月21日より、韓国の改正意匠保護法により、物理的な画面に表示されていない画像意匠（화상디자인）も独立して保護されるようになりました。改正前は、デジタル画像は必ず物理的な製品（表示画面）と組み合わせた形でのみ出願可能でしたが、改正後は、空中に表示される映像（AR・ホログラムを含む）、プロジェクション映像、GUIレイアウト・アイコン・アニメーションなどを独立した意匠として出願できます。\n\nこれはソフトウェア・デジタルサービス・メタバース・AR/VR分野の企業にとって重要な変化です。UI画面構成、アイコンセット、アニメーション遷移効果、ARオーバーレイなどが保護対象となります。デジタルIPポートフォリオを構築する企業は、韓国意匠保護法上の画像意匠出願戦略を積極的に検討することをお勧めします。",
      zh: "自2021年10月21日起，韩国修订的《外观设计保护法》允许图像外观设计（화상디자인）独立受到保护，无需依附于任何物理显示屏。修订前，数字图像只能与实体产品（显示屏）结合的形式提出申请；修订后，在空中显示的图像（含AR和全息图）、投影图像、GUI布局、图标集和动画过渡效果等，均可作为独立的外观设计申请。\n\n这对于软件、数字服务、元宇宙及AR/VR领域的企业是一项重要变化。UI屏幕构成、图标套件、动画过渡效果和AR叠加图像现均可受到保护。正在构建数字IP组合的企业，应积极探索韩国《外观设计保护法》下的图像外观设计申请策略。",
    },
  },
  {
    category: "design",
    q: {
      ko: "한국 디자인 존속기간은? 복수디자인 출원 제도는 미국·EU와 어떻게 다른가요?",
      en: "How long does Korean design protection last, and how does the multiple-design application system compare with the US and EU?",
      ja: "韓国の意匠の存続期間は？複数意匠出願制度は米国・EUとどのように異なりますか？",
      zh: "韩国外观设计保护期限是多长？复数外观设计申请制度与美国和欧盟有何不同？",
    },
    a: {
      ko: "한국 등록 디자인의 존속기간은 출원일로부터 20년입니다(2014년 7월 1일 이후 출원). 복수디자인출원 제도를 이용하면 1건의 출원으로 최대 100개의 디자인을 포함할 수 있습니다. 단, 모든 디자인이 동일한 로카르노 분류 내에 속해야 합니다.\n\n미국 디자인 특허는 출원당 1개 디자인만 허용되며, EU의 복수 디자인(Community Design)은 복수 로카르노 클래스에 걸쳐 여러 디자인을 포함할 수 있어 한국보다 유연합니다. 즉, 한국 복수디자인은 EU RCD처럼 다양한 클래스를 한 출원에 담는 것은 불가하지만, 동일 분류 내 다수 디자인을 한 출원으로 처리할 수 있어 출원 비용을 절감하는 데 유용합니다. 제품 라인업이 풍부한 제조기업에게는 복수디자인 전략이 비용 대비 효과적인 방안입니다.",
      en: "Registered Korean designs are protected for 20 years from the filing date (for applications filed on or after July 1, 2014). The multiple-design application system allows up to 100 designs to be filed in a single application, provided all designs belong to the same Locarno classification class.\n\nFor comparison: US design patents are one-design-per-application, offering no multiple-design option. EU Community Design (RCD) multiple applications can span multiple Locarno classes in a single filing, making the EU system more flexible in that respect. Korea's system thus sits between the two: it cannot accommodate multiple Locarno classes in one application as the EU can, but it does allow substantial cost savings for companies with large product families within the same class. For manufacturers with extensive product lineups, a multiple-design application strategy is a cost-effective approach.",
      ja: "韓国の登録意匠の存続期間は出願日から20年です（2014年7月1日以降の出願）。複数意匠出願制度を利用すれば、1件の出願で最大100の意匠を含めることができます。ただし、すべての意匠が同一のロカルノ分類内に属している必要があります。\n\n比較として：米国の意匠特許は1出願に1意匠のみが認められ、複数意匠オプションはありません。EU共同体意匠（RCD）の複数出願は複数のロカルノクラスにまたがることができ、その点でEU制度はより柔軟です。韓国の制度はその中間に位置します：EUのように複数のロカルノクラスを1出願に含めることはできませんが、同一分類内の多数の意匠を1出願でまとめることができ、大規模な製品ラインアップを持つ企業にとっては出願コストの節減に有用です。",
      zh: "韩国注册外观设计的保护期限自申请日起20年（适用于2014年7月1日及之后提交的申请）。复数外观设计申请制度允许一件申请最多包含100个外观设计，但所有设计须属于同一洛迦诺分类。\n\n对比而言：美国外观设计专利每件申请只能包含1个设计，不提供复数选项；欧盟外观设计（RCD）的多外观设计申请可跨越多个洛迦诺类别，在这方面比韩国更灵活。韩国制度介于两者之间：不能像欧盟那样在一件申请中涵盖多个洛迦诺类别，但对于同一分类内拥有大量产品线的企业，仍可有效节省申请成本。对于产品种类丰富的制造商，复数外观设计申请策略是具有成本效益的保护方案。",
    },
  },
];

export function faqByCategory(cat: FaqCategory) {
  return FAQ_ITEMS.filter((it) => it.category === cat);
}
