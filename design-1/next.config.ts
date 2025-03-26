import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"e7.pngegg.com"
      },
      {
        protocol:"https",
        hostname:"w7.pngwing.com"
      },
      {
        protocol:"https",
        hostname:"encrypted-tbn0.gstatic.com"
      },
    ]
  }
};

export default nextConfig;
