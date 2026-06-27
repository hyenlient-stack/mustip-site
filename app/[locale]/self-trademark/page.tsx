import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/page-hero";
import { CTAContact } from "@/components/cta-contact";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "selfTrademark" });
  return pageMetadata({
    locale,
    path: "/self-trademark",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

const FLOW_STEPS = [
  { key: "flowStep1", descKey: "flowStep1Desc", num: "01" },
  { key: "flowStep2", descKey: "flowStep2Desc", num: "02" },
  { key: "flowStep3", descKey: "flowStep3Desc", num: "03" },
  { key: "flowStep4", descKey: "flowStep4Desc", num: "04" },
  { key: "flowStep5", descKey: "flowStep5Desc", num: "05" },
] as const;

export default async function SelfTrademarkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("selfTrademark");

  return (
    <>
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      {/* Hook Section */}
      <section className="py-10 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            SELF TRADEMARK
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t("hookTitle")}
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
            {t("hookDesc")}
            <br />
            {t("hookDesc2")}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {(["hookPoint1", "hookPoint2", "hookPoint3"] as const).map(
              (key, i) => (
                <div
                  key={key}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {t(key)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {t(`${key}Desc` as "hookPoint1Desc" | "hookPoint2Desc" | "hookPoint3Desc")}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/self-trademark/start"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="bg-slate-50 py-10 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            PROCESS
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t("flowTitle")}
          </h2>

          <div className="relative mt-10">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="grid gap-8">
              {FLOW_STEPS.map((step) => (
                <div key={step.key} className="flex gap-4 md:gap-6 items-start">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {t(step.key)}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/self-trademark/start"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="text-base font-bold text-slate-900">
              {t("disclaimerTitle")}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </section>

      <CTAContact />
    </>
  );
}
