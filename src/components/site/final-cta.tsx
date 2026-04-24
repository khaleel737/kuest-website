import Link from 'next/link'
import { Rocket, ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 kuest-grad pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDFF00]/10 border border-[#CDFF00]/20 mb-6">
          <Rocket className="h-5 w-5 text-[#CDFF00]" />
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-balance">
          Get your prediction market live in{' '}
          <span className="text-[#CDFF00]">15 minutes</span>.
        </h2>
        <p className="mt-5 text-neutral-400 max-w-xl mx-auto text-balance">
          Free to launch, usage-based at scale. No credit card. No rev share. Your domain,
          your brand, your audience — trading from day one.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/#start"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#CDFF00] px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-colors kuest-glow"
          >
            Start your market
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  )
}
