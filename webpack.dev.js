const common = require('./webpack.common.js');
const CONFIG = require('./config/config');
const merge = require('webpack-merge');
const path = require("path");
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: CONFIG.port,
    historyApiFallback: true,
    open: true,
    contentBase: path.join(__dirname, "/dist"),
    watchContentBase: true,
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
