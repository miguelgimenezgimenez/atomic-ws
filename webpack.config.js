const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const outPath = path.join(__dirname, './public');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~atoms': path.resolve(__dirname, 'src/components/atoms'),
          
            '~molecules': path.resolve(__dirname, 'src/components/molecules'),
          
            '~organisms': path.resolve(__dirname, 'src/components/organisms'),

            '~templates': path.resolve(__dirname, 'src/components/templates'),
          
            '#': path.resolve(__dirname, 'src/pages')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /globalStyles\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /globalStyles\.scss$/,

                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            }
        ]
    },
    devtool: 'none',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true,
        historyApiFallback: true
    },
    optimization: {
        usedExports: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './www/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ]
};
