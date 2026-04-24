'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export type DocLink = { label: string; href: string }
export type DocGroup = { label: string; links: DocLink[] }

export const DOCS_NAV: DocGroup[] = [
  {
    label: 'Introduction',
    links: [
      { label: 'Overview', href: '/docs' },
      { label: 'Quickstart', href: '/docs/quickstart' },
      { label: 'Concepts', href: '/docs/concepts' },
      { label: 'Pricing model', href: '/docs/pricing' }
    ]
  },
  {
    label: 'Markets',
    links: [
      { label: 'Creating markets', href: '/docs/markets/create' },
      { label: 'Resolution', href: '/docs/markets/resolution' },
      { label: 'Shared liquidity', href: '/docs/markets/liquidity' },
      { label: 'Categories', href: '/docs/markets/categories' }
    ]
  },
  {
    label: 'SDK',
    links: [
      { label: 'TypeScript', href: '/docs/sdk/typescript' },
      { label: 'Python', href: '/docs/sdk/python' },
      { label: 'Event streams', href: '/docs/sdk/events' },
      { label: 'Backtesting', href: '/docs/sdk/backtest' }
    ]
  },
  {
    label: 'Smart contracts',
    links: [
      { label: 'Architecture', href: '/docs/contracts/architecture' },
      { label: 'Settlement', href: '/docs/contracts/settlement' },
      { label: 'Audits', href: '/docs/contracts/audits' }
    ]
  },
  {
    label: 'API reference',
    links: [
      { label: 'Authentication', href: '/docs/api/auth' },
      { label: 'Markets', href: '/docs/api/markets' },
      { label: 'Orders', href: '/docs/api/orders' },
      { label: 'Webhooks', href: '/docs/api/webhooks' }
    ]
  }
]

export function DocsSidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden lg:block lg:w-64 shrink-0 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto py-8">
      <nav className="space-y-7 text-sm">
        {DOCS_NAV.map((g) => (
          <div key={g.label}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2 px-2">
              {g.label}
            </h4>
            <ul className="space-y-0.5">
              {g.links.map((l) => {
                const active = pathname === l.href
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        'block rounded-md px-2 py-1.5 transition-colors',
                        active
                          ? 'bg-[#CDFF00]/10 text-[#CDFF00]'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
