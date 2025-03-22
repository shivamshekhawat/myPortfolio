import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,
};
module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  reactStrictMode: true,
  trailingSlash: true,  // Ensures correct URL structure for static exports
  output: 'export',  // Enables static site export
};


export default nextConfig;
