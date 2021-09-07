/*
 * 변수와 상수
 */

// 변수 선언
let varVal = 1

// 변수는 값 변경이 가능하다
varVal = 2

// 변수 선언과 대입을 별도로 하기
let valVal2
varVal2 = 'JavaScript'
console.log(varVal2)


// 상수 선언
const constVal = 1

// 상수에 값 변경시 에러
// Error : TypeError: Assignment to constant variable.
// constVal = 2;   

// const는 선언과 대입 분리 불가
// Error : SyntaxError: Missing initializer in const declaration
// const constVal2
// console.log(constVal2);
// constVal2 = 'hello'

// Const - 객체 타입인 경우 속성 변경 가능
const constArray = [1, 2, 3];
constArray.push(4);
console.log(constArray);

// Const - 객체 타입인 경우 속성 변경 가능
const constObj = {num: 1, kor: '일'};
constObj.eng = 'one';
console.log(constObj);

// 새로운 객체 대입은 불가능 - TypeError: Assignment to constant variable.
// constArray = ['one', 'two', 'three'];
// constObj = {one: '1', two: '2'};
