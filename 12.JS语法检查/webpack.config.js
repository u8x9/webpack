const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_DIR = resolve(__dirname, 'build');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/app.js',
        path: OUTPUT_DIR,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options:{
                    // 自动修复
                    fix: true,
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: OUTPUT_DIR,
        port: 3000,
        open: true,
        compress: true,
    }
}
