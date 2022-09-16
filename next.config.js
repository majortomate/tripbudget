/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const images = {
  domains: [
    'res.cloudinary.com',
  ],
};

module.exports = {
  nextConfig,
  images,
};
