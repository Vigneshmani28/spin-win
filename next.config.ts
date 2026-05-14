import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Allow local network access from mobile (dev only)
  allowedDevOrigins: ['http://172.31.1.43:3000'],
}

export default nextConfig
