// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: Intro */}
        <section className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {t("badge")}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {t("title")}
          </h1>

          <p className="text-base leading-7 text-slate-600">
            {t("intro1")}
            <br />
            {t("intro2")}
          </p>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="grid gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">{t("phone")}</div>
                  <div className="text-slate-600">02-526-6710</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">{t("emailLabel")}</div>
                  <div className="text-slate-600">mustip@mustip.co.kr</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-100" />
                <div>
                  <div className="font-medium text-slate-900">{t("addressLabel")}</div>
                  <div className="text-slate-600">{t("address")}</div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-sm text-slate-600">
              <div className="font-medium text-slate-900">{t("quickTipsTitle")}</div>
              <ul className="list-disc space-y-1 pl-5">
                <li>{t("quickTip1")}</li>
                <li>{t("quickTip2")}</li>
                <li>{t("quickTip3")}</li>
                <li>{t("quickTip4")}</li>
              </ul>
            </div>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            {t("autoReplyNote")}
          </p>
        </section>

        {/* Right: Form */}
        <section className="rounded-2xl border bg-white p-6 shadow-sm md:p-7">
          <h2 className="text-lg font-semibold text-slate-900">{t("formTitle")}</h2>
          <p className="mt-1 text-sm text-slate-600">{t("formSubtitle")}</p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
