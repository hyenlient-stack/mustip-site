// app/api/og/route.tsx
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { site } from "@/lib/site";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get("locale") ?? "en";
  const isKo = locale === "ko";

  const title = isKo ? site.name : site.nameEn;
  const tagline = isKo
    ? "지식재산의 가치를 높이는 종합 IP 파트너"
    : "Your IP Partner for Filing in Korea";
  const sub = isKo
    ? "특허 · 상표 · 디자인 · 분쟁 · 가치평가"
    : "Patents · Trademarks · Designs · Disputes · Valuation";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ width: "60px", height: "4px", background: "#2563eb", marginBottom: "32px", display: "flex" }} />
        <div style={{ fontSize: "52px", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, display: "flex" }}>
          {title}
        </div>
        <div style={{ fontSize: "28px", color: "#93c5fd", marginTop: "16px", display: "flex" }}>
          {tagline}
        </div>
        <div style={{ fontSize: "20px", color: "#64748b", marginTop: "12px", display: "flex" }}>
          {sub}
        </div>
        <div style={{ position: "absolute", bottom: "40px", right: "80px", fontSize: "18px", color: "#475569", display: "flex" }}>
          mustip.co.kr
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
