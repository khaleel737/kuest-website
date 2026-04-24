import * as React from 'react'
import { cn } from '@/lib/utils'

export function LogoMark({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 518 414"
      width={size}
      height={(size * 414) / 518}
      className={cn('text-[#CDFF00]', className)}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M237.17 0h106.61c11.04 0 20 8.95 20 20v155.08c0 11.04 8.95 20 20 20H498c11.04 0 20 8.95 20 20V394c0 11.04-8.96 20-20 20H401.84c-46.74 0-84.64-37.9-84.64-84.64v-64.64c0-11.04-8.95-20-20-20h-12.9c-6.07 0-11.81 2.76-15.6 7.5L145.03 406.51c-3.8 4.73-9.54 7.5-15.61 7.5H17c-9.39 0-17-7.62-17-17V289.37c0-4.34 1.48-8.54 4.2-11.92L221.59 7.46C225.39 2.74 231.12 0 237.17 0z"
      />
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark size={22} />
      {showWordmark && (
        <span className="text-[17px] font-semibold tracking-tight text-white">
          kuest
        </span>
      )}
    </span>
  )
}
