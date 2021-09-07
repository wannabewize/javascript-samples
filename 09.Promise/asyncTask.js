function asyncTask(success, callback) {
    setTimeout(function () {
        console.log('asyncTask done');
        if (success) {
            callback(null, 'Success');
        }
        else {
            callback('Error');
        }
    }, 2000);   
}

console.log('== Before Async Task call');

asyncTask(true, (err, ret) => {
    console.log('Async Task 성공 :', ret);
});

asyncTask(false, (err, ret) => {
    if ( err ) {
        console.log('Async Task 실패', err);
        return;
    }
    console.log('Async Task 성공 :', ret);
});

console.log('== After Async Task Call');