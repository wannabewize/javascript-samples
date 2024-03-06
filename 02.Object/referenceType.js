/**
 * 밸류 타입과 레퍼런스 타입
 */

// Primitive Type
var a = 10;
var b = a;
a = 20;

console.log('a =', a);
console.log('b =', b);

// Object는 Reference type
var obj1 = { foo : 10 };
var obj2 = obj1;
obj1.foo = 20;

console.log('obj1 =', obj1);
console.log('obj2 =', obj2);

// 배열은 Reference Type
var array1 = [1, 2, 3];
var array2 = array1;
array1.push(4);

console.log('array1 =', array1);
console.log('array2 =', array2);