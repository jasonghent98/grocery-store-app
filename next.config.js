/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // images: {
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'images.unsplash.com',
  //   //   },
  //   // ],
  //   domains: ["asset.brandfetch.io", 'images.unsplash.com', "serpapi.com"]
  // },
}

module.exports = nextConfig
