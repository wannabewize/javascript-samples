/**
 * 선언 없이 대입
 */
x = 10;

/**
 * Duplication
 */
var hello = 1;

// 중복 정의해도 에러가 발생하지 않는다.
var hello = 'hello';

function hello() {
   console.log('hello function');
}


function say(arg, arg) {
   console.log('arg1 : ', arg, 'arg2 : ', arg);
}
say(1, 2);

/**
 * Hoisting
 */
console.log('== Hoisting ==');

// 변수 선언보다 먼저 사용 - Error는 안난다. undefined
console.log('laterDefined = ', laterDefined);

var laterDefined = 'Hello';



