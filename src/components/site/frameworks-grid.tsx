import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// Minimal monochrome SVG logos — no dependency needed.
const FRAMEWORKS = [
  { name: 'Next.js', path: '/docs/quickstart/nextjs', svg: 'next' },
  { name: 'React', path: '/docs/quickstart/react', svg: 'react' },
  { name: 'Vue', path: '/docs/quickstart/vue', svg: 'vue' },
  { name: 'Svelte', path: '/docs/quickstart/svelte', svg: 'svelte' },
  { name: 'Remix', path: '/docs/quickstart/remix', svg: 'remix' },
  { name: 'Solid', path: '/docs/quickstart/solid', svg: 'solid' },
  { name: 'Python', path: '/docs/quickstart/python', svg: 'python' },
  { name: 'Rust', path: '/docs/quickstart/rust', svg: 'rust' },
  { name: 'TanStack', path: '/docs/quickstart/tanstack', svg: 'tanstack' }
] as const

export function FrameworksGrid() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            Integrations
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Kuest{' '}
            <span className="text-[#CDFF00]">❤</span> loves your favorite frameworks
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            Drop-in SDKs for every stack. Embed markets, stream prices, and settle trades
            from anywhere.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {FRAMEWORKS.map((f) => (
            <Link
              key={f.name}
              href={f.path}
              className="group rounded-xl border border-white/10 bg-neutral-950/50 p-5 hover:border-[#CDFF00]/30 hover:bg-neutral-950 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#CDFF00] group-hover:border-[#CDFF00]/30 transition-colors">
                    <FrameworkIcon name={f.svg} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{f.name}</div>
                    <div className="text-xs text-neutral-500">Quickstart guide</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-500 group-hover:text-[#CDFF00] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function FrameworkIcon({ name }: { name: string }) {
  switch (name) {
    case 'next':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.89-.8 6.828-2.15L9.5 8H8v8.5h1.5V10l7.8 12.25C20.96 20.13 24 16.43 24 12c0-6.627-5.373-12-12-12zm3.5 8h1.5v7.5l-1.5-2.5V8z" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'vue':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M2 3h4l6 10 6-10h4L12 21 2 3zm5 0h3l2 3.5L14 3h3l-5 8L7 3z" />
        </svg>
      )
    case 'svelte':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M20 8.5c-1.2-1.7-3.2-2.7-5.3-2.5-1 .1-1.9.4-2.7.9L6 11c-1.2.7-2 1.9-2.2 3.3-.2 1.2.1 2.4.7 3.4-.5.7-.8 1.6-.7 2.5.1 1.5 1 2.8 2.3 3.5 1.2.6 2.6.7 3.9.1.6.6 1.4 1 2.3 1.1 2.1.2 4.1-.8 5.3-2.5l-.9-.5c-.9 1.3-2.5 2-4.2 1.8-.6-.1-1.2-.3-1.7-.7L15.2 19c1.2-.7 2-1.9 2.2-3.3.2-1.2-.1-2.4-.7-3.4.5-.7.7-1.6.6-2.5-.1-1.1-.7-2-1.5-2.7l4.2-.6z" />
        </svg>
      )
    case 'remix':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M4 4h10c2.5 0 4 1.3 4 3.5 0 1.7-1 2.9-2.6 3.3 1.3.4 2 1.3 2.1 3l.1 2.2c0 .6.1 1.2.3 2H13c-.1-.5-.2-1-.2-1.6l-.1-1.8c-.1-1.2-.7-1.7-2.2-1.7H9V18H4V4zm5 5h4c1 0 1.6-.5 1.6-1.4 0-.9-.6-1.4-1.6-1.4H9v2.8zM19 20h-5l1.5-2.5L19 20z" />
        </svg>
      )
    case 'solid':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 5c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2c-3 0-5 1-5 4v2h5v1H5c-2 0-3 1-3 4s1 4 3 4h2v-2c0-2 1-3 3-3h5c2 0 3-1 3-3V6c0-3-2-4-6-4zm-2 3c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm7 4v2c0 2-1 3-3 3h-5c-2 0-3 1-3 3v4c0 3 2 4 6 4s5-1 5-4v-2h-5v-1h7c2 0 3-1 3-4s-1-4-3-4h-2zm-3 10c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
        </svg>
      )
    case 'rust':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2l2 3 3-1 1 3 3 1-1 3 1 3-3 1-1 3-3-1-2 3-2-3-3 1-1-3-3-1 1-3-1-3 3-1 1-3 3 1 2-3zm0 4a6 6 0 100 12 6 6 0 000-12zm-1 3h3c1 0 2 .5 2 2s-1 2-2 2h-1l2 3h-2l-2-3v3H9V9h2zm0 2v1h2c.3 0 .5-.2.5-.5S13.3 11 13 11h-2z" />
        </svg>
      )
    case 'tanstack':
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5v7.5l-7-3.5v-7.5zm16 0v7.5l-7 3.5V13l7-3.5z" />
        </svg>
      )
    default:
      return <span className="text-sm">•</span>
  }
}
