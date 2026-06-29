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
    <div
      className={[
        "rounded-2xl border bg-white transition-shadow",
        open ? "shadow-md" : "hover:shadow-sm",
      ].join(" ")}
    >
      <button
        id={headingId}
        type="button"
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="font-medium text-slate-900 text-sm leading-6">
          {item.q}
        </span>
        {/* Chevron */}
        <span
          className={[
            "mt-0.5 shrink-0 text-slate-400 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="px-5 pb-5"
        >
          <div className="border-t pt-4">
            <RichAnswer text={item.a} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Tab icons ────────────────────────────────────────────────────────────────

const TAB_ICONS: Record<FaqGroup["key"], React.ReactNode> = {
  patent: (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Document with magnifying glass – represents patent search */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  trademark: (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Tag – represents trademark */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>
  ),
  design: (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Swatch / paint brush – represents design */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
      />
    </svg>
  ),
};

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
      {/* ── Tab bar ─────────────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="flex gap-1 rounded-2xl border bg-slate-50 p-1.5"
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
                "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700",
              ].join(" ")}
            >
              {TAB_ICONS[g.key]}
              <span>{g.label}</span>
              {/* Item count badge */}
              <span
                className={[
                  "ml-1 rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums",
                  isActive
                    ? "bg-slate-100 text-slate-600"
                    : "bg-slate-200/60 text-slate-400",
                ].join(" ")}
              >
                {g.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Tab panel ───────────────────────────────────────────────────── */}
      {activeGroup && (
        <div
          id={`panel-${activeGroup.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeGroup.key}`}
          className="mt-5 space-y-3"
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
