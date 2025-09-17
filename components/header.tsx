// components/header.tsx
import Link from 'next/link'
import { Nav } from './nav'
import { site } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <Nav />
      </div>
    </header>
  )
}
