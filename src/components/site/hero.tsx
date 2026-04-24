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
  { q: 'Will Bitcoin close above $150,000 by Dec 31, 2026?', yes: 34, vol: '$2.8M', ch: 'crypto' },
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
      className="relative min-h-[calc(100vh-96px)] pt-6 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#CDFF00]/5 to-transparent pointer-events-none" />

      {/* Rotated side label — signature element */}
      <div className="hidden md:block absolute left-4 lg:left-8 top-40 text-neutral-500">
        <div className="v-label flex flex-col items-center gap-4">
          <span>Protocol / 2026</span>
          <span className="h-16 w-px bg-neutral-700" />
          <span className="text-[#CDFF00]">Seed stage</span>
        </div>
      </div>

      {/* Right-side meta annotation */}
      <div className="hidden lg:block absolute right-6 top-40 text-right text-neutral-500">
        <div className="eyebrow mb-2">Editor&apos;s note</div>
        <div className="font-display italic text-sm text-neutral-400 max-w-[180px] leading-snug">
          A reference implementation of markets,<br />not a silo.
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-20 pt-16 md:pt-20">
        {/* Top bar — section 00 marker + announcement pill */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="section-mark flex items-center gap-3">
            <span>00</span>
            <span className="w-8 h-px bg-neutral-700" />
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

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left column — headline */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <h1 className="font-display text-[10.5vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[6.6vw] xl:text-[108px] leading-[0.9] tracking-[-0.03em] text-white">
              <RevealLine delay={0}>
                <span className="block">
                  The <span className="italic text-[#CDFF00]">Shopify,</span>
                </span>
              </RevealLine>
              <RevealLine delay={0.14}>
                <span className="block">but for prediction</span>
              </RevealLine>
              <RevealLine delay={0.28}>
                <span className="block text-neutral-500">markets.</span>
              </RevealLine>
            </h1>

            <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-7 max-w-xl">
                <p className="text-[17px] sm:text-[19px] leading-[1.5] text-neutral-300 text-pretty">
                  Launch a branded prediction market on any topic in{' '}
                  <span className="text-white font-medium">fifteen minutes.</span>{' '}
                  Shared liquidity from day one. On-chain affiliate payouts. No
                  templates, no gatekeepers — a protocol built for creators,
                  market makers, and exchanges.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="/#start"
                    className="group inline-flex items-center gap-2.5 rounded-sm bg-[#CDFF00] px-5 py-3 text-[13px] font-semibold text-neutral-950 hover:bg-[#D4FF4A] press transition-colors"
                  >
                    Start building
                    <span className="inline-block w-4 h-px bg-neutral-950 transition-all group-hover:w-6" />
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={copy}
                    className="group inline-flex items-center gap-2 rounded-sm border border-neutral-800 bg-neutral-950/70 backdrop-blur px-3.5 py-3 text-[12px] font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors"
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

                <div className="mt-6 flex items-center gap-5 text-[11px] font-mono text-neutral-500">
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

              {/* Right-column side annotation */}
              <div className="hidden md:block col-span-5 pl-6 border-l border-neutral-900">
                <div className="eyebrow mb-3">In this issue</div>
                <ol className="space-y-2.5 text-[13px] text-neutral-400">
                  {[
                    'The docker — a live operator',
                    'A shared book across every site',
                    'Who this is for',
                    'Inside the protocol',
                    'Pricing with intent'
                  ].map((line, i) => (
                    <li
                      key={line}
                      className="group flex items-baseline gap-3 cursor-default"
                    >
                      <span className="font-mono text-[10px] text-neutral-600 tabular">
                        0{i + 1}
                      </span>
                      <span className="group-hover:text-white transition-colors">
                        {line}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Right column — "The Docker" card */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-4 lg:pt-4">
            <DockerCard />
          </div>
        </div>
      </div>

      {/* Bottom ticker — horizontal marquee */}
      <div className="relative mt-16 md:mt-24 border-y border-neutral-900 bg-neutral-950/40 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex marquee py-4">
          {[...TICKERS, ...TICKERS, ...TICKERS].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 whitespace-nowrap text-[12px] font-mono"
            >
              <span className="text-neutral-500 tracking-wider">{t.sym}</span>
              <span className="text-white tabular">{(t.px * 100).toFixed(0)}¢</span>
              <span className={t.up ? 'tick-up' : 'tick-down'}>{t.ch}</span>
              <span className="text-neutral-800 px-3">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CSS-based reveal — runs on mount, no motion dependency
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
          animation: 'reveal-up 1s cubic-bezier(0.22, 1, 0.36, 1) both',
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
      <div className="absolute -inset-6 bg-[#CDFF00]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative paper-card rounded-md overflow-hidden">
        {/* Browser top */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-neutral-900">
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
            {String(tab + 1).padStart(2, '0')} / {MARKETS.length}
          </span>
        </div>

        {/* Card content */}
        <div className="p-5 md:p-6 min-h-[300px]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#CDFF00] to-[#9ec800] flex items-center justify-center text-[10px] font-bold text-neutral-950">
                K
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                /{market.ch}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
              LIVE
            </span>
          </div>

          <div key={tab} className="fade-in-soft">
            <div className="font-display text-[22px] leading-[1.15] text-white tracking-tight text-balance">
              {market.q}
            </div>

            <div className="mt-5 space-y-2.5">
              <Bar label="YES" pct={market.yes} lime />
              <Bar label="NO" pct={100 - market.yes} />
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-500">
                Volume <span className="text-white">{market.vol}</span>
              </span>
              <span className="text-neutral-500">
                24h <span className="tick-up">+12.4%</span>
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded-sm bg-[#CDFF00] text-neutral-950 text-[12px] font-semibold py-2 hover:bg-[#D4FF4A] press">
                Buy Yes · {market.yes}¢
              </button>
              <button className="rounded-sm border border-neutral-800 bg-neutral-950/50 text-neutral-200 text-[12px] font-semibold py-2 hover:border-neutral-700">
                Buy No · {100 - market.yes}¢
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-1 px-5 pb-4">
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

      {/* Annotation — hand-drawn style */}
      <div className="hidden md:flex absolute -left-16 lg:-left-20 top-12 flex-col items-end gap-1.5">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
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
      <div className="flex items-baseline justify-between text-[11px] font-mono mb-1">
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
