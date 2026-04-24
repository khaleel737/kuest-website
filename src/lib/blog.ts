export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  body: string[] // paragraphs (plain text or inline markdown-ish)
  date: string
  author: { name: string; role: string; initials: string; color: string }
  category: 'Product' | 'Engineering' | 'Markets' | 'Company'
  readingTime: number
}

export const POSTS: BlogPost[] = [
  {
    slug: 'kuest-raises-seed',
    title: 'Kuest raises $12M to launch the prediction-market layer of the internet',
    excerpt:
      'Led by Paradigm with participation from Dragonfly, Coinbase Ventures, and angels from Polymarket and Kalshi — we\'re scaling the team to meet an exploding market.',
    date: '2026-04-22',
    author: {
      name: 'Lina Okafor',
      role: 'CEO & co-founder',
      initials: 'LO',
      color: '#CDFF00'
    },
    category: 'Company',
    readingTime: 5,
    body: [
      'Today we\'re announcing a $12M seed round led by Paradigm with participation from Dragonfly, Coinbase Ventures, and a syndicate of founders from Polymarket, Kalshi, and Gauntlet. The round closed four weeks ago.',
      'Prediction markets did $63.5B in volume in 2025. Two platforms captured ~98% of that. Every vertical creator — sports commentators, crypto Twitter, political podcasters, AI researchers — is sitting on an audience that already bets in Discord, group chats, and offline. Kuest is the infrastructure that lets them capture that behavior and earn on it.',
      'We\'re going to use the capital to (a) scale liquidity to 40+ verticals, (b) ship the Python SDK and an on-prem enterprise offering, and (c) grow the team from 8 to 24. We\'re hiring across engineering, design, and growth.'
    ]
  },
  {
    slug: 'shared-liquidity-architecture',
    title: 'How shared liquidity works under the hood',
    excerpt:
      'A deep dive into the arbitrage layer that lets every Kuest-derived market launch with Polymarket-level depth from the first trade.',
    date: '2026-04-14',
    author: {
      name: 'Aria Fuentes',
      role: 'Head of engineering',
      initials: 'AF',
      color: '#60a5fa'
    },
    category: 'Engineering',
    readingTime: 9,
    body: [
      'The cold-start problem is what kills every prediction market platform. You can launch with a slick UI, great markets, and clean onboarding — but if the first user loads the page and sees a spread of 20 cents, they bounce. Forever.',
      'Our solution is an arbitrage layer that sits between each Kuest-derived market and its parent Polymarket market. The layer continuously quotes both sides using a constant-function market maker, rebalanced every 750ms against the parent book.',
      'The result: markets launch with the same depth as the parent, but the orderflow is captured by the derived site. Creators earn the trading fee; arbitrageurs earn the spread; end users see tight, liquid markets from the first trade.'
    ]
  },
  {
    slug: 'state-of-prediction-markets-q1',
    title: 'State of prediction markets: Q1 2026',
    excerpt:
      'Volume, concentration, category mix, and the long-tail opportunity. Here\'s what the numbers look like in the first full quarter of the post-election era.',
    date: '2026-04-08',
    author: {
      name: 'Marcus Webb',
      role: 'Head of markets',
      initials: 'MW',
      color: '#f97316'
    },
    category: 'Markets',
    readingTime: 7,
    body: [
      'Q1 2026 was the first full post-election quarter since prediction markets went mainstream. Total volume across the top 10 venues hit $18.2B, up 42% year over year.',
      'Crypto and macro remain the dominant categories, but the real story is the long tail: sports sub-verticals, AI benchmarks, and culture markets each grew 3x+ — and represent the categories where Kuest creators are earning the most.',
      'We\'re releasing a full quarterly dashboard next week. Subscribe to the changelog to get notified.'
    ]
  },
  {
    slug: 'bot-sdk-ga',
    title: 'The Bot SDK is now generally available',
    excerpt:
      'Stream market events, provide liquidity, and backtest strategies with the same primitives our internal market makers use.',
    date: '2026-03-28',
    author: {
      name: 'Ravi Mehta',
      role: 'Engineer',
      initials: 'RM',
      color: '#22c55e'
    },
    category: 'Product',
    readingTime: 4,
    body: [
      'Our Bot SDK is no longer in private preview. Starting today, any Kuest account can generate API credentials and run trading bots against any market on the network.',
      'The SDK ships a TypeScript client, a Python client, a backtesting harness with historical replay, and per-creator rate limits that scale with your volume. Read the docs to get started in 5 minutes.'
    ]
  },
  {
    slug: 'security-audit-openzeppelin',
    title: 'Second OpenZeppelin audit: clean pass',
    excerpt:
      'The full report is public. Zero critical or high-severity findings. Here\'s what we changed, and what the audit covered.',
    date: '2026-03-12',
    author: {
      name: 'Jun Park',
      role: 'Security lead',
      initials: 'JP',
      color: '#a78bfa'
    },
    category: 'Engineering',
    readingTime: 6,
    body: [
      'OpenZeppelin has completed their second audit of the Kuest settlement contracts. The report is public and linked at the bottom of this post.',
      'Summary: zero critical, zero high, two medium (both informational, fixed before publication), four low. The mediums were around gas-optimization patterns that don\'t affect correctness. All findings are resolved in the v1.3.0 release.',
      'We will continue to schedule audits for every major release. Our commitment: no contract change ships to production without an independent review.'
    ]
  }
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
