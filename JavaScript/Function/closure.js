function makeRandom(to) {
   return Math.floor( Math.random() * to )
}

console.log('makeRandom(10) : ',makeRandom(10));

function makeRandomFn(to) {
   function fn() {
      return Math.floor( Math.random() * to );
   }
   return fn;
}

var random10 = makeRandomFn(10);
console.log('random10 : ', random10());

var random100 = makeRandomFn(100);
console.log('random100 : ', random100());


function makeId() {
   var lastId = 0;

   function fn() {
      return ++lastId;
   }
   
   return function(){
      return ++lastId
   };
}

var idFunc = makeId();

console.log(idFunc());
console.log(idFunc());
console.log(idFunc());
