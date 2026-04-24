import Link from 'next/link'
import { POSTS } from '@/lib/blog'
import { ArrowUpRight, Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog · Kuest',
  description:
    'Product updates, engineering deep-dives, and market analysis from the Kuest team.'
}

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export default function BlogIndex() {
  const [feature, ...rest] = POSTS
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
          Blog
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Dispatches from the prediction layer
        </h1>
        <p className="mt-4 text-neutral-400">
          Product updates, engineering write-ups, audit reports, and research from the
          Kuest team.
        </p>
      </div>

      {feature && (
        <Link
          href={`/blog/${feature.slug}`}
          className="mt-10 group block rounded-2xl border border-white/10 bg-neutral-950/50 p-6 sm:p-8 hover:border-[#CDFF00]/30 hover:bg-neutral-950 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#CDFF00]/20 via-neutral-900 to-neutral-950 border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute bottom-4 left-4 text-6xl font-bold text-white/90">
                  {feature.author.initials}
                </div>
                <div className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
                  Featured
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="inline-flex items-center rounded-full border border-[#CDFF00]/30 bg-[#CDFF00]/5 text-[#CDFF00] px-2 py-0.5 font-medium">
                  {feature.category}
                </span>
                <span>{fmtDate(feature.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {feature.readingTime} min
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance group-hover:text-[#CDFF00] transition-colors">
                {feature.title}
              </h2>
              <p className="mt-3 text-neutral-400 text-balance">{feature.excerpt}</p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center font-semibold text-neutral-950 text-sm"
                  style={{ background: feature.author.color }}
                >
                  {feature.author.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {feature.author.name}
                  </div>
                  <div className="text-xs text-neutral-500">{feature.author.role}</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-neutral-500 group-hover:text-[#CDFF00] transition-colors" />
              </div>
            </div>
          </div>
        </Link>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-xl border border-white/10 bg-neutral-950/50 p-5 hover:border-[#CDFF00]/30 hover:bg-neutral-950 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 text-neutral-300 px-2 py-0.5 font-medium">
                {p.category}
              </span>
              <span>{fmtDate(p.date)}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white leading-snug group-hover:text-[#CDFF00] transition-colors">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 line-clamp-3 flex-1">
              {p.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-2.5 text-xs text-neutral-500">
              <span
                className="h-6 w-6 rounded-full flex items-center justify-center font-semibold text-neutral-950 text-[10px]"
                style={{ background: p.author.color }}
              >
                {p.author.initials}
              </span>
              <span className="text-neutral-300">{p.author.name}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {p.readingTime} min
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
