'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Wand2, Rocket, Wallet, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const STEPS = [
  {
    n: '01',
    icon: Wand2,
    title: 'Pick your niche & write your questions',
    body: 'Crypto, sports, politics, AI — whatever your audience cares about. Our no-code builder turns questions into on-chain markets in minutes.',
    bullet: 'Start with a template or write free-form'
  },
  {
    n: '02',
    icon: Rocket,
    title: 'Go live — we handle the infrastructure',
    body: 'Custom domain, brand, translation to 6+ languages. Markets mirror Polymarket liquidity from the first block. No servers, no nodes, no headaches.',
    bullet: 'SSL, DNS, CDN — all auto-configured'
  },
  {
    n: '03',
    icon: Wallet,
    title: 'Every trade pays you directly',
    body: '0.5–3% fee per trade, settled on-chain to your wallet. No revenue share. No invoices. Built-in leaderboard, PnL, and affiliate system.',
    bullet: 'Sub-3s settlement, no intermediaries'
  }
]

export function ThreeSteps() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10" id="how">
      <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '100px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            No code. No server. No technical headaches.
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            Three steps from zero to live market. The full stack is ready to go — built,
            audited, and running at scale.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#CDFF00]/20 to-transparent" />

          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '100px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-neutral-950/60 p-6 card-hover hover:border-[#CDFF00]/30 group"
              >
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950 px-3 py-1 text-xs font-mono text-neutral-400">
                  {s.n}
                </div>
                <div className="h-11 w-11 rounded-lg bg-[#CDFF00]/10 border border-[#CDFF00]/20 flex items-center justify-center mb-4 group-hover:bg-[#CDFF00]/20 group-hover:border-[#CDFF00]/40 transition-all">
                  <Icon className="h-5 w-5 text-[#CDFF00] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.body}</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[11px] text-[#CDFF00]/80 font-mono uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[#CDFF00]" />
                    {s.bullet}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/docs/quickstart"
            className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:border-[#CDFF00]/30 hover:bg-[#CDFF00]/[0.05] transition-colors"
          >
            Read the quickstart
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
