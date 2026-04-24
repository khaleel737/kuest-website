'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Copy,
  Check,
  Rocket,
  Play,
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

type DemoTab = {
  id: string
  label: string
  src: string
  caption: string
  stat: { label: string; value: string }
}

const DEMO_TABS: DemoTab[] = [
  {
    id: 'markets',
    label: 'Markets',
    src: 'https://demo.kuest.com/',
    caption: 'Browse live markets — trending, politics, crypto, sports',
    stat: { label: 'Active markets', value: '1,248' }
  },
  {
    id: 'crypto',
    label: 'Crypto',
    src: 'https://demo.kuest.com/topics/crypto',
    caption: 'BTC, ETH, altcoin targets — deep orderbooks',
    stat: { label: '24h volume', value: '$4.2M' }
  },
  {
    id: 'sports',
    label: 'Sports',
    src: 'https://demo.kuest.com/topics/sports',
    caption: 'Playoffs, finals, moneyline — real-time odds',
    stat: { label: 'Open bets', value: '36,104' }
  },
  {
    id: 'politics',
    label: 'Politics',
    src: 'https://demo.kuest.com/topics/politics',
    caption: 'Elections, policy, approval — sharp consensus',
    stat: { label: 'Markets', value: '420' }
  }
]

export function Hero() {
  const [tab, setTab] = React.useState(0)
  const [copied, setCopied] = React.useState(false)
  const [loaded, setLoaded] = React.useState<Record<number, boolean>>({})

  const copy = async () => {
    try {
      await navigator.clipboard.writeText('npx create-kuest my-market')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section className="relative overflow-hidden" id="start">
      {/* Layered atmospheric backgrounds */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#CDFF00]/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-24 sm:pb-28">
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <Link
            href="/blog/kuest-raises-seed"
            className="group inline-flex items-center gap-2 rounded-full border border-[#CDFF00]/20 bg-[#CDFF00]/[0.04] px-3 py-1 text-[11px] sm:text-xs text-neutral-300 hover:border-[#CDFF00]/50 hover:bg-[#CDFF00]/[0.08] hover:text-white transition-all max-w-full backdrop-blur-sm"
          >
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFF00] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CDFF00]" />
              </span>
              <span className="font-semibold text-[#CDFF00]">Seed</span>
            </span>
            <span className="h-3 w-px bg-white/10 shrink-0" />
            <span className="truncate">
              <span className="sm:hidden">$12M seed → launch</span>
              <span className="hidden sm:inline">
                Kuest raises $12M to launch the prediction market layer
              </span>
            </span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 shrink-0" />
          </Link>

          <h1 className="mt-6 text-[2rem] xs:text-[2.25rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-[-0.02em] text-white leading-[1.02] w-full">
            The{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-[#E4FF4C] via-[#CDFF00] to-[#9EC800] bg-clip-text text-transparent">
                Shopify
              </span>
              <span className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#CDFF00]/15 blur-xl -z-0" />
            </span>{' '}
            for
            <br />
            prediction markets
          </h1>
          <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl px-1 leading-relaxed">
            Launch a branded prediction market in <span className="text-white font-medium">15 minutes</span>.
            Inherit Polymarket-level liquidity from day one, bring your own audience,
            and earn a fee on every trade — settled straight to your wallet.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md sm:max-w-none sm:w-auto">
            <Link
              href="/#start-market"
              className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-[#CDFF00] px-5 py-3.5 text-sm font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-all kuest-glow whitespace-nowrap overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Rocket className="h-4 w-4 relative" />
              <span className="relative">Start your market</span>
              <ArrowRight className="h-4 w-4 relative transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              onClick={copy}
              className="inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-neutral-950/60 px-4 py-3.5 text-xs sm:text-sm font-mono text-neutral-200 hover:border-[#CDFF00]/30 hover:bg-neutral-950/80 transition-all min-w-0 backdrop-blur"
              aria-label="Copy install command"
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
          <p className="mt-3 text-xs text-neutral-500 flex items-center gap-2 flex-wrap justify-center">
            <Sparkles className="h-3 w-3 text-[#CDFF00]" /> Free to launch
            <span className="text-neutral-700">·</span>
            <Zap className="h-3 w-3 text-[#CDFF00]" /> No code
            <span className="text-neutral-700">·</span>
            <TrendingUp className="h-3 w-3 text-[#CDFF00]" /> Live in minutes
          </p>
        </motion.div>

        {/* Live demo panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mt-14 sm:mt-20"
        >
          {/* Glow halo */}
          <div className="absolute inset-x-8 -top-10 h-24 bg-[#CDFF00]/15 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -left-20 top-1/3 h-64 w-64 bg-[#CDFF00]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -right-20 bottom-1/4 h-64 w-64 bg-[#CDFF00]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(205,255,0,0.04)] overflow-hidden">
            {/* Toolbar + tabs */}
            <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950/70 px-3 sm:px-4 h-11 sm:h-12 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700 hover:bg-red-500/80 transition-colors" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700 hover:bg-amber-500/80 transition-colors" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-700 hover:bg-emerald-500/80 transition-colors" />
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/10 mx-1" />
                <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                  {DEMO_TABS.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setTab(idx)}
                      className={cn(
                        'relative px-2.5 sm:px-3 h-7 rounded-md text-[11px] sm:text-xs font-medium transition-all whitespace-nowrap',
                        tab === idx
                          ? 'bg-white/5 text-white'
                          : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.03]'
                      )}
                    >
                      {t.label}
                      {tab === idx && (
                        <motion.span
                          layoutId="tab-underline"
                          className="absolute inset-x-2 bottom-0 h-0.5 bg-[#CDFF00] rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="hidden md:flex items-center gap-1.5 rounded-md border border-white/5 bg-neutral-900 px-2.5 py-1 text-[11px] text-neutral-400 font-mono">
                  <span className="text-neutral-600">https://</span>
                  <span>demo.kuest.com</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-neutral-400 font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFF00] opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
                  </span>
                  Live
                </span>
                <a
                  href="https://demo.kuest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] sm:text-[11px] text-neutral-300 hover:border-[#CDFF00]/30 hover:text-white transition-colors"
                >
                  Open
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Caption strip */}
            <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-neutral-950/40 px-3 sm:px-5 py-2.5 text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 text-neutral-400 min-w-0">
                <Play className="h-3 w-3 text-[#CDFF00] shrink-0" fill="currentColor" />
                <span className="truncate">{DEMO_TABS[tab].caption}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-neutral-500">{DEMO_TABS[tab].stat.label}</span>
                <span className="font-mono font-semibold text-[#CDFF00]">{DEMO_TABS[tab].stat.value}</span>
              </div>
            </div>

            {/* Iframe stage */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-neutral-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={DEMO_TABS[tab].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* Skeleton shown until iframe loads */}
                  {!loaded[tab] && <IframeSkeleton />}
                  <iframe
                    key={DEMO_TABS[tab].id}
                    src={DEMO_TABS[tab].src}
                    title={`Kuest demo — ${DEMO_TABS[tab].label}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={cn(
                      'absolute inset-0 h-full w-full border-0 transition-opacity duration-500',
                      loaded[tab] ? 'opacity-100' : 'opacity-0'
                    )}
                    onLoad={() => setLoaded((s) => ({ ...s, [tab]: true }))}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mobile-only click-to-open overlay (iframe interaction can feel trappy on touch) */}
              <a
                href="https://demo.kuest.com"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 sm:hidden inline-flex items-center gap-1.5 rounded-md bg-[#CDFF00] px-3 py-1.5 text-[11px] font-semibold text-neutral-950 shadow-lg"
              >
                Open
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Ticker */}
            <div className="border-t border-white/10 bg-neutral-950/90 overflow-hidden">
              <div className="flex whitespace-nowrap scroll-marquee py-2.5 text-[11px] font-mono">
                {[...TICKER, ...TICKER].map((t, i) => (
                  <span
                    key={i}
                    className="mx-5 inline-flex items-center gap-2 text-neutral-400"
                  >
                    <span className="text-neutral-500">{t.sym}</span>
                    <span className="text-white">{t.price}¢</span>
                    <span className={t.up ? 'text-[#CDFF00]' : 'text-red-400'}>
                      {t.up ? '▲' : '▼'} {t.delta}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
        >
          <Stat label="Prediction market volume" value="$63B+" sub="2025 annualized" />
          <Stat label="Polymarket valuation" value="~$15B" sub="Bloomberg, 2025" />
          <Stat label="Kalshi valuation" value="$11B" sub="Series D" />
          <Stat label="Weekly peak volume" value="$2B+" sub="Cycle high" />
        </motion.div>
      </div>
    </section>
  )
}

function IframeSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950/80" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#CDFF00]/20 animate-ping" />
          <span className="h-8 w-8 rounded-full border-2 border-[#CDFF00] border-t-transparent animate-spin" />
        </div>
        <p className="text-xs text-neutral-500 font-mono">loading demo.kuest.com…</p>
      </div>
    </div>
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
  { sym: 'SPACEX-IPO', price: 42, delta: '1.9%', up: true },
  { sym: 'TSLA-ROBO', price: 48, delta: '2.1%', up: true },
  { sym: 'EUR-PARITY', price: 33, delta: '0.9%', up: false }
]

function Stat({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="group">
      <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white bg-gradient-to-br from-white to-neutral-400 bg-clip-text group-hover:text-transparent transition-all">
        {value}
      </div>
      <div className="mt-1 text-sm text-neutral-300">{label}</div>
      <div className="text-xs text-neutral-500">{sub}</div>
    </div>
  )
}
