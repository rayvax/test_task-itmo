/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news.itmo.ru',
        port: '',
        pathname: '/images/news/**',
      },
      {
        protocol: 'https',
        hostname: 'news.itmo.ru',
        port: '',
        pathname: '/images/news_trans/**',
      },
    ],
  },
};
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl(nextConfig);
