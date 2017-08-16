var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './public/src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
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
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery'
        }),
        new CleanWebpackPlugin(['public/dist'])
    ]
};