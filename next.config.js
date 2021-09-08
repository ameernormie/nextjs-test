const path = require("path");
const { parsed: myEnv } = require("dotenv").config({
  path: path.resolve(
    process.cwd(),
    `.env.${process.env.NODE_ENV || "development"}`
  ),
});
const webpack = require("webpack");

const apiKey = JSON.stringify(myEnv.SHOPIFY_API_KEY);

console.log("process.env.SHOPIF ", apiKey);

module.exports = {
  // env: {
  //   SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
  //   SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
  //   HOST: process.env.HOST,
  //   SHOP: process.env.SHOP,
  //   SCOPES: process.env.SCOPES,
  //   PORT: process.env.PORT,
  // },
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    // config.plugins.push(new webpack.EnvironmentPlugin(myEnv));

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};
