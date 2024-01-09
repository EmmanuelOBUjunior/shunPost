import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/Toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shun Post',
  description: 'A reddit clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate antialiased', inter.className)}>
      <body className='min-h-screenbg-slate-50 antialiased'>
        <Navbar/>
        <div className='container max-w-7xl mx-auto h-full pt-24'>
        {children}
        </div>
        <Toaster/>
      </body>
    </html>
  )
}
