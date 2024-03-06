/**
 * let을 이용한 변수 다루기. var 대신 let 사용할 것
 * - 중복 선언
 * - Hoisting
 */

console.log('== Redeclaration');

// 같은 이름으로 중복 정의시 에러 발생 - Redeclaration Error on let
let letVal1 = 1;
// Error
// let letVal1 = 2; 


console.log('== Hoisting');

// 먼저 사용하고 나중에 정의하기 - let 에서는 에러 - ReferenceError: Cannot access 'letValue2' before initialization
// console.log('letVal2 = ', letValue2); // Error
let letValue2 = 10;


// 블록 스코프.
let scope = 0;
{
  let scope = 1;
}
console.log('scope = ', scope);