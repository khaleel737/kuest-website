'use client'

import * as React from 'react'

// The signature "docker" — pinned scroll sequence. Implements Bruno's note:
// "the docker appearing on scroll, the text effects coming out of it".
// Uses native scroll + state — no external animation lib.

type Stage = {
  id: string
  number: string
  kicker: string
  headline: string
  body: string
  annotation: string
}

const STAGES: Stage[] = [
  {
    id: 'stage-1',
    number: '01',
    kicker: 'The empty page',
    headline: 'A blank canvas, not a template.',
    body:
      'Most platforms hand you a form. Kuest hands you a domain, a contract, a book, and 50 starter markets.',
    annotation: 'Minute zero'
  },
  {
    id: 'stage-2',
    number: '02',
    kicker: 'The protocol wakes',
    headline: 'Liquidity arrives before your first user does.',
    body:
      'The moment your site is live it inherits shared depth from every other Kuest market. No cold start. No zero volume.',
    annotation: 'Shared book'
  },
  {
    id: 'stage-3',
    number: '03',
    kicker: 'A wallet signs',
    headline: 'Creators earn on-chain. Instantly.',
    body:
      'Every trade routes a cut to your wallet — no dashboards, no invoices, no one asking you to wait 30 days.',
    annotation: 'Minute fifteen'
  }
]

export function DockerSequence() {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const [activeStage, setActiveStage] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    let raf = 0
    const handle = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), total)
      const p = total > 0 ? scrolled / total : 0
      setProgress(p)
      const stage = Math.max(
        0,
        Math.min(STAGES.length - 1, Math.floor(p * STAGES.length - 0.0001))
      )
      setActiveStage(stage)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(handle)
    }
    handle()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handle)
    }
  }, [])

  return (
    <section
      id="protocol"
      ref={wrapRef}
      className="relative bg-neutral-950 border-t border-neutral-900"
      style={{ height: `${STAGES.length * 90}vh` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />

        {/* Section header — compact, inside pinned view */}
        <div className="relative pt-10 md:pt-12">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-20">
            <div className="flex items-center justify-between">
              <div className="section-mark flex items-center gap-2.5">
                <span>01</span>
                <span className="w-6 h-px bg-neutral-800" />
                <span>The Docker</span>
              </div>
              <div className="eyebrow hidden md:block text-neutral-600">
                Scroll ↓ to unfold
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex items-center">
          <div className="w-full mx-auto max-w-[1400px] px-5 lg:px-20 pb-10">
            <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
              {/* Left — rotating editorial copy */}
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                <StageCopy stages={STAGES} active={activeStage} />

                {/* Stage indicator */}
                <div className="mt-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-800 relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-[#CDFF00] transition-all duration-300"
                      style={{ width: `${progress * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500 tabular">
                    {String(activeStage + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right — the Docker */}
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                <Docker stage={activeStage} progress={progress} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StageCopy({
  stages,
  active
}: {
  stages: Stage[]
  active: number
}) {
  return (
    <div className="relative min-h-[260px] md:min-h-[280px]">
      {stages.map((s, i) => {
        const isActive = i === active
        return (
          <div
            key={s.id}
            className="absolute inset-0 transition-all duration-700"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? 'translateY(0)'
                : i < active
                ? 'translateY(-30px)'
                : 'translateY(30px)',
              filter: isActive ? 'blur(0)' : 'blur(5px)',
              pointerEvents: isActive ? 'auto' : 'none'
            }}
          >
            <div className="eyebrow mb-2.5 text-[#CDFF00]/80">
              {s.number} · {s.kicker}
            </div>
            <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[0.98] tracking-[-0.02em] text-white text-balance">
              {s.headline}
            </h3>
            <p className="mt-4 text-[14.5px] md:text-base text-neutral-400 max-w-lg leading-relaxed">
              {s.body}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-widest text-neutral-500">
              <span className="h-px w-6 bg-[#CDFF00]" />
              {s.annotation}
            </div>
          </div>
        )
      })}
      {/* Placeholder to reserve height */}
      <div className="invisible">
        <div className="eyebrow mb-2.5">&nbsp;</div>
        <h3 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[0.98]">
          Liquidity arrives before your first user does.
        </h3>
        <p className="mt-4 text-[14.5px] md:text-base">Every trade routes a cut to your wallet.</p>
      </div>
    </div>
  )
}

function Docker({
  stage,
  progress
}: {
  stage: number
  progress: number
}) {
  const borderHue = progress < 0.33
    ? 'hsl(42 8% 14%)'
    : progress < 0.66
    ? 'hsl(42 8% 18%)'
    : 'hsl(71 50% 30%)'

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 blur-3xl pointer-events-none"
        style={{ background: `rgba(205, 255, 0, ${0.05 + progress * 0.15})` }}
      />

      <div
        className="relative paper-card rounded-md overflow-hidden shadow-2xl transition-colors duration-500"
        style={{ borderColor: borderHue }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-neutral-900">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-800" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-600">
              <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
              {stage === 0 && 'your-brand.kuest.com'}
              {stage === 1 && 'your-brand.kuest.com/markets'}
              {stage === 2 && 'your-brand.kuest.com/payouts'}
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 tabular">
            {String(stage + 1).padStart(2, '0')} / 03
          </span>
        </div>

        {/* Content */}
        <div className="relative min-h-[300px] md:min-h-[340px]">
          <StageVisual stage={stage} />
        </div>

        {/* Footer stripe */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-neutral-900 bg-neutral-950/40">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] pulse-ring" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
              kuest-core v1.2.4
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 tabular">
            {stage === 0 && '00:00'}
            {stage === 1 && '07:34'}
            {stage === 2 && '14:58'}
          </span>
        </div>
      </div>

      {/* Flying annotation labels */}
      <FlyingLabel show={stage >= 0} text="dns · resolved" pos="top-10 -right-2 md:-right-8" />
      <FlyingLabel show={stage >= 1} text="book · shared" pos="bottom-24 -left-2 md:-left-10" color="green" />
      <FlyingLabel show={stage >= 2} text="payout · 0.2s" pos="bottom-6 -right-2 md:-right-10" />
    </div>
  )
}

function FlyingLabel({
  show,
  text,
  pos,
  color = 'lime'
}: {
  show: boolean
  text: string
  pos: string
  color?: 'lime' | 'green'
}) {
  return (
    <div
      className={`absolute ${pos} hidden md:flex items-center gap-1.5 rounded-full border bg-neutral-950/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-all duration-500 ${
        color === 'lime'
          ? 'border-[#CDFF00]/30 text-[#CDFF00]'
          : 'border-green-500/30 text-green-400'
      }`}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.9)'
      }}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {text}
    </div>
  )
}

function StageVisual({ stage }: { stage: number }) {
  return (
    <div className="relative h-full min-h-[300px] md:min-h-[340px] p-4 md:p-5">
      <div key={`v-${stage}`} className="h-full fade-slide-up">
        {stage === 0 && <EmptyCanvas />}
        {stage === 1 && <BookFills />}
        {stage === 2 && <PayoutStream />}
      </div>
    </div>
  )
}

function EmptyCanvas() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-[#CDFF00] to-[#9ec800] flex items-center justify-center text-[11px] font-bold text-neutral-950">
            B
          </div>
          <div>
            <div className="text-[13px] font-medium text-white">BrandX Markets</div>
            <div className="text-[10px] font-mono text-neutral-500">
              brandx.kuest.com
            </div>
          </div>
        </div>
        <button className="rounded-sm bg-[#CDFF00] text-neutral-950 text-[11px] font-semibold px-3 py-1.5">
          Connect wallet
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-[280px]">
          <div className="relative mx-auto mb-4 h-16 w-16 rounded-full border border-dashed border-neutral-700 flex items-center justify-center">
            <span className="text-neutral-600 text-2xl font-display italic">ø</span>
          </div>
          <div className="font-display text-[22px] leading-[1.1] text-white tracking-tight mb-2">
            No markets yet.
          </div>
          <div className="text-[12px] text-neutral-500 leading-relaxed">
            Write your first question. The protocol handles the rest — liquidity,
            resolution, payouts.
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-dashed border-neutral-800 bg-neutral-950/40 p-3 flex items-center gap-2">
        <span className="text-[12px] font-mono text-neutral-600">&gt;</span>
        <div className="flex-1 text-[12px] font-mono text-neutral-400">
          Will <span className="text-white">_______</span> happen by
          <span className="text-white"> _______</span>?
        </div>
        <span className="inline-block w-1.5 h-4 bg-[#CDFF00] blink" />
      </div>
    </div>
  )
}

function BookFills() {
  const rows = [
    { side: 'bid', px: 0.34, size: '$8,420', fill: 42 },
    { side: 'bid', px: 0.33, size: '$12,108', fill: 60 },
    { side: 'bid', px: 0.32, size: '$4,900', fill: 24 },
    { side: 'spread', px: 0.0 },
    { side: 'ask', px: 0.35, size: '$6,230', fill: 31 },
    { side: 'ask', px: 0.36, size: '$9,812', fill: 49 },
    { side: 'ask', px: 0.37, size: '$3,411', fill: 17 }
  ]
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
          BTC &gt; $150K — Orderbook
        </span>
        <span className="text-[11px] font-mono text-neutral-500 tabular">
          Depth <span className="text-white">$44.8K</span>
        </span>
      </div>
      <div className="flex-1 space-y-1.5">
        {rows.map((r, i) => {
          if (r.side === 'spread') {
            return (
              <div
                key={i}
                className="flex items-center justify-center gap-2 py-1.5 border-y border-dashed border-neutral-800 text-[10px] font-mono text-neutral-500"
              >
                <span>mid 34.5¢</span>
                <span className="text-neutral-700">·</span>
                <span>spread 1.0¢</span>
              </div>
            )
          }
          const isBid = r.side === 'bid'
          return (
            <div
              key={i}
              className="relative h-7 rounded-sm overflow-hidden bg-neutral-950/40"
            >
              <div
                className={`absolute inset-y-0 ${
                  isBid ? 'left-0 bg-[#CDFF00]/12' : 'right-0 bg-red-500/12'
                }`}
                style={{ width: `${r.fill}%` }}
              />
              <div className="relative h-full flex items-center justify-between px-3 text-[11px] font-mono">
                <span className={isBid ? 'text-[#CDFF00]' : 'text-red-400'}>
                  {(r.px! * 100).toFixed(0)}¢
                </span>
                <span className="text-neutral-400 tabular">{r.size}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-600">
        <span>
          Sourced from <span className="text-[#CDFF00]">412 sites</span>
        </span>
        <span className="tabular">82ms</span>
      </div>
    </div>
  )
}

function PayoutStream() {
  const txs = [
    { from: '0x4a…91fb', amt: '+$12.40', mkt: 'BTC>150K', t: '0.2s' },
    { from: '0x7b…2acd', amt: '+$8.04', mkt: 'FED-CUT', t: '0.3s' },
    { from: '0xe1…4f10', amt: '+$21.85', mkt: 'SBOWL', t: '0.2s' },
    { from: '0xa8…c713', amt: '+$3.12', mkt: 'ELEC', t: '0.4s' }
  ]
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
          Creator wallet · 0x8a…de12
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#CDFF00]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
          streaming
        </span>
      </div>

      <div className="paper-card rounded-md p-4 mb-4">
        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
          24h earnings
        </div>
        <div className="font-display text-4xl text-white tabular">
          $1,284.<span className="text-neutral-500">61</span>
        </div>
        <div className="mt-1 text-[11px] font-mono text-neutral-500">
          <span className="tick-up">+18.4%</span> vs yesterday · 2.4% avg take
        </div>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden">
        {txs.map((t) => (
          <div
            key={t.from}
            className="flex items-center justify-between py-1.5 px-2 rounded-sm border border-neutral-900 bg-neutral-950/30 text-[11px] font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
              <span className="text-neutral-400">{t.from}</span>
            </div>
            <span className="text-neutral-500 uppercase">{t.mkt}</span>
            <span className="text-[#CDFF00] tabular">{t.amt}</span>
            <span className="text-neutral-600 tabular">{t.t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
