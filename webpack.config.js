const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/js/app.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'snake.bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'), 'node_modules'
    ],
    extensions: ['.js', '.scss' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
       },
    ]
  },
  plugins: [
    new ExtractTextPlugin('./snake.bundle.css')
  ],
  devtool: 'source-map',
};
