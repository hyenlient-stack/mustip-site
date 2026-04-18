"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { getBrandsForCategory } from "@/lib/self-trademark/brand-references";
import type { BrandReference } from "@/lib/self-trademark/types";

interface Props {
  categoryId: string;
}

export function BrandReferencePanel({ categoryId }: Props) {
  const t = useTranslations("selfTrademark");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<BrandReference | null>(null);

  const brands = useMemo(() => getBrandsForCategory(categoryId, 5), [categoryId]);

  if (brands.length === 0) return null;

  function toggle() {
    setIsOpen((prev) => !prev);
    if (isOpen) setSelectedBrand(null);
  }

  function selectBrand(brand: BrandReference) {
    setSelectedBrand((prev) => (prev?.id === brand.id ? null : brand));
  }

  return (
    <div className="mt-2 mb-1">
      {/* 토글 버튼 */}
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 transition-colors"
      >
        <svg
          className={clsx(
            "h-3 w-3 transition-transform",
            isOpen ? "rotate-180" : "rotate-0"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {t("step5BrandRef")}
        {isOpen && (
          <span className="ml-0.5 text-slate-400">— {t("step5BrandRefHide")}</span>
        )}
      </button>

      {/* 펼쳐진 패널 */}
      {isOpen && (
        <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
          {/* 안내 문구 */}
          <p className="mb-2 text-xs text-slate-400">{t("step5BrandRefHint")}</p>

          {/* 브랜드 칩 목록 */}
          <div className="flex flex-wrap gap-1.5">
            {brands.map((brand) => {
              const isSelected = selectedBrand?.id === brand.id;
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => selectBrand(brand)}
                  className={clsx(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    isSelected
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100"
                  )}
                >
                  {brand.name}
                </button>
              );
            })}
          </div>

          {/* 브랜드 상세 카드 */}
          {selectedBrand && (
            <div className="mt-2.5 rounded-lg border border-blue-100 bg-white p-3">
              <p className="mb-1.5 text-xs font-semibold text-blue-800">
                {selectedBrand.name}
              </p>
              <p className="mb-1.5 text-xs font-medium text-slate-500">
                {t("step5BrandClasses")}
              </p>
              <div className="space-y-1">
                {selectedBrand.registrations.map((reg) => (
                  <div key={reg.niceClass} className="flex flex-wrap items-baseline gap-1 text-xs">
                    <span className="shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-blue-700">
                      {reg.niceClass}
                    </span>
                    <span className="text-slate-600">
                      {reg.keyGoods.join(", ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
