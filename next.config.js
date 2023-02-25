/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.yml$/,
      use: "raw-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
