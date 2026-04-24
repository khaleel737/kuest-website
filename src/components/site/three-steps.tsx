import { Wand2, Rocket, Wallet } from 'lucide-react'

const STEPS = [
  {
    n: '01',
    icon: Wand2,
    title: 'Pick your niche & write your questions',
    body: 'Crypto, sports, politics, AI — whatever your audience cares about. Our no-code builder turns questions into on-chain markets in minutes.'
  },
  {
    n: '02',
    icon: Rocket,
    title: 'Go live — we handle the infrastructure',
    body: 'Custom domain, brand, translation to 6+ languages. Markets mirror Polymarket liquidity from the first block. No servers, no nodes, no headaches.'
  },
  {
    n: '03',
    icon: Wallet,
    title: 'Every trade pays you directly',
    body: '0.5–3% fee per trade, settled on-chain to your wallet. No revenue share. No invoices. Built-in leaderboard, PnL, and affiliate system.'
  }
]

export function ThreeSteps() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            No code. No server. No technical headaches.
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            Three steps from zero to live market. The full stack is ready to go.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.n}
                className="relative rounded-2xl border border-white/10 bg-neutral-950/50 p-6 hover:border-[#CDFF00]/30 transition-colors group"
              >
                <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-950 px-3 py-1 text-xs font-mono text-neutral-400">
                  {s.n}
                </div>
                <div className="h-11 w-11 rounded-lg bg-[#CDFF00]/10 border border-[#CDFF00]/20 flex items-center justify-center mb-4 group-hover:bg-[#CDFF00]/15 transition-colors">
                  <Icon className="h-5 w-5 text-[#CDFF00]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
