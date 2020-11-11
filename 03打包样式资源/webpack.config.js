
// resolve 用来拼接绝对路径
const { resolve } = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        // 输出的文件名
        filename: 'built.js',
        // 输出的路径
        path: resolve(__dirname, 'build'),
    },
    // loader 的配置
    module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些 loader 进行处理
                use: [
                    // use 数组中 loader 执行顺序：从右到左，从下到上依次执行
                    // 创建<style>标签，将js中样式资源插入，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [],
    // 模式
    mode: 'development',
    //mode: 'production',
}
