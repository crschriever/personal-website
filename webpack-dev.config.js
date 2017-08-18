var config = require('./webpack.config');
var webpack = require('webpack');

var imageRule = {
    test: /\.(gif|png|jpe?g)$/i,
    loaders: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'res/'
            }
        }
    ]
}

config.module.rules.push(imageRule);

module.exports = config;