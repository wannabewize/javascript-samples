var Car = function () {};

/**
 * 프로토타입에 메소드 작성 전
 */
var car1 = new Car();

Car.prototype.startEngine = function() {
   console.log('START');
}

var car2 = new Car();

car1.startEngine(); // START
car2.startEngine(); // START

// getPrototypeOf
console.log(Object.getPrototypeOf(car1)); // { startEngine: [Function] }

Car.prototype = {
   startEngine:function() {
      console.log('시동 걸기');
   },
   accelerate:function() {
      console.log('가속하기');
   }
}

console.log(Car.prototype); // { startEngine: [Function], accelerate: [Function] }
car1.startEngine(); // START
car2.startEngine(); // START

var car3 = new Car();

car1.startEngine();   // START
try {
   car1.accelerate(); // ERROR
} catch (err) {
   console.error('err : ', err);
}

car3.startEngine(); // 시동걸기
car3.accelerate(); // 가속하기
