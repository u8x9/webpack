# devServer

## 安装

```bash
npm install webpack-dev-server -D
```

## 配置

```json
devServer: {
    contentBase: resolve(__dirname, "build"),
    // 开启压缩
    compress: true,
    port: 3000,
    // 自动打开浏览器
    open: true,
}
```

## 启动

```bash
webpack serve
#npx webpack-dev-server
```
