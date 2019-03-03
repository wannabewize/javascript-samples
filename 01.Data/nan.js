/**
 * 숫자 판단하기
 */

console.log('typeof NaN :', typeof NaN);

var x = 1;

console.log('x = 1');

if ( ! isNaN(1) ) {
   console.log('1는 유효한 숫자');
}

if ( ! isNaN('1') ) {
   console.log('"1"는 유효한 숫자. 자동 형변환')
}

if ( isNaN('Hello') ) {
   console.log('"Hello"는 Nan')
}

if ( isNaN(0 / 0) ) {
   console.log('isNaN(0 / 0)으로 비교. x는 유효한 숫자가 아니다.')
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



