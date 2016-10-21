/**
 * 프로퍼티
 */

function Person(name, age) {
   // 공개
   this.name = name;
   // 비공개
   var age = age;

   this.whatsYourName = function() {
      return this.name;
   }
   this.howOldAreYou = function() {
      return age;
   }
}

var sulhyun = new Person('설현', 21);

console.log('sulhyun.name : ',sulhyun.name);
console.log('sulhyun.age : ',sulhyun.age);

console.log('Whats your name : ', sulhyun.whatsYourName());
console.log('How old are you? : ', sulhyun.howOldAreYou());

console.log('hasOwnProperty(name) :', sulhyun.hasOwnProperty('name'));
console.log('hasOwnProperty(birth) :', sulhyun.hasOwnProperty('birth'));

// 프로퍼티 삭제
delete sulhyun.name;
console.log('hasOwnProperty After Delete : ', sulhyun.hasOwnProperty('name'));