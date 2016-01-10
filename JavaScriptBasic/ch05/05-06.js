function Rectangle(w, h) {
   this.width = w;
   this.height = h;   
}

console.log(Rectangle.prototype);
console.log(Rectangle.constructor);

var obj1 = new Rectangle(10, 10);
console.log(obj1.hasOwnProperty('width')); // true

Rectangle.prototype.size = function() {
   return this.width * this.height;
}

/**
 * prototype에 작성한 프로퍼티는 hasOwnProperty에서는 false
 */
console.log('obj1.hasOwnProperty(size) : ',obj1.hasOwnProperty('size'));
console.log('size : ', obj1.size());

var obj2 = new Rectangle(20, 20);
console.log('size : ', obj2.size());
console.log('obj2.hasOwnProperty(size) : ',obj2.hasOwnProperty('size'));  // false

