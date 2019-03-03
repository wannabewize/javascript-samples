/*
 * 변수와 상수
 */

// 변수 선언
var varVal = 1

// 변수는 값 변경이 가능하다
varVal = 2

// 변수 선언과 대입을 별도로 하기
var valVal2
varVal2 = 'JavaScript'
console.log(varVal2)


// 상수 선언
const constVal = 1

// 상수에 값 변경시 에러
// Error : TypeError: Assignment to constant variable.
// constVal = 2;   

// const는 선언과 대입 분리 불가
// Error : SyntaxError: Missing initializer in const declaration
const constVal2
// console.log(constVal2);
// constVal2 = 'hello'
