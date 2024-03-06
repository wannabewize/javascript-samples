/**
 * undefined
 * null
 */

console.log('== Sample codes for undefined ==\n');

// 선언만 하면 undefined다
let x;
console.log('초기화하지 않은 변수x의 값 :', x);

console.log('x == undefined :', x == undefined);
console.log('x === undefined :', x === undefined);

// undefine 비교하기
if (x) {
    console.log('if (x) 로 undefined 판단 성공');
}
else {
    console.log('if (x) 로 undefined 판단 실패 ');
}

if (!x) {
    console.log('if (!x) 로 undefined 판단 성공');
}
else {
    console.log('if (!x) 로 undefined 판단 실패');
}


// typeof
console.log('typeof x :', typeof(x));
console.log('typeof(x) == "undefined":', typeof(x) == 'undefined');

// 주의! 값이 false인 경우
console.log('y = false 인 경우')
let y = false
if (y) {
    console.log('if (y) 결과 : 참');
}
else {
    console.log('if (y) 결과 : 거짓');
}

if (!y) {
    console.log('if (!y) 결과 참');
}
else {
    console.log('if (!y) 결과 거진');
}

// 주의! 값이 0인 경우
console.log('z = 0 인 경우');
let z = 0;
if (z) {
    console.log('if (z) 결과 : 참');
}
else {
    console.log('if (z) 결과 : 거짓');
}

if (!z) {
    console.log('if (!z) 결과 참');
}
else {
    console.log('if (!z) 결과 거짓');
}