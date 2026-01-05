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

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        {/* 로고 + 법인명 */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-header.png" // /public/logo.svg 또는 logo.png 사용
            alt="머스트 로고"
            width={100}
            height={60}
            priority
          />
          <span className="text-lg md:text-xl font-semibold">
            머스트 특허법률사무소
          </span>
        </Link>

        {/* 네비게이션 */}
        <nav>
          <ul className="flex gap-8 md:gap-12">
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
                      "text-base md:text-lg font-semibold transition-colors pb-1",
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
        </nav>
      </div>
    </header>
  );
}
