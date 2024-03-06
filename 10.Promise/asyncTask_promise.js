/*
 * 프라미스를 사용하는 비동기 태스크
 */

function asyncTask(success) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('asyncTask done');
            if (success) {
                resolve('Success');
            }
            else {
                reject('Error');
            }
        }, 2000);        
    });
}

console.log('== Before Async Task call');
asyncTask(true).then( ret => {
    console.log('Async Task 성공 :', ret);
});

asyncTask(false).then( ret => {
    console.log('Async Task 성공 :', ret);
}).catch( err => {
    console.log('Async Task 실패', err);
})

console.log('== After Async Task call')
