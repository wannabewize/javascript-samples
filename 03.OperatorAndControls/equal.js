/**
 * 동등 연산
 */

console.log('== Primitive Type ==');
console.log(1 == 1);    // true
console.log(1 == '1');  // true, 자동 형변환

console.log(1 === 1);   // true
console.log(1 === '1'); // false

console.log('== Reference Type ==');
var obj1 = { value : 10 };
var obj2 = obj1;
var obj3 = { value : 10 };

console.log(obj1 == obj2 ); // true
console.log(obj1 == obj3 ); // false

console.log(obj1 === obj2 ); // true
console.log(obj1 === obj3 ); // false
