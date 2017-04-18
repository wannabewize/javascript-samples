/**
 * null
 * undefined과의 비교
 */

console.log('typeof undefined : ', typeof undefined);
// null은 객체 타입(object)
console.log('typeof null : ', typeof null);


// 값이 없는 경우 undefined
var x;
console.log('x =', x);

// null로 비교하기
if (x == null) {
    console.log('x == null');
}
else {
    console.log('x != null');
}

if (x === null) {
    console.log('x === null');
}
else {
    console.log('x !== null');
}

//
// null 대입
//

console.log('x에 null 대입');
x = null;
console.log('x =', x);

if (x) {
    console.log('if (x) 참');
}
else {
    console.log('if (x) 거짓');
}

if (!x) {
    console.log('if (!x) 참');
}
else {
    console.log('if (!x) 거짓');
}

if (x == undefined) {
    console.log('x == undefined');
}
else {
    console.log('x != undefined');
}

if (x === undefined) {
    console.log('x === undefined');
}
else {
    console.log('x !== undefined');
}