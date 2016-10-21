/**
 * Object 타입
 */

var iu = {
    name: 'IU',
    age: 20
};

console.log('typeof person : ', typeof iu); // Object
console.log('person == object 타입?', typeof iu == 'object'); // true

// 프로퍼티 접근
iu.name = '아이유';
var age = iu.age;

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
// Object 객체로
//

var ty = new Object();
ty.name = '태연';
ty["age"] = 20;