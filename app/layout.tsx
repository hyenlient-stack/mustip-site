// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import AppShell from "./AppShell";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: site.url },

  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
    shortcut: ["/favicon.ico?v=2"],
  },
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
        <AppShell>{children}</AppShell>
        <Footer />
      </body>
    </html>
  );
}
