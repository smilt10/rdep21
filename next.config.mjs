/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rdep21',
  assetPrefix: '/rdep21/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
