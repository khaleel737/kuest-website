'use client'

import * as React from 'react'
import Link from 'next/link'
import { Github, Menu, X } from 'lucide-react'
import { LogoMark } from './logo'
import { LanguageSelector } from './language-selector'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Protocol', href: '/#protocol' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' }
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
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-900'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Kuest home" className="flex items-center gap-2 group">
            <LogoMark size={22} />
            <span className="font-display text-[20px] leading-none text-white group-hover:text-[#CDFF00] transition-colors">
              kuest
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[13px] text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#CDFF00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1.5">
          <LanguageSelector />
          <a
            href="https://github.com/khaleel737/kuest-website"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            href="/#start"
            className="group ml-1 inline-flex items-center gap-2 rounded-sm bg-[#CDFF00] px-3.5 py-2 text-[12.5px] font-semibold text-neutral-950 hover:bg-[#D4FF4A] press transition-colors whitespace-nowrap"
          >
            <span>Start building</span>
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 transition-transform group-hover:translate-x-0.5" />
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
        <div className="lg:hidden border-t border-neutral-900 bg-neutral-950 fade-slide-up">
          <nav className="mx-auto max-w-7xl px-5 py-4 space-y-0.5">
            {NAV.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-3 border-b border-neutral-900 last:border-0 text-neutral-200 hover:text-[#CDFF00] transition-colors"
              >
                <span className="font-display text-xl">{l.label}</span>
                <span className="text-[10px] font-mono text-neutral-600 tabular">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
