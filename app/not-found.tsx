import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold text-slate-500">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-4 text-slate-600">
        주소가 잘못되었거나, 페이지가 이동/삭제되었을 수 있습니다.
      </p>

      <div className="mt-10">
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
