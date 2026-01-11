"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

const NAV = [
  { href: "/", label: "홈" },
  { href: "/insights", label: "인사이트" },
  { href: "/practice-areas", label: "업무분야" },
  { href: "/attorneys", label: "구성원" },
  { href: "/contact", label: "문의" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ 홈이 아닌 페이지에서는 항상 "스크롤된 헤더" 스타일을 사용
  const solidHeader = !isHome || scrolled;

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-colors",
        // 홈 상단: 투명 (히어로 위)
        isHome && !scrolled && "bg-transparent",
        // 그 외: 기본적으로 흰 배경 + 블러 + 보더
        solidHeader && "bg-white/90 backdrop-blur border-b border-slate-200"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-header.png"
            alt="머스트 로고"
            width={100}
            height={60}
            priority
          />
          <span
            className={clsx(
              "text-lg md:text-xl font-semibold transition-colors",
              solidHeader ? "text-slate-900" : "text-white"
            )}
          >
            머스트 특허법률사무소
          </span>
        </Link>

        <nav>
          <ul className="flex gap-8 md:gap-12">
            {NAV.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-base md:text-lg font-semibold transition-colors pb-1",
                      !solidHeader &&
                        (active
                          ? "text-white border-b-2 border-white"
                          : "text-white/85 hover:text-white"),
                      solidHeader &&
                        (active
                          ? "text-slate-900 border-b-2 border-slate-900"
                          : "text-slate-600 hover:text-slate-900")
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
