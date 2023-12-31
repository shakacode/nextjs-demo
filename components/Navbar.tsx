"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function navigationBar() {
  const pathname = usePathname()
  return (
    <section>
      <ul>
        <li>
          <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
            Index Page
          </Link>
        </li>
        <li>
          <Link href="/comments" className={`link ${pathname === '/comments' ? 'active' : ''}`}>
            Comments Page
          </Link>
        </li>
      </ul>
    </section>
  )
}
