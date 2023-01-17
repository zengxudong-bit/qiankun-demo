const appName = require('./package.json').name;
module.exports = {
  devServer: {
    port: 7102,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${appName}`,
  },
};