/**
 * 암시점 타입 변환
 */

console.log('== undefined ==');
console.log(undefined);
console.log(undefined + '1'); 'undefined1'
console.log(undefined + 1); // NaN
console.log(!undefined); // true

console.log('== null ==');
console.log(null);
console.log(null + '1'); // 'null1'
console.log(null + 1); // 1
console.log(!null); // true

console.log('== "123" ==');
console.log('123');
console.log('123' + '1');
console.log('123' + 1); // '1231'
console.log(!'123'); // false

console.log('== "" ==');
console.log('');
console.log('' + '1');
console.log('' + 1);
console.log(!''); // true

console.log('== 0 ==');
console.log(0);
console.log(0 + '1');
console.log(0 + 1);
console.log(!0); // true

console.log('== NaN ==');
console.log(NaN);
console.log(NaN + '1'); // 'NaN1'
console.log(NaN + 1); // NaN
console.log(!NaN); // true

console.log('== true ==');
console.log(true);
console.log(true + '1'); // 'true1'
console.log(true + 1); // 2
console.log(!true); // false

console.log('== {} ==');
console.log({});
console.log({} + '1'); // '[object Object]1'
console.log({} + 1); // '[object Object]1'
console.log(!{}); // false