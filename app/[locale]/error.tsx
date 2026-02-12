"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold text-slate-500">{t("label")}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        {t("title")}
      </h1>

      <p className="mt-4 text-slate-600">
        {process.env.NODE_ENV === "development" ? error.message : null}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          {t("retry")}
        </button>

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
