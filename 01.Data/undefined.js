/**
 * undefined
 * null
 */

// 선언만 하면 undefined다
let x;
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

if (x === "undefined") {
    console.log('if (x === "undefined") 로 undefined 판단 성공');
}
else {
    console.log('if (x === "undefined") 로 undefined 판단 실패');
}

// typeof

console.log('typeof', typeof(x));
if ( typeof(x) == "undefined" ) {
    console.log('typeof(x) == "undefined" 판단 성공')
}

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