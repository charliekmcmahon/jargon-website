import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  poweredByHeader: false,
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  
  // Trailing slash consistency
  trailingSlash: false,
  
  // Note: Security headers are configured in public/_headers for Cloudflare Pages
  // The Next.js headers() config doesn't work with output: 'export'
};

export default nextConfig;
