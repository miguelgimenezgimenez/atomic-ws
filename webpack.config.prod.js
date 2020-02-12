const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const outPath = path.join(__dirname, './public');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js'
    },

    output: {
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[name].js',
        publicPath: '/'
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
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
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

    optimization: {
        usedExports: true,
        minimizer: [ new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({}) ],
        // splitChunks: {
        //     name: true,
        //     cacheGroups: {
        //         commons: {
        //             chunks: 'initial',
        //             minChunks: 2
        //         },
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             chunks: 'all',
        //             priority: -10
        //         }
        //     }
        // }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './www/index.html',
            filename: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new BundleAnalyzerPlugin(),

        new CleanWebpackPlugin()
    ]
};
