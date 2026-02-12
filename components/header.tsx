"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import { useEffect, useState, useTransition } from "react";

const NAV_KEYS = [
  { href: "/", key: "home" },
  { href: "/insights", key: "insights" },
  { href: "/practice-areas", key: "practiceAreas" },
  { href: "/attorneys", key: "attorneys" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidHeader = !isHome || scrolled;

  function switchLocale(next: "ko" | "en") {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-colors",
        isHome && !scrolled && "bg-transparent",
        solidHeader && "bg-white/90 backdrop-blur border-b border-slate-200"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-header.png" alt={tc("logoAlt")} width={100} height={60} priority />
          <span
            className={clsx(
              "text-lg md:text-xl font-semibold transition-colors",
              solidHeader ? "text-slate-900" : "text-white"
            )}
          >
            {tc("firmName")}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-8 md:gap-12">
              {NAV_KEYS.map((item) => {
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
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Language Switcher */}
          <div
            className={clsx(
              "flex items-center gap-1 text-sm font-medium",
              isPending && "opacity-50 pointer-events-none"
            )}
          >
            <button
              type="button"
              onClick={() => switchLocale("ko")}
              className={clsx(
                "px-2 py-1 rounded transition-colors",
                locale === "ko"
                  ? solidHeader
                    ? "text-slate-900 font-bold"
                    : "text-white font-bold"
                  : solidHeader
                    ? "text-slate-400 hover:text-slate-700"
                    : "text-white/50 hover:text-white"
              )}
            >
              KO
            </button>
            <span
              className={clsx(
                solidHeader ? "text-slate-300" : "text-white/40"
              )}
            >
              |
            </span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={clsx(
                "px-2 py-1 rounded transition-colors",
                locale === "en"
                  ? solidHeader
                    ? "text-slate-900 font-bold"
                    : "text-white font-bold"
                  : solidHeader
                    ? "text-slate-400 hover:text-slate-700"
                    : "text-white/50 hover:text-white"
              )}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
