'use client'

import * as React from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LANGUAGES, useLang, type LangCode } from './lang-provider'
import { cn } from '@/lib/utils'

export function LanguageSelector({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-colors',
          className
        )}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-neutral-950 border-white/10">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLang(l.code as LangCode)}
            className="flex items-center justify-between cursor-pointer text-neutral-200 focus:text-white focus:bg-white/5"
          >
            <span className="flex items-center gap-2">
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </span>
            {lang === l.code && <Check className="h-3.5 w-3.5 text-[#CDFF00]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
