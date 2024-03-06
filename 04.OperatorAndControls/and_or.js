/**
 * OR, AND 연산자
 */

console.log('\n== || 연산자==');
const orRet1 = true || 'b';
console.log("true || 'b' =", orRet1); // true

const orRet2 = false || 'b';
console.log("false || 'b' =", orRet2); // b

const orRet3 = undefined || 'b';
console.log("undefined || 'b' =", orRet3);

const input = {one: '1', two: '2', zero: 0};

// null검사 와 초기값 설정
const orRet4 = input.three || 'nothing';
console.log("input || 'nothing' =", orRet4);

// null 검사와 실행
input.two || console.log('input.two의 값이 없습니다.'); // 실행 안됨
input.three || console.log('input.three의 값이 없습니다.'); // 실행


console.log('\n== && 연산자==');

const andRet1 = true && 'b';
console.log("true && 'b' =", andRet1); // b

const andRet2 = false && 'b';
console.log("false && 'b' =", andRet2); // false

const andRet4 = undefined && 'b';
console.log("undefined && 'b' =", andRet4); // undefined

// null 검사와 실행
input.two && console.log('input.two = ', input.two); // 실행
input.three && console.log('input.three = ', input.three); // 실행 안됨
input.zero && console.log('input.zero = ', input.zero); // 주의 - 0은 false로 취급
