'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Copy, Check, Rocket } from 'lucide-react'
import { MarketCard, MARKETS, type Market } from './market-card'
import { cn } from '@/lib/utils'

const DEMO_TABS: { id: string; label: string; markets: Market[] }[] = [
  { id: 'crypto', label: 'Crypto', markets: [MARKETS[0], MARKETS[4]] },
  { id: 'macro', label: 'Macro', markets: [MARKETS[1], MARKETS[3]] },
  { id: 'sports', label: 'Sports', markets: [MARKETS[2], MARKETS[5]] }
]

export function Hero() {
  const [tab, setTab] = React.useState(0)
  const [copied, setCopied] = React.useState(false)

  // Auto-rotate tabs every 6s
  React.useEffect(() => {
    const id = setInterval(() => setTab((t) => (t + 1) % DEMO_TABS.length), 6000)
    return () => clearInterval(id)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('npx create-kuest my-market')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section
      className="relative overflow-hidden kuest-grad"
      id="start"
    >
      <div className="absolute inset-0 dotted-bg opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-in">
          <Link
            href="/blog/kuest-raises-seed"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-xs text-neutral-300 hover:border-[#CDFF00]/40 hover:text-white transition-colors max-w-full"
          >
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFF00] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CDFF00]" />
              </span>
              New
            </span>
            <span className="h-3 w-px bg-white/10 shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">Kuest raises $12M seed</span>
              <span className="hidden sm:inline">
                Kuest raises $12M to launch the prediction market layer
              </span>
            </span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 shrink-0" />
          </Link>

          <h1 className="mt-6 text-[1.75rem] xs:text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] w-full break-words">
            The <span className="text-[#CDFF00]">Shopify</span> for
            <br />
            prediction markets
          </h1>
          <p className="mt-5 text-base sm:text-xl text-neutral-400 max-w-2xl px-1 leading-relaxed">
            Your own Polymarket — live in 15 minutes, free.
            Launch a branded market for any niche, inherit shared liquidity from day one,
            and earn a fee on every trade.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none sm:w-auto">
            <Link
              href="/#start"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#CDFF00] px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-colors kuest-glow whitespace-nowrap"
            >
              <Rocket className="h-4 w-4" />
              Start your market
            </Link>
            <button
              onClick={copy}
              className="inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-neutral-950/50 px-4 py-3 text-xs sm:text-sm font-mono text-neutral-200 hover:border-white/20 hover:bg-neutral-950/80 transition-colors min-w-0"
            >
              <span className="truncate">
                <span className="text-neutral-500">$</span> npx create-kuest my-market
              </span>
              {copied ? (
                <Check className="h-4 w-4 text-[#CDFF00] shrink-0" />
              ) : (
                <Copy className="h-4 w-4 text-neutral-400 shrink-0" />
              )}
            </button>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Free to launch · No code · Live in minutes
          </p>
        </div>

        {/* Demo widget */}
        <div className="relative mt-14 sm:mt-20">
          <div className="absolute inset-x-4 -top-10 h-20 bg-[#CDFF00]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 px-3 sm:px-4 py-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              </div>
              <div className="flex-1 flex justify-center min-w-0">
                <div className="rounded-md border border-white/5 bg-neutral-900 px-2 sm:px-3 py-1 text-[11px] sm:text-xs text-neutral-400 font-mono truncate max-w-full">
                  <span className="text-neutral-600">https://</span>demo.kuest.com
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2 text-[10px] text-neutral-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] pulse-dot" />
                  Live
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/50 px-2">
              <div className="flex items-center">
                {DEMO_TABS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(idx)}
                    className={cn(
                      'relative px-4 py-3 text-sm transition-colors',
                      tab === idx
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-neutral-200'
                    )}
                  >
                    {t.label}
                    {tab === idx && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#CDFF00] rounded-full" />
                    )}
                  </button>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-2 pr-3 text-[11px] text-neutral-500">
                <span>24h volume</span>
                <span className="font-mono text-[#CDFF00]">$4.2M</span>
              </div>
            </div>

            {/* Market grid */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-b from-neutral-950 to-neutral-950/70">
              {DEMO_TABS[tab].markets.map((m) => (
                <MarketCard key={m.id} market={m} />
              ))}
            </div>

            {/* Ticker */}
            <div className="border-t border-white/10 bg-neutral-950/80 overflow-hidden">
              <div className="flex whitespace-nowrap scroll-marquee py-2.5 text-[11px] font-mono text-neutral-400">
                {[...TICKER, ...TICKER].map((t, i) => (
                  <span key={i} className="mx-6 inline-flex items-center gap-2">
                    <span className="text-neutral-500">{t.sym}</span>
                    <span className="text-white">{t.price}%</span>
                    <span className={t.up ? 'text-[#CDFF00]' : 'text-red-400'}>
                      {t.up ? '▲' : '▼'} {t.delta}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          <Stat label="Prediction market volume" value="$63.5B" sub="2025" />
          <Stat label="Polymarket valuation" value="~$15B" sub="Bloomberg, 2025" />
          <Stat label="Kalshi valuation" value="$11B" sub="Series D" />
          <Stat label="Weekly peak volume" value="$2B+" sub="Cycle high" />
        </div>
      </div>
    </section>
  )
}

const TICKER = [
  { sym: 'BTC-150K', price: 64, delta: '3.2%', up: true },
  { sym: 'FED-25BP', price: 37, delta: '1.1%', up: false },
  { sym: 'NBA-BOS', price: 58, delta: '2.4%', up: true },
  { sym: 'ETH-FLIP', price: 19, delta: '0.6%', up: false },
  { sym: 'AI-BENCH', price: 71, delta: '4.6%', up: true },
  { sym: 'ELECT-TURN', price: 22, delta: '0.8%', up: false },
  { sym: 'OSCAR-A24', price: 29, delta: '0.4%', up: false },
  { sym: 'SPACEX-IPO', price: 42, delta: '1.9%', up: true }
]

function Stat({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm text-neutral-300">{label}</div>
      <div className="text-xs text-neutral-500">{sub}</div>
    </div>
  )
}
