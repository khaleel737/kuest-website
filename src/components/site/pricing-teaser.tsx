'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles, Rocket, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Plan = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  name: string
  tagline: string
  price: string
  priceSub: string
  features: string[]
  cta: { label: string; href: string }
  highlight?: boolean
}

const PLANS: Plan[] = [
  {
    id: 'creator',
    icon: Sparkles,
    name: 'Creator',
    tagline: 'Launch free. Ship today.',
    price: '$0',
    priceSub: 'forever · usage-based at scale',
    features: [
      'Custom domain + SSL',
      '6 built-in languages',
      'Shared liquidity from day one',
      '0.5–3% creator fee per trade',
      'Affiliate system included',
      'Community support'
    ],
    cta: { label: 'Start for free', href: '/#start-market' }
  },
  {
    id: 'studio',
    icon: Rocket,
    name: 'Studio',
    tagline: 'For growing operators.',
    price: '$249',
    priceSub: 'per month + fees',
    features: [
      'Everything in Creator',
      'Priority liquidity routing',
      'Bot SDK access (TS + Python)',
      'WebSocket event stream',
      'Custom branding (unlimited)',
      'Slack & email support'
    ],
    cta: { label: 'Start 14-day trial', href: '/signup?plan=studio' },
    highlight: true
  },
  {
    id: 'enterprise',
    icon: Building2,
    name: 'Enterprise',
    tagline: 'For exchanges & brands.',
    price: 'Custom',
    priceSub: 'volume-based',
    features: [
      'Everything in Studio',
      'Private liquidity vault',
      'Dedicated settlement lane',
      'SLA + 24/7 on-call',
      'White-glove onboarding',
      'Security questionnaire ready'
    ],
    cta: { label: 'Talk to founders', href: '/enterprise' }
  }
]

export function PricingTeaser() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10" id="pricing">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#CDFF00]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Free until it works.
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            Launch zero-cost. Pay as you grow. Enterprise when you're ready for
            dedicated infra. No hidden fees, no revenue share, no lock-in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                'relative rounded-2xl border p-6 sm:p-7 card-hover overflow-hidden',
                p.highlight
                  ? 'border-[#CDFF00]/40 bg-gradient-to-b from-[#CDFF00]/[0.05] to-neutral-950/70 kuest-glow'
                  : 'border-white/10 bg-neutral-950/60 hover:border-white/20'
              )}
            >
              {p.highlight && (
                <>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-[#CDFF00] px-2.5 py-0.5 text-[10px] font-bold text-neutral-950 uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                  <div className="absolute -top-20 -right-20 h-56 w-56 bg-[#CDFF00]/10 blur-3xl rounded-full pointer-events-none" />
                </>
              )}

              <div className="relative flex items-center gap-3">
                <div
                  className={cn(
                    'h-10 w-10 rounded-xl flex items-center justify-center border',
                    p.highlight
                      ? 'bg-[#CDFF00]/15 border-[#CDFF00]/30'
                      : 'bg-white/5 border-white/10'
                  )}
                >
                  <p.icon className={cn('h-4.5 w-4.5', p.highlight ? 'text-[#CDFF00]' : 'text-white')} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{p.name}</div>
                  <div className="text-xs text-neutral-400">{p.tagline}</div>
                </div>
              </div>

              <div className="relative mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white tracking-tight">
                  {p.price}
                </span>
                {p.price !== 'Custom' && (
                  <span className="text-sm text-neutral-500">/mo</span>
                )}
              </div>
              <p className="text-xs text-neutral-500 mt-1">{p.priceSub}</p>

              <ul className="relative mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-200">
                    <span
                      className={cn(
                        'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        p.highlight
                          ? 'bg-[#CDFF00]/20 border border-[#CDFF00]/30'
                          : 'bg-white/5 border border-white/10'
                      )}
                    >
                      <Check
                        className={cn('h-3 w-3', p.highlight ? 'text-[#CDFF00]' : 'text-neutral-300')}
                      />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={p.cta.href}
                className={cn(
                  'relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors',
                  p.highlight
                    ? 'bg-[#CDFF00] text-neutral-950 hover:bg-[#D4FF4A]'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20'
                )}
              >
                {p.cta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-neutral-500 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>Seed-stage pricing · subject to change as we scale</span>
          <span className="text-neutral-700">·</span>
          <Link href="/pricing" className="text-[#CDFF00] hover:underline">
            Full pricing details →
          </Link>
        </div>
      </div>
    </section>
  )
}
