import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { POSTS, getPost } from '@/lib/blog'
import { Prose } from '@/components/site/prose'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} · Kuest blog`,
    description: post.excerpt
  }
}

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) return notFound()

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-[#CDFF00] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
        <span className="inline-flex items-center rounded-full border border-[#CDFF00]/30 bg-[#CDFF00]/5 text-[#CDFF00] px-2 py-0.5 font-medium">
          {post.category}
        </span>
        <span>{fmtDate(post.date)}</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readingTime} min read
        </span>
      </div>

      <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white text-balance">
        {post.title}
      </h1>
      <p className="mt-4 text-lg text-neutral-400 text-balance">{post.excerpt}</p>

      <div className="mt-6 flex items-center gap-3 pb-8 border-b border-white/10">
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center font-semibold text-neutral-950"
          style={{ background: post.author.color }}
        >
          {post.author.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{post.author.name}</div>
          <div className="text-xs text-neutral-500">{post.author.role}</div>
        </div>
      </div>

      <article className="mt-8">
        <Prose>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Prose>
      </article>

      <hr className="my-12 border-white/10" />

      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
        Keep reading
      </h2>
      <ul className="mt-4 space-y-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/blog/${r.slug}`}
              className="group block rounded-xl border border-white/10 bg-neutral-950/50 p-4 hover:border-[#CDFF00]/30 hover:bg-neutral-950 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>{r.category}</span>
                <span>·</span>
                <span>{fmtDate(r.date)}</span>
              </div>
              <div className="mt-1.5 text-white font-medium group-hover:text-[#CDFF00] transition-colors">
                {r.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
