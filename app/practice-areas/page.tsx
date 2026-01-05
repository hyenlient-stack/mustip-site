// app/practice-areas/page.tsx
import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "업무분야",
  robots: { index: false, follow: true },
};

export default function PracticeAreasPage() {
  return <ComingSoon title="업무분야" />;
}
