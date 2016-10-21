/**
 * 클로저
 */

var hello = function() {
   console.log('Hello');
}

function sayHello() {
   return hello;
}

var ret = sayHello()
ret();



// with inner function
//
function sayHi() {
   function hi() {
      console.log('hi');
   }
   return hi;
}

var ret2 = sayHi();
ret2();


// with inline
//
function sayThankyou() {
   return function() {
      console.log('Thank you');
   };
}

var ret3 = sayThankyou();
ret3();



