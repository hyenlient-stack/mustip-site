// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: site.url },

  // ✅ (중요) 파비콘/앱아이콘/manifest를 명확하게 지정
  icons: {
    // 일반 브라우저 탭 아이콘
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" }, // svg가 있으면 권장
      { url: "/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" }, // 선택
    ],
    // iOS 홈화면 아이콘
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
    // (선택) 구형용 shortcut
    shortcut: ["/favicon.ico?v=2"],
  },

  // ✅ (선택이지만 권장) PWA/manifest 연결
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <Header />
        <main className="min-h-[70dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
