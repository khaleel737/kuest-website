import Link from 'next/link'
import { Prose } from '@/components/site/prose'
import { Rocket, BookOpen, Zap, Shield, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Docs · Kuest',
  description: 'Learn how to launch a prediction market with Kuest.'
}

const CARDS = [
  {
    href: '/docs/quickstart',
    icon: Rocket,
    title: 'Quickstart',
    body: 'Launch your first market in under 15 minutes.'
  },
  {
    href: '/docs/concepts',
    icon: BookOpen,
    title: 'Core concepts',
    body: 'Markets, resolvers, liquidity, settlement — all in one primer.'
  },
  {
    href: '/docs/sdk/typescript',
    icon: Zap,
    title: 'TypeScript SDK',
    body: 'Type-safe client for browsers, Node, and edge runtimes.'
  },
  {
    href: '/docs/contracts/audits',
    icon: Shield,
    title: 'Contract audits',
    body: 'OpenZeppelin audit reports and threat-model notes.'
  }
]

export default function DocsHome() {
  return (
    <Prose>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
        Documentation
      </p>
      <h1>Welcome to the Kuest docs</h1>
      <p className="text-lg text-neutral-400">
        Kuest is the no-code platform for launching branded prediction markets. These
        docs walk you from zero to a live market trading on-chain — in one afternoon.
      </p>

      <div className="not-prose mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CARDS.map((c) => {
          const Icon = c.icon
          return (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-xl border border-white/10 bg-neutral-950/50 p-5 hover:border-[#CDFF00]/30 hover:bg-neutral-950 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#CDFF00]/10 border border-[#CDFF00]/20 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#CDFF00]" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{c.title}</div>
                  <p className="mt-0.5 text-sm text-neutral-400 leading-relaxed">
                    {c.body}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-[#CDFF00] transition-colors shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>

      <h2>What is Kuest?</h2>
      <p>
        Kuest is a platform that lets anyone launch their own branded prediction market
        site in under 15 minutes. Think of it as <em>Polymarket, white-labeled</em> — you
        get your own domain, your own brand, and shared liquidity from day one.
      </p>
      <p>
        You pick the niche, write the questions, and we handle every piece of
        infrastructure: settlement, liquidity, user onboarding, affiliate tracking, and a
        fully themeable UI in six languages.
      </p>

      <h3>Who is it for?</h3>
      <ul>
        <li>
          <strong>Creators</strong> who want to monetize their audience without ads.
        </li>
        <li>
          <strong>Media companies</strong> launching vertical-specific markets.
        </li>
        <li>
          <strong>Traders</strong> writing bots against deep, mirrored liquidity.
        </li>
      </ul>

      <h2>Install the CLI</h2>
      <p>Scaffold a new branded market with one command:</p>
      <pre>
        <code>{`# Create a new market site
npx create-kuest my-market

cd my-market
pnpm dev`}</code>
      </pre>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/quickstart">Follow the 15-minute quickstart</Link>
        </li>
        <li>
          <Link href="/docs/concepts">Learn the core concepts</Link>
        </li>
        <li>
          <Link href="/docs/sdk/typescript">Explore the TypeScript SDK</Link>
        </li>
      </ul>
    </Prose>
  )
}
