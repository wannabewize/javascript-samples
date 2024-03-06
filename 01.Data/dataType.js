/**
 * 데이터 타입
 * 변수(상수)는 타입 선언이 없고, 동적으로 할당되는 값에 의해서 타입이 정해진다.
 * 변수의 타입 알기 : typeof
 */

let val = 10;
console.log('10 type : ', typeof val); // number

val = '10';
console.log('"10" type : ', typeof val); // string

val = true
console.log('true type : ', typeof val); // boolean

val = [1, 2, 3];
console.log('[1, 2, 3] type : ', typeof val); // object

val = { one: 1, two: 2 }
console.log('{one:1, two:2} type : ', typeof val); // object


//
// type 비교하기
//

let x = 10;

if ((typeof x) == 'number') {
  console.log('x는 Number 타입');
}
else {
  console.log('x는 Number 타입이 아니다.');
}

var y = '10';

if (typeof (x) == typeof (y)) {
  console.log('10, "10" 두 타입은 같다.');
}
else {
  console.log('10, "10" 두 타입은 다르다.');
}

x = '20';
if (typeof (x) == typeof (y)) {
  console.log('"20", "10" 두 타입은 같다.');
}
else {
  console.log('"20", "10" 두 타입은 다르다.');
}