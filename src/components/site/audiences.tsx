'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users2,
  LineChart,
  Coins,
  CheckCircle2,
  Sparkles,
  Terminal,
  Wallet,
  Share2,
  BarChart3,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Audience = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  badge: string
  title: string
  pitch: string
  bullets: { icon: React.ComponentType<{ className?: string }>; text: string }[]
  cta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  gradient: string
}

const AUDIENCES: Audience[] = [
  {
    id: 'creators',
    icon: Users2,
    badge: 'For creators',
    title: 'Turn your audience into a live market.',
    pitch:
      'If you have a Discord, a Substack, or a Twitter following, you already have the hardest thing to build on the internet — distribution. Kuest turns that into a prediction market in the time it takes to make coffee.',
    bullets: [
      { icon: Zap, text: 'Live in 15 minutes — no code, no servers, no nodes' },
      { icon: Share2, text: 'Affiliate links pay you 0.5–3% per trade, on-chain' },
      { icon: Sparkles, text: 'Your brand, your domain, your colors, 6 languages' },
      { icon: BarChart3, text: 'Built-in leaderboards, PnL, and rewards quests' }
    ],
    cta: { label: 'Launch your market', href: '/#start-market' },
    secondaryCta: { label: 'See creator tools', href: '/creators' },
    gradient: 'from-[#CDFF00]/20 via-[#CDFF00]/5 to-transparent'
  },
  {
    id: 'makers',
    icon: LineChart,
    badge: 'For market makers',
    title: 'The fastest feed in prediction markets.',
    pitch:
      'Stream every tick from every Kuest-powered market through one WebSocket. Backtest with historical replay. Place limit orders programmatically with the same primitives our internal desk uses.',
    bullets: [
      { icon: Terminal, text: 'TypeScript & Python SDKs with full IntelliSense' },
      { icon: Zap, text: 'WebSocket stream with <100ms tick-to-feed latency' },
      { icon: BarChart3, text: 'Cross-market arbitrage via shared Polymarket mirror' },
      { icon: CheckCircle2, text: 'Historical replay + backtesting harness built in' }
    ],
    cta: { label: 'Read the SDK docs', href: '/docs/sdk/typescript' },
    secondaryCta: { label: 'Get API keys', href: '/signup?intent=market-maker' },
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent'
  },
  {
    id: 'providers',
    icon: Coins,
    badge: 'For liquidity providers',
    title: 'Earn yield on resolved-market capital.',
    pitch:
      'Provide depth to any market across the Kuest network with a single deposit. Earn maker fees plus a share of the affiliate pool. Contracts audited by OpenZeppelin — settlement in seconds on Polygon.',
    bullets: [
      { icon: Wallet, text: 'Unified LP vault across every Kuest-powered site' },
      { icon: Sparkles, text: 'OpenZeppelin-audited, open-source contracts' },
      { icon: Coins, text: 'Earn maker rebates + a share of the fee pool' },
      { icon: Zap, text: 'Withdraw anytime — no lock-up on stable markets' }
    ],
    cta: { label: 'Open an LP vault', href: '/lp' },
    secondaryCta: { label: 'Read the protocol', href: '/protocol' },
    gradient: 'from-sky-500/20 via-sky-500/5 to-transparent'
  }
]

export function Audiences() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10" id="who">
      {/* Ambient background */}
      <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CDFF00]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            Who it's for
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            One platform. Three sides of the market.
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            Whether you bring the audience, the quotes, or the capital — Kuest is the
            rails underneath. Pick your role and start today.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {AUDIENCES.map((a, i) => (
            <AudienceCard key={a.id} audience={a} index={i} />
          ))}
        </div>

        {/* Bridge rail — the protocol */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-950 to-neutral-900/40 p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-[#CDFF00]/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CDFF00]/20 bg-[#CDFF00]/[0.04] px-2.5 py-1 text-[11px] text-[#CDFF00] font-medium">
                <Sparkles className="h-3 w-3" />
                The protocol
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight">
                All three sides share one protocol, one orderbook, one settlement layer.
              </h3>
              <p className="mt-2 text-sm text-neutral-400 max-w-xl">
                Every site launched on Kuest inherits the same shared liquidity pool and
                the same audited contracts. Creators bring audience, market makers bring
                quotes, LPs bring capital — the protocol makes all three meet in one book.
              </p>
            </div>
            <Link
              href="/protocol"
              className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:border-[#CDFF00]/40 hover:bg-[#CDFF00]/[0.05] transition-colors whitespace-nowrap"
            >
              Read the protocol
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AudienceCard({ audience, index }: { audience: Audience; index: number }) {
  const Icon = audience.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '100px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-white/10 bg-neutral-950/60 p-6 sm:p-7 card-hover hover:border-[#CDFF00]/30 hover:bg-neutral-950/80 overflow-hidden"
    >
      {/* Gradient halo */}
      <div
        className={cn(
          'absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-br pointer-events-none',
          audience.gradient
        )}
      />

      <div className="relative flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-[#CDFF00]/10 border border-[#CDFF00]/20 flex items-center justify-center">
            <Icon className="h-5 w-5 text-[#CDFF00]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-neutral-400">
            {audience.badge}
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-600">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-5 text-xl sm:text-[1.35rem] font-bold text-white tracking-tight leading-snug">
        {audience.title}
      </h3>
      <p className="relative mt-3 text-sm text-neutral-400 leading-relaxed">
        {audience.pitch}
      </p>

      <ul className="relative mt-5 space-y-2.5">
        {audience.bullets.map((b) => {
          const B = b.icon
          return (
            <li key={b.text} className="flex items-start gap-2.5 text-sm text-neutral-200">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#CDFF00]/10 border border-[#CDFF00]/15">
                <B className="h-3 w-3 text-[#CDFF00]" />
              </span>
              <span className="leading-snug">{b.text}</span>
            </li>
          )
        })}
      </ul>

      <div className="relative mt-6 flex items-center gap-2 pt-5 border-t border-white/5">
        <Link
          href={audience.cta.href}
          className="inline-flex items-center gap-1.5 rounded-md bg-[#CDFF00] px-3.5 py-2 text-xs font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-colors"
        >
          {audience.cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={audience.secondaryCta.href}
          className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          {audience.secondaryCta.label}
        </Link>
      </div>
    </motion.div>
  )
}
