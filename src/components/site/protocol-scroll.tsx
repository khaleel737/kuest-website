'use client'

import * as React from 'react'

// Horizontal-scroll pinned section — four protocol chapters slide past
// while the page scrolls vertically. Tighter pin duration.

type Chapter = {
  n: string
  title: string
  italic: string
  body: string
  detail: React.ReactNode
}

const CHAPTERS: Chapter[] = [
  {
    n: '01',
    title: 'Shared book',
    italic: 'A single depth across every site.',
    body:
      "Every Kuest front-end quotes from the same orderbook. Your market inherits day-one depth.",
    detail: <SharedBookDetail />
  },
  {
    n: '02',
    title: 'Audited contracts',
    italic: 'OpenZeppelin reviewed. On-chain settled.',
    body:
      'Market logic, resolution, and payouts all live in audited smart contracts. No "trust us" dashboards.',
    detail: <ContractsDetail />
  },
  {
    n: '03',
    title: 'Bot SDKs',
    italic: 'Quote with Python, Rust, or TypeScript.',
    body:
      'Post markets and quotes from your trading stack. 100ms WebSocket feeds, typed streams.',
    detail: <SDKDetail />
  },
  {
    n: '04',
    title: 'Affiliate rail',
    italic: 'Creator payouts, routed on-chain.',
    body:
      'Every trade splits a cut to the site that sourced it — same transaction, same block.',
    detail: <AffiliateDetail />
  }
]

export function ProtocolScroll() {
  const wrapRef = React.useRef<HTMLDivElement>(null)
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

  const x = -(progress * (CHAPTERS.length - 1) * 100)
  const activeIdx = Math.round(progress * (CHAPTERS.length - 1))

  return (
    <section
      id="protocol-inside"
      ref={wrapRef}
      className="relative"
      style={{ height: `${CHAPTERS.length * 75}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-neutral-950 border-y border-neutral-900">
        <div className="absolute inset-0 editorial-grid opacity-40 pointer-events-none" />

        {/* Section header */}
        <div className="absolute top-8 left-0 right-0 z-10 pointer-events-none">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-20 flex items-center justify-between">
            <div className="section-mark flex items-center gap-2.5">
              <span>04</span>
              <span className="w-6 h-px bg-neutral-800" />
              <span>Inside the protocol</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-neutral-600">
              <span className="hidden md:inline">Scroll ↓ moves →</span>
              <span className="tabular">
                {String(activeIdx + 1).padStart(2, '0')} / {String(CHAPTERS.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-5 left-0 right-0 z-10 pointer-events-none">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-20">
            <div className="h-px bg-neutral-900 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#CDFF00] transition-all duration-200"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[9.5px] font-mono text-neutral-600">
              <span>00</span>
              <span>{CHAPTERS.map((c) => c.n).join(' · ')}</span>
            </div>
          </div>
        </div>

        <div
          className="flex h-full will-change-transform"
          style={{
            transform: `translateX(${x}%)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {CHAPTERS.map((c) => (
            <div
              key={c.n}
              className="w-screen h-full flex-shrink-0 flex items-center"
            >
              <div className="mx-auto max-w-[1400px] w-full px-5 lg:px-20 pt-20 pb-16">
                <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-display text-[80px] md:text-[120px] leading-none text-[#CDFF00]/90">
                      {c.n}
                    </div>
                    <h3 className="mt-3 font-display text-[30px] md:text-[40px] lg:text-[48px] leading-[1.02] tracking-[-0.02em] text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 font-display italic text-base md:text-lg text-neutral-500">
                      {c.italic}
                    </p>
                    <p className="mt-4 max-w-md text-[14px] md:text-[15px] text-neutral-400 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-7">{c.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SharedBookDetail() {
  return (
    <div className="paper-card rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-900 text-[10.5px] font-mono">
        <span className="text-neutral-500 uppercase tracking-wider">
          kuest://book/global
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#CDFF00]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
          streaming
        </span>
      </div>
      <div className="p-4 md:p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { k: '412', v: 'sites' },
            { k: '$18.6M', v: 'shared depth' },
            { k: '82ms', v: 'tick-to-feed' }
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl md:text-3xl text-white tabular">
                {s.k}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-1">
                {s.v}
              </div>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 400 100" className="w-full">
          <defs>
            <linearGradient id="dp" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#CDFF00" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#CDFF00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C40,30 80,70 120,40 C160,10 200,60 240,35 C280,10 320,50 360,20 L400,30 L400,100 L0,100 Z"
            fill="url(#dp)"
          />
          <path
            d="M0,50 C40,30 80,70 120,40 C160,10 200,60 240,35 C280,10 320,50 360,20 L400,30"
            stroke="#CDFF00"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[10px] font-mono text-neutral-600">
          <span>-24h</span>
          <span>now</span>
        </div>
      </div>
    </div>
  )
}

function ContractsDetail() {
  return (
    <div className="paper-card rounded-md p-4 md:p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-sm border border-neutral-800 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 2 L17 5 V10 C17 14 13.5 17.5 10 18 C6.5 17.5 3 14 3 10 V5 L10 2 Z"
              stroke="#CDFF00"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M7 10 L9 12 L13 8"
              stroke="#CDFF00"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">
            Last audit
          </div>
          <div className="text-white font-medium text-[14px]">OpenZeppelin · April 2026</div>
        </div>
      </div>
      <pre className="text-[10.5px] font-mono leading-relaxed overflow-x-auto bg-neutral-950/40 rounded-sm p-2.5 border border-neutral-900">
        <span className="text-neutral-600">// audited · kuest-core/v1.2.4</span>
        {'\n'}
        <span className="text-purple-300">contract</span>{' '}
        <span className="text-[#CDFF00]">KuestMarket</span>{' '}
        <span className="text-neutral-500">is</span>{' '}
        <span className="text-white">Ownable</span>
        <span className="text-neutral-500">,</span>{' '}
        <span className="text-white">ReentrancyGuard</span>{' '}
        <span className="text-neutral-500">{'{'}</span>
        {'\n  '}
        <span className="text-purple-300">function</span>{' '}
        <span className="text-[#CDFF00]">resolve</span>
        <span className="text-neutral-500">(</span>
        <span className="text-white">bytes32</span>{' '}
        <span className="text-neutral-300">marketId</span>
        <span className="text-neutral-500">,</span>{' '}
        <span className="text-white">bool</span>{' '}
        <span className="text-neutral-300">outcome</span>
        <span className="text-neutral-500">)</span>
        {'\n    '}
        <span className="text-neutral-500">external onlyOracle {'{'}</span>
        {'\n    '}
        <span className="text-neutral-400">_settle(marketId, outcome);</span>
        {'\n  '}
        <span className="text-neutral-500">{'}'}</span>
        {'\n'}
        <span className="text-neutral-500">{'}'}</span>
      </pre>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[9.5px] font-mono uppercase tracking-wider">
        {['reentrancy · safe', 'oracle · chainlink', 'upgrade · timelock'].map(
          (t) => (
            <div
              key={t}
              className="rounded-sm border border-[#CDFF00]/20 bg-[#CDFF00]/5 px-2 py-1 text-[#CDFF00]"
            >
              ✓ {t}
            </div>
          )
        )}
      </div>
    </div>
  )
}

function SDKDetail() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        {
          lang: 'typescript',
          icon: 'ts',
          code: `import { Kuest } from "@kuest/sdk"

const k = new Kuest(process.env.KEY)

for await (const t of k.book.stream()) {
  if (t.mid > 0.42) await k.order.post({
    side: "buy", px: 0.41, sz: 50_000
  })
}`
        },
        {
          lang: 'python',
          icon: 'py',
          code: `from kuest import Client
import asyncio

async def mm():
    k = Client()
    async for t in k.book.stream():
        if t.mid > 0.42:
            await k.order.post(
              side="buy", px=0.41, sz=50_000
            )

asyncio.run(mm())`
        }
      ].map((s) => (
        <div key={s.lang} className="paper-card rounded-md overflow-hidden">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-neutral-900">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-sm bg-[#CDFF00]/20 flex items-center justify-center text-[9px] font-mono font-bold text-[#CDFF00]">
                {s.icon}
              </span>
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">
                {s.lang}
              </span>
            </div>
            <span className="text-[9.5px] font-mono text-neutral-600">
              v1.2.4
            </span>
          </div>
          <pre className="p-3 text-[10px] font-mono leading-relaxed text-neutral-300 overflow-x-auto min-h-[160px]">
            {s.code}
          </pre>
        </div>
      ))}
    </div>
  )
}

function AffiliateDetail() {
  const rows = [
    { tx: '0x4a91…fb', mkt: 'BTC>150K', cr: 'crypto.calls.io', amt: '$1.24' },
    { tx: '0x7b2a…cd', mkt: 'FED-CUT', cr: 'macroedge', amt: '$0.80' },
    { tx: '0xe14f…10', mkt: 'SBOWL', cr: 'sportsedge.bet', amt: '$2.18' },
    { tx: '0xa8c7…13', mkt: 'ELEC', cr: 'politicalbets', amt: '$0.31' },
    { tx: '0x1f77…e2', mkt: 'ETH-ETF', cr: 'crypto.calls.io', amt: '$1.92' }
  ]
  return (
    <div className="paper-card rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-900 text-[10.5px] font-mono">
        <span className="text-neutral-500 uppercase tracking-wider">
          Creator payouts · live
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#CDFF00]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
          streaming
        </span>
      </div>
      <div className="divide-y divide-neutral-900">
        {rows.map((r) => (
          <div
            key={r.tx}
            className="grid grid-cols-12 gap-3 items-center px-3.5 py-2 text-[10.5px] font-mono"
          >
            <span className="col-span-3 text-neutral-500 truncate">
              {r.tx}
            </span>
            <span className="col-span-2 text-neutral-400 uppercase">
              {r.mkt}
            </span>
            <span className="col-span-5 text-neutral-300 truncate">
              → {r.cr}
            </span>
            <span className="col-span-2 text-right text-[#CDFF00] tabular">
              {r.amt}
            </span>
          </div>
        ))}
      </div>
      <div className="px-3.5 py-2.5 border-t border-neutral-900 flex items-center justify-between text-[9.5px] font-mono">
        <span className="text-neutral-500">
          Settled on-chain · same block
        </span>
        <span className="text-neutral-400 tabular">
          24h: <span className="text-[#CDFF00]">$284K</span> routed
        </span>
      </div>
    </div>
  )
}

