'use client'

import * as React from 'react'

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-48 overflow-hidden border-t border-neutral-900"
    >
      {/* Big serif watermark behind */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none select-none opacity-[0.06]">
        <div className="font-display italic text-[30vw] leading-none text-[#CDFF00] whitespace-nowrap">
          conviction
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-2">
            <div className="section-mark mb-6">02 — Thesis</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <blockquote className="font-display text-[40px] sm:text-[54px] md:text-[72px] lg:text-[96px] leading-[1.02] tracking-[-0.02em] text-white text-balance fade-slide-up">
              A market is just a <span className="accent-italic">conversation</span>
              <br />
              with <span className="text-neutral-500">consequence.</span>
            </blockquote>

            <div className="mt-16 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-5 md:col-start-3 fade-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="eyebrow mb-3">Signed — B.</div>
                <p className="font-display italic text-xl md:text-2xl leading-snug text-neutral-300">
                  Every belief is a price. Every price is a question asked of the
                  crowd. We don&apos;t want to own the question — we want to host the
                  conversation.
                </p>
              </div>

              <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8 fade-slide-up" style={{ animationDelay: '0.35s' }}>
                <div className="dotted-line h-[1px] mb-4" />
                <p className="text-sm text-neutral-400 leading-relaxed">
                  That&apos;s why Kuest is a protocol, not a destination. Creators
                  keep their brand. Market makers keep their edge. Exchanges keep
                  their audience. Only the rails are shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
