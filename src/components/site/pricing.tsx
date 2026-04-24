'use client'

import * as React from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from './reveal'

type Tier = {
  n: string
  name: string
  price: string
  priceSuffix: string
  italic: string
  body: string
  features: string[]
  cta: string
  feature?: boolean
}

const TIERS: Tier[] = [
  {
    n: '01',
    name: 'Creator',
    price: '$0',
    priceSuffix: 'launch',
    italic: 'For the curious.',
    body: 'Spin up a branded market, keep your cut, grow at your own pace.',
    features: [
      'Own subdomain · brand.kuest.com',
      '50 starter markets',
      '0.5% creator take',
      'Affiliate rail (on-chain)',
      'Community Discord'
    ],
    cta: 'Start free'
  },
  {
    n: '02',
    name: 'Studio',
    price: '$249',
    priceSuffix: '/mo',
    italic: 'For the serious.',
    body:
      'Custom domain, white-label branding, advanced analytics, and priority book access.',
    features: [
      'Custom domain · any TLD',
      'Full white-label',
      '0.5–3% creator take',
      'Priority book routing',
      'Analytics + CSV export',
      'Email + chat support'
    ],
    cta: 'Go Studio',
    feature: true
  },
  {
    n: '03',
    name: 'Protocol',
    price: 'Custom',
    priceSuffix: '',
    italic: 'For the venues.',
    body:
      "Exchange-grade integration. Your KYC, your liquidity, your terms — on Kuest rails.",
    features: [
      'Dedicated infrastructure',
      'Negotiated fee schedule',
      'Custom KYC integration',
      'Direct book connectivity',
      'SLA · 99.99%',
      'Solutions engineer'
    ],
    cta: 'Talk to us'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 border-t border-neutral-900">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-20">
        <header className="grid grid-cols-12 gap-6 mb-10 md:mb-12 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="section-mark mb-3">06 — Pricing</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h2" className="font-display text-[36px] md:text-[48px] lg:text-[58px] leading-[1] tracking-[-0.02em] text-white text-balance">
              Pricing, <span className="italic text-[#CDFF00]">with intent.</span>
            </Reveal>
            <Reveal delay={0.12} as="p" className="mt-4 max-w-xl text-[14.5px] md:text-[15.5px] text-neutral-400 leading-relaxed">
              Free to launch. Pay as you scale. Negotiate when you&apos;re a venue.
              The take drops as your volume grows.
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {TIERS.map((t, i) => (
            <TierCard key={t.n} tier={t} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <p className="text-[10.5px] font-mono uppercase tracking-widest text-neutral-600">
            Seed-stage pricing · subject to change before mainnet
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function TierCard({ tier, delay }: { tier: Tier; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className={`col-span-12 md:col-span-4 relative rounded-md border p-5 md:p-6 ${
        tier.feature
          ? 'border-[#CDFF00]/40 bg-gradient-to-b from-[#CDFF00]/5 to-transparent'
          : 'paper-card'
      }`}
    >
      {tier.feature && (
        <div className="absolute -top-2.5 left-5 inline-flex items-center gap-1.5 rounded-full bg-[#CDFF00] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-neutral-950">
          <span className="h-1 w-1 rounded-full bg-neutral-950" />
          Most picked
        </div>
      )}

      <div className="flex items-baseline justify-between mb-4">
        <span className="eyebrow">{tier.n}</span>
        <span className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-500">
          {tier.name}
        </span>
      </div>

      <div className="mb-1.5 font-display italic text-base text-neutral-400">
        {tier.italic}
      </div>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-display text-[52px] md:text-[58px] leading-none text-white tabular">
          {tier.price}
        </span>
        <span className="text-[13px] font-mono text-neutral-500">
          {tier.priceSuffix}
        </span>
      </div>

      <p className="text-[13.5px] text-neutral-400 leading-relaxed mb-5">
        {tier.body}
      </p>

      <ul className="space-y-2 text-[13px] text-neutral-300 mb-6">
        {tier.features.map((f) => (
          <li key={f} className="flex items-baseline gap-2">
            <Check
              className={`h-3 w-3 flex-shrink-0 mt-0.5 ${
                tier.feature ? 'text-[#CDFF00]' : 'text-neutral-600'
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/#start"
        className={`group inline-flex items-center justify-between gap-2 w-full rounded-sm px-4 py-2.5 text-[12.5px] font-semibold press transition-colors ${
          tier.feature
            ? 'bg-[#CDFF00] text-neutral-950 hover:bg-[#D4FF4A]'
            : 'border border-neutral-800 text-white hover:border-neutral-700 hover:bg-neutral-950/60'
        }`}
      >
        {tier.cta}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </Reveal>
  )
}
