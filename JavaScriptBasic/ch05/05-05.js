function Rectangle(w, h) {
   this.width = w;
   this.height = h;
}

/**
 * 초기 프로토타입의 값 : constructor
 */
console.log(Rectangle.prototype); // Rectangle {}


/**
 * 프로포타입내 함수 정의
 */
Rectangle.prototype.size = function() {
   return this.width * this.height;
}
console.log(Rectangle.prototype); // Rectangle { size: [Function] }

/**
 * 객체 생성. 객체는 프로토타입의 함수를 상속. 동적으로 변경됨
 */
var obj1 = new Rectangle(10, 10);
console.log(obj1.prototype); // undefined

console.log(obj1.prototype); // undefined
console.log(obj1.size); // [Function]
console.log(obj1.size()); // 100


/**
 * 프로토타입에 함수 추가
 */
Rectangle.prototype.toString = function() {
   return 'Rectangle w(' + this.width + ') h(' + this.height + ')';
}

console.log(Rectangle.prototype); // Rectangle { size: [Function], toString: [Function] }

/**
 * 프로토타입에 정의한 함수 삭제
 */
delete Rectangle.prototype.toString
console.log(Rectangle.prototype); // Rectangle { size: [Function] }

/**
 * 프로토타입에 프로퍼티 추가
 */
Rectangle.prototype.x = 10;

console.log(obj1.x);

var obj2 = new Rectangle(20, 20);
console.log(obj2.x);

obj1.x = 30;
console.log(obj1.x); // 30
console.log(obj2.x); // 10