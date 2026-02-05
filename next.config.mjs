/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // This line tells Next.js to serve files from the public folder
  // even in standalone mode
  compress: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
