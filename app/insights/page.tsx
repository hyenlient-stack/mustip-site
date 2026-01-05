// app/insights/page.tsx
import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "인사이트",
  robots: { index: false, follow: true }, // 오픈 전까지 검색노출 방지(원하면 삭제)
};

export default function InsightsPage() {
  return <ComingSoon title="인사이트" />;
}
