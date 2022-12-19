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
<<<<<<< HEAD
  webpackDevMiddleware: (config) => {
=======
  webpack: (config) => {
>>>>>>> b61136b (docker config for hot-reload with next app)
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config;
<<<<<<< HEAD
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
=======
  }
}
>>>>>>> b61136b (docker config for hot-reload with next app)

module.exports = nextConfig
