/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ this tells Next.js to generate static files
  basePath: '/rdep21', // ✅ important for GitHub Pages
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Exclude API routes and admin pages from static export
  exportPathMap: async function (defaultPathMap) {
    const paths = {}
    // Only include public pages
    paths['/'] = { page: '/' }
    paths['/activites'] = { page: '/activites' }
    paths['/a-propos'] = { page: '/a-propos' }
    paths['/contact'] = { page: '/contact' }
    paths['/realisations'] = { page: '/realisations' }
    paths['/rge-capeb'] = { page: '/rge-capeb' }
    paths['/temoignages'] = { page: '/temoignages' }
    return paths
  },
}

export default nextConfig
