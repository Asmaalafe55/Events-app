/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'wembleypark.com',
      'user-images.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
