// components/site-header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
  { href: "/", label: "홈" },
  { href: "/insights", label: "인사이트" },
  { href: "/practice-areas", label: "업무분야" },
  { href: "/attorneys", label: "구성원" },
  { href: "/contact", label: "문의" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      {/* Row 1: 로고 + 법인명 */}
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg" // png 사용 시 "/logo.png"
            alt="머스트 로고"
            width={40}
            height={40}
            priority
          />
          <span className="text-base md:text-lg font-semibold">
            머스트 특허법률사무소
          </span>
        </Link>
      </div>

      {/* Row 2: 네비게이션 */}
      <nav className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex justify-between md:justify-center gap-8 md:gap-16 py-4">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "whitespace-nowrap text-lg md:text-2xl font-semibold transition-colors pb-1",
                      active
                        ? "text-slate-900 border-b-2 border-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
