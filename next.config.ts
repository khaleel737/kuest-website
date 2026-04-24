import { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'demo.kuest.com' },
      { protocol: 'https', hostname: 'kuest.com' }
    ]
  }
}

export default nextConfig
