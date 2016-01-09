function Rectangle(w, h) {
   this.width = w;
   this.height = h;
}

var obj1 = new Rectangle(10, 10);

console.log(obj1.prototype); // undefined
/**
 * constructor
 */
console.log(obj1.constructor);
console.log(obj1.constructor == Rectangle); // true
console.log(obj1.constructor === Rectangle); // true

var obj2 = new Rectangle(20, 20);
console.log(obj1.constructor == obj2.constructor); // true
console.log(obj1.constructor === obj2.constructor);   // true

/**
 * constructor를 이용한 객체 생성
 */
var obj3 = new obj1.constructor(30, 30);
console.log(obj3);
