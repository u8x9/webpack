const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputPath = resolve(__dirname, 'build');

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
                    //'style-loader',
                    // 取代 style-loader，提取css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader'
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
    }
}
