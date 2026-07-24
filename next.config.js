/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
