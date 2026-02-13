// app/[locale]/insights/InsightsContent.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function InsightsContent() {
  const t = useTranslations("insights");
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const INSIGHTS = [1, 2, 3, 4, 5].map((n) => ({
    num: String(n).padStart(2, "0"),
    title: t(`item${n}Title`),
    desc: t(`item${n}Desc`),
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-semibold tracking-widest text-blue-600">
            {t("sectionLabel")}
          </p>
          <h2 className="mt-2 text-xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {t("sectionTitle")}
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Left: Text Items */}
          <div className="order-2 md:order-1 space-y-8 md:space-y-10">
            {INSIGHTS.map((item, i) => (
              <div
                key={item.num}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="opacity-0 translate-y-8 transition-all duration-700"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.num}.
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Sticky Image */}
          <div className="order-1 md:order-2">
            <div className="md:sticky md:top-28">
              <div className="relative aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/practice/IP전략.jpg"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
