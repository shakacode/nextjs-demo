"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io";
import { useState } from 'react';

export default function navigationBar() {
  const [isPageRoutesNavOpen, setIsPageRoutesNavOpen] = useState(false)
  const [isAppRoutesNavOpen, setIsAppRoutesNavOpen] = useState(false)


  const pathname = usePathname()

  const togglePageRoutesNav = () => {
    setIsAppRoutesNavOpen(false)
    setIsPageRoutesNavOpen(!isPageRoutesNavOpen)
  }

  const toggleAppRoutesNav = () => {
    setIsPageRoutesNavOpen(false)
    setIsAppRoutesNavOpen(!isAppRoutesNavOpen)
  }

  const closeNavs = () => {
    setIsPageRoutesNavOpen(false)
    setIsAppRoutesNavOpen(false)
  }
  return (
    <section className="flex items-center">
      <ul className="flex gap-4 relative">
        <li>
          <ul>
            <button className="flex gap-1 items-center font-semibold" onClick={togglePageRoutesNav}>              
              Page Routes
              <ArrowDownIcon/>
            </button>

            <div className={`bg-white shadow-lg shadow-black-500/40 p-4 rounded absolute z-10 w-[max-content] ${isPageRoutesNavOpen ? "" : "hidden"}`}>
              <li>
                <Link href="/" className={`hover:text-red-600 link ${pathname === '/' ? 'active' : ''}`} onClick={closeNavs}>
                  Index Page
                </Link>
              </li>
              <li>
                <Link href="/dynamic/routing/with/any/path/you/want/as/long/as/it/starts/with/dynamic" className={`hover:text-red-600 link ${pathname?.startsWith('/dynamic/') ? 'active' : ''}`} onClick={closeNavs}>
                  Dynamic Routing Demo
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <ul>
            <button className="flex gap-1 items-center font-semibold" onClick={toggleAppRoutesNav}>
              App Routes
              <ArrowDownIcon/>
            </button>

            <div className={`bg-white shadow-lg shadow-black-500/40 p-4 rounded absolute z-10 w-[max-content] ${isAppRoutesNavOpen ? "" : "hidden"}`}>
              <li>
                <Link href="/server-client-composition" className={`hover:text-red-600 link ${pathname === '/server-client-composition' ? 'active' : ''}`} onClick={closeNavs}>
                  Server/Client component composition Demo
                </Link>
              </li>
              <li>
                <Link href="/route-handler-test" className={`hover:text-red-600 link ${pathname === '/server-client-composition' ? 'active' : ''}`} onClick={closeNavs}>
                  Route Handling & API call React Hook Demo
                </Link>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </section>
  )
}
