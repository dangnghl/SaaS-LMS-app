import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  // ...other config...
  images: {
    remotePatterns: [
      new URL('https://img.clerk.com/**'),
    ],
  },
};

export default nextConfig;
