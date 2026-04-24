'use client'

import { useEffect } from 'react'

// Opt-in smooth wheel scroll using Lenis. Lazy-loads after hydration + respects
// reduced motion. If Lenis ever misbehaves, this component degrades cleanly.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let destroyed = false
    let lenis: import('lenis').default | null = null

    const start = async () => {
      if (destroyed) return
      try {
        const { default: Lenis } = await import('lenis')
        if (destroyed) return
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          lerp: 0.1
        })
        const tick = (t: number) => {
          if (destroyed || !lenis) return
          lenis.raf(t)
          raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      } catch {
        // Lenis failed — fall back to native scroll silently
      }
    }

    const t = window.setTimeout(start, 300)

    return () => {
      destroyed = true
      window.clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
