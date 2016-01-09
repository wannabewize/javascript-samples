function Rectangle(w, h) {
   var width = w;
   var height = h;
   this.toString = function() {
      return 'width : ' + width + ' height : ' + height;
   }
}

/**
 * 프로토타입에서는 private local var에 접근 불가
 */
Rectangle.prototype.size = function() {
   // Error
   // return width * height;
}

var obj = new Rectangle(10, 10);
console.log(obj.size());

console.log(obj.toString());

