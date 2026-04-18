"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { StepProgress } from "./StepProgress";
import { BrandReferencePanel } from "./BrandReferencePanel";
import { businessCategories } from "@/lib/self-trademark/categories";
import { analyzeBusinessDescription, analyzeCategoryDescription } from "@/lib/self-trademark/analyze";
import { recommendGoods, countNiceClasses } from "@/lib/self-trademark/recommend";
import type {
  TrademarkType,
  ApplicantType,
  UsageType,
  GoodsCandidate,
  ServiceOption,
  ApplicationData,
} from "@/lib/self-trademark/types";

const TOTAL_STEPS = 7;
const STORAGE_KEY = "self-trademark-draft";

interface DraftState {
  step: number;
  trademarkName: string;
  trademarkType: TrademarkType;
  hasLogo: boolean;
  applicantType: ApplicantType;
  usageTypes: UsageType[];
  businessDescription: string;
  analysisConfirmed: boolean;
  showAnalysis: boolean;
  selectedCategories: string[];
  otherDescription: string;
  selectedSubItems: string[];
  selectedGoods: string[];
  goodsInitialized: boolean;
  showSelfGuide: boolean;
}

function loadDraft(): Partial<DraftState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function StartFlow() {
  const t = useTranslations("selfTrademark");
  const locale = useLocale();
  const [draft] = useState(loadDraft);

  const [step, setStep] = useState(draft.step ?? 1);
  const [submitted, setSubmitted] = useState(false);
  const [showSelfGuide, setShowSelfGuide] = useState(draft.showSelfGuide ?? false);

  // Contact info for agency/review
  const [pendingOption, setPendingOption] = useState<ServiceOption | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Step 1
  const [trademarkName, setTrademarkName] = useState(draft.trademarkName ?? "");
  const [trademarkType, setTrademarkType] = useState<TrademarkType>(draft.trademarkType ?? "text");
  const [hasLogo, setHasLogo] = useState(draft.hasLogo ?? true);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [applicantType, setApplicantType] = useState<ApplicantType>(draft.applicantType ?? "individual");

  // Step 2
  const [usageTypes, setUsageTypes] = useState<UsageType[]>(draft.usageTypes ?? []);
  const [businessDescription, setBusinessDescription] = useState(draft.businessDescription ?? "");
  const [analysisConfirmed, setAnalysisConfirmed] = useState(draft.analysisConfirmed ?? false);
  const [showAnalysis, setShowAnalysis] = useState(draft.showAnalysis ?? false);

  // Step 3
  const [selectedCategories, setSelectedCategories] = useState<string[]>(draft.selectedCategories ?? []);
  const [otherDescription, setOtherDescription] = useState(draft.otherDescription ?? "");

  // Step 4
  const [selectedSubItems, setSelectedSubItems] = useState<string[]>(draft.selectedSubItems ?? []);

  // Step 5
  const [selectedGoods, setSelectedGoods] = useState<string[]>(draft.selectedGoods ?? []);
  const [goodsInitialized, setGoodsInitialized] = useState(draft.goodsInitialized ?? false);

  // 상태 변경 시 sessionStorage에 저장
  useEffect(() => {
    const data: DraftState = {
      step,
      trademarkName,
      trademarkType,
      hasLogo,
      applicantType,
      usageTypes,
      businessDescription,
      analysisConfirmed,
      showAnalysis,
      selectedCategories,
      otherDescription,
      selectedSubItems,
      selectedGoods,
      goodsInitialized,
      showSelfGuide,
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* storage full — ignore */ }
  }, [
    step, trademarkName, trademarkType, hasLogo, applicantType,
    usageTypes, businessDescription, analysisConfirmed, showAnalysis,
    selectedCategories, otherDescription, selectedSubItems, selectedGoods, goodsInitialized,
    showSelfGuide,
  ]);

  // Derived
  const recommendedGoods = useMemo(
    () => recommendGoods(selectedSubItems),
    [selectedSubItems]
  );

  const filteredCategories = useMemo(
    () => businessCategories.filter((c) => selectedCategories.includes(c.id)),
    [selectedCategories]
  );

  const selectedGoodsList = useMemo(
    () => recommendedGoods.filter((g) => selectedGoods.includes(g.id)),
    [recommendedGoods, selectedGoods]
  );

  // Initialize goods selection when entering step 5
  const initGoods = useCallback(() => {
    if (!goodsInitialized) {
      const essentialIds = recommendedGoods
        .filter((g) => g.type === "essential")
        .map((g) => g.id);
      setSelectedGoods(essentialIds);
      setGoodsInitialized(true);
    }
  }, [recommendedGoods, goodsInitialized]);

  // Analyze business description
  const analyzedType = useMemo(() => {
    if (!usageTypes.includes("unknown") || !businessDescription.trim()) return null;
    return analyzeBusinessDescription(businessDescription);
  }, [usageTypes, businessDescription]);

  function handleAnalyze() {
    setShowAnalysis(true);
  }

  function canGoNext(): boolean {
    switch (step) {
      case 1:
        return trademarkName.trim().length > 0;
      case 2:
        if (usageTypes.length === 0) return false;
        if (usageTypes.includes("unknown") && !analysisConfirmed) {
          return businessDescription.trim().length > 0 && showAnalysis;
        }
        return true;
      case 3:
        return selectedCategories.length > 0;
      case 4:
        return selectedSubItems.length > 0;
      case 5:
        return selectedGoods.length > 0;
      case 6:
        return true;
      default:
        return false;
    }
  }

  function goNext() {
    if (step < TOTAL_STEPS) {
      const nextStep = step + 1;
      if (nextStep === 5) {
        // Initialize goods when entering step 5
        if (!goodsInitialized) {
          const essentialIds = recommendedGoods
            .filter((g) => g.type === "essential")
            .map((g) => g.id);
          setSelectedGoods(essentialIds);
          setGoodsInitialized(true);
        }
      }
      setStep(nextStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goPrev() {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleSubmit(serviceOption: ServiceOption) {
    if (serviceOption === "self") {
      setShowSelfGuide(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Show contact info form for agency/review
      setPendingOption(serviceOption);
      setSendError("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleContactSubmit() {
    if (!clientName.trim() || !clientPhone.trim() || !clientEmail.trim()) return;
    setShowConfirm(true);
  }

  async function handleConfirmSend() {
    if (!pendingOption) return;
    setSending(true);
    setSendError("");

    // Build goodsByClass for the email
    const classMap = new Map<string, string[]>();
    for (const g of selectedGoodsList) {
      const list = classMap.get(g.niceClass) ?? [];
      list.push(g.name);
      classMap.set(g.niceClass, list);
    }
    const goodsByClass = Array.from(classMap.entries())
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([niceClass, goods]) => ({ niceClass, goods }));

    // Calculate fee
    const KIPO_BASE = 46000;
    const KIPO_FREE = 10;
    const KIPO_SURCHARGE = 2000;
    const totalFee =
      goodsByClass.length * KIPO_BASE +
      goodsByClass.reduce(
        (sum, cls) => sum + Math.max(0, cls.goods.length - KIPO_FREE) * KIPO_SURCHARGE,
        0
      );

    try {
      // Convert logo file to base64 if present
      let logoAttachment: { filename: string; content: string } | null = null;
      if (logoFile) {
        const buf = await logoFile.arrayBuffer();
        const base64 = btoa(
          new Uint8Array(buf).reduce((s, b) => s + String.fromCharCode(b), "")
        );
        logoAttachment = { filename: logoFile.name, content: base64 };
      }

      const res = await fetch("/api/trademark-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceOption: pendingOption,
          clientName: clientName.trim(),
          clientPhone: clientPhone.trim(),
          clientEmail: clientEmail.trim(),
          trademarkName,
          trademarkType,
          applicantType,
          goodsByClass,
          totalFee,
          locale,
          logoAttachment,
        }),
      });
      const data = await res.json();
      if (!data.ok) {
        setSendError(data.error || t("step7SendError"));
        setSending(false);
        setShowConfirm(false);
        return;
      }
      sessionStorage.removeItem(STORAGE_KEY);
      setSubmitted(true);
      setShowConfirm(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSendError(t("step7SendError"));
      setShowConfirm(false);
    } finally {
      setSending(false);
    }
  }

  if (showSelfGuide) {
    return (
      <SelfGuide
        t={t}
        trademarkName={trademarkName}
        selectedGoodsList={selectedGoodsList}
        onRequestService={(opt) => {
          setShowSelfGuide(false);
          setPendingOption(opt);
          setSendError("");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onGoBack={() => {
          setShowSelfGuide(false);
          setStep(7);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  if (submitted) {
    return (
      <div className="pt-16 md:pt-20">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            {t("step7SubmitSuccess")}
          </h2>
        </div>
      </div>
    );
  }

  /* ── Contact info form for agency / review ── */
  if (pendingOption) {
    const isContactValid =
      clientName.trim() !== "" &&
      clientPhone.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim());

    return (
      <div className="pt-16 md:pt-20">
        <div className="mx-auto max-w-lg px-4 py-8 md:py-16">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            {t("step7ContactTitle")}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{t("step7ContactDesc")}</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("step7ContactName")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={t("step7ContactNamePlaceholder")}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("step7ContactPhone")} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder={t("step7ContactPhonePlaceholder")}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t("step7ContactEmail")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder={t("step7ContactEmailPlaceholder")}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {sendError && (
            <p className="mt-4 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2.5">{sendError}</p>
          )}

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={() => { setPendingOption(null); setSendError(""); }}
              className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {t("step7ContactBack")}
            </button>
            <button
              type="button"
              disabled={!isContactValid}
              onClick={handleContactSubmit}
              className={clsx(
                "flex-1 rounded-xl py-2.5 text-sm font-medium transition-colors",
                isContactValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              )}
            >
              {t("step7ContactSubmit")}
            </button>
          </div>
        </div>

        {/* Confirmation dialog */}
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-center text-base font-medium text-slate-900">
                {pendingOption === "review"
                  ? t("step7ConfirmReview")
                  : t("step7ConfirmAgency")}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  disabled={sending}
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {t("step7ConfirmNo")}
                </button>
                <button
                  type="button"
                  disabled={sending}
                  onClick={handleConfirmSend}
                  className="flex-1 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {sending ? t("step7Sending") : t("step7ConfirmYes")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <StepProgress
          currentStep={step}
          totalSteps={TOTAL_STEPS}
          stepLabels={[
            t("stepLabel1"), t("stepLabel2"), t("stepLabel3"), t("stepLabel4"),
            t("stepLabel5"), t("stepLabel6"), t("stepLabel7"),
          ]}
        />

        {step === 1 && (
          <Step1
            t={t}
            trademarkName={trademarkName}
            setTrademarkName={setTrademarkName}
            trademarkType={trademarkType}
            setTrademarkType={setTrademarkType}
            hasLogo={hasLogo}
            setHasLogo={setHasLogo}
            logoFile={logoFile}
            setLogoFile={setLogoFile}
            applicantType={applicantType}
            setApplicantType={setApplicantType}
          />
        )}
        {step === 2 && (
          <Step2
            t={t}
            usageTypes={usageTypes}
            toggleUsageType={(v) => {
              const isSelected = usageTypes.includes(v);
              const next = isSelected
                ? usageTypes.filter((x) => x !== v)
                : [...usageTypes, v];
              setUsageTypes(next);
              // "unknown"이 토글될 때만 분석 상태 초기화
              if (v === "unknown") {
                setAnalysisConfirmed(false);
                setShowAnalysis(false);
              }
            }}
            businessDescription={businessDescription}
            setBusinessDescription={setBusinessDescription}
            analysisConfirmed={analysisConfirmed}
            setAnalysisConfirmed={setAnalysisConfirmed}
            showAnalysis={showAnalysis}
            setShowAnalysis={setShowAnalysis}
            handleAnalyze={handleAnalyze}
            analyzedType={analyzedType}
          />
        )}
        {step === 3 && (
          <Step3
            t={t}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            otherDescription={otherDescription}
            setOtherDescription={setOtherDescription}
          />
        )}
        {step === 4 && (
          <Step4
            t={t}
            filteredCategories={filteredCategories}
            selectedSubItems={selectedSubItems}
            setSelectedSubItems={(items) => {
              setSelectedSubItems(items);
              setGoodsInitialized(false);
            }}
          />
        )}
        {step === 5 && (
          <Step5
            t={t}
            recommendedGoods={recommendedGoods}
            selectedGoods={selectedGoods}
            setSelectedGoods={setSelectedGoods}
          />
        )}
        {step === 6 && (
          <Step6
            t={t}
            trademarkName={trademarkName}
            trademarkType={trademarkType}
            hasLogo={hasLogo}
            applicantType={applicantType}
            selectedCategories={selectedCategories}
            selectedGoodsList={selectedGoodsList}
          />
        )}
        {step === 7 && (
          <Step7 t={t} handleSubmit={handleSubmit} />
        )}

        {/* Navigation Buttons */}
        {step < 7 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 1}
              className={clsx(
                "rounded-xl px-6 py-2.5 text-sm font-medium transition-colors",
                step === 1
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {t("prev")}
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext()}
              className={clsx(
                "rounded-xl px-6 py-2.5 text-sm font-medium text-white transition-colors",
                canGoNext()
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-slate-300 cursor-not-allowed"
              )}
            >
              {t("next")}
            </button>
          </div>
        )}
        {step === 7 && (
          <div className="mt-8">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-xl px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {t("prev")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────── Step Components ─────────────────── */

type TFunc = ReturnType<typeof useTranslations<"selfTrademark">>;

/* Step 1: 상표 정보 입력 */
function Step1({
  t,
  trademarkName,
  setTrademarkName,
  trademarkType,
  setTrademarkType,
  hasLogo,
  setHasLogo,
  logoFile,
  setLogoFile,
  applicantType,
  setApplicantType,
}: {
  t: TFunc;
  trademarkName: string;
  setTrademarkName: (v: string) => void;
  trademarkType: TrademarkType;
  setTrademarkType: (v: TrademarkType) => void;
  hasLogo: boolean;
  setHasLogo: (v: boolean) => void;
  logoFile: File | null;
  setLogoFile: (v: File | null) => void;
  applicantType: ApplicantType;
  setApplicantType: (v: ApplicantType) => void;
}) {
  const trademarkTypes: { value: TrademarkType; label: string }[] = [
    { value: "text", label: t("step1TypeText") },
    { value: "logo", label: t("step1TypeLogo") },
    { value: "combined", label: t("step1TypeCombined") },
  ];

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step1Title")}
      </h2>

      <div className="mt-6 space-y-6">
        {/* 상표명 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("step1TrademarkName")} *
          </label>
          <input
            type="text"
            value={trademarkName}
            onChange={(e) => setTrademarkName(e.target.value)}
            placeholder={t("step1TrademarkNamePlaceholder")}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
          />
        </div>

        {/* 상표 형태 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("step1TrademarkType")}
          </label>
          <div className="flex flex-wrap gap-2">
            {trademarkTypes.map((tt) => (
              <button
                key={tt.value}
                type="button"
                onClick={() => setTrademarkType(tt.value)}
                className={clsx(
                  "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                  trademarkType === tt.value
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                )}
              >
                {tt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 로고 업로드 */}
        {(trademarkType === "logo" || trademarkType === "combined") && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              {t("step1LogoUpload")}
            </label>
            <p className="text-xs text-slate-500 mb-2">
              {t("step1LogoUploadDesc")}
            </p>

            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={!hasLogo}
                onChange={(e) => {
                  setHasLogo(!e.target.checked);
                  if (e.target.checked) setLogoFile(null);
                }}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600">{t("step1NoLogo")}</span>
            </label>

            {hasLogo && !logoFile && (
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            )}
            {logoFile && (
              <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                {logoFile.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(logoFile)}
                    alt={logoFile.name}
                    className="max-h-40 rounded-lg object-contain"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    {logoFile.name}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setLogoFile(null)}
                  className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium"
                >
                  {t("step1RemoveLogo")}
                </button>
              </div>
            )}
          </div>
        )}

        {/* 출원인 유형 */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("step1ApplicantType")}
          </label>
          <div className="flex gap-2">
            {(
              [
                { value: "individual" as const, label: t("step1Individual") },
                { value: "corporation" as const, label: t("step1Corporation") },
              ]
            ).map((a) => (
              <button
                key={a.value}
                type="button"
                onClick={() => setApplicantType(a.value)}
                className={clsx(
                  "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                  applicantType === a.value
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Step 2: 상표 사용 방식 선택 */
function Step2({
  t,
  usageTypes,
  toggleUsageType,
  businessDescription,
  setBusinessDescription,
  analysisConfirmed,
  setAnalysisConfirmed,
  showAnalysis,
  setShowAnalysis,
  handleAnalyze,
  analyzedType,
}: {
  t: TFunc;
  usageTypes: UsageType[];
  toggleUsageType: (v: UsageType) => void;
  businessDescription: string;
  setBusinessDescription: (v: string) => void;
  analysisConfirmed: boolean;
  setAnalysisConfirmed: (v: boolean) => void;
  showAnalysis: boolean;
  setShowAnalysis: (v: boolean) => void;
  handleAnalyze: () => void;
  analyzedType: UsageType | null;
}) {
  const usageOptions: { value: UsageType; labelKey: string; exKey: string }[] = [
    { value: "goods", labelKey: "step2Goods", exKey: "step2GoodsEx" },
    { value: "services", labelKey: "step2Services", exKey: "step2ServicesEx" },
    { value: "digital_service", labelKey: "step2Digital", exKey: "step2DigitalEx" },
    { value: "both", labelKey: "step2Both", exKey: "step2BothEx" },
    { value: "unknown", labelKey: "step2Unknown", exKey: "" },
  ];

  const analysisLabelMap: Record<UsageType, string> = {
    goods: "step2AnalysisGoods",
    services: "step2AnalysisServices",
    digital_service: "step2AnalysisDigital",
    both: "step2AnalysisBoth",
    unknown: "step2AnalysisUnknown",
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step2Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step2Desc")}</p>

      <div className="mt-6 space-y-3">
        {usageOptions.map((opt) => {
          const selected = usageTypes.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleUsageType(opt.value)}
              className={clsx(
                "w-full rounded-xl border p-4 text-left transition-colors",
                selected
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:bg-slate-50"
              )}
            >
              <span
                className={clsx(
                  "block text-sm font-medium",
                  selected ? "text-blue-700" : "text-slate-900"
                )}
              >
                {t(opt.labelKey as Parameters<TFunc>[0])}
              </span>
              {opt.exKey && (
                <span className="mt-1 block text-xs text-slate-500">
                  {t(opt.exKey as Parameters<TFunc>[0])}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* "아직 잘 모르겠어요" 선택 시 추가 입력 */}
      {usageTypes.includes("unknown") && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("step2BusinessLabel")}
          </label>
          <textarea
            value={businessDescription}
            onChange={(e) => {
              if (e.target.value.length <= 200) {
                setBusinessDescription(e.target.value);
                setShowAnalysis(false);
                setAnalysisConfirmed(false);
              }
            }}
            maxLength={200}
            placeholder={t("step2BusinessPlaceholder")}
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none"
          />
          <p className="mt-1 text-xs text-slate-400 text-right">
            {businessDescription.length}/200
          </p>
          {businessDescription.trim() && !showAnalysis && (
            <button
              type="button"
              onClick={handleAnalyze}
              className="mt-3 rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              {t("step2AnalyzeButton")}
            </button>
          )}

          {showAnalysis && analyzedType && (
            <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm text-slate-600">{t("step2AnalysisResult")}</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {t(analysisLabelMap[analyzedType] as Parameters<TFunc>[0])}
              </p>

              {analyzedType === "unknown" && (
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {t("step2UnknownGuide")}
                </p>
              )}

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setAnalysisConfirmed(true)}
                  className={clsx(
                    "rounded-lg px-4 py-2 text-xs font-medium transition-colors",
                    analysisConfirmed
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  {t("step2Confirm")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAnalysis(false);
                    setAnalysisConfirmed(false);
                  }}
                  className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  {t("step2Change")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* Step 3: 업종/사업 분야 선택 */
function Step3({
  t,
  selectedCategories,
  setSelectedCategories,
  otherDescription,
  setOtherDescription,
}: {
  t: TFunc;
  selectedCategories: string[];
  setSelectedCategories: (v: string[]) => void;
  otherDescription: string;
  setOtherDescription: (v: string) => void;
}) {
  const [showRecommendation, setShowRecommendation] = useState(false);

  const recommendedCategories = useMemo(() => {
    if (!otherDescription.trim()) return [];
    return analyzeCategoryDescription(otherDescription);
  }, [otherDescription]);

  function toggle(id: string) {
    setSelectedCategories(
      selectedCategories.includes(id)
        ? selectedCategories.filter((c) => c !== id)
        : [...selectedCategories, id]
    );
  }

  function applyRecommendations() {
    const newCategories = [...selectedCategories];
    for (const catId of recommendedCategories) {
      if (!newCategories.includes(catId)) {
        newCategories.push(catId);
      }
    }
    // "기타"는 추천 적용 시 제거
    setSelectedCategories(newCategories.filter((c) => c !== "other"));
    setShowRecommendation(false);
  }

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step3Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step3Desc")}</p>

      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-2">
        {businessCategories.map((cat) => {
          const selected = selectedCategories.includes(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                toggle(cat.id);
                if (cat.id === "other" && selected) {
                  setShowRecommendation(false);
                }
              }}
              className={clsx(
                "rounded-lg border px-3 py-2.5 text-left transition-colors flex items-center gap-2",
                selected
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:bg-slate-50"
              )}
            >
              <span className="text-lg shrink-0">{cat.icon}</span>
              <span
                className={clsx(
                  "text-xs font-medium leading-tight",
                  selected ? "text-blue-700" : "text-slate-900"
                )}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* "기타" 선택 시 사업 분야 설명 입력 */}
      {selectedCategories.includes("other") && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("step3OtherLabel")}
          </label>
          <textarea
            value={otherDescription}
            onChange={(e) => {
              if (e.target.value.length <= 200) {
                setOtherDescription(e.target.value);
                setShowRecommendation(false);
              }
            }}
            maxLength={200}
            placeholder={t("step3OtherPlaceholder")}
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none"
          />
          <p className="mt-1 text-xs text-slate-400 text-right">
            {otherDescription.length}/200
          </p>

          {otherDescription.trim() && !showRecommendation && (
            <button
              type="button"
              onClick={() => setShowRecommendation(true)}
              className="mt-3 rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              {t("step3Analyze")}
            </button>
          )}

          {showRecommendation && (
            <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4">
              {recommendedCategories.length > 0 ? (
                <>
                  <p className="text-sm text-slate-600">{t("step3RecommendResult")}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {recommendedCategories.map((catId) => {
                      const cat = businessCategories.find((c) => c.id === catId);
                      if (!cat) return null;
                      return (
                        <span
                          key={catId}
                          className="inline-flex items-center gap-1 rounded-lg bg-blue-50 border border-blue-200 px-3 py-1.5 text-sm font-medium text-blue-700"
                        >
                          {cat.icon} {cat.label}
                        </span>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={applyRecommendations}
                    className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    {t("step3ApplyRecommendation")}
                  </button>
                </>
              ) : (
                <p className="text-sm text-slate-500">{t("step3NoRecommend")}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* Step 4: 판매 상품/제공 서비스 구체화 */
const DEFAULT_VISIBLE_COUNT = 20;

function Step4({
  t,
  filteredCategories,
  selectedSubItems,
  setSelectedSubItems,
}: {
  t: TFunc;
  filteredCategories: ReturnType<typeof businessCategories.filter>;
  selectedSubItems: string[];
  setSelectedSubItems: (v: string[]) => void;
}) {
  function toggle(id: string) {
    setSelectedSubItems(
      selectedSubItems.includes(id)
        ? selectedSubItems.filter((s) => s !== id)
        : [...selectedSubItems, id]
    );
  }

  const count = selectedSubItems.length;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step4Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step4Desc")}</p>

      {/* 선택 현황 */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-slate-600">{t("step4Selected")}</span>
        <span
          className={clsx(
            "text-sm font-bold",
            count > 10 ? "text-amber-600" : "text-blue-600"
          )}
        >
          {count}{t("step4Count")}
        </span>
        {count > 10 && (
          <span className="text-xs text-amber-600">
            ({t("step4OverLimit", { extra: count - 10 })})
          </span>
        )}
      </div>

      <div className="mt-4 space-y-6">
        {filteredCategories.map((cat) => {
          const visibleItems = cat.subItems.slice(0, DEFAULT_VISIBLE_COUNT);

          return (
            <div key={cat.id}>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.label}
                <span className="text-xs font-normal text-slate-400">
                  ({cat.subItems.length}{t("step4Count")})
                </span>
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {visibleItems.map((sub) => {
                  const checked = selectedSubItems.includes(sub.id);
                  return (
                    <label
                      key={sub.id}
                      className={clsx(
                        "flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-colors",
                        checked
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(sub.id)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span
                        className={clsx(
                          "text-sm",
                          checked ? "text-blue-700 font-medium" : "text-slate-700"
                        )}
                      >
                        {sub.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Step 5: 지정상품 후보 추천 */
const STEP5_INITIAL = 10;
const STEP5_EXPAND_STEP = 10;
const KIPO_BASE_PER_CLASS = 46000;
const KIPO_FREE_ITEMS_PER_CLASS = 10;
const KIPO_SURCHARGE_PER_ITEM = 2000;

function Step5({
  t,
  recommendedGoods,
  selectedGoods,
  setSelectedGoods,
}: {
  t: TFunc;
  recommendedGoods: GoodsCandidate[];
  selectedGoods: string[];
  setSelectedGoods: (v: string[]) => void;
}) {
  const [expandClicks, setExpandClicks] = useState<Record<string, number>>({});

  function toggle(id: string) {
    setSelectedGoods(
      selectedGoods.includes(id)
        ? selectedGoods.filter((g) => g !== id)
        : [...selectedGoods, id]
    );
  }

  // 류별로 그룹화
  const classBuckets = useMemo(() => {
    const map = new Map<string, GoodsCandidate[]>();
    for (const g of recommendedGoods) {
      const list = map.get(g.niceClass) ?? [];
      list.push(g);
      map.set(g.niceClass, list);
    }
    // 류 번호순 정렬
    return [...map.entries()].sort((a, b) => {
      const numA = parseInt(a[0].replace(/[^0-9]/g, "")) || 0;
      const numB = parseInt(b[0].replace(/[^0-9]/g, "")) || 0;
      return numA - numB;
    });
  }, [recommendedGoods]);

  // 수수료 계산
  const feeCalc = useMemo(() => {
    const classMap = new Map<string, number>();
    for (const g of recommendedGoods) {
      if (selectedGoods.includes(g.id)) {
        classMap.set(g.niceClass, (classMap.get(g.niceClass) ?? 0) + 1);
      }
    }
    const classCount = classMap.size;
    const baseFee = classCount * KIPO_BASE_PER_CLASS;
    let surcharge = 0;
    for (const count of classMap.values()) {
      if (count > KIPO_FREE_ITEMS_PER_CLASS) {
        surcharge += (count - KIPO_FREE_ITEMS_PER_CLASS) * KIPO_SURCHARGE_PER_ITEM;
      }
    }
    return { classCount, baseFee, surcharge, total: baseFee + surcharge };
  }, [recommendedGoods, selectedGoods]);

  function handleExpand(cls: string) {
    setExpandClicks((prev) => ({
      ...prev,
      [cls]: (prev[cls] ?? 0) + 1,
    }));
  }

  function handleCollapse(cls: string) {
    setExpandClicks((prev) => {
      const next = { ...prev };
      delete next[cls];
      return next;
    });
  }

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step5Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step5Desc")}</p>

      {/* 수수료 안내 */}
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-medium text-amber-800">{t("step5FeeTitle")}</p>
        <p className="mt-1.5 text-xs text-amber-700">{t("step5FeeLine1")}</p>
      </div>

      {/* 실시간 수수료 계산 */}
      {feeCalc.classCount > 0 && (
        <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-800">{t("step5FeeEstimate")}</p>
          <div className="mt-2 space-y-1 text-xs text-blue-700">
            <p>{t("step5FeeClasses", { count: feeCalc.classCount, total: fmt(feeCalc.baseFee) })}</p>
            {feeCalc.surcharge > 0 && (
              <p>{t("step5FeeSurcharge", { total: fmt(feeCalc.surcharge) })}</p>
            )}
            <p className="font-bold text-sm text-blue-900">
              {t("step5FeeTotal", { total: fmt(feeCalc.total) })}
            </p>
          </div>
        </div>
      )}

      {/* 류별 지정상품 목록 */}
      <div className="mt-6 space-y-6">
        {classBuckets.map(([cls, items]) => {
          const clicks = expandClicks[cls] ?? 0;
          const visibleCount = STEP5_INITIAL + clicks * STEP5_EXPAND_STEP;
          const visibleItems = items.slice(0, visibleCount);
          const remaining = items.length - visibleCount;
          const canExpand = remaining > 0;
          const isExpanded = clicks > 0;
          const selectedInClass = items.filter((g) => selectedGoods.includes(g.id)).length;

          return (
            <div key={cls}>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  {cls}
                </span>
                <span className="text-xs font-normal text-slate-500">
                  {t("step5ClassSelected", { selected: selectedInClass, total: items.length })}
                </span>
              </h3>
              <BrandReferencePanel niceClass={cls} />
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {visibleItems.map((g) => {
                  const checked = selectedGoods.includes(g.id);
                  return (
                    <label
                      key={g.id}
                      className={clsx(
                        "flex items-center gap-2.5 rounded-lg border px-3 py-2 cursor-pointer transition-colors",
                        checked
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(g.id)}
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span
                        className={clsx(
                          "text-sm",
                          checked ? "text-blue-700 font-medium" : "text-slate-700"
                        )}
                      >
                        {g.name}
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                {canExpand && (
                  <button
                    type="button"
                    onClick={() => handleExpand(cls)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {t("step5ShowMore", { count: Math.min(remaining, STEP5_EXPAND_STEP) })}
                  </button>
                )}
                {isExpanded && (
                  <button
                    type="button"
                    onClick={() => handleCollapse(cls)}
                    className="text-xs text-slate-500 hover:text-slate-700 font-medium transition-colors"
                  >
                    {t("step5ShowLess")}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
        <p className="text-xs text-slate-600">{t("step5Note")}</p>
        <a
          href="https://www.kipo.go.kr/ko/goodsSortMng.do?menuCd=SCD0201115&parntMenuCd2=SCD0201114"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {t("step5KiprisLink")} ↗
        </a>
      </div>
    </div>
  );
}

/* Step 6: 신청서 초안 확인 */
function Step6({
  t,
  trademarkName,
  trademarkType,
  hasLogo,
  applicantType,
  selectedCategories,
  selectedGoodsList,
}: {
  t: TFunc;
  trademarkName: string;
  trademarkType: TrademarkType;
  hasLogo: boolean;
  applicantType: ApplicantType;
  selectedCategories: string[];
  selectedGoodsList: GoodsCandidate[];
}) {
  const typeLabel =
    trademarkType === "text"
      ? t("step1TypeText")
      : trademarkType === "logo"
        ? t("step1TypeLogo")
        : t("step1TypeCombined");

  const categoryLabels = businessCategories
    .filter((c) => selectedCategories.includes(c.id))
    .map((c) => c.label);

  // 류별 그룹화
  const goodsByClass = useMemo(() => {
    const map = new Map<string, GoodsCandidate[]>();
    for (const g of selectedGoodsList) {
      const list = map.get(g.niceClass) ?? [];
      list.push(g);
      map.set(g.niceClass, list);
    }
    return [...map.entries()].sort((a, b) => {
      const numA = parseInt(a[0].replace(/[^0-9]/g, "")) || 0;
      const numB = parseInt(b[0].replace(/[^0-9]/g, "")) || 0;
      return numA - numB;
    });
  }, [selectedGoodsList]);

  const classCount = goodsByClass.length;

  // 수수료 계산
  const feeCalc = useMemo(() => {
    const baseFee = classCount * 46000;
    let surcharge = 0;
    for (const [, items] of goodsByClass) {
      if (items.length > 10) {
        surcharge += (items.length - 10) * 2000;
      }
    }
    return { baseFee, surcharge, total: baseFee + surcharge };
  }, [goodsByClass, classCount]);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step6Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step6Desc")}</p>

      {/* 신청서 초안 카드 */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* 상표 정보 헤더 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <p className="text-xs font-medium text-blue-200 uppercase tracking-wider">
            {t("step6TrademarkName")}
          </p>
          <p className="mt-1 text-2xl font-bold text-white">{trademarkName}</p>
        </div>

        {/* 기본 정보 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100 border-b border-slate-100">
          <DraftCell label={t("step6TrademarkType")} value={typeLabel} />
          <DraftCell
            label={t("step6LogoStatus")}
            value={hasLogo ? t("step6LogoYes") : t("step6LogoNo")}
          />
          <DraftCell
            label={t("step6ApplicantType")}
            value={applicantType === "individual" ? t("step1Individual") : t("step1Corporation")}
          />
          <DraftCell
            label={t("step6ClassCount")}
            value={`${classCount}${t("step6ClassUnit")}`}
          />
        </div>

        {/* 선택한 업종 */}
        <div className="px-6 py-4 border-b border-slate-100">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
            {t("step6Categories")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {categoryLabels.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* 지정상품 — 류별 */}
        <div className="px-6 py-4">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
            {t("step6SelectedGoods")}
          </p>
          <div className="space-y-4">
            {goodsByClass.map(([cls, items]) => (
              <div key={cls}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-800">
                    {cls}
                  </span>
                  <span className="text-xs text-slate-400">{items.length}{t("step6GoodsCount")}</span>
                </div>
                <div className="pl-1 space-y-0.5">
                  {items.map((g) => (
                    <p key={g.id} className="text-sm text-slate-700 leading-relaxed">
                      · {g.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 특허청 수수료 */}
      <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
          {t("step6FeeTitle")}
        </h3>
        <div className="mt-3 space-y-1.5 text-sm text-blue-800">
          <div className="flex justify-between">
            <span>{t("step6FeeBase")}</span>
            <span>{t("step6FeeClasses", { count: classCount, total: fmt(feeCalc.baseFee) })}</span>
          </div>
          {feeCalc.surcharge > 0 && (
            <div className="flex justify-between">
              <span>{t("step6FeeSurcharge")}</span>
              <span>{fmt(feeCalc.surcharge)}{t("step6FeeWon")}</span>
            </div>
          )}
          <div className="mt-2 pt-2 border-t border-blue-200 flex justify-between font-bold text-blue-900">
            <span>{t("step6FeeTotal")}</span>
            <span>{fmt(feeCalc.total)}{t("step6FeeWon")}</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-blue-600">{t("step6FeeNote")}</p>
      </div>
    </div>
  );
}

function DraftCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3 sm:px-6">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

/* Step 7: 진행 방식 선택 */
function Step7({
  t,
  handleSubmit,
}: {
  t: TFunc;
  handleSubmit: (option: ServiceOption) => void;
}) {
  const options: {
    value: ServiceOption;
    titleKey: string;
    descKey: string;
    buttonKey: string;
    accent: string;
    features: { key: string; included: boolean }[];
  }[] = [
    {
      value: "self",
      titleKey: "step7SelfTitle",
      descKey: "step7SelfDesc",
      buttonKey: "step7SelfButton",
      accent: "border-slate-200 hover:border-slate-400",
      features: [
        { key: "step7SelfF1", included: true },
        { key: "step7SelfF2", included: true },
        { key: "step7SelfF3", included: false },
        { key: "step7SelfF4", included: false },
      ],
    },
    {
      value: "agency",
      titleKey: "step7AgencyTitle",
      descKey: "step7AgencyDesc",
      buttonKey: "step7AgencyButton",
      accent: "border-blue-200 hover:border-blue-400",
      features: [
        { key: "step7AgencyF1", included: true },
        { key: "step7AgencyF2", included: true },
        { key: "step7AgencyF3", included: false },
        { key: "step7AgencyF4", included: false },
      ],
    },
    {
      value: "review",
      titleKey: "step7ReviewTitle",
      descKey: "step7ReviewDesc",
      buttonKey: "step7ReviewButton",
      accent: "border-blue-600 bg-blue-50/50",
      features: [
        { key: "step7ReviewF1", included: true },
        { key: "step7ReviewF2", included: true },
        { key: "step7ReviewF3", included: true },
        { key: "step7ReviewF4", included: true },
        { key: "step7ReviewF5", included: true },
      ],
    },
  ];

  const reviews = [
    t("step7Review1"),
    t("step7Review2"),
  ];

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900">
        {t("step7Title")}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t("step7Desc")}</p>

      {/* 검토 필요사항 */}
      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="text-sm font-bold text-amber-900 mb-3">
          {t("step7ReviewListTitle")}
        </h3>
        <ul className="space-y-2">
          {reviews.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
              <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {options.map((opt) => (
          <div
            key={opt.value}
            className={clsx(
              "rounded-2xl border p-5 transition-colors flex flex-col",
              opt.accent
            )}
          >
            <h3 className="text-base font-bold text-slate-900">
              {t(opt.titleKey as Parameters<TFunc>[0])}
            </h3>
            <p className="mt-1.5 text-xs text-slate-500">
              {t(opt.descKey as Parameters<TFunc>[0])}
            </p>
            <ul className="mt-3 flex-1 space-y-2">
              {opt.features.map((f) => (
                <li key={f.key} className="flex items-start gap-2">
                  {f.included ? (
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className={clsx("text-xs leading-snug", f.included ? "text-slate-700" : "text-slate-400")}>
                    {t(f.key as Parameters<TFunc>[0])}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => handleSubmit(opt.value)}
              className={clsx(
                "mt-4 w-full rounded-xl py-2.5 text-sm font-medium transition-colors",
                opt.value === "review"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : opt.value === "agency"
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
              {t(opt.buttonKey as Parameters<TFunc>[0])}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SelfGuide: 셀프 출원 가이드 ── */
function SelfGuide({
  t,
  trademarkName,
  selectedGoodsList,
  onRequestService,
  onGoBack,
}: {
  t: TFunc;
  trademarkName: string;
  selectedGoodsList: GoodsCandidate[];
  onRequestService: (opt: ServiceOption) => void;
  onGoBack: () => void;
}) {
  // 류별 그룹화
  const goodsByClass = useMemo(() => {
    const map = new Map<string, GoodsCandidate[]>();
    for (const g of selectedGoodsList) {
      const list = map.get(g.niceClass) ?? [];
      list.push(g);
      map.set(g.niceClass, list);
    }
    return [...map.entries()].sort((a, b) => {
      const numA = parseInt(a[0].replace(/[^0-9]/g, "")) || 0;
      const numB = parseInt(b[0].replace(/[^0-9]/g, "")) || 0;
      return numA - numB;
    });
  }, [selectedGoodsList]);

  const classCount = goodsByClass.length;

  // 수수료 계산
  const feeCalc = useMemo(() => {
    const baseFee = classCount * 46000;
    let surcharge = 0;
    for (const [, items] of goodsByClass) {
      if (items.length > 10) {
        surcharge += (items.length - 10) * 2000;
      }
    }
    return { baseFee, surcharge, total: baseFee + surcharge };
  }, [goodsByClass, classCount]);

  const fmt = (n: number) => n.toLocaleString();

  const sec3Steps = [
    t("guideSec3Step1"),
    t("guideSec3Step2"),
    t("guideSec3Step3"),
    t("guideSec3Step4"),
  ];

  const sec5Items = [
    t("guideSec5Item1"),
    t("guideSec5Item2"),
    t("guideSec5Item3"),
    t("guideSec5Item4"),
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        {/* 헤더 */}
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">SELF GUIDE</p>
          <h1 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            {t("guideTitle")}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{t("guideSubtitle")}</p>
        </div>

        {/* 상표명 히어로 */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 mb-8 text-center shadow-sm">
          <p className="text-xs font-medium text-blue-200 uppercase tracking-wider">
            {t("guideTrademarkLabel")}
          </p>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {trademarkName}
          </p>
          <p className="mt-2 text-sm text-blue-200">
            {classCount}{t("guideClassUnit")} · {selectedGoodsList.length}{t("guideGoodsUnit")}
          </p>
        </div>

        {/* 선택 지정상품 — 류별 */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 mb-8">
          <h2 className="text-sm font-bold text-blue-700 mb-4">{t("guideSelectedGoods")}</h2>
          <div className="space-y-4">
            {goodsByClass.map(([cls, items]) => (
              <div key={cls}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center rounded-full bg-blue-200 px-2 py-0.5 text-xs font-semibold text-blue-800">
                    {cls}
                  </span>
                  <span className="text-xs text-blue-500">{items.length}{t("guideGoodsCountUnit")}</span>
                </div>
                <div className="pl-1 space-y-0.5">
                  {items.map((g) => (
                    <p key={g.id} className="text-sm text-slate-700 leading-relaxed">· {g.name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 수수료 안내 */}
        <div className="rounded-2xl border border-blue-200 bg-white p-5 mb-8">
          <h2 className="text-sm font-bold text-blue-900">{t("guideFeeTitle")}</h2>
          <div className="mt-3 space-y-1.5 text-sm text-blue-800">
            <div className="flex justify-between">
              <span>{t("guideFeeBase")}</span>
              <span>{t("guideFeeClasses", { count: classCount, total: fmt(feeCalc.baseFee) })}</span>
            </div>
            {feeCalc.surcharge > 0 && (
              <div className="flex justify-between">
                <span>{t("guideFeeSurcharge")}</span>
                <span>{fmt(feeCalc.surcharge)}{t("guideFeeWon")}</span>
              </div>
            )}
            <div className="mt-2 pt-2 border-t border-blue-100 flex justify-between font-bold text-blue-900">
              <span>{t("guideFeeTotal")}</span>
              <span>{fmt(feeCalc.total)}{t("guideFeeWon")}</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-blue-500">{t("guideFeeNote")}</p>
        </div>

        <div className="space-y-6">
          {/* 섹션 1: 출원 전 확인사항 */}
          <GuideSection
            number="01"
            title={t("guideSec1Title")}
            desc={t("guideSec1Desc")}
          >
            <div className="mt-4 space-y-3">
              <GuideStep
                label={t("guideSec1Step1")}
                desc={t("guideSec1Step1Desc")}
              />
              <GuideStep
                label={t("guideSec1Step2")}
                desc={t("guideSec1Step2Desc")}
              />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 flex-1">
                <p className="text-xs text-amber-800">{t("guideSec1Note")}</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://www.kipris.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t("guideSec1KiprisLink")}
              </a>
            </div>
          </GuideSection>

          {/* 섹션 2: 출원인코드 발급 */}
          <GuideSection
            number="02"
            title={t("guideSec2Title")}
            desc={t("guideSec2Desc")}
          >
            <div className="mt-4 space-y-3">
              <GuideStep
                label={t("guideSec2Method1")}
                desc={t("guideSec2Method1Desc")}
              />
              <GuideStep
                label={t("guideSec2Method2")}
                desc={t("guideSec2Method2Desc")}
              />
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-3">
              <p className="text-xs font-medium text-slate-700 mb-1">{t("guideSec2DocsTitle")}</p>
              <p className="text-xs text-slate-500">{t("guideSec2DocsIndividual")}</p>
              <p className="text-xs text-slate-500">{t("guideSec2DocsCorp")}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://www.patent.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t("guideSec2PatentroLink")}
              </a>
            </div>
          </GuideSection>

          {/* 섹션 3: 서류 준비 */}
          <GuideSection
            number="03"
            title={t("guideSec3Title")}
          >
            <ul className="mt-4 space-y-2">
              {[t("guideSec3Check1"), t("guideSec3Check2"), t("guideSec3Check3"), t("guideSec3Check4")].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </GuideSection>

          {/* 섹션 4: 특허로 전자출원 */}
          <GuideSection
            number="04"
            title={t("guideSec4Title")}
          >
            <ol className="mt-4 space-y-3">
              {sec3Steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4">
              <a
                href="https://www.patent.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t("guideSec4Link")}
              </a>
            </div>
          </GuideSection>

          {/* 섹션 5: 출원 후 알아야 할 것들 */}
          <GuideSection
            number="05"
            title={t("guideSec5Title")}
          >
            <ul className="mt-4 space-y-2">
              {sec5Items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </GuideSection>

          {/* 가이드 다운받기 버튼 */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {t("guideSec6SelfButton")}
            </button>
          </div>

          {/* 섹션 6: 진행 방식 변경 */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-bold text-slate-900">
              {t("guideSec6Title")}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t("guideSec6Desc")}</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{t("guideSec6Desc2")}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* 출원 대행 */}
              <div className="rounded-2xl border border-blue-200 bg-white p-5 flex flex-col">
                <h4 className="text-sm font-bold text-slate-900">{t("step7AgencyTitle")}</h4>
                <p className="mt-1.5 text-xs text-slate-500">{t("step7AgencyDesc")}</p>
                <ul className="mt-3 flex-1 space-y-2">
                  {(["step7AgencyF1","step7AgencyF2","step7AgencyF3","step7AgencyF4"] as const).map((key, i) => (
                    <li key={key} className="flex items-start gap-2">
                      {i < 2 ? (
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={clsx("text-xs leading-snug", i < 2 ? "text-slate-700" : "text-slate-400")}>
                        {t(key)}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onRequestService("agency")}
                  className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                >
                  {t("step7AgencyButton")}
                </button>
              </div>

              {/* 변리사 검토 및 출원 의뢰 */}
              <div className="rounded-2xl border border-blue-600 bg-blue-50/50 p-5 flex flex-col">
                <h4 className="text-sm font-bold text-slate-900">{t("step7ReviewTitle")}</h4>
                <p className="mt-1.5 text-xs text-slate-500">{t("step7ReviewDesc")}</p>
                <ul className="mt-3 flex-1 space-y-2">
                  {(["step7ReviewF1","step7ReviewF2","step7ReviewF3","step7ReviewF4","step7ReviewF5"] as const).map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-xs leading-snug text-slate-700">{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onRequestService("review")}
                  className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  {t("step7ReviewButton")}
                </button>
              </div>
            </div>
          </div>

          {/* 이전 버튼 */}
          <div className="mt-8 flex justify-start">
            <button
              type="button"
              onClick={onGoBack}
              className="rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {t("prev")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuideSection({
  number,
  title,
  desc,
  children,
}: {
  number: string;
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          {number}
        </span>
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
      </div>
      {desc && (
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
      )}
      {children}
    </div>
  );
}

function GuideStep({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
      <p className="text-sm font-medium text-slate-800">{label}</p>
      <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
    </div>
  );
}
