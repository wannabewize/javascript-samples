function Person(name) {
   this.name = name;

   this.getName = function() {
      console.log(this.constructor);
      return this.name;
   }

   this.letMeIntroduce = function() {
      var self = this;
      return function() {
         console.log(this.constructor);
         console.log('My Name is ' + this.name);
         console.log('My Name is ' + self.name);
      }
   }
}

var obj = new Person('쯔위');
console.log(obj.getName());

var introduce = obj.letMeIntroduce();
introduce();