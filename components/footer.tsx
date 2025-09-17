// components/footer.tsx
import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto grid gap-6 md:grid-cols-3 px-4 py-10 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900 mb-2">{site.name}</div>
          <p>사업자등록번호 · 주소 · 대표자 정보 등</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">바로가기</div>
          <ul className="space-y-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:text-blue-600" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">연락처</div>
          <p>E. contact@your-patentfirm.com</p>
          <p>T. 02-1234-5678</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
