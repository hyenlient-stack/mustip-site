"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold text-slate-500">문제가 발생했어요</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        잠시 후 다시 시도해 주세요.
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
          다시 시도
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
