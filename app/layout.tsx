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

  // ✅ 파비콘/아이콘/매니페스트 설정 (public 폴더에 둔 파일을 사용)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        {/* 공통 헤더 */}
        <Header />

        {/* 개별 페이지가 들어가는 영역 */}
        <main className="min-h-[70dvh]">{children}</main>

        {/* 공통 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
