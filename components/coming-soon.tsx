// components/coming-soon.tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function ComingSoon({ title }: { title: string }) {
  const t = await getTranslations("comingSoon");

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-medium text-slate-500">{t("label")}</p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {t("description")}
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            {t("home")}
          </Link>
        </div>
      </div>
    </section>
  );
}
