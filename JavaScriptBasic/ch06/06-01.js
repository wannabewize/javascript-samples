var Car = function () {};

var car1 = new Car();

Car.prototype.startEngine = function() {
   console.log('START');
}

var car2 = new Car();

car1.startEngine();
car2.startEngine();

// getPrototypeOf
console.log(Object.getPrototypeOf(car1));


Car.prototype = {
   startEngine:function() {
      console.log('시동 걸기');
   },
   accelerate:function() {
      console.log('가속하기');
   }
}

Car.prototype.stop = function() {
   console.log('정지');
}


var car3 = new Car();

car1.startEngine();   // START
try {
   car1.accelerate(); // ERROR
} catch (err) {
   console.error('err : ', err);
}

car3.startEngine(); // 시동걸기
car3.accelerate(); // 가속하기
