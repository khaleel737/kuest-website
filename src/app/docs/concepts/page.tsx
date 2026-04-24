import { Prose } from '@/components/site/prose'

export const metadata = { title: 'Core concepts · Kuest docs' }

export default function Concepts() {
  return (
    <Prose>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
        Concepts
      </p>
      <h1>Core concepts</h1>
      <p className="text-lg text-neutral-400">
        A short primer on the primitives that make Kuest work.
      </p>

      <h2>Markets</h2>
      <p>
        A <strong>market</strong> is a yes/no question with a defined close date and a
        resolution source. Each market has two outcome tokens — <code>YES</code> and{' '}
        <code>NO</code> — that trade between $0.00 and $1.00. The final price reflects
        the crowd's implied probability.
      </p>

      <h2>Shared liquidity</h2>
      <p>
        Every Kuest-derived market mirrors its orderbook against a parent Polymarket
        market. Orders placed on your site route through an arbitrage layer that keeps
        prices in sync. For you this means <em>no empty books</em> on day one.
      </p>

      <h2>Resolvers</h2>
      <p>
        A <strong>resolver</strong> is the oracle that determines the outcome. Kuest
        supports:
      </p>
      <ul>
        <li>
          <strong>UMA optimistic oracle</strong> for news-style markets
        </li>
        <li>
          <strong>Chainlink price feeds</strong> for price-threshold markets
        </li>
        <li>
          <strong>Manual resolution</strong> with a 48-hour dispute window
        </li>
      </ul>

      <h2>Settlement</h2>
      <p>
        All settlement happens on-chain on Polygon for low fees and 3-second finality.
        Trading fees settle directly to your wallet at each trade — there's no off-chain
        escrow.
      </p>

      <h2>Affiliates</h2>
      <p>
        Every user gets a unique referral code baked into the URL. Trades placed under a
        referral code split the trading fee between the creator and the referrer — all
        settled on-chain in the same transaction.
      </p>
    </Prose>
  )
}
