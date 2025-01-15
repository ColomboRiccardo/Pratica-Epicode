/* config-overrides.js */
const webpack = require("webpack");
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    url: require.resolve("url"),
    assert: require.resolve("assert"),
    crypto: require.resolve("crypto-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};

//https://stackoverflow.com/questions/70429654/webpack-5-errors-cannot-resolve-crypto-http-and-https-in-reactjs-proje/70488628#70488628
