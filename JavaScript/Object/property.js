function Person(name, age) {
   this.name = name;
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


function MyClass() {
   this.prop1 = 1;
   this.prop2 = 2;
   this.prop3 = 3;
}

var obj = new MyClass();
console.log(obj);

console.log(obj.prop1);
console.log(obj["prop2"]);
var name = "prop3";
console.log(obj[name]);

// 프로퍼티 추가
obj.newProperty = 4;

// 프로퍼티 확인
console.log('hasOwnProperty : ',obj.hasOwnProperty('newProperty'));

// 프로퍼티 삭제
delete obj.newProperty;
console.log('hasOwnProperty : ',obj.hasOwnProperty('newProperty'));