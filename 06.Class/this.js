/**
 * this
 */

function Person(name) {
   this.name = name;

   this.getName = function() {
      console.log(this.constructor);
      return this.name;
   };

   this.letMeIntroduce = function() {
      var self = this;
      return function() {
         // this는 클로저에서 Object
         console.log('this.constructor :',this.constructor);
         console.log('this instanceof Person :' ,this instanceof Person);
         console.log('My Name is ' + this.name);
         console.log('My Name is ' + self.name);
      };
   };

   this.withArrow = function() {
      return () => {
         console.log('this instanceof Person :' ,this instanceof Person);
         console.log('My Name is ' + this.name);
      };
   };
}

var obj = new Person('쯔위');
console.log(obj.getName());

console.log('== this 가려짐');
var introduce = obj.letMeIntroduce();
introduce();

console.log('== With Arrow functon');
obj.withArrow()();