import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.react-photo-album.com' }],
  },
  experimental: {
    // App Router alap, Turbopack a dev szervernél implicit
  },
};
export default nextConfig;
