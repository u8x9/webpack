# HMR

`Hot Module Replacement, 模块热替换`

作用：只重新打包更新的模块，而不是打包所有模块。


+ 样式文件：可以使用hmr功能，因为style-loader内部实现了

+ js文件：默认不能使用hmr功能。
    
    + 解决：修改js代码，添加支持hmr功能

+ html文件：默认不能使用hmr功能。同时会导致问题：html文件不能热更新了. 【不需要hmr功能】

    + 解决：修改 entry 入口`entry: ['./src/index.js', './src/index.html']`

