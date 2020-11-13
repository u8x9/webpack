# JS兼容性

```bash
npm install babel @babel/core babel-loader @babel/preset-env @babel/polyfill -D
npm install core-js -D
```

## @babel/preset-env

只能转换基本语法，但是诸如 promise 不能转换

## @babel/polyfill

全部js兼容性处理。

但期望的是解决部分兼容性问题，而不是将所有兼容性代码全部引用

## core-js

按需加载所需要的兼容性处理。
