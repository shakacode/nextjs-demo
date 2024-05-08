"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function navigationBar() {
  const pathname = usePathname()
  return (
    <section>
      <ul>
        <li>
          <ul>
            Page Routes:
            <li>
              <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
                Index Page
              </Link>
            </li>
            <li>
              <Link href="/dynamic/routing/with/any/path/you/want/as/long/as/it/starts/with/dynamic" className={`link ${pathname?.startsWith('/dynamic/') ? 'active' : ''}`}>
                Dynamic Routing Demo
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            App Routes:
            <li>
              <Link href="/server-client-composition" className={`link ${pathname === '/server-client-composition' ? 'active' : ''}`}>
                Server/Client component composition Demo
              </Link>
            </li>
            <li>
              <Link href="/route-handler-test" className={`link ${pathname === '/server-client-composition' ? 'active' : ''}`}>
                Route Handling & API call React Hook Demo
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
