const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, "build"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 多个 loader
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                // 一个loader
                loader: 'url-loader',
                options: {
                    // 图片小于8kb，就会被base64处理
                    limit: 8 * 1024,
                    esModule: false
                }
            },
            {
                test:/\.html$/,
                // 处理html文件中的<img>标签
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    mode: 'development'
}
