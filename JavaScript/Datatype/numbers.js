// 16진수형, 10진수형, 8진수형
console.log('== Number ==');
console.log(0x0F); // 15
console.log(15);   // 15
console.log(017);  // 15

// 정수로 변환
console.log('== parseInt ==')
console.log(parseInt("123") , typeof parseInt("1234"));  // number
console.log(parseInt("123px"), typeof parseInt("123px")); // number

// 실수로 변환
console.log('== parseFloat ==')
console.log(parseFloat("123.45"));     // 123.45
console.log("123" - 0);                // 123

// 정수와 실수 비교
console.log(123 == 123.0);   // true
console.log(123 === 123.0);   // true


// Nan
console.log('== NaN ==');
console.log(0 / 0);        // NaN
console.log(NaN == NaN);   // false
console.log(1 == NaN );    // false

// isNan
console.log('== isNaN ==');
console.log(isNaN(1));     // false
console.log(isNaN('a'));   // true
console.log(isNaN(NaN));   // true
