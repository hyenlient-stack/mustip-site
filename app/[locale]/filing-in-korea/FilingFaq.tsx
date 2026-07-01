"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type FaqVM = { q: string; a: string };
type FaqGroup = {
  key: "patent" | "trademark" | "design";
  label: string;
  items: FaqVM[];
};
type FilingFaqProps = { groups: FaqGroup[] };

// ─── Rich-answer renderer ─────────────────────────────────────────────────────

/**
 * Render a rich-answer string into React nodes.
 * - Paragraphs separated by `\n\n`
 * - Lines beginning with `- ` are collected into a <ul>
 */
function RichAnswer({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/);

  return (
    <div className="space-y-3 text-sm leading-6 text-slate-600">
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isBulletBlock = lines.every((l) => l.startsWith("- "));
        if (isBulletBlock) {
          return (
            <ul key={bi} className="list-disc space-y-1 pl-5">
              {lines.map((l, li) => (
                <li key={li}>{l.replace(/^-\s+/, "")}</li>
              ))}
            </ul>
          );
        }
        // Mixed: some bullet lines, some plain lines
        const hasBullets = lines.some((l) => l.startsWith("- "));
        if (hasBullets) {
          const parts: React.ReactNode[] = [];
          let bulletBuffer: string[] = [];
          const flushBullets = () => {
            if (bulletBuffer.length) {
              parts.push(
                <ul key={`b-${parts.length}`} className="list-disc space-y-1 pl-5">
                  {bulletBuffer.map((b, i) => (
                    <li key={i}>{b.replace(/^-\s+/, "")}</li>
                  ))}
                </ul>
              );
              bulletBuffer = [];
            }
          };
          lines.forEach((l, li) => {
            if (l.startsWith("- ")) {
              bulletBuffer.push(l);
            } else {
              flushBullets();
              parts.push(<p key={`p-${li}`}>{l}</p>);
            }
          });
          flushBullets();
          return <div key={bi}>{parts}</div>;
        }
        return <p key={bi}>{block}</p>;
      })}
    </div>
  );
}

// ─── Accordion item ───────────────────────────────────────────────────────────

function AccordionItem({
  item,
  index,
  groupKey,
  open,
  onToggle,
}: {
  item: FaqVM;
  index: number;
  groupKey: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${groupKey}-${index}`;
  const headingId = `faq-heading-${groupKey}-${index}`;

  return (
    <div>
      {/* ── Question row ───────────────────────────────────────────────── */}
      <button
        id={headingId}
        type="button"
        className="flex w-full items-start gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {/* Q marker */}
        <span
          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
          aria-hidden="true"
        >
          Q
        </span>

        {/* Question text */}
        <span className="flex-1 text-sm font-medium leading-6 text-slate-900 md:text-base">
          {item.q}
        </span>

        {/* Plus / Minus toggle */}
        <span
          className="mt-0.5 shrink-0 text-slate-400 transition-colors"
          aria-hidden="true"
        >
          {open ? (
            /* Minus */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            /* Plus */
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </span>
      </button>

      {/* ── Answer area ────────────────────────────────────────────────── */}
      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="mb-2 flex gap-4 rounded-lg bg-slate-50 px-4 py-5"
        >
          {/* A marker */}
          <span
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600"
            aria-hidden="true"
          >
            A
          </span>
          <div className="min-w-0 flex-1">
            <RichAnswer text={item.a} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FilingFaq({ groups }: FilingFaqProps) {
  const [activeKey, setActiveKey] = useState<FaqGroup["key"]>(
    groups[0]?.key ?? "patent"
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeGroup = groups.find((g) => g.key === activeKey) ?? groups[0];

  function handleTabChange(key: FaqGroup["key"]) {
    setActiveKey(key);
    setOpenIndex(null); // reset open accordion when switching tab
  }

  return (
    <div>
      {/* ── Underline tab bar ───────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="flex gap-6 border-b border-slate-200"
      >
        {groups.map((g) => {
          const isActive = g.key === activeKey;
          return (
            <button
              key={g.key}
              id={`tab-${g.key}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${g.key}`}
              onClick={() => handleTabChange(g.key)}
              className={[
                "-mb-px border-b-2 pb-3 text-sm font-semibold transition-colors",
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800",
              ].join(" ")}
            >
              {g.label}
              <span className="ml-1.5 text-xs font-normal text-slate-400">
                · {g.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Flat FAQ list ───────────────────────────────────────────────── */}
      {activeGroup && (
        <div
          id={`panel-${activeGroup.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeGroup.key}`}
          className="divide-y divide-slate-200"
        >
          {activeGroup.items.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              groupKey={activeGroup.key}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
