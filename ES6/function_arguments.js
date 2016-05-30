// ES5
console.log('== ES5 ==');
function sayHelloTo(who) {
   // arguments - Object
   console.log('who : ', who, ' arguments : ', arguments);
   
   for ( var key in arguments ) {
      console.log('Hello ', arguments[key]);
   }
}

sayHelloTo('IU', 'Inna');

// ES6
console.log('== ES6 ==');
function wantToBuy(...things) {
   console.log('count : ', things.length);
   things.forEach(function(item, index, array) {
      console.log('I want to buy ' + item);
   });
}

wantToBuy('iMac', 'iPhone', 'New Macbook');