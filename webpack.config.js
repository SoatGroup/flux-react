var path = require('path');
var config = {
  devtool: 'source-map',
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/main.jsx')],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
};

module.exports = config;
