'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Menu } from 'lucide-react'
import { DOCS_NAV } from './docs-sidebar'
import { cn } from '@/lib/utils'

export function DocsMobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const current =
    DOCS_NAV.flatMap((g) => g.links).find((l) => l.href === pathname)?.label ||
    'Documentation'

  return (
    <div className="lg:hidden border-b border-white/10 py-3 mb-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 transition-colors"
      >
        <span className="inline-flex items-center gap-2">
          <Menu className="h-4 w-4 text-neutral-400" />
          <span className="text-neutral-400">Docs menu:</span>
          <span className="font-medium">{current}</span>
        </span>
        <ChevronRight
          className={cn(
            'h-4 w-4 transition-transform',
            open && 'rotate-90 text-[#CDFF00]'
          )}
        />
      </button>
      {open && (
        <div className="mt-2 rounded-md border border-white/10 bg-neutral-950 p-3 space-y-4 max-h-[60vh] overflow-y-auto">
          {DOCS_NAV.map((g) => (
            <div key={g.label}>
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1.5 px-1">
                {g.label}
              </h4>
              <ul className="space-y-0.5">
                {g.links.map((l) => {
                  const active = pathname === l.href
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'block rounded-md px-2 py-1.5 text-sm transition-colors',
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
        </div>
      )}
    </div>
  )
}
