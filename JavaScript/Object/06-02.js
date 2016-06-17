function Car(f) {
   this.fuel = f;
}

Car.prototype = {
   startEngine : function() { console.log('Engine Start!') },
   stopEngine : function() {},
   accelerate : function() {}   
}

var Porche = function(f, m) {
   // Car.apply(this, [f]);
   Car.call(this, f);
   this.model = m;
}

// Porche.prototype = new Car();

// 다음 코드가 더 편리하지 않은가?
Porche.prototype = Car.prototype; 

Porche.prototype.stopEngine = function() { console.log('Stop Engine with fuel : ', this.fuel); }

var boxter = new Porche(100, 'Boxter');
boxter.startEngine();
boxter.stopEngine();

console.log('constructor : ', boxter.constructor); // function Object() { [native code] }

Porche.prototype.constructor = Car;
console.log('constructor : ', boxter.constructor); // function Car(f) { this.fuel = f; }
Porche.prototype.constructor = Porche;

/**
 *
 function (f, m) {  
   Car.call(this, f);
   this.model = m;
} 
 */
console.log('constructor : ', boxter.constructor);

console.log('instanceof Car : ', boxter instanceof Car);  // true
console.log('instanceof Porche : ', boxter instanceof Porche); // true