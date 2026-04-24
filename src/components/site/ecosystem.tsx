'use client'

import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative py-20 md:py-28 border-t border-neutral-900"
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-20">
        <header className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-3">
            <div className="section-mark mb-3">03 — Ecosystem</div>
            <div className="eyebrow text-neutral-500">Four sides</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-display text-[36px] md:text-[48px] lg:text-[58px] leading-[1] tracking-[-0.02em] text-white text-balance">
              Built for <span className="italic text-[#CDFF00]">everyone</span>{' '}
              at the table.
            </Reveal>
            <Reveal delay={0.12} as="p" className="mt-4 max-w-2xl text-[14.5px] md:text-[15.5px] text-neutral-400 leading-relaxed">
              A protocol only works when every participant wins. Kuest is designed
              four ways — so creators, market makers, exchanges, and liquidity
              providers can all plug in without fighting for the same slice.
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* 01 Creators — large block */}
          <PersonaBlock
            className="col-span-12 md:col-span-7 md:row-span-2"
            number="01"
            tag="For creators"
            title="Your audience. Your domain. Your cut."
            italic="Own the brand — not a page on someone else's."
            accent
            delay={0.1}
          >
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['yourname.kuest.com', 'crypto.calls.io', 'sportsedge.bet'].map(
                (d, i) => (
                  <div
                    key={d}
                    className="paper-card rounded-sm p-3 text-[11px] font-mono text-neutral-400"
                  >
                    <div className="flex items-center gap-1.5 text-neutral-500 mb-1.5">
                      <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
                      {d}
                    </div>
                    <div className="text-white">
                      {i === 0 && '142 markets · $2.1M'}
                      {i === 1 && '58 markets · $840K'}
                      {i === 2 && '96 markets · $1.4M'}
                    </div>
                  </div>
                )
              )}
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-6 pt-5 border-t border-neutral-900">
              {[
                { k: '0.5–3%', v: 'fee to you' },
                { k: '0 days', v: 'settlement' },
                { k: '<15 min', v: 'to launch' }
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl md:text-3xl text-white tabular">
                    {s.k}
                  </div>
                  <div className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </dl>
          </PersonaBlock>

          {/* 02 Market Makers */}
          <PersonaBlock
            className="col-span-12 md:col-span-5 md:row-span-2"
            number="02"
            tag="For market makers"
            title="A shared book across every front-end."
            italic="One quote, posted once, reaches every Kuest site."
            delay={0.2}
          >
            <div className="mt-6 paper-card rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-900 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                <span>/quote · rust-sdk</span>
                <span className="text-[#CDFF00]">connected</span>
              </div>
              <pre className="p-3 text-[11px] font-mono leading-relaxed text-neutral-300 overflow-x-auto">
                <span className="text-neutral-600">// post one quote, quote 412 sites</span>
                {'\n'}
                <span className="text-[#CDFF00]">kuest</span>
                <span className="text-neutral-400">::book::</span>
                <span className="text-white">post_quote</span>
                <span className="text-neutral-500">(</span>
                {'\n  '}
                <span className="text-neutral-400">market:</span>{' '}
                <span className="text-amber-200">&quot;BTC&gt;150K-2026&quot;</span>
                <span className="text-neutral-500">,</span>
                {'\n  '}
                <span className="text-neutral-400">bid:</span>{' '}
                <span className="text-amber-200">0.34</span>
                <span className="text-neutral-500">,</span>{' '}
                <span className="text-neutral-400">ask:</span>{' '}
                <span className="text-amber-200">0.35</span>
                <span className="text-neutral-500">,</span>
                {'\n  '}
                <span className="text-neutral-400">size:</span>{' '}
                <span className="text-amber-200">12_000_000_000</span>
                <span className="text-neutral-500">,</span>
                {'\n  '}
                <span className="text-neutral-400">ttl:</span>{' '}
                <span className="text-white">Duration</span>
                <span className="text-neutral-500">::</span>
                <span className="text-white">from_secs</span>
                <span className="text-neutral-500">(</span>
                <span className="text-amber-200">60</span>
                <span className="text-neutral-500">)</span>
                <span className="text-neutral-500">,</span>
                {'\n'}
                <span className="text-neutral-500">)?;</span>
              </pre>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400">
              <BulletRow>WebSocket tick-to-feed under 100ms</BulletRow>
              <BulletRow>Maker rebates, taker edge — same account</BulletRow>
              <BulletRow>Cross-market hedging, one collateral pool</BulletRow>
            </ul>
          </PersonaBlock>

          {/* 03 Exchanges */}
          <PersonaBlock
            className="col-span-12 md:col-span-7"
            number="03"
            tag="For exchanges"
            title="Integrate as an operator, not a silo."
            italic="Bring your users. Route their flow. Keep your brand."
            delay={0.1}
          >
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: 'REST + WS', v: 'same endpoints' },
                { k: 'KYC-agnostic', v: 'your gate, your rules' },
                { k: 'Self-custody', v: 'your users hold' }
              ].map((s) => (
                <div key={s.k} className="paper-card rounded-sm p-4">
                  <div className="font-display text-lg text-white">{s.k}</div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-neutral-400 max-w-xl">
              If you already run a trading venue, don&apos;t rebuild. Plug
              prediction markets into your existing orderflow with one config
              change.
            </p>
          </PersonaBlock>

          {/* 04 LPs */}
          <PersonaBlock
            className="col-span-12 md:col-span-5"
            number="04"
            tag="For liquidity providers"
            title="One vault. Every market."
            italic="Earn maker rebates across the whole protocol."
            delay={0.2}
          >
            <div className="mt-6 paper-card rounded-sm p-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
                <span>LP vault · v1</span>
                <span className="inline-flex items-center gap-1.5 text-[#CDFF00]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
                  active
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">
                    TVL
                  </span>
                  <span className="font-display text-2xl text-white tabular">
                    $18.6M
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-mono text-neutral-500">
                    30d APY
                  </span>
                  <span className="font-display text-2xl text-[#CDFF00] tabular">
                    14.2%
                  </span>
                </div>
              </div>
            </div>
          </PersonaBlock>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 items-end">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="font-display text-xl md:text-2xl leading-snug text-neutral-300">
              The sides don&apos;t compete. They{' '}
              <span className="italic text-[#CDFF00]">compound.</span>
            </p>
          </Reveal>
          <Reveal delay={0.12} className="col-span-12 md:col-span-6 md:text-right">
            <p className="text-[13.5px] text-neutral-500 max-w-md md:ml-auto">
              A trade on any Kuest site routes through the same book, hedges
              against the same liquidity, and pays every party — creator, maker,
              LP — in the same transaction.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function PersonaBlock({
  number,
  tag,
  title,
  italic,
  children,
  className = '',
  accent = false,
  delay = 0
}: {
  number: string
  tag: string
  title: string
  italic: string
  children?: React.ReactNode
  className?: string
  accent?: boolean
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      className={`group relative paper-card rounded-md p-5 md:p-6 hover:border-neutral-700 transition-colors ${className}`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-baseline gap-2.5">
          <span className="font-display text-[26px] leading-none text-[#CDFF00]">
            {number}
          </span>
          <span className="eyebrow">{tag}</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-neutral-600 group-hover:text-[#CDFF00] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="font-display text-xl md:text-[26px] leading-[1.1] tracking-[-0.01em] text-white text-balance">
        {title}
      </h3>
      <p className={`mt-2 font-display italic text-sm md:text-base ${accent ? 'text-[#CDFF00]/80' : 'text-neutral-500'}`}>
        {italic}
      </p>
      {children}
    </Reveal>
  )
}

function BulletRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span className="text-[#CDFF00] text-xs">▸</span>
      <span>{children}</span>
    </li>
  )
}
