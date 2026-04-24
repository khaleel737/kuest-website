'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Reliable scroll-in reveal using IntersectionObserver + CSS.
 * Content is always visible in HTML; IO just toggles a class that
 * runs a subtle fade/translate animation on first view.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
  once = true
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    // If browser doesn't support IO, just reveal
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true)
            if (once) io.disconnect()
          } else if (!once) {
            setRevealed(false)
          }
        }
      },
      // Fire earlier — 15% before element fully enters viewport
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={cn('reveal-container', revealed && 'is-revealed', className)}
      style={{ transitionDelay: `${delay}s`, animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
