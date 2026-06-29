"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./language-switcher";

function navItems(locale: string) {
  return [
    { href: "/about", key: "about" },
    { href: "/practice-areas", key: "practiceAreas" },
    { href: "/attorneys", key: "attorneys" },
    ...(locale === "ko"
      ? [{ href: "/self-trademark", key: "selfTrademark" }]
      : [{ href: "/filing-in-korea", key: "filingInKorea" }]),
    { href: "/contact", key: "contact" },
  ] as const;
}

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const isHome = pathname === "/";
  const items = navItems(locale);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const solidHeader = !isHome || scrolled || menuOpen;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 z-50 w-full transition-colors",
          isHome && !scrolled && !menuOpen && "bg-transparent",
          solidHeader && "bg-white/90 backdrop-blur border-b border-slate-200"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image src="/logo-header.png" alt={tc("logoAlt")} width={100} height={60} priority className="h-8 w-auto md:h-auto" />
            <span
              className={clsx(
                "hidden xl:inline text-base xl:text-xl font-semibold whitespace-nowrap transition-colors",
                solidHeader ? "text-slate-900" : "text-white"
              )}
            >
              {tc("firmName")}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex gap-4 lg:gap-6 xl:gap-10 items-center">
                {items.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const isFeatured = item.key === "selfTrademark" || item.key === "filingInKorea";

                  if (isFeatured) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={clsx(
                            "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm lg:text-base font-bold whitespace-nowrap transition-all",
                            solidHeader
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "bg-white text-blue-700 hover:bg-blue-50"
                          )}
                        >
                          {t(item.key as Parameters<typeof t>[0])}
                          <span className="inline-flex items-center rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-amber-900">
                            BEST
                          </span>
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "text-base lg:text-lg font-semibold whitespace-nowrap transition-colors pb-1",
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
                        {t(item.key as Parameters<typeof t>[0])}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Language Switcher */}
            <LanguageSwitcher solidHeader={solidHeader} />
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher solidHeader={solidHeader} compact />

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                solidHeader ? "text-slate-900" : "text-white"
              )}
              aria-label={t("menuToggle")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Mobile Drawer */}
      <nav
        id="mobile-menu"
        className={clsx(
          "fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        <ul className="flex flex-col px-4 py-6 gap-1">
          {items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isFeatured = item.key === "selfTrademark" || item.key === "filingInKorea";

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isFeatured
                      ? "bg-blue-600 text-white font-bold"
                      : active
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {t(item.key as Parameters<typeof t>[0])}
                    {isFeatured && (
                      <span className="inline-flex items-center rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-amber-900">
                        BEST
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
