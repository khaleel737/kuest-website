'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Activity, TrendingUp, Users2, Globe2 } from 'lucide-react'

/**
 * "The network is alive" — an animated visual that shows markets flowing
 * into the shared liquidity pool, inspired by Convex's sync panel but
 * styled for Kuest's prediction market network.
 */

const NODES = [
  { x: 14, y: 20, label: 'cryptocalls.io', color: '#f97316' },
  { x: 82, y: 18, label: 'sportsedge.bet', color: '#22c55e' },
  { x: 20, y: 72, label: 'electionwatch', color: '#60a5fa' },
  { x: 78, y: 78, label: 'ai-arena', color: '#a78bfa' },
  { x: 50, y: 8, label: 'kuest.com', color: '#CDFF00' },
  { x: 12, y: 50, label: 'climatemkt', color: '#f472b6' },
  { x: 88, y: 50, label: 'oscarswap', color: '#fbbf24' }
]

const EVENTS = [
  { who: 'cryptocalls.io', what: 'Buy YES @ 0.64', sym: 'BTC-150K', size: '$1,200', up: true },
  { who: 'sportsedge.bet', what: 'Fill NO @ 0.33', sym: 'NBA-MIN', size: '$850', up: false },
  { who: 'kuest.com', what: 'LP deposit', sym: 'FED-25BP', size: '$42k', up: true },
  { who: 'ai-arena', what: 'New market', sym: 'GPT-EVAL', size: '$0', up: true },
  { who: 'oscarswap', what: 'Resolve YES', sym: 'A24-OSCAR', size: '$18k', up: true },
  { who: 'electionwatch', what: 'Buy NO @ 0.41', sym: 'TURN-75', size: '$320', up: false },
  { who: 'climatemkt', what: 'Fill YES @ 0.29', sym: 'HURRICANE', size: '$140', up: true }
]

export function LiveNetwork() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-72 w-72 bg-[#CDFF00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CDFF00]">
            The network
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
            Every site shares the same liquidity pool.
          </h2>
          <p className="mt-4 text-neutral-400 text-balance">
            A trade on one site deepens the book on every other. The more sites launch,
            the better the quotes get — for everyone.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Network visualization */}
          <div className="lg:col-span-3 relative rounded-2xl border border-white/10 bg-neutral-950/60 overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
            <div className="absolute inset-0 grid-bg opacity-60 mask-fade-y" />
            <NetworkCanvas />
            <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 bg-neutral-950/60 backdrop-blur">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFF00] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDFF00]" />
                </span>
                Live mesh · {NODES.length} sites
              </span>
              <span className="font-mono text-neutral-500">shared_liquidity_v2</span>
            </div>
          </div>

          {/* Live event feed */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-950/60 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-950/70">
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <Activity className="h-3.5 w-3.5 text-[#CDFF00]" />
                Live events
              </div>
              <span className="font-mono text-[10px] text-neutral-500">5s</span>
            </div>
            <div className="flex-1 flex flex-col divide-y divide-white/5 text-[13px]">
              {EVENTS.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '100px' }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/[0.02]"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${e.up ? 'bg-[#CDFF00]' : 'bg-red-400'}`}
                      />
                      <span className="text-white font-medium truncate">{e.who}</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5 truncate">
                      {e.what} · <span className="font-mono text-neutral-400">{e.sym}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-[12px] font-mono text-neutral-300">{e.size}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Metric row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <Metric icon={Globe2} label="Launched sites" value="412" />
          <Metric icon={Users2} label="Active creators" value="1,840" />
          <Metric icon={TrendingUp} label="Shared book depth" value="$18.6M" />
          <Metric icon={Activity} label="Tick-to-feed" value="82ms" suffix="p99" />
        </div>
      </div>
    </section>
  )
}

function Metric({
  icon: Icon,
  label,
  value,
  suffix
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  suffix?: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-4 hover:border-[#CDFF00]/20 transition-colors">
      <Icon className="h-4 w-4 text-[#CDFF00] mb-2" />
      <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
        {label}
      </div>
      <div className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
        {value}
        {suffix && (
          <span className="ml-1 text-[10px] font-mono text-neutral-500 uppercase align-middle">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}

function NetworkCanvas() {
  // Center hub = kuest.com shared pool
  const HUB = { x: 50, y: 50 }

  return (
    <svg
      viewBox="0 0 100 62.5"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CDFF00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#CDFF00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CDFF00" stopOpacity="0" />
          <stop offset="50%" stopColor="#CDFF00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#CDFF00" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Hub glow */}
      <circle cx={HUB.x} cy={HUB.y * 0.625} r="12" fill="url(#hub-glow)" />

      {/* Lines from hub to nodes + animated packet */}
      {NODES.filter((n) => n.label !== 'kuest.com').map((n, i) => {
        const y = n.y * 0.625
        return (
          <g key={n.label}>
            <line
              x1={HUB.x}
              y1={HUB.y * 0.625}
              x2={n.x}
              y2={y}
              stroke="rgba(205,255,0,0.18)"
              strokeWidth="0.15"
              strokeDasharray="0.6 0.4"
            />
            <circle r="0.5" fill="#CDFF00">
              <animateMotion
                dur={`${3 + (i % 4) * 0.6}s`}
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
                path={`M ${HUB.x} ${HUB.y * 0.625} L ${n.x} ${y}`}
              />
              <animate
                attributeName="opacity"
                dur={`${3 + (i % 4) * 0.6}s`}
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
              />
            </circle>
            <circle r="0.4" fill={n.color}>
              <animateMotion
                dur={`${3 + (i % 3) * 0.5}s`}
                begin={`${i * 0.3 + 1.2}s`}
                repeatCount="indefinite"
                path={`M ${n.x} ${y} L ${HUB.x} ${HUB.y * 0.625}`}
              />
              <animate
                attributeName="opacity"
                dur={`${3 + (i % 3) * 0.5}s`}
                begin={`${i * 0.3 + 1.2}s`}
                repeatCount="indefinite"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
              />
            </circle>
          </g>
        )
      })}

      {/* Hub node (kuest.com) */}
      <g>
        <circle
          cx={HUB.x}
          cy={HUB.y * 0.625}
          r="3.2"
          fill="#CDFF00"
          opacity="0.15"
        />
        <circle
          cx={HUB.x}
          cy={HUB.y * 0.625}
          r="2"
          fill="#09090b"
          stroke="#CDFF00"
          strokeWidth="0.3"
        />
        <text
          x={HUB.x}
          y={HUB.y * 0.625 + 0.6}
          textAnchor="middle"
          fontSize="1.2"
          fill="#CDFF00"
          fontFamily="ui-monospace, monospace"
          fontWeight="700"
        >
          kuest
        </text>
      </g>

      {/* Satellite nodes */}
      {NODES.filter((n) => n.label !== 'kuest.com').map((n) => {
        const y = n.y * 0.625
        return (
          <g key={n.label}>
            <circle cx={n.x} cy={y} r="2.2" fill={n.color} opacity="0.12" />
            <circle
              cx={n.x}
              cy={y}
              r="1.3"
              fill="#09090b"
              stroke={n.color}
              strokeWidth="0.25"
              opacity="0.9"
            />
            <text
              x={n.x}
              y={y + 4}
              textAnchor="middle"
              fontSize="1.05"
              fill="#a3a3a3"
              fontFamily="ui-monospace, monospace"
            >
              {n.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
