const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  react: path.resolve(NODE_MODULES, 'react')
};

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [NODE_MODULES, 'app']
  },
  entry: [ 'bootstrap-loader', PATHS.app ],
  output: {
    path: PATHS.build,
    filename: 'js/bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    contentBase: 'build',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'webpack-hot-react-sass',
      template: './app/index.html.tpl',
      appMountId: 'app',
      options: {
        mobile: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel?cacheDirectory'],
      include: PATHS.app
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
      loaders: [
        'style',
        'css?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
        'postcss',
        'sass?sourceMap'
      ],
      include: PATHS.app
    }]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};
