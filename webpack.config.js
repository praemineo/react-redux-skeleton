var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, ""),
  devtool: debug ? "#inline-source-map" : '#nosources-source-map',
  entry: ["babel-polyfill", "./src/main.js"],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
      }
    }]
  },

  output: {
    path: __dirname + "/dist/js",
    filename: "scripts.min.js",
    publicPath: '/dist/js/'
  },

  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
  ],

  devServer: {
    contentBase: './dist', //Relative directory for base of server
    port: 8080, //Port Number
    host: '0.0.0.0',
    historyApiFallback: true
  },
};
