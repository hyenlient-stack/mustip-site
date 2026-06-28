// app/[locale]/filing-in-korea/FaqAccordion.tsx
"use client";

import { useState } from "react";
import clsx from "clsx";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <li key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-slate-900">{it.q}</span>
            <span
              className={clsx(
                "shrink-0 text-blue-600 transition-transform",
                open === i && "rotate-45"
              )}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-600 leading-relaxed">
              {it.a}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
