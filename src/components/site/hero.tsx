'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

const TICKERS = [
  { sym: 'BTC>150K-26', px: 0.34, ch: '+2.1%', up: true },
  { sym: 'FED-CUT-Q2', px: 0.61, ch: '+0.4%', up: true },
  { sym: 'SBOWL-KC', px: 0.48, ch: '-1.2%', up: false },
  { sym: 'ELEC-PRES', px: 0.52, ch: '+0.8%', up: true },
  { sym: 'ETH-ETF-YES', px: 0.78, ch: '+3.4%', up: true },
  { sym: 'NBA-BOS', px: 0.29, ch: '-0.6%', up: false },
  { sym: 'USR-2%CPI', px: 0.44, ch: '+0.1%', up: true },
  { sym: 'GPT5-JUN', px: 0.22, ch: '-2.3%', up: false }
]

const MARKETS = [
  { q: 'Will Bitcoin close above $150K by Dec 31, 2026?', yes: 34, vol: '$2.8M', ch: 'crypto' },
  { q: 'Will the Fed cut rates twice in Q2?', yes: 61, vol: '$1.4M', ch: 'macro' },
  { q: 'Chiefs to win Super Bowl LX?', yes: 48, vol: '$3.1M', ch: 'sports' }
]

export function Hero() {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText('npx create-kuest my-market')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 editorial-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#CDFF00]/5 to-transparent pointer-events-none" />

      {/* Rotated side label — signature */}
      <div className="hidden lg:block absolute left-4 top-32 text-neutral-500">
        <div className="v-label flex flex-col items-center gap-3">
          <span>Protocol / 2026</span>
          <span className="h-12 w-px bg-neutral-700" />
          <span className="text-[#CDFF00]">Seed stage</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-20">
        {/* Top bar — section marker + announcement */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div className="section-mark flex items-center gap-2.5">
            <span>00</span>
            <span className="w-6 h-px bg-neutral-700" />
            <span>Intro</span>
          </div>
          <a
            href="/blog/seed-announcement"
            className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/60 backdrop-blur px-3 py-1.5 text-[11px] text-neutral-300 hover:border-[#CDFF00]/40 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] pulse-ring" />
            <span className="font-mono uppercase tracking-wider text-neutral-500">Now</span>
            <span>Kuest raises $12M seed</span>
            <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Left column — headline */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[44px] sm:text-[56px] md:text-[64px] lg:text-[76px] xl:text-[88px] leading-[0.94] tracking-[-0.03em] text-white">
              <RevealLine delay={0}>
                <span className="block">
                  The <span className="italic text-[#CDFF00]">Shopify,</span>
                </span>
              </RevealLine>
              <RevealLine delay={0.12}>
                <span className="block">but for prediction</span>
              </RevealLine>
              <RevealLine delay={0.24}>
                <span className="block text-neutral-500">markets.</span>
              </RevealLine>
            </h1>

            <p className="mt-6 md:mt-7 max-w-xl text-[15px] md:text-[17px] leading-[1.55] text-neutral-300 text-pretty fade-slide-up" style={{ animationDelay: '0.4s' }}>
              Launch a branded prediction market in{' '}
              <span className="text-white font-medium">fifteen minutes.</span>{' '}
              Shared liquidity from day one. On-chain affiliate payouts. A
              protocol built for creators, market makers, and exchanges.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 fade-slide-up" style={{ animationDelay: '0.55s' }}>
              <Link
                href="/#start"
                className="group inline-flex items-center gap-2 rounded-sm bg-[#CDFF00] px-4 py-2.5 text-[13px] font-semibold text-neutral-950 hover:bg-[#D4FF4A] press transition-colors"
              >
                Start building
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={copy}
                className="group inline-flex items-center gap-2 rounded-sm border border-neutral-800 bg-neutral-950/70 backdrop-blur px-3.5 py-2.5 text-[12px] font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <span className="text-neutral-600">$</span>
                <span>npx create-kuest my-market</span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#CDFF00]" />
                ) : (
                  <Copy className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                )}
              </button>
            </div>

            <div className="mt-5 flex items-center gap-5 text-[11px] font-mono text-neutral-500 fade-slide-up" style={{ animationDelay: '0.65s' }}>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
                15 min avg launch
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                OpenZeppelin audited
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                Shared book
              </span>
            </div>
          </div>

          {/* Right column — "The Docker" card */}
          <div className="col-span-12 lg:col-span-5">
            <DockerCard />
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative mt-14 md:mt-20 border-y border-neutral-900 bg-neutral-950/40 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee py-3">
          {[...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 whitespace-nowrap text-[11.5px] font-mono"
            >
              <span className="text-neutral-500 tracking-wider">{t.sym}</span>
              <span className="text-white tabular">{(t.px * 100).toFixed(0)}¢</span>
              <span className={t.up ? 'tick-up' : 'tick-down'}>{t.ch}</span>
              <span className="text-neutral-800 px-2">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RevealLine({
  children,
  delay = 0
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <span className="block overflow-hidden align-top">
      <span
        className="block"
        style={{
          animation: 'reveal-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
          animationDelay: `${0.05 + delay}s`
        }}
      >
        {children}
      </span>
    </span>
  )
}

function DockerCard() {
  const [tab, setTab] = React.useState(0)
  React.useEffect(() => {
    const i = setInterval(() => setTab((t) => (t + 1) % MARKETS.length), 4200)
    return () => clearInterval(i)
  }, [])
  const market = MARKETS[tab]

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#CDFF00]/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative paper-card rounded-md overflow-hidden shadow-2xl">
        {/* Browser top */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-900">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800 hover:bg-red-500/70 transition-colors" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800 hover:bg-yellow-500/70 transition-colors" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800 hover:bg-green-500/70 transition-colors" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-600">
              <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
              {market.ch}.kuest.com
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 tabular">
            {String(tab + 1).padStart(2, '0')}/{MARKETS.length}
          </span>
        </div>

        {/* Card content */}
        <div className="p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#CDFF00] to-[#9ec800] flex items-center justify-center text-[9px] font-bold text-neutral-950">
                K
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                /{market.ch}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
              LIVE
            </span>
          </div>

          <div key={tab} className="fade-in-soft">
            <div className="font-display text-[19px] md:text-[20px] leading-[1.15] text-white tracking-tight text-balance">
              {market.q}
            </div>

            <div className="mt-4 space-y-2">
              <Bar label="YES" pct={market.yes} lime />
              <Bar label="NO" pct={100 - market.yes} />
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">
                Volume <span className="text-white">{market.vol}</span>
              </span>
              <span className="text-neutral-500">
                24h <span className="tick-up">+12.4%</span>
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="rounded-sm bg-[#CDFF00] text-neutral-950 text-[11.5px] font-semibold py-2 hover:bg-[#D4FF4A] press">
                Buy Yes · {market.yes}¢
              </button>
              <button className="rounded-sm border border-neutral-800 bg-neutral-950/50 text-neutral-200 text-[11.5px] font-semibold py-2 hover:border-neutral-700">
                Buy No · {100 - market.yes}¢
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-1 px-4 pb-3">
          {MARKETS.map((_, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`h-[3px] flex-1 rounded-full transition-colors ${
                i === tab ? 'bg-[#CDFF00]' : 'bg-neutral-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hand-drawn arrow annotation */}
      <div className="hidden xl:flex absolute -left-14 top-8 flex-col items-end gap-1">
        <svg width="64" height="32" viewBox="0 0 80 40" fill="none">
          <path
            d="M2 8 Q 30 8, 50 20 T 78 34"
            stroke="#CDFF00"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="3 3"
          />
          <polygon points="72,28 78,34 74,38" fill="#CDFF00" />
        </svg>
        <div className="eyebrow text-[#CDFF00]/80 mr-3">Live docker</div>
      </div>
    </div>
  )
}

function Bar({
  label,
  pct,
  lime
}: {
  label: string
  pct: number
  lime?: boolean
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-[10.5px] font-mono mb-1">
        <span className={lime ? 'text-[#CDFF00]' : 'text-neutral-500'}>{label}</span>
        <span className="text-white tabular">{pct}¢</span>
      </div>
      <div className="h-1.5 rounded-full bg-neutral-900 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            lime ? 'bg-[#CDFF00]' : 'bg-neutral-700'
          }`}
          style={{
            width: `${pct}%`,
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </div>
    </div>
  )
}
