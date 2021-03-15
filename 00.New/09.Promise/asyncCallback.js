function justDoIt(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

function add(i, j, callback) {
    setTimeout(() => {
        const sum = i + i;
        callback(sum);
    }, 1000);
}

justDoIt(() => {
    console.log('just do it');
});

add(3, 4, (sum) => {
    console.log(`3 + 4 = ${sum}`);
})
console.log('== The End');



