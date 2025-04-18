/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['srijantelang.me'],
    unoptimized: true,
  },
  basePath: '/portfolio',
  async redirects() {
    return [
      {
        source: '/www.srijantelang.me/:path*',
        destination: 'https://srijantelang.me/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
