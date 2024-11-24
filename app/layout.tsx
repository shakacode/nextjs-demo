import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'
import Navbar from './../components/Navbar'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Welcome to Shakacode's functionality demonstration app for NextJS!",
  description: 'A NextJS functionality demonstration app developed by Shakacode',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light-gray`}>
        <Header>
          <Navbar/>
        </Header>

        <main className="mx-auto px-4 w-[80%] mt-10">
          {children}  
        </main>
      </body>
    </html>
  )
}
