import type { Metadata, Viewport } from 'next'
import {  Oxygen, Oxygen_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Pedro González C - Portfolio',
  description:
    'Portfolio of Pedro González C, a software engineer and web developer from Argentina.',
}

const oxygen = Oxygen({
  weight: ['400', '700'],
  variable: '--font-oxygen',
  subsets: ['latin'],
})

const oxygenMono = Oxygen_Mono({
  weight: ['400'],
  variable: '--font-oxygen-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oxygen.variable} ${oxygenMono.variable} bg-blue-100/30 tracking-tight antialiased dark:bg-blue-950/10`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
