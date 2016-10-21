/**
 * 숫자 판단하기
 */

var x = 1;

console.log('x = 1');

if ( ! isNaN(x) ) {
   console.log('x는 유효한 숫자');
}

console.log('x = "Hello"');
x = 'Hello'
if ( isNaN(x) ) {
   console.log('x는 유효한 숫자가 아니다.')
}

console.log('x = 0 / 0');
x = 0 / 0;
if ( isNaN(x) ) {
   console.log('isNaN으로 비교. x는 유효한 숫자가 아니다.')
}

if ( x == undefined ) {
   console.log('NaN == undefined 비교 성공')
}
else {
   console.log('NaN == undefined 비교 실패')
}

if ( x == NaN ) {
   console.log('NaN == NaN으로 비교하기 성공')
}
else {
   console.log('NaN == NaN으로 비교 실패')
}

if ( x === NaN ) {
   console.log('NaN === NaN으로 비교하기 성공')
}
else {
   console.log('NaN === NaN으로 비교 실패')
}



