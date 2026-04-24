import { Prose } from '@/components/site/prose'

export const metadata = { title: 'TypeScript SDK · Kuest docs' }

export default function SdkTs() {
  return (
    <Prose>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
        SDK · TypeScript
      </p>
      <h1>TypeScript SDK</h1>
      <p className="text-lg text-neutral-400">
        Type-safe client for browsers, Node, and edge runtimes. Works with React, Next.js,
        Remix, SvelteKit, and plain Node.
      </p>

      <h2>Installation</h2>
      <pre>
        <code>{`pnpm add @kuest/sdk
# or
npm install @kuest/sdk`}</code>
      </pre>

      <h2>Create a client</h2>
      <pre>
        <code>{`import { Kuest } from '@kuest/sdk'

const client = new Kuest({
  apiKey: process.env.KUEST_KEY!,
  // optional: pin to a specific market site
  siteId: 'sharpsports'
})`}</code>
      </pre>

      <h2>Query markets</h2>
      <pre>
        <code>{`const markets = await client.markets.list({
  category: 'sports',
  status: 'open',
  limit: 20
})

for (const m of markets) {
  console.log(m.question, m.yesPrice, m.volumeUsd)
}`}</code>
      </pre>

      <h2>Stream events</h2>
      <pre>
        <code>{`for await (const evt of client.markets.stream()) {
  // evt: { id, question, yes, no, spread, timestamp }
  if (evt.spread > 0.04) {
    // provide liquidity
    await client.orders.limit({
      marketId: evt.id,
      side: 'yes',
      price: evt.bid + 0.01,
      size: 100
    })
  }
}`}</code>
      </pre>

      <h2>Place orders</h2>
      <pre>
        <code>{`// market order
await client.orders.market({
  marketId: 'btc-150k',
  side: 'yes',
  size: 500
})

// limit order
await client.orders.limit({
  marketId: 'btc-150k',
  side: 'yes',
  price: 0.63,
  size: 500,
  postOnly: true
})`}</code>
      </pre>

      <h2>Error handling</h2>
      <p>
        Every SDK method returns a typed discriminated union — <code>ok</code> or{' '}
        <code>error</code>. No try/catch needed unless you prefer it.
      </p>
      <pre>
        <code>{`const res = await client.orders.limit({ ... })
if (!res.ok) {
  console.error(res.error.code, res.error.message)
  return
}
console.log(res.data.orderId)`}</code>
      </pre>
    </Prose>
  )
}
