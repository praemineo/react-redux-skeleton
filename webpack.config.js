const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'styles/main.css',
});

module.exports = {
  context: path.join(__dirname, ''),
  devtool: debug ? '#inline-source-map' : '#nosources-source-map',
  entry: ['babel-polyfill', './src/main.js'],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
      },
    }, {
      test: /\.css$/,
      loader: extractPlugin.extract({
        use: ['css-loader'],
      }),
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/scripts.min.js',
    publicPath: '/',
  },

  plugins: [
    extractPlugin,
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }), ...(debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ])],

  devServer: {
    contentBase: './dist', // Relative directory for base of server
    port: 8080, // Port Number
    host: '0.0.0.0',
    historyApiFallback: true,
  },
};
