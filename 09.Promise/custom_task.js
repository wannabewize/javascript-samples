/*
 * 프라미스를 사용하는 태스크
 */
function myTask(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve('Promise Function task done');
        }
        else {
            reject('Promise Function task failure');
        }
    });
}

// 성공
myTask(true).then(ret => {
    console.log('myTask 성공. 결과:', ret);
}, err => {
    console.log('myTask 실패. 에러:', err);
});

// 실패
myTask(false).then(ret => {
    console.log('myTask 성공. 결과:', ret);
}, err => {
    console.log('myTask 실패. 에러:', err);
});

// catch로 에러 처리
myTask(false).then(ret => {
    console.log('myTask 성공. 결과:', ret);
}).catch(err => {
    console.log('myTask 실패. 에러:', err);
});

