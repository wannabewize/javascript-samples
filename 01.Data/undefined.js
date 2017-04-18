/**
 * undefined
 * null
 */

// 선언만 하면 undefined다
var x;
console.log('var x 인 경우', x);

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

if (x == undefined) {
    console.log('if (x == undefined) 로 undefined 판단 성공');
}
else {
    console.log('if (x == undefined) 로 undefined 판단 실패');
}

if (x === undefined) {
    console.log('if (x === undefined) 로 undefined 판단 성공');
}
else {
    console.log('if (x === undefined) 로 undefined 판단 실패');   
}

if (x == "undefined") {
    console.log('if (x == "undefined") 로 undefined 판단 성공');
}
else {
    console.log('if (x == "undefined") 로 undefined 판단 실패');
}

// 주의! 값이 false인 경우
console.log('y = false 인 경우')
var y = false
if (y) {
    console.log('if (y) 참');
}
else {
    console.log('if (y) 거짓');
}

if (!y) {
    console.log('if (!y) 참');
}
else {
    console.log('if (!y) 거진');
}
