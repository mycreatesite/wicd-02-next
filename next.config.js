/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['placehold.jp'],
  },
})
