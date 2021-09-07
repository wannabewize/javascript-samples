/**
 * var를 이용한 변수 다루기 - var 대신 let 사용할 것
 */

// 같은 이름으로 중복 정의 - 에러 발생 안함
var val1 = 1;
var val1 = 2; 

console.log('val1 =', val1);

// 블록 스코프.
var val2 = 0;
{
   var val2 = 1;
}
console.log('val2 = ', val2);

// Hoisting : 선언 이전에 사용하기 - 에러 발생 안함
console.log('val3 = ', val3);
var val3 = 'val3 is not defined Error';