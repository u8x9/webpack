const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 压缩html
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true,
            }
        }),
    ],
    // mode = production: 自动压缩js
    mode: 'production',
    devServer: {
        contentBase: outputPath,
        port: 3000,
        compress: true,
        open: true,
    }
}
