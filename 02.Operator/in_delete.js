/**
 * in, delete 연산자
 */

var iu = {
    name: 'IU',
    best: '좋은날'
};

console.log('object : ', iu);
console.log('name property in Obj :', 'name' in iu);			// true
console.log('friend property in Obj :', 'friend' in iu); 		// false

var propName = 'name';
console.log('name property in Obj :',propName in iu);		// true

// 프로퍼티 제거
delete iu.best;
console.log('After delete "best"', iu);
console.log('best property in Obj :','best' in iu);       // false

// 객체 자체 삭제 - 안된다.
delete iu;
console.log('After delete Obj :', iu);

// 원시 타입 삭제 - 안된다.
var bar = '1234';
delete bar;				
console.log('After delete String :', bar);                // 1234
