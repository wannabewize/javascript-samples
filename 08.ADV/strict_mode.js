// http://www.w3schools.com/js/js_strict.asp
'use strict';

/**
 * 선언 없이 대입
 */

// 에러
// x = 10;

var value = 1;

// 중복 정의해도 에러가 발생하지 않는다.
var value = '1';
console.log('value =', value);


/**
 * Hoisting
 */
console.log('== Hoisting ==');

// 변수 선언보다 먼저 사용 - Error는 안난다. undefined
console.log('laterDefined = ', laterDefined);

var laterDefined = 'Hello';