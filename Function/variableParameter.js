// ES5
console.log('== ES5 ==');
function sayHelloTo(who) {
   // arguments - Object
   console.log('who : ', who, ' arguments : ', arguments);
   
   for ( var key in arguments ) {
      console.log('For-in Loop ', arguments[key]);
   }

   for(var i = 0 ; i < arguments.length ; i++ ) {
      console.log('C style Loop : ', arguments[i]);
   }
}

sayHelloTo('IU', 'YuInna', 'Taeyon');

// ES6
console.log('== ES6 ==');
function wantToBuy(...things) {
   console.log('things : ', things);

   for(var i = 0 ; i < things.length ; i++) {
      console.log('I want to buy ' + things[i]);
   }
}

wantToBuy('iMac', 'iPhone', 'New Macbook');