const path = require("path");

const nextConfig = {
  // output: "export", - for static site generation ONLY
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytegrad.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
