/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    // Example custom config
    // domains: ['example.com'],
    unoptimized: false,
  },
};
  
module.exports = nextConfig;
  