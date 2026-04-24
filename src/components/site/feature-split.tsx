'use client'

import * as React from 'react'
import { Check, Globe, Zap, Shield, BarChart3, Code2, Users2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Feature = {
  id: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  visual: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    id: 'product',
    eyebrow: 'Shared liquidity',
    title: 'A billion-dollar market. No longer concentrated in two companies.',
    body:
      'Kuest mirrors Polymarket-derived markets, so every new site launches with depth from day one — not the empty orderbook problem that kills every new platform.',
    bullets: [
      'Mirrored Polymarket liquidity for every vertical',
      'Cross-market arbitrage bots already running',
      'AMM + CLOB hybrid for tight spreads',
      'Settlement on Polygon, finality under 3s'
    ],
    visual: <LiquidityVisual />
  },
  {
    id: 'liquidity',
    eyebrow: 'White label',
    title: 'Your domain. Your brand. Any of 6 languages.',
    body:
      'Every surface is themeable — logo, colors, typography, copy. Translate once; market in English, Deutsch, Español, Português, Français, or 中文. No design systems to fight.',
    bullets: [
      'Full theme tokens (color, typography, radius)',
      'i18n out of the box — 6 languages, RTL ready',
      'Bring your own domain, SSL issued automatically',
      'Embed markets anywhere with a single <script>'
    ],
    visual: <WhiteLabelVisual />
  },
  {
    id: 'bots',
    eyebrow: 'Bot SDKs',
    title: 'TypeScript & Python SDKs for automated trading.',
    body:
      'Stream market events, place orders, and provide liquidity programmatically. Same primitives our internal market makers use — now available to every creator.',
    bullets: [
      'Type-safe TS client with full IntelliSense',
      'Python SDK with asyncio support',
      'WebSocket event stream for <100ms latency',
      'Backtesting harness with historical replay'
    ],
    visual: <SdkVisual />
  }
]

export function FeatureSplit() {
  return (
    <div>
      {FEATURES.map((f, i) => (
        <section
          key={f.id}
          id={f.id}
          className="relative py-20 sm:py-28 border-t border-white/10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
                i % 2 === 1 && 'lg:grid-flow-dense'
              )}
            >
              <div className={cn(i % 2 === 1 && 'lg:col-start-2')}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
                  {f.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
                  {f.title}
                </h2>
                <p className="mt-4 text-neutral-400 text-balance max-w-xl">{f.body}</p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-neutral-200">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CDFF00]/15 border border-[#CDFF00]/20">
                        <Check className="h-3 w-3 text-[#CDFF00]" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(i % 2 === 1 && 'lg:col-start-1 lg:row-start-1')}>
                {f.visual}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

// --- Visuals ---

function LiquidityVisual() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-neutral-950/70 p-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-neutral-400">Order book · BTC-150K</div>
          <div className="flex items-center gap-1 text-xs text-[#CDFF00]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] pulse-dot" /> live
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 font-mono text-[11px]">
          <div>
            <div className="text-neutral-500 mb-1.5 flex justify-between">
              <span>Bids</span>
              <span>Size</span>
            </div>
            {[
              { p: 0.63, s: 12_400 },
              { p: 0.62, s: 9_100 },
              { p: 0.61, s: 7_800 },
              { p: 0.6, s: 22_000 },
              { p: 0.59, s: 14_300 }
            ].map((r, i) => (
              <div key={i} className="relative flex justify-between py-1">
                <div
                  className="absolute inset-y-0 left-0 bg-[#CDFF00]/10 rounded-sm"
                  style={{ width: `${(r.s / 22000) * 100}%` }}
                />
                <span className="relative text-[#CDFF00]">{r.p.toFixed(2)}</span>
                <span className="relative text-neutral-300">
                  {r.s.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="text-neutral-500 mb-1.5 flex justify-between">
              <span>Asks</span>
              <span>Size</span>
            </div>
            {[
              { p: 0.65, s: 8_200 },
              { p: 0.66, s: 11_500 },
              { p: 0.67, s: 6_400 },
              { p: 0.68, s: 18_900 },
              { p: 0.69, s: 10_200 }
            ].map((r, i) => (
              <div key={i} className="relative flex justify-between py-1">
                <div
                  className="absolute inset-y-0 right-0 bg-red-500/10 rounded-sm"
                  style={{ width: `${(r.s / 18900) * 100}%` }}
                />
                <span className="relative text-red-400">{r.p.toFixed(2)}</span>
                <span className="relative text-neutral-300">
                  {r.s.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-3 gap-3 text-[11px]">
          <StatMini icon={BarChart3} label="Depth" value="$2.1M" />
          <StatMini icon={Zap} label="Spread" value="2.0¢" />
          <StatMini icon={Users2} label="LPs" value="214" />
        </div>
      </div>
    </div>
  )
}

function WhiteLabelVisual() {
  const themes = [
    { name: 'kuest.com', from: '#CDFF00', to: '#94a315' },
    { name: 'sportsedge.bet', from: '#22c55e', to: '#16a34a' },
    { name: 'cryptocall.io', from: '#f97316', to: '#c2410c' }
  ]
  return (
    <div className="relative rounded-2xl border border-white/10 bg-neutral-950/70 p-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative space-y-3">
        {themes.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-white/10 bg-neutral-950 p-3 flex items-center gap-3 hover:border-white/20 transition-colors"
          >
            <div
              className="h-9 w-9 rounded-md flex items-center justify-center font-bold text-neutral-950"
              style={{
                background: `linear-gradient(135deg, ${t.from}, ${t.to})`
              }}
            >
              {t.name[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{t.name}</div>
              <div className="text-xs text-neutral-500 font-mono">
                theme = <span style={{ color: t.from }}>{t.from}</span>
              </div>
            </div>
            <Globe className="h-4 w-4 text-neutral-500" />
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 pt-2">
          {['🇺🇸', '🇩🇪', '🇪🇸', '🇵🇹', '🇫🇷', '🇨🇳'].map((f) => (
            <span
              key={f}
              className="h-8 w-8 rounded-md border border-white/10 bg-neutral-950 flex items-center justify-center text-sm"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SdkVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-neutral-950/70">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        </div>
        <span className="text-[11px] text-neutral-500 font-mono">trade.ts</span>
        <Code2 className="h-3.5 w-3.5 text-neutral-500" />
      </div>
      <pre className="p-5 text-[12.5px] leading-relaxed font-mono overflow-x-auto">
<code className="text-neutral-300">
<span className="text-[#CDFF00]">import</span> {'{ Kuest }'} <span className="text-[#CDFF00]">from</span> <span className="text-amber-300">{`'@kuest/sdk'`}</span>{'\n'}
{'\n'}
<span className="text-[#CDFF00]">const</span> client = <span className="text-[#CDFF00]">new</span> <span className="text-sky-300">Kuest</span>({'{ apiKey: process.env.KUEST_KEY }'}){'\n'}
{'\n'}
<span className="text-neutral-500">// stream live market events</span>{'\n'}
<span className="text-[#CDFF00]">for await</span> (<span className="text-[#CDFF00]">const</span> evt <span className="text-[#CDFF00]">of</span> client.markets.stream()) {'{'}{'\n'}
{'  '}<span className="text-[#CDFF00]">if</span> (evt.<span className="text-sky-300">spread</span> {'>'} <span className="text-amber-300">0.04</span>) {'{'}{'\n'}
{'    '}<span className="text-[#CDFF00]">await</span> client.orders.<span className="text-sky-300">limit</span>({'{'}{'\n'}
{'      '}marketId: evt.id,{'\n'}
{'      '}side: <span className="text-amber-300">{`'yes'`}</span>,{'\n'}
{'      '}price: evt.<span className="text-sky-300">bid</span> + <span className="text-amber-300">0.01</span>,{'\n'}
{'      '}size: <span className="text-amber-300">100</span>{'\n'}
{'    })'}{'\n'}
{'  }'}{'\n'}
{'}'}
</code>
      </pre>
    </div>
  )
}

function StatMini({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-[#CDFF00]" />
      <div>
        <div className="text-neutral-500">{label}</div>
        <div className="text-white font-semibold">{value}</div>
      </div>
    </div>
  )
}
