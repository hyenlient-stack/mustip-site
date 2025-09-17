// components/nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { site } from '@/lib/site'

export function Nav() {
  const pathname = usePathname()
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {site.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            'hover:text-blue-600',
            pathname === item.href && 'text-blue-600 font-medium'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
