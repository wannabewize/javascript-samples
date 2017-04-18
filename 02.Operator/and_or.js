/**
 * OR, AND 연산자
 */

console.log('\n== || 연산자==');
var ret = 'a' || 'b';
console.log("'a' || 'b' =", ret); // a

ret = false || 'b'
console.log("false || 'b' =", ret);

ret = undefined || 'b'
console.log("undefined || 'b' =", ret);

// undefined 검사 후 초기값
var input;
var var1 = input || 'default';
console.log("input || 'default' =", var1); // default

var var2;
if ( input ) {
   var2 = 'default';
}
console.log(var2);

console.log('\n== && 연산자==');
ret = 'a' && 'b';
console.log("'a' && 'b' =", ret); // b
ret = false && 'b';
console.log("false && 'b' =", ret); // false
ret = undefined && 'b';
console.log("undefined && 'b' =", ret); // undefined

var var3 = input && 'default';
console.log("input && 'default' =",var2); // undefined
