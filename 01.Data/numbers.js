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
console.log('== parseInt ==')
console.log('parseInt(123) =', parseInt("123") , typeof parseInt("1234"));  // number
console.log('parserInt("123px") =',parseInt("123px"), typeof parseInt("123px")); // number
console.log('parserInt("Hello") =', parseInt('Hello'), typeof parseInt('Hello'));

// 실수로 변환
console.log('== parseFloat ==')
console.log(parseFloat("123.45"));     // 123.45

// 정수와 실수 비교
console.log('123 == 123.0 :',123 == 123.0);   // true
console.log('123 === 123.0 :',123 === 123.0);   // true

// 실수를 정수로 : 반올림, 올림, 내림. 내장객체 Math
console.log('반올림 3.15, 3.56 : ', Math.round(3.14), Math.round(3.56))
console.log('올림 3.15, 3.56 : ', Math.ceil(3.14), Math.ceil(3.56))
console.log('내림 3.15, 3.56 : ', Math.floor(3.14), Math.floor(3.56))