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
                loader: 'babel-loader',
                options: {
                    // 预设：指示babel做怎样的兼容性处理
                    presets: [
                        ['@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }
                        ],
                    ]
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
