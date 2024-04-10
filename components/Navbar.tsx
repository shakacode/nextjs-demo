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
          <Link href="/server-client-composition" className={`link ${pathname === '/server-client-composition' ? 'active' : ''}`}>
            Demonstration of Server/Client component composition
          </Link>
        </li>
      </ul>
    </section>
  )
}
