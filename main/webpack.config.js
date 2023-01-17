const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package');
const webpack = require('webpack');
const path = require("path"); 

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: '10086',
    // clientLogLevel: 'none',//关闭日志
    historyApiFallback: true,
    allowedHosts: "all",
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      overlay: { warnings: false, errors: true }
    }
  },
  output: {
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    // new webpack.DefinePlugin({ // webpack自带该插件，无需单独安装
    //   'process.env' : {
    //       NODE_ENV: JSON.stringify(config) // 将属性转化为全局变量，让代码中可以正常访问
    //   }
    // })
  ],
};
