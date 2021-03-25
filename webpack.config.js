'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].css'
  },
  stats: {
    children: true
  },
  name: 'scss',
  entry: {
    file1: path.resolve('./test1.scss'),
    file1: path.resolve('./test2.scss')
  },
  module: {
    rules: [
      {
        test: /(.)*\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
