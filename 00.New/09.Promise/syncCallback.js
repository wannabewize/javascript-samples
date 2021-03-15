function sayHello(callback) {
    callback();    
}

sayHello( () => {
    console.log('say Hello');
});

function add(i, j, callback) {
    const sum = i + j;
    callback(sum);    
}

const ret = add(1, 2, (sum) => {
    console.log(`1 + 2 = ${sum}`);
});