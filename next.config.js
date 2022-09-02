/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["localhost", "admin.zeffry.my.id"],
  },
};

module.exports = nextConfig;
