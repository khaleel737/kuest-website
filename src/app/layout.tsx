import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { LangProvider } from '@/components/site/lang-provider'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Kuest — The Shopify for Prediction Markets',
  description:
    'Launch your own branded prediction market in 15 minutes. No code. Shared liquidity. On-chain affiliate system. OpenZeppelin-audited contracts.',
  keywords: [
    'prediction markets',
    'polymarket',
    'kalshi',
    'crypto',
    'trading',
    'no code',
    'white label',
    'kuest'
  ],
  openGraph: {
    title: 'Kuest — The Shopify for Prediction Markets',
    description:
      'Your own Polymarket. Live in 15 minutes. Free.',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <LangProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
