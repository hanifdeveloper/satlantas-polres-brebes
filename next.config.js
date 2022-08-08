/** @type {import('next').NextConfig} */
const fs = require('fs');

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  env: {
    bootstrap: fs.readFileSync('./styles/core/bootstrap.bundle.min.js').toString()
  }
};

module.exports = nextConfig;
