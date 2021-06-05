const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer =
  require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });

module.exports = withBundleAnalyzer(
  withPWA({
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    target: 'serverless',
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  })
);
