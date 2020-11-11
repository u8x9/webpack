// index.js : webpack 入口文件

import './index.css';

import data from './data.json';

console.log(data);

function add(x, y) {
    return x + y;
}

console.log(add(123, 456));
