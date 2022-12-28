/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.tranction.one"],
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
