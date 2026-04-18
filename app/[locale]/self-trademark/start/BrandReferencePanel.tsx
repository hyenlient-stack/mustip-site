"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { getBrandsForCategory } from "@/lib/self-trademark/brand-references";

interface Props {
  categoryId: string;
  selectedBrands: string[];
  setSelectedBrands: (v: string[]) => void;
}

export function BrandReferencePanel({
  categoryId,
  selectedBrands,
  setSelectedBrands,
}: Props) {
  const t = useTranslations("selfTrademark");

  const brands = useMemo(() => getBrandsForCategory(categoryId, 5), [categoryId]);

  if (brands.length === 0) return null;

  function toggle(brandId: string) {
    setSelectedBrands(
      selectedBrands.includes(brandId)
        ? selectedBrands.filter((id) => id !== brandId)
        : [...selectedBrands, brandId]
    );
  }

  return (
    <div className="mt-3 mb-2 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 p-3">
      <p className="text-xs font-semibold text-indigo-700">
        {t("step5BrandRef")}
      </p>
      <p className="mt-0.5 text-xs text-indigo-500/80">
        {t("step5BrandRefHint")}
      </p>

      {/* 브랜드 칩 목록 — 복수 선택 가능 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {brands.map((brand) => {
          const isSelected = selectedBrands.includes(brand.id);
          return (
            <button
              key={brand.id}
              type="button"
              onClick={() => toggle(brand.id)}
              className={clsx(
                "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all",
                isSelected
                  ? "border-indigo-400 bg-indigo-100 text-indigo-800 shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/50"
              )}
            >
              {/* 체크 아이콘 */}
              <span
                className={clsx(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  isSelected
                    ? "border-indigo-500 bg-indigo-500 text-white"
                    : "border-slate-300 bg-white"
                )}
              >
                {isSelected && (
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {brand.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
