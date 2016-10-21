/**
 * Object, Property, Method
 */

var obj = {
   name : '아이유',
   phone : '010-1234-5678',

   sing : function() {
      console.log('좋은날~');
   },

   introduce : function() {
      console.log('내 이름은 ' + this.name);
   }
};

// 프로퍼티 접근
obj.name = 'IU';
obj['phone'] = '010-5678-1234';

console.log(obj);

// 문자열 변수를 이용한 프로퍼티
var propName = 'friend';
obj[propName] = 'YuInna'

console.log(obj);

// 메소드 실행
obj.sing();

obj.introduce();

// 메소드, 외부 설정
obj.dance = function() {
   console.log('분홍신');
}

obj.dance();