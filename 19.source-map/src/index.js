import print from './print.js';

console.log('index.js加载了');

print();

function add(x, y) {
    return x + y;
}

console.log(add(12, 34));

// hmr
if (module.hot) {
    module.hot.accept('./print.js', () => {
        print();
    });
}
