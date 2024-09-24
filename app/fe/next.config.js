/** @type {import('next').NextConfig} */

// import createNextIntlPlugin from "next-intl/plugin";

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,
});
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: false,
  output: "standalone",
};
module.exports = withPWA(withNextIntl(nextConfig));

// module.exports = {
//   ...withPWA(),
//   ...withNextIntl(),
//   // ...withVideos(),
//   ...nextConfig,
// };
