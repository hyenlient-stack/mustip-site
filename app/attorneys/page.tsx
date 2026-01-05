// app/attorneys/page.tsx
import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "구성원",
  robots: { index: false, follow: true },
};

export default function AttorneysPage() {
  return <ComingSoon title="구성원" />;
}
