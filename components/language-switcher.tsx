"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import clsx from "clsx";

const LOCALE_LABELS: Record<string, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};

const LOCALE_SHORT: Record<string, string> = {
  ko: "KO",
  en: "EN",
  ja: "JP",
  zh: "ZH",
};

interface Props {
  solidHeader: boolean;
  compact?: boolean;
}

export function LanguageSwitcher({ solidHeader, compact }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
    setOpen(false);
  }

  const triggerBase = compact
    ? "flex items-center gap-1 text-xs font-medium px-1.5 py-1 rounded transition-colors"
    : "flex items-center gap-1.5 text-sm font-medium px-2 py-1.5 rounded-lg transition-colors";

  const triggerColor = solidHeader
    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
    : "text-white/90 hover:text-white hover:bg-white/10";

  return (
    <div
      ref={ref}
      className={clsx("relative", isPending && "opacity-50 pointer-events-none")}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={clsx(triggerBase, triggerColor)}
      >
        {/* Globe icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={compact ? "h-3.5 w-3.5" : "h-4 w-4"}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253"
          />
        </svg>

        <span>{LOCALE_SHORT[locale] ?? locale.toUpperCase()}</span>

        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            "transition-transform duration-150",
            compact ? "h-3 w-3" : "h-3.5 w-3.5",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-36 rounded-lg border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-black/5 z-50"
        >
          {routing.locales.map((l) => {
            const isActive = locale === l;
            return (
              <button
                key={l}
                role="option"
                aria-selected={isActive}
                type="button"
                onClick={() => switchLocale(l)}
                className={clsx(
                  "flex w-full items-center justify-between gap-2 px-4 py-2 text-sm transition-colors text-left",
                  isActive
                    ? "bg-slate-50 text-slate-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <span>{LOCALE_LABELS[l] ?? l}</span>
                {isActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
