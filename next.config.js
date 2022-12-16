/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {outputStandalone: true}, // creates a standalone build for production
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config;
    }
}
  // images: {
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'images.unsplash.com',
  //   //   },
  //   // ],
  //   domains: ["asset.brandfetch.io", 'images.unsplash.com', "serpapi.com"]
  // },

module.exports = nextConfig
