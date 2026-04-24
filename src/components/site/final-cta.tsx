'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, ArrowRight, Copy, Check } from 'lucide-react'
import * as React from 'react'

export function FinalCta() {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText('npx create-kuest my-market')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden" id="start-market">
      <div className="absolute inset-0 kuest-grad pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none mask-fade-y" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#CDFF00]/[0.07] blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#CDFF00]/10 border border-[#CDFF00]/25 mb-6 kuest-glow">
          <Rocket className="h-6 w-6 text-[#CDFF00]" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.02em] text-white text-balance leading-[1.05]">
          Get your prediction market live in{' '}
          <span className="bg-gradient-to-br from-[#E4FF4C] via-[#CDFF00] to-[#9EC800] bg-clip-text text-transparent">
            15 minutes
          </span>
          .
        </h2>
        <p className="mt-6 text-neutral-400 max-w-xl mx-auto text-balance text-base sm:text-lg">
          Free to launch, usage-based at scale. No credit card. No rev share.
          Your domain, your brand, your audience — trading from day one.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-lg mx-auto sm:max-w-none">
          <Link
            href="/signup"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#CDFF00] px-5 py-3.5 text-sm font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-colors kuest-glow relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative">Start your market</span>
            <ArrowRight className="h-4 w-4 relative transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={copy}
            className="inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-neutral-950/50 px-4 py-3.5 text-xs sm:text-sm font-mono text-neutral-200 hover:border-[#CDFF00]/30 transition-colors"
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
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
            Free forever for creators
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
            OpenZeppelin audited
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
            Live in 15 minutes
          </span>
        </div>
      </motion.div>
    </section>
  )
}
