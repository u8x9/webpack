const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '',
        filename: 'built.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // 打包其它资源
                // 排除css/js/html
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
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

    // 开发服务器 devServer
    // 只会在内存中编译代码，不会有任何输出
    // 启动 devServer: npx webpack-dev-server
    devServer: {
        // 项目构建后路径
        contentBase: resolve(__dirname, "build"),
        // 开启压缩
        compress: true,
        port: 3000,
        // 自动打开浏览器
        open: true,
    }
}
