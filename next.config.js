/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  // You’re deploying to https://zijie-cai.github.io/portfolio/
  basePath: isProd ? '/portfolio' : '',

  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;