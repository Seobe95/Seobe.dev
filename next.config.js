/** @type {import('next').NextConfig} */

const {withPlaiceholder} = require('@plaiceholder/next')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
  output: 'standalone',
  env: {
    NEXT_PUBLIC_LOCAL_POST_PATH: process.env.NEXT_PUBLIC_LOCAL_POST_PATH,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_PROTOCOL: process.env.NEXT_PUBLIC_PROTOCOL,
    NEXT_PUBLIC_GTAG: process.env.NEXT_PUBLIC_GTAG,
  },
}

module.exports = withPlaiceholder(nextConfig)
