'use client'

import * as React from 'react'

type Testimonial = {
  quote: string
  name: string
  handle: string
  role: string
  initials: string
  color: string
}

const QUOTES: Testimonial[] = [
  {
    quote:
      "Went live in 11 minutes. My Discord was making 6-figure volume by week two. Kuest ate Polymarket's lunch for my niche.",
    name: 'Maya Chen',
    handle: '@mayatrades',
    role: 'Crypto creator · 182K followers',
    initials: 'MC',
    color: '#CDFF00'
  },
  {
    quote:
      'The affiliate system is wild — every trade from my referral link settles to my wallet in 3 seconds. No dashboards. No invoices.',
    name: 'Deion Pritchard',
    handle: '@sharpdeion',
    role: 'Sports analyst',
    initials: 'DP',
    color: '#22c55e'
  },
  {
    quote:
      'We built a bot in a weekend using the TypeScript SDK. The event stream is actually faster than our internal Polymarket feed.',
    name: 'Anders Holt',
    handle: '@andersh',
    role: 'Market maker, ex-Jane Street',
    initials: 'AH',
    color: '#f97316'
  },
  {
    quote:
      "Shared liquidity is the killer feature. Every market I launched had depth from minute one. That's the entire ballgame.",
    name: 'Priya Desai',
    handle: '@priya_d',
    role: 'Founder, predict.club',
    initials: 'PD',
    color: '#60a5fa'
  },
  {
    quote:
      "I don't know how they make this work for free. The white-label site looks like I hired a $400k design team.",
    name: 'Lucas Ferreira',
    handle: '@lucasfp',
    role: 'Content creator',
    initials: 'LF',
    color: '#a78bfa'
  },
  {
    quote:
      "OpenZeppelin-audited contracts matter when you're moving real size. We've routed $8M through Kuest already. Zero issues.",
    name: 'Hana Ito',
    handle: '@hana_ito',
    role: 'Prop trader',
    initials: 'HI',
    color: '#f472b6'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            Loved by creators
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            What people launching on Kuest are saying
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            From crypto influencers to professional traders, thousands are building their
            own markets.
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />
        <div className="flex gap-4 scroll-marquee">
          {[...QUOTES, ...QUOTES].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="shrink-0 w-[340px] sm:w-[400px] rounded-2xl border border-white/10 bg-neutral-950/60 p-6 hover:border-white/20 transition-colors">
      <blockquote className="text-neutral-200 text-[15px] leading-relaxed">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center font-semibold text-neutral-950"
          style={{ background: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{t.name}</div>
          <div className="text-xs text-neutral-500">
            {t.handle} · {t.role}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
