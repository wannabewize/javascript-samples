/**
 * Number 타입 
 */

// 16진수형, 10진수형, 8진수형
console.log('== Number ==');
console.log(0x0F); // 15
console.log(15);   // 15
console.log(017);  // 15

var val = 1;
console.log('typeof(val) =', typeof(val) );
console.log('val은 숫자 타입인가?', typeof val == 'number');

// 정수로 변환
console.log('\n== parseInt ==')
const num1 = parseInt("123")
console.log('parseInt(123) =', num1, ', Type: ',typeof num1);  // number
const num2 = parseInt("123px")
console.log('parserInt("123px") =', num2, ', Type: ', typeof num2); // number
const num3 = parseInt('Hello')
console.log('parserInt("Hello") =', num3, ', Type: ', typeof num3);

// 실수로 변환
console.log('\n== parseFloat ==')
const num4 = parseFloat("123.45")
console.log('parseFloat("123.45") =', num4, ', Type:', typeof num4);     // 123.45

// 정수와 실수 비교
console.log('\n== Int, Float 비교 ==')
console.log('123 == 123.0 :',123 == 123.0);   // true
console.log('123 === 123.0 :',123 === 123.0);   // true

// 실수를 정수로 : 반올림, 올림, 내림. 내장객체 Math
console.log('\n== 반올림,올림,내림 ==')
console.log('반올림(round) : round(3.15) =', Math.round(3.14), ', round(3.56) =', Math.round(3.56))
console.log('올림(ceil) : ceil(3.15) =', Math.ceil(3.14),', ceil(3.56) =', Math.ceil(3.56))
console.log('내림(floor): floor(3.15) =', Math.floor(3.14),', floor(3.56) =', Math.floor(3.56))