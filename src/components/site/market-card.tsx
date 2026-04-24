'use client'

import * as React from 'react'
import { TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export type MarketVolumeBar = { label: string; value: number }

export type Market = {
  id: string
  category: string
  question: string
  image?: string
  yes: number // 0-100
  volumeUsd: number
  closesAt: string
  trend: 'up' | 'down'
  deltaBp: number // +/- basis points in percent
  chart: number[] // last 20 values (0-100)
}

export const MARKETS: Market[] = [
  {
    id: 'btc-150k',
    category: 'Crypto',
    question: 'Will Bitcoin reach $150,000 before July 1?',
    yes: 64,
    volumeUsd: 2_410_000,
    closesAt: 'Jul 01, 2026',
    trend: 'up',
    deltaBp: 3.2,
    chart: [48, 49, 51, 50, 52, 55, 54, 57, 59, 58, 60, 61, 63, 62, 64, 63, 65, 64, 66, 64]
  },
  {
    id: 'fed-25bp',
    category: 'Macro',
    question: 'Will the Fed cut rates by 25bp at the June meeting?',
    yes: 37,
    volumeUsd: 1_840_000,
    closesAt: 'Jun 18, 2026',
    trend: 'down',
    deltaBp: 1.1,
    chart: [52, 50, 49, 48, 47, 45, 44, 43, 42, 41, 40, 39, 38, 38, 37, 38, 37, 37, 36, 37]
  },
  {
    id: 'playoffs-bos',
    category: 'Sports',
    question: 'Will the Celtics win the 2026 NBA Finals?',
    yes: 58,
    volumeUsd: 920_000,
    closesAt: 'Jun 22, 2026',
    trend: 'up',
    deltaBp: 2.4,
    chart: [40, 42, 44, 43, 45, 46, 48, 49, 50, 52, 53, 55, 54, 55, 56, 57, 58, 57, 58, 58]
  },
  {
    id: 'election-turnout',
    category: 'Politics',
    question: 'Will voter turnout exceed 160M in the 2026 midterms?',
    yes: 22,
    volumeUsd: 510_000,
    closesAt: 'Nov 03, 2026',
    trend: 'down',
    deltaBp: 0.8,
    chart: [30, 29, 28, 28, 27, 26, 26, 25, 24, 24, 23, 23, 23, 22, 22, 22, 21, 22, 22, 22]
  },
  {
    id: 'ai-benchmark',
    category: 'AI',
    question: 'Will any model exceed 95% on SWE-Bench by Q3?',
    yes: 71,
    volumeUsd: 1_210_000,
    closesAt: 'Sep 30, 2026',
    trend: 'up',
    deltaBp: 4.6,
    chart: [55, 57, 58, 60, 62, 63, 64, 65, 66, 67, 68, 69, 69, 70, 70, 71, 72, 71, 72, 71]
  },
  {
    id: 'oscar-best',
    category: 'Entertainment',
    question: 'Will an A24 film win Best Picture at the next Oscars?',
    yes: 29,
    volumeUsd: 340_000,
    closesAt: 'Mar 15, 2027',
    trend: 'down',
    deltaBp: 0.4,
    chart: [35, 34, 33, 33, 32, 31, 31, 30, 30, 30, 29, 29, 29, 29, 28, 29, 29, 29, 28, 29]
  }
]

function fmtUsd(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

function Sparkline({ data, up }: { data: number[]; up: boolean }) {
  const w = 120
  const h = 28
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = Math.max(1, max - min)
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x},${y}`
    })
    .join(' ')
  const color = up ? '#CDFF00' : '#ef4444'
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="shrink-0">
      <defs>
        <linearGradient id={`g-${up}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.25" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.6" />
      <polyline
        points={`0,${h} ${pts} ${w},${h}`}
        fill={`url(#g-${up})`}
        stroke="none"
      />
    </svg>
  )
}

export function MarketCard({
  market,
  compact = false
}: {
  market: Market
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'group rounded-xl border border-white/10 bg-neutral-950/70 backdrop-blur p-4',
        'hover:border-[#CDFF00]/30 transition-colors'
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#CDFF00]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] pulse-dot" />
          {market.category}
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 text-xs',
            market.trend === 'up' ? 'text-[#CDFF00]' : 'text-red-400'
          )}
        >
          {market.trend === 'up' ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {market.trend === 'up' ? '+' : '-'}
          {market.deltaBp.toFixed(1)}%
        </span>
      </div>
      <h4
        className={cn(
          'text-white font-medium leading-snug mb-3',
          compact ? 'text-sm line-clamp-2' : 'text-[15px]'
        )}
      >
        {market.question}
      </h4>

      <div className="flex items-end justify-between gap-3 mb-3">
        <div>
          <div className="text-xs text-neutral-400 mb-0.5">Yes</div>
          <div className="text-3xl font-bold text-white tracking-tight">
            {market.yes}
            <span className="text-xl text-neutral-500">%</span>
          </div>
        </div>
        <Sparkline data={market.chart} up={market.trend === 'up'} />
      </div>

      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#CDFF00] to-[#94a315] transition-all duration-700"
          style={{ width: `${market.yes}%` }}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="rounded-md bg-[#CDFF00] text-neutral-950 font-semibold text-sm py-2 hover:bg-[#D4FF4A] transition-colors">
          Buy Yes · {market.yes}¢
        </button>
        <button className="rounded-md bg-white/5 text-white font-semibold text-sm py-2 hover:bg-white/10 transition-colors border border-white/10">
          Buy No · {100 - market.yes}¢
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500">
        <span className="inline-flex items-center gap-1">
          <Activity className="h-3 w-3" />
          {fmtUsd(market.volumeUsd)} vol
        </span>
        <span>Closes {market.closesAt}</span>
      </div>
    </div>
  )
}
