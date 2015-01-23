var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    library: 'rbb',
    libraryTarget: 'umd'
  },
  stats: {
    colors: true
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: '6to5'}
    ]
  }
};