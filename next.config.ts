/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Exports each page as its own folder (with an index.html file)
  basePath: '/wmref',
  assetPrefix: '/wmref/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
