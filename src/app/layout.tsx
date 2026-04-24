import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { LangProvider } from '@/components/site/lang-provider'
import { SmoothScroll } from '@/components/site/smooth-scroll'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap'
})

const serif = Instrument_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
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
    'kuest',
    'protocol',
    'market maker'
  ],
  openGraph: {
    title: 'Kuest — The Shopify for Prediction Markets',
    description: 'Your own Polymarket. Live in 15 minutes. Free.',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased grain-overlay">
        <LangProvider>
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SmoothScroll>
        </LangProvider>
      </body>
    </html>
  )
}
