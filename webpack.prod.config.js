const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  react: path.resolve(NODE_MODULES, 'react')
};

const sassLoaders = [
  'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
  'postcss',
  'sass'
];

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [NODE_MODULES, 'app']
  },
  entry: [ 'bootstrap-loader/extractStyles', PATHS.app ],
  output: {
    path: PATHS.build,
    filename: 'js/bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlwebpackPlugin({
      title: 'webpack-hot-react-sass',
      template: './app/index.html.tpl',
      appMountId: 'app',
      options: {
        mobile: true
      },
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      cdnRefs: [
        'https://fb.me/react-0.14.6.min.js',
        'https://fb.me/react-dom-0.14.6.min.js'
      ]
    }),
    new ExtractTextPlugin('css/[name].css', { allChunks: true })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory'],
      include: PATHS.app,
      exclude:[NODE_MODULES]
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },
    {
      test: /\.(woff2?|ttf|eot|svg)$/,
      loaders: [ 'url?limit=10000' ]
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
    }
  ]},
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};
