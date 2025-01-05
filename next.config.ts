import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["live.staticflickr.com", "media.gettyimages.com"],
  },
};

export default nextConfig;
