# webpack 初体验

## 环境搭建

```bash
npm init
npm install webpack webpack-cli -g
npm install webpack webpack-cli -D
```

## 目录结构

```
build -- 打包输出
src -- 源码
    index.js -- 入口文件
```

## 运行指令

### 开发环境

```bash
webpack ./src/index.js -o ./build --mode=development
```

### 生产环境

```bash
webpack ./src/index.js -o ./build --mode=production
```

## 结论

1. webpack能处理js/json资源，不能处理css/img等其它资源

2. webpack将es6模块化编译成浏览器能识别的模块化

3. 生产环境比开发环境多一个压缩/优化js代码
