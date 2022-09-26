/** @type {import('next').NextConfig} */

const images = {
  domains: [
    'res.cloudinary.com',
  ],
};

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images,
};
