/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static exports
  images: {
    unoptimized: true, // For static exports
  },
};

module.exports = nextConfig;
