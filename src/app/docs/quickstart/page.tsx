import Link from 'next/link'
import { Prose } from '@/components/site/prose'

export const metadata = { title: 'Quickstart · Kuest docs' }

export default function Quickstart() {
  return (
    <Prose>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
        Quickstart
      </p>
      <h1>Launch your first market in 15 minutes</h1>
      <p className="text-lg text-neutral-400">
        By the end of this guide you'll have a branded, publicly reachable prediction
        market trading real liquidity.
      </p>

      <h2>1. Create your site</h2>
      <pre>
        <code>{`npx create-kuest my-market
cd my-market`}</code>
      </pre>
      <p>
        The generator scaffolds a Next.js site, pre-wires the Kuest SDK, and registers a
        subdomain like <code>my-market.kuest.app</code> that you can point a custom domain
        at later.
      </p>

      <h2>2. Configure your theme</h2>
      <p>
        Edit <code>kuest.config.ts</code> to customize your brand:
      </p>
      <pre>
        <code>{`import { defineConfig } from '@kuest/config'

export default defineConfig({
  name: 'SharpSports',
  theme: {
    primary: '#22c55e',
    logo: '/logo.svg'
  },
  locales: ['en', 'es', 'pt'],
  categories: ['sports', 'macro']
})`}</code>
      </pre>

      <h2>3. Write your first question</h2>
      <p>
        Open the dashboard at <code>http://localhost:3000/admin</code> and click{' '}
        <strong>New market</strong>. Each market needs:
      </p>
      <ul>
        <li>
          A <strong>question</strong> phrased as a yes/no proposition
        </li>
        <li>
          A <strong>resolution source</strong> (oracle, API feed, or manual)
        </li>
        <li>
          A <strong>close date</strong>
        </li>
      </ul>

      <h2>4. Go live</h2>
      <pre>
        <code>{`pnpm kuest deploy`}</code>
      </pre>
      <p>
        Your site is now live at your subdomain with:
      </p>
      <ul>
        <li>Shared Polymarket-derived liquidity on every market</li>
        <li>On-chain affiliate tracking</li>
        <li>Leaderboard + PnL dashboards</li>
        <li>Translations into your configured locales</li>
      </ul>

      <h2>5. Earn on every trade</h2>
      <p>
        Set a trading fee between 0.5% and 3% in the dashboard. Fees are settled
        instantly to your wallet each time a market trades — no invoicing, no rev share,
        no waiting periods.
      </p>

      <p>
        Ready for more?{' '}
        <Link href="/docs/sdk/typescript">
          Write a trading bot with the TypeScript SDK
        </Link>
        .
      </p>
    </Prose>
  )
}
