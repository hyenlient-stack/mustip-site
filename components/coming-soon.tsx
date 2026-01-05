// components/coming-soon.tsx
import Link from "next/link";

export function ComingSoon({
  title,
  description = "해당 페이지는 현재 준비 중입니다. 빠른 시일 내에 오픈하겠습니다.",
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
        {/* 상단 라벨 */}
        <p className="text-sm font-medium text-slate-500">COMING SOON</p>

        {/* 제목 */}
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>

        {/* 설명 */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>

        {/* 버튼 영역 (홈으로만 유지) */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            홈으로
          </Link>
        </div>
      </div>
    </section>
  );
}
