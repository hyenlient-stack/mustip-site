import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold text-slate-500">{t("code")}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        {t("title")}
      </h1>
      <p className="mt-4 text-slate-600">{t("description")}</p>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          {t("home")}
        </Link>
      </div>
    </div>
  );
}
