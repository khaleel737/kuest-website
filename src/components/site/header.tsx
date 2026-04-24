'use client'

import * as React from 'react'
import Link from 'next/link'
import { Github, Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from './logo'
import { LanguageSelector } from './language-selector'
import { cn } from '@/lib/utils'

type NavGroup = {
  label: string
  items: { label: string; href: string; description?: string }[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Product',
    items: [
      { label: 'Markets', href: '/#product', description: 'Launch any prediction market in 15 minutes.' },
      { label: 'Shared liquidity', href: '/#liquidity', description: 'Inherit Polymarket-level depth from day one.' },
      { label: 'Affiliates', href: '/#affiliates', description: 'On-chain revenue share with zero setup.' },
      { label: 'Bot SDKs', href: '/#bots', description: 'Automate market making with TS + Python SDKs.' },
      { label: 'White label', href: '/#whitelabel', description: 'Your domain, your brand, any language.' }
    ]
  },
  {
    label: 'Compare',
    items: [
      { label: 'vs. Polymarket', href: '/compare/polymarket' },
      { label: 'vs. Kalshi', href: '/compare/kalshi' },
      { label: 'vs. Build it yourself', href: '/compare/diy' }
    ]
  },
  {
    label: 'Developers',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API reference', href: '/docs/api' },
      { label: 'Bot SDK', href: '/docs/bots' },
      { label: 'Smart contracts', href: '/docs/contracts' },
      { label: 'Community', href: '/community' }
    ]
  }
]

const QUICK_LINKS = [
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Pricing', href: '/pricing' }
]

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all',
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Kuest home" className="flex items-center">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_GROUPS.map((g) => (
              <NavDropdown key={g.label} group={g} />
            ))}
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSelector />
          <a
            href="https://github.com/kuest"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-md text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            href="/login"
            className="hidden md:inline-flex rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/#start"
            className="ml-1 inline-flex items-center rounded-md bg-[#CDFF00] px-2.5 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-neutral-950 hover:bg-[#D4FF4A] transition-colors shadow-[0_0_0_1px_rgba(205,255,0,0.3)] whitespace-nowrap"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start building</span>
          </Link>
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-200 hover:bg-white/5"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {NAV_GROUPS.map((g) => (
              <details key={g.label} className="group border border-white/5 rounded-md">
                <summary className="flex items-center justify-between px-3 py-2 text-sm text-neutral-200 cursor-pointer">
                  {g.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-3 pb-2 space-y-1">
                  {g.items.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-2 py-1.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md border border-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = React.useState(false)
  const [timer, setTimer] = React.useState<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = () => {
    if (timer) clearTimeout(timer)
    setOpen(true)
  }
  const handleLeave = () => {
    const t = setTimeout(() => setOpen(false), 120)
    setTimer(t)
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        {group.label}
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-white/10 bg-neutral-950/95 backdrop-blur p-2 shadow-2xl">
          {group.items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="block rounded-lg px-3 py-2 hover:bg-white/5 transition-colors"
            >
              <div className="text-sm font-medium text-white">{i.label}</div>
              {i.description && (
                <div className="text-xs text-neutral-400 mt-0.5">{i.description}</div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
