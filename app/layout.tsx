// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <Header />
        <main className="min-h-[70dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
