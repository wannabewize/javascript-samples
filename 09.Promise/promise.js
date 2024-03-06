/*
 * Step1
*/
function task1(resolve) {
  console.log('Task1 종료. 성공');
  // 작성
  resolve('Task1 결과!');
}

function task1_success(result) {
  console.log('태스크1 종료, 결과:', result);
}

new Promise(task1).then(task1_success);
// inline
new Promise(task1).then(result => {
  console.log('태스크1 종료, 결과:', result);
});

/*
 * Step 2 
 */
// Promise with Reject
function task2(resolve, reject) {
  console.log('Task2 종료. 에러 발생');
  // reject 콜백으로 에러 전달
  reject('Task2 에러');
}

function onResolved(result) {
  // Fullfilled 상태
  console.log('태스크2 성공. 결과', result);
}

function onRejected(error) {
  // Rejected 상태
  console.log('태스크2 성공. 실패', error);
}

new Promise(task2).then(onResolved, onRejected);

new Promise(task2).then(ret => {
  console.log('Task2 성공. 결과 :', ret);
}, err => {
  console.log('Task2 실패. 에러 :', err);
})


