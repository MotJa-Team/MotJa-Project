/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      encoding: false,
      bufferutil: false,
      "utf-8-validate": false,
    };

    return config;
  },
};

module.exports = nextConfig;
