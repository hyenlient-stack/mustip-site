// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactTabs from "./ContactTabs";

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

  const mapSrc = `https://www.google.com/maps?q=37.4839509,127.1218362&hl=${locale}&z=17&output=embed`;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:py-14">
      {/* Header */}
      <section className="mb-6 space-y-3 md:mb-10 md:space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          {t("badge")}
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          {t("title")}
        </h1>

        <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
          {t("intro1")}
          <br />
          {t("intro2")}
        </p>
      </section>

      {/* Tabs (Email / KakaoTalk) */}
      <section className="mb-10 md:mb-16">
        <ContactTabs />
      </section>

      {/* Location */}
      <section>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-widest text-slate-400">
            {t("locationLabel")}
          </span>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            {t("locationTitle")}
          </h2>
        </div>

        <div className="grid gap-0 md:gap-6 overflow-hidden rounded-2xl border bg-white shadow-sm md:grid-cols-2">
          {/* Map */}
          <div className="aspect-[16/10] w-full md:aspect-auto md:min-h-[360px]">
            <iframe
              src={mapSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("mapAlt")}
              allowFullScreen
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center gap-4 p-5 md:gap-5 md:p-8">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div className="text-sm">
                <div className="font-medium text-slate-900">
                  {t("addressLabel")}
                </div>
                <div className="mt-0.5 text-slate-600">{t("address")}</div>
                <div className="mt-0.5 text-slate-500">{t("directions")}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <div className="text-sm">
                <div className="font-medium text-slate-900">{t("phone")}</div>
                <div className="mt-0.5 text-slate-600">02-526-6710</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <div className="text-sm">
                <div className="font-medium text-slate-900">
                  {t("emailLabel")}
                </div>
                <div className="mt-0.5 text-slate-600">mustip@mustip.co.kr</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
