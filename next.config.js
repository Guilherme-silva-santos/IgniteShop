/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com'
      }
    ],
    minimumCacheTTL: 15000000,
  }
}


module.exports = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
