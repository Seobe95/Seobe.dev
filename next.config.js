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
}

module.exports = withPlaiceholder(nextConfig)
