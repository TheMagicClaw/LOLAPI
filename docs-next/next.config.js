/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LOLAPI',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
