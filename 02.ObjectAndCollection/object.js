/**
 * Object 타입
 */

var iu = {
    name: 'IU',
    age: 20
};

console.log('typeof iu :', typeof iu); // Object
console.log('iu == object 타입 :', typeof iu == 'object'); // true

// 객체의 프로퍼티 변경
iu.name = '아이유';
// 객체의 프로퍼티 값 얻기
var age = iu.age;
var name = iu['age'];
console.log('프로퍼티 접근 :', age, name);

// 같은 값을 가진 객체
var clone = {
    name: '아이유',
    age: 20
}

console.log('iu == clone :', iu == clone); // false
console.log('iu === clone :', iu === clone); // false

// 같은 객체 참조
var same = iu;

console.log('iu == same :', iu == same); // true
console.log('iu === same :', iu === same); // true

//
// Object 타입의 객체로 작성하기
//
console.log('\n== Object 타입의 객체 ==')
var ty = new Object();
ty.name = '태연';
ty["age"] = 20;

console.log('typeof ty :', typeof ty);