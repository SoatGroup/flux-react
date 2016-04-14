var path = require('path');
var webpack = require('webpack');
var config = {
    entry: ['babel-polyfill',path.resolve(__dirname, 'src/main.jsx')],
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
        },{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
};

module.exports = config;
