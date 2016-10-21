/**
 * 프로토타입
 */

function Rectangle(w, h) {
   this.width = w;
   this.height = h;
}

 // 초기 프로토타입의 값 : constructor
console.log('= initial');
console.log('Rectangle : ', Rectangle);
console.log('Rectangle.prototype : ', Rectangle.prototype);


// 프로토타입 정의 이전에 생성한 객체
var obj0 = new Rectangle(10, 10);

// 프로포타입내 함수 정의
Rectangle.prototype.size = function() {
   return this.width * this.height;
}
console.log('= after setting size method to prototype');
console.log('Rectangle : ', Rectangle);
console.log('Rectangle.prototype : ', Rectangle.prototype);

console.log('== object ');
console.log('obj0.size :', obj0.size()); // works

 // 객체 생성. 객체는 프로토타입의 함수를 상속. 동적으로 변경됨
var obj1 = new Rectangle(20, 20);
console.log('obj1.size :',obj1.size()); // 400


console.log('= Set additional method to prototype');
// 프로토타입에 2번째 함수 추가
Rectangle.prototype.toString = function() {
   return 'Rectangle w(' + this.width + ') h(' + this.height + ')';
}
console.log('Rectangle : ', Rectangle);
console.log('Rectangle.prototype : ', Rectangle.prototype);

console.log('obj0.toString :', obj0.toString());

console.log('= Delete method(toString) in prototype');
// 프로토타입에 정의한 함수 삭제
delete Rectangle.prototype.toString
console.log('Rectangle : ', Rectangle);
console.log('Rectangle.prototype : ', Rectangle.prototype);

console.log('obj0.toString :', obj0.toString());


// 프로토타입에 프로퍼티
function Person() {}

Person.prototype.name = 'No name';

var who = new Person();
console.log(who.name);

// 프로토콜에 있는 이름으로 덮어쓰기
who.name = 'MyName';
console.log(who.name);