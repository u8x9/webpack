const { resolve } = require('path');
const OUTPUT_DIR = resolve(__dirname, 'build');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = 'production'

process.env.NODE_ENV = MODE;
const commondCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    'postcss-preset-env'
                ]
            }
        }
    }
];
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: OUTPUT_DIR,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...commondCssLoader],
            },
            {
                test: /\.less$/,
                use: [
                    ...commondCssLoader,
                    'less-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // ¿¿¿¿
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true,
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            useBuiltIns: 'usage',
                            corejs: { version: 3 },
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }],
                    ],
                }
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    outputPath: 'images',
                    esModule: false,
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                exclude: /\.(html|js|css|json|less|png|gif|jpg|jpeg)$/,
                loader: 'file-loader',
                options:{
                    outputPath: 'resources',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css',
        }),
    ],
    mode: MODE,
    devServer: {
        contentBase: OUTPUT_DIR,
        port: 3000,
        compress: true,
        open: true,
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
}
