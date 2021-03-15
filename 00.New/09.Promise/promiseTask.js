function justDoIt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('just do it');
        }, 1000);
    });
}

justDoIt().then( (ret) => {});
console.log('== After justDoIt');