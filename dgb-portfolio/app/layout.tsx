import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers"
import { Header } from '@/components/header'
const inter = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
