import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { site } from "@/lib/site";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? "en";
  const SUBTITLE: Record<string, string> = {
    ko: "특허·상표·디자인 전문 변리사",
    en: "Patent · Trademark · Design",
    ja: "特許・商標・デザイン",
    zh: "专利 · 商标 · 设计",
  };
  const title = locale === "ko" ? site.name : site.nameEn; // brand stays Latin for ja/zh
  const subtitle = SUBTITLE[locale] ?? SUBTITLE.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "28px",
            opacity: 0.85,
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
