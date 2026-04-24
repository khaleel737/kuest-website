import Link from 'next/link'
import { Github, Twitter, MessageCircle } from 'lucide-react'
import { LogoMark } from './logo'

const COLUMNS: { label: string; items: { label: string; href: string }[] }[] = [
  {
    label: 'Protocol',
    items: [
      { label: 'Shared book', href: '/#protocol-inside' },
      { label: 'Audited contracts', href: '/#protocol-inside' },
      { label: 'Bot SDKs', href: '/docs/sdk' },
      { label: 'Affiliate rail', href: '/#protocol-inside' },
      { label: 'Pricing', href: '/#pricing' }
    ]
  },
  {
    label: 'Ecosystem',
    items: [
      { label: 'For creators', href: '/#ecosystem' },
      { label: 'For market makers', href: '/#ecosystem' },
      { label: 'For exchanges', href: '/#ecosystem' },
      { label: 'For LPs', href: '/#ecosystem' },
      { label: 'Community', href: '/community' }
    ]
  },
  {
    label: 'Developers',
    items: [
      { label: 'Docs', href: '/docs' },
      { label: 'Quickstart', href: '/docs/quickstart' },
      { label: 'API reference', href: '/docs/sdk' },
      { label: 'Blog', href: '/blog' },
      { label: 'GitHub', href: 'https://github.com/khaleel737/kuest-website' }
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Brand', href: '/brand' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Contact', href: 'mailto:hello@kuest.com' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 bg-neutral-950">
      {/* Masthead-style top rule */}
      <div className="mx-auto max-w-[1400px] px-5 lg:px-20">
        <div className="dotted-line h-[1px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 lg:px-20 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <LogoMark size={22} />
            <span className="font-display text-[22px] leading-none text-white">
              kuest
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
          </div>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            A protocol for prediction markets. Launch a branded site in fifteen
            minutes. Inherit shared liquidity. Pay creators on-chain.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink href="https://github.com/khaleel737/kuest-website" label="GitHub">
              <Github className="h-3.5 w-3.5" />
            </SocialLink>
            <SocialLink href="https://x.com/kuest" label="X / Twitter">
              <Twitter className="h-3.5 w-3.5" />
            </SocialLink>
            <SocialLink href="https://discord.gg/kuest" label="Discord">
              <MessageCircle className="h-3.5 w-3.5" />
            </SocialLink>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950/60 px-3 py-1.5 text-[11px] font-mono text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00] animate-pulse" />
            All systems operational
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.label} className="col-span-6 md:col-span-2">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-4">
              {col.label}
            </h4>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Colophon strip */}
      <div className="border-t border-neutral-900">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-20 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Kuest Labs</span>
            <span className="text-neutral-700">·</span>
            <span>Set in Instrument Serif &amp; Inter</span>
          </div>
          <div className="flex items-center gap-3">
            <span>OpenZeppelin audited</span>
            <span className="text-neutral-700">·</span>
            <span>v1.2.4</span>
            <span className="text-neutral-700">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
              Made for market makers, creators, and venues
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-neutral-800 text-neutral-400 hover:text-[#CDFF00] hover:border-[#CDFF00]/30 transition-colors"
    >
      {children}
    </a>
  )
}
