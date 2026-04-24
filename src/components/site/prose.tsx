import { cn } from '@/lib/utils'

/**
 * A minimal `prose` container styled for Kuest's dark theme.
 * Not using the @tailwindcss/typography plugin so we don't add deps.
 */
export function Prose({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl text-neutral-300',
        // Headings
        '[&_h1]:text-white [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-4xl sm:[&_h1]:text-5xl [&_h1]:mb-4',
        '[&_h2]:text-white [&_h2]:font-semibold [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight',
        '[&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3',
        '[&_h4]:text-white [&_h4]:font-semibold [&_h4]:text-base [&_h4]:mt-6 [&_h4]:mb-2',
        // Body
        '[&_p]:leading-7 [&_p]:my-4',
        '[&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-[#CDFF00]',
        '[&_ol]:my-4 [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:marker:text-neutral-500',
        '[&_li]:leading-7',
        // Links
        '[&_a]:text-[#CDFF00] hover:[&_a]:underline [&_a]:underline-offset-4',
        // Inline code
        '[&_code]:rounded [&_code]:bg-white/10 [&_code]:text-[#CDFF00] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.88em] [&_code]:font-mono',
        // Pre blocks
        '[&_pre]:my-5 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-neutral-950 [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre]:text-sm',
        '[&_pre_code]:bg-transparent [&_pre_code]:text-neutral-200 [&_pre_code]:p-0',
        // Blockquote
        '[&_blockquote]:border-l-2 [&_blockquote]:border-[#CDFF00]/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-neutral-400',
        // Tables
        '[&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_table]:my-5',
        '[&_th]:border-b [&_th]:border-white/10 [&_th]:text-left [&_th]:p-2 [&_th]:font-semibold [&_th]:text-white',
        '[&_td]:border-b [&_td]:border-white/5 [&_td]:p-2',
        // Horizontal rule
        '[&_hr]:my-10 [&_hr]:border-white/10',
        className
      )}
    >
      {children}
    </div>
  )
}
