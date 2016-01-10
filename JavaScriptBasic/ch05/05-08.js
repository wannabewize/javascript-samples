function Rectangle(w, h) {
   this.width = w;
   this.height = h;
}

var obj1 = new Rectangle(10, 10);


/**
 * constructor
 */

console.log('Rectangle : ',Rectangle);
console.log('obj.constructor : ',obj1.constructor);
console.log('obj.constructor == Rectangle : ',obj1.constructor == Rectangle); // true
console.log('obj.constructor.prototype == Rectangle.prototype : ', obj1.constructor.prototype === Rectangle.prototype); // true

var obj2 = new Rectangle(20, 20);
console.log(obj1.constructor == obj2.constructor); // true
console.log(obj1.constructor === obj2.constructor);   // true

/**
 * constructor를 이용한 객체 생성
 */
var obj3 = new obj1.constructor(30, 30);
console.log(obj3);
