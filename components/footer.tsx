import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
        {/* 상단 영역 */}
        <div className="space-y-4">
          {/* 로고 + 로펌명 */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-footer.png"   // 로고 경로
              alt="머스트 특허법률사무소 로고"
              width={48}
              height={48}
              className="h-10 w-auto"
            />
            <span className="text-base font-semibold text-slate-900">
              머스트 특허법률사무소
            </span>
          </div>

          {/* 주소 */}
          <p>
            서울특별시 송파구 법원로8길 8, 312호 <br />
            대표변리사 김영애
          </p>

          {/* 연락처 */}
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>TEL. 02-526-6710</span>
            <span>
              E-MAIL.{" "}
              <a
                href="mailto:mustip@mustip.co.kr"
                className="underline hover:text-slate-900"
              >
                mustip@mustip.co.kr
              </a>
            </span>
          </p>
        </div>

        {/* 구분선 */}
        <div className="my-8 border-t border-slate-200" />

        {/* 하단 저작권 */}
        <p className="text-xs text-slate-500">
          Copyright © {new Date().getFullYear()} MUST Patent Law Firm.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
