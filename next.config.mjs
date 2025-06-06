/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ this tells Next.js to generate static files
  basePath: '/rdep21', // ✅ important for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
