var fs = require('fs');
var webpack = require('webpack');
var packageJsonString = fs.readFileSync('package.json', 'utf8');
var packageJson = JSON.parse(packageJsonString);

console.log(typeof packageJson.version);

module.exports = {
  entry: './index.js',
  output: {
    path: 'dist',
    library: 'rbb',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJson.version)
    }),
    new webpack.BannerPlugin(getBanner(packageJson.version), {raw: true})
  ],
  stats: {
    colors: true
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: '6to5'}
    ]
  }
};

function getBanner(version) {

  return '//! rbb version ' + packageJson.version + ' built with ♥ by Kent C. Dodds (ó ì_í)=óò=(ì_í ò)\n';
}