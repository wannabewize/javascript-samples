/**
 * 클로저와 컨텍스트
 */

function makeId() {
   var lastId = 0;

   return function() {
      return ++lastId
   };
}

var idFunc = makeId();

console.log(idFunc());
console.log(idFunc());
console.log(idFunc());

var idFund2 = makeId();
console.log(idFund2());
console.log(idFund2());