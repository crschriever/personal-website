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
        },
        {
            loader: 'image-webpack-loader',
            query: {
                mozjpeg: {
                    progressive: true,
                },
                gifsicle: {
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4
                }
            }
        }
    ]
}

config.module.rules.push(imageRule);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
);

module.exports = config;