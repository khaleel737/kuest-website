import Link from 'next/link'
import { Github, Twitter, MessageCircle, ShieldCheck } from 'lucide-react'
import { Logo } from './logo'

const COLUMNS: { label: string; items: { label: string; href: string }[] }[] = [
  {
    label: 'Product',
    items: [
      { label: 'Markets', href: '/#product' },
      { label: 'Shared liquidity', href: '/#liquidity' },
      { label: 'Affiliates', href: '/#affiliates' },
      { label: 'Bot SDKs', href: '/#bots' },
      { label: 'White label', href: '/#whitelabel' },
      { label: 'Pricing', href: '/pricing' }
    ]
  },
  {
    label: 'Developers',
    items: [
      { label: 'Docs', href: '/docs' },
      { label: 'API reference', href: '/docs/api' },
      { label: 'Blog', href: '/blog' },
      { label: 'Changelog', href: '/changelog' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Status', href: '/status' }
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Brand', href: '/brand' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'The Protocol', href: '/protocol' },
      { label: 'Contact', href: 'mailto:hello@kuest.com' }
    ]
  },
  {
    label: 'Legal',
    items: [
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Security', href: '/security' },
      { label: 'Risk disclosure', href: '/legal/risk' }
    ]
  }
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      {/* Trust bar */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <TrustBadge>OpenZeppelin audited</TrustBadge>
          <TrustBadge>Polymarket-derived contracts</TrustBadge>
          <TrustBadge>SOC 2 Type II ready</TrustBadge>
          <TrustBadge>On-chain settlement</TrustBadge>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="col-span-2 space-y-4">
          <Logo />
          <p className="text-sm text-neutral-400 max-w-xs">
            The no-code platform to launch your own branded prediction market in 15 minutes.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink href="https://github.com/kuest" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://x.com/kuest" label="X / Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://discord.gg/kuest" label="Discord">
              <MessageCircle className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.label} className="col-span-1">
            <h4 className="text-sm font-semibold text-white mb-3">{col.label}</h4>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-[#CDFF00] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Kuest Labs. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#CDFF00]" />
            Built on audited, open-source smart contracts.
          </p>
        </div>
      </div>
    </footer>
  )
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
      {children}
    </span>
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
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-neutral-300 hover:text-[#CDFF00] hover:border-[#CDFF00]/30 transition-colors"
    >
      {children}
    </a>
  )
}
