var path = require('path');
var webpack = require('webpack');
var deepExtend = require('deep-extend');

var prodMode = process.argv.indexOf('--rbb-prod-mode') !== -1;
console.log(process.env.NODE_ENV);
if (prodMode) {
  process.env.NODE_ENV = 'production';
}

var exclude = /node_modules|bower_components/;
var rbb = path.join(__dirname, '../index.js');

var baseEnvVars = {
  ON_DEV: false,
  ON_PROD: false
};

var baseConfig = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  context: __dirname,
  node: {
    __filename: true
  },

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [],

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['shared', 'node_modules'],
    root: __dirname,
    alias: {
      rbb: rbb
    }
  },

  externals: {
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.jpg$/, loader: 'file?name=/res/[name].[ext]?[hash]'},
      {test: /\.png$/, loader: 'url?mimetype=image/png'},
      {test: /\.html$/, loader: 'raw', exclude: exclude},
      {test: /\.(js|jsx)$/, loader: 'jsx?harmony', exclude: rbb},
      {test: rbb, loader: '6to5'},
      {test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=/res/[name].[ext]?[hash]'}
    ]
  }
};

var devConfig = {
  devtool: 'eval'
};

var testConfig = deepExtend({}, devConfig);

var prodConfig = {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      'screw_ie8': true,
      'source_map': 'bundle.min.js'
    })
  ]
};
var envContexts = {
  dev: {
    ON_DEV: true
  },
  prod: {
    ON_PROD: true
  }
};

module.exports = getConfig();

module.exports.getConfig = getConfig;

function getConfig(context) {
  if (!context) {
    context = prodMode ? 'prod' : 'dev';
  }
  var configContexts = {
    dev: devConfig,
    prod: prodConfig,
    test: testConfig
  };

  var resultConfig = deepExtend({}, baseConfig, configContexts[context]);
  var resultVars = deepExtend({}, baseEnvVars, envContexts[context]);

  resultConfig.plugins.push(new webpack.DefinePlugin(resultVars));
  resultConfig.plugins.push(new webpack.BannerPlugin(getBanner(), {raw: true}));

  console.log('Webpack config is in ' + context + ' mode');
  return resultConfig;
}

function getBanner() {
  return '// random-beautiful-background built with ♥ by Kent C. Dodds (ó ì_í)=óò=(ì_í ò)\n';
}
