const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const outputPath = resolve(__dirname, 'build');

// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: outputPath,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
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
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.css',
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: outputPath,
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
