/**
 * 오버로딩. 마지막 함수가 실행된다.
 */

function add(i) {
   console.log('add(i)');
}

function add(i, j) {
   console.log('add(i, j)');
}

function add(i, j, k) {
   console.log('add(i, j, k)');
}


add(1);
add(1, 2);
add(1, 2, 3);