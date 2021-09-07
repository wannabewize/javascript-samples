/**
 * 문자열 다루기
 */

var str = 'Hello JavaScript';
console.log('typeof str :', typeof str); // 'string'

// 문자열 덧붙이기
var str2 = 'Hello' + ' JavaScript';
console.log('+ : ',str2);
var str3 = 'Hello'.concat(' JavaScript');
console.log('concat : ', str3)

// 문자열 비교
console.log('str == str2 :', str == str2); // true
console.log('str === str3 :', str === str3); // true

var newStr, ret;

// 문자열 내 위치 찾기
console.log('indexof : ', str.indexOf('Sc'), str.indexOf('sc')); // 10, -1
console.log('lastIndexOf : ', str.lastIndexOf('ri')); // 12

// char 타입은 없으니, string
var ch = str.charAt(2);
console.log('charAt : ', ch, typeof ch); // l, string

// 원 문자열은 그대로
newStr = str.slice(1, 4);
console.log('slice(1, 4) : ', newStr); // ell

// 부분 문자열
newStr = str.substring(1, 4);
console.log('substring(1, 4) : ',newStr); // ell

// start, length
newStr = str.substr(1, 4);
console.log('substr : ', newStr); // ello

// 특정 문자로 분리
newStr = str.split('a');
console.log('split : ', newStr); // [ 'Hello J', 'v', 'Script' ]

// 정규식
ret = str.match(/a/g);
// [ 'a', index: 7, input: 'Hello JavaScript' ]
console.log('match : ', ret);

// 정규식을 이용한 변환
newStr = str.replace(/a/g, 'A');
// Hello JAvAScript
console.log('replace : ', newStr);


//
// String 타입
//
var strObj = new String('Hello JavaScript');
console.log('String Object Type :', typeof strObj);

var strObj2 = new String('Hello JavaScript');

console.log('str == strObj1 :',str == strObj); // true
console.log('str === strObj1 :',str === strObj); // false

console.log('strObj1 == strObj2 :',strObj == strObj2); // false
console.log('strObj1 === strObj2 :',strObj === strObj2); // false
console.log('strObj1.toString() === strObj2.toString() :',strObj.toString() === strObj2.toString()); // true
