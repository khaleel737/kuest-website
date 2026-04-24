import { DocsSidebar } from '@/components/site/docs-sidebar'
import { DocsMobileNav } from '@/components/site/docs-mobile-nav'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <DocsSidebar />
        <div className="flex-1 py-6 lg:py-12 lg:border-l lg:border-white/10 lg:pl-12 min-w-0">
          <DocsMobileNav />
          {children}
        </div>
      </div>
    </div>
  )
}
