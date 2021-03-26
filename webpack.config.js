'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  stats: {
    children: true
  },
  name: 'scss',
  entry: {
    file1: path.resolve('./src/test1.scss'),
    file2: path.resolve('./src/test2.scss')
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
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [
        path.join(process.cwd(), 'dist', '**', '*.js'),
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),

    new StylelintPlugin({
      configFile: path.join(process.cwd(), 'stylelint.config.js'),
      context: path.join(process.cwd(), 'src')
    })
  ]
}
