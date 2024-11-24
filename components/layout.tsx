import { ReactNode } from 'react'
import Navbar from './Navbar'
import Header from './Header'
 
export default function Layout({ children }: {children: ReactNode}) {
 
  return (
    <>
      <Header>
        <Navbar/>
      </Header>

      <main className="mx-auto px-4 w-[80%] mt-10">{children}</main>
    </>
  )
}
