import { cn } from '@/lib/utils'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Workforce - Your Team of AI Experts',
  description: 'Unleash the power of AI experts to supercharge your business with our AI Workforce platform.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased', inter.className)}>
        <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 z-[-1]" />
        <TooltipProvider delayDuration={0}>
          <main className="relative z-10">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  )
}



import './globals.css'