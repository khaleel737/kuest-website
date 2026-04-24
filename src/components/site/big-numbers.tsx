'use client'

import * as React from 'react'
import { Reveal } from './reveal'

type Stat = {
  n: string
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub: string
  span: number
}

const STATS: Stat[] = [
  {
    n: '01',
    to: 63.5,
    prefix: '$',
    suffix: 'B',
    decimals: 1,
    label: '2025 market volume',
    sub: 'Global prediction markets traded $63.5B in 2025 — a 12× jump from 2023.',
    span: 7
  },
  {
    n: '02',
    to: 412,
    label: 'Kuest sites live',
    sub: 'Independent operators, each with their own brand, book, and audience.',
    span: 5
  },
  {
    n: '03',
    to: 82,
    suffix: 'ms',
    label: 'Tick-to-feed',
    sub: 'Orderflow from any Kuest site propagates to every other in under 100ms.',
    span: 4
  },
  {
    n: '04',
    to: 18.6,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    label: 'Shared book depth',
    sub: 'Aggregated across every operator — every new site inherits this on day one.',
    span: 4
  },
  {
    n: '05',
    to: 1.8,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    label: 'Paid to creators, 30 days',
    sub: 'Routed on-chain, same-block — no pending, no claiming, no dashboards.',
    span: 4
  }
]

export function BigNumbers() {
  return (
    <section className="relative py-28 md:py-40 border-t border-neutral-900">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
        <header className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="section-mark mb-4">05 — By the numbers</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.02em] text-white text-balance">
              A <span className="italic text-[#CDFF00]">new asset class</span>, on a
              protocol that learns fast.
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <StatBlock key={s.n} stat={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

const SPAN_CLASS: Record<number, string> = {
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8'
}

function StatBlock({ stat, delay }: { stat: Stat; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className={`col-span-12 ${SPAN_CLASS[stat.span] || 'md:col-span-4'} paper-card rounded-md p-6 md:p-8 group hover:border-neutral-700 transition-colors`}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="eyebrow">{stat.n}</span>
        <span className="h-px w-8 bg-neutral-800" />
      </div>
      <div className="font-display text-[64px] md:text-[84px] lg:text-[100px] leading-[0.9] tracking-[-0.03em] text-white tabular">
        <span className="text-neutral-500">{stat.prefix}</span>
        <Count to={stat.to} decimals={stat.decimals || 0} />
        <span className="text-[#CDFF00]">{stat.suffix}</span>
      </div>
      <div className="mt-6 text-white font-medium">{stat.label}</div>
      <div className="mt-1.5 text-sm text-neutral-500 leading-relaxed max-w-sm">
        {stat.sub}
      </div>
    </Reveal>
  )
}

function Count({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [value, setValue] = React.useState(0)
  const [started, setStarted] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || started) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            setStarted(true)
            const start = performance.now()
            const duration = 1600
            const animate = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(to * eased)
              if (t < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          }
        }
      },
      { rootMargin: '-10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, started])

  return <span ref={ref}>{value.toFixed(decimals)}</span>
}
