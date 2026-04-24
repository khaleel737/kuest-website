'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCta() {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText('npx create-kuest my-market')
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section
      id="start"
      className="relative py-28 md:py-36 border-t border-neutral-900 overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="section-mark mb-4">07 — Begin</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] text-white text-balance">
              Fifteen minutes from now, your{' '}
              <span className="italic text-[#CDFF00]">first market</span> is live.
            </Reveal>
            <Reveal delay={0.15} as="p" className="mt-6 max-w-xl text-base md:text-lg text-neutral-400 leading-relaxed">
              Spin up a branded site, wire it to the shared book, and watch the
              first trades settle on-chain — while you&apos;re still deciding what
              to post next.
            </Reveal>

            <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/docs/quickstart"
                className="group inline-flex items-center gap-2.5 rounded-sm bg-[#CDFF00] px-5 py-3.5 text-[13px] font-semibold text-neutral-950 hover:bg-[#D4FF4A] press transition-colors"
              >
                Launch your market
                <span className="inline-block w-4 h-px bg-neutral-950 transition-all group-hover:w-6" />
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={copy}
                className="group inline-flex items-center gap-2 rounded-sm border border-neutral-800 bg-neutral-950/70 backdrop-blur px-4 py-3.5 text-[12px] font-mono text-neutral-300 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <span className="text-neutral-600">$</span>
                <span>npx create-kuest my-market</span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#CDFF00]" />
                ) : (
                  <Copy className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                )}
              </button>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-2 py-3 text-[13px] text-neutral-400 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Read the docs →
              </Link>
            </Reveal>

            <Reveal delay={0.35} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
                No credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                Cancel any time
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                Self-hostable
              </span>
            </Reveal>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative flex justify-center pointer-events-none select-none overflow-hidden">
          <div className="font-display text-[28vw] md:text-[22vw] leading-[0.82] tracking-[-0.04em]">
            <span className="text-neutral-900">kue</span>
            <span className="text-[#CDFF00]">s</span>
            <span className="text-neutral-900">t</span>
            <span className="inline-block text-[#CDFF00]">.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
