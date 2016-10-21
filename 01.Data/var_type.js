/**
 * 변수의 타입 알기 : typeof
 */

var val = 10;
console.log('10 type : ', typeof(val)); // number

val ='10';
console.log('"10" type : ', typeof val); // string

val = true
console.log('true type : ', typeof val); // boolean

val = [1, 2, 3];
console.log('[1, 2, 3] type : ', typeof(val)); // object

val = {one:1, two:2}
console.log('{one:1, two:2} type : ', typeof(val)); // object


//
// type 비교하기
//

var x = 10;

if ( (typeof x) == 'number' ) {
    console.log('x는 Number 타입');
}
else {
    console.log('x는 Number 타입이 아니다.');
}

var y = '10';

if ( typeof(x) == typeof(y) ) {
    console.log('x, y 두 타입은 같다.');
}
else {
    console.log('x, y 두 타입은 다르다.');
}

x = '20';
console.log('x에 "20" 대입');
if ( typeof(x) == typeof(y) ) {
    console.log('x, y 두 타입은 같다.');
}
else {
    console.log('x, y 두 타입은 다르다.');
}