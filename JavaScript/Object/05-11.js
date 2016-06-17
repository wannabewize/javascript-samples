function Rectangle(w, h) {
   this.width = w;
   this.height = h;
}

Rectangle.prototype.size = function() {
   return this.width * this.height;
}

/**
 * 프로토타입에 프로퍼티 추가
 */
Rectangle.prototype.x = 10;

var obj1 = new Rectangle(10, 10);
var obj2 = new Rectangle(10, 10);

console.log('obj1.x : ',obj1.x); // 10

var obj2 = new Rectangle(20, 20);
console.log('obj2.x : ',obj2.x); // 10

obj1.x = 30;
console.log('obj1.x : ',obj1.x); // 30
console.log('obj2.x : ', obj2.x); // 10

// 객체형
Rectangle.prototype.point = {x : 0, y : 0};
console.log('obj1.point : ', obj1.point); // 0, 0
console.log('obj2.point : ', obj2.point); // 0, 0

obj1.point.y = 10;
console.log('obj1.point : ', obj1.point); // 0, 10
console.log('obj2.point : ', obj2.point); // 0, 10


// 이렇게 정의한 것은, 기존 객체에 영향을 주지 않는다.
Rectangle.prototype = {
   name : function() {
      return 'Rectangle';
   }
}

try {
   console.log(obj1.name()); // Error   
}
catch ( err ) {
   console.error('Error : ', err);
}

var obj3 = new Rectangle(30, 30);
console.log(obj3.name()); // Rectangle
console.log(obj3.point); // undefine
try {
   console.log(obj3.size()); // obj3.size is not a function   
}
catch ( err ) {
   console.log('Error : ', err);
}


