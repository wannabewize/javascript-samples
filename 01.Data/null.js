/**
 * null
 * undefined과의 비교
 */

console.log('== Sample codes for null ==\n');

// 변수를 null로 선언
let x = null;
console.log('x의 값 :', x);

// null과 비교하기
console.log('x == null :', x == null);
console.log('x === null :', x === null);
// undefined와 비교하기
console.log('x == undefined :', x == undefined);
console.log('x === undefined :', x === undefined);


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


// 타입 비교
console.log('typeof undefined : ', typeof undefined);
// null은 객체 타입(object)
console.log('typeof null : ', typeof null);
