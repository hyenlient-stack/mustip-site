// app/contact/page.tsx
import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "문의",
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="문의"
      description="문의 기능은 현재 준비 중입니다. 빠른 시일 내에 폼/메일 연동까지 완료해 오픈하겠습니다."
    />
  );
}
