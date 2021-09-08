const { config } = require("dotenv");
const path = require("path");
const webpack = require("webpack");

config({
  path: path.resolve(
    process.cwd(),
    `.env.${process.env.NODE_ENV || "development"}`
  ),
});

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

console.log("process.env.SHOPIF ", process.env.SHOPIFY_API_KEY);

module.exports = {
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    HOST: "http://143.198.140.113",
    SHOP: process.env.SHOP,
    SCOPES: process.env.SCOPES,
    PORT: process.env.PORT,
  },
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};
