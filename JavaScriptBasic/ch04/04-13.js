function makeId() {
   var lastId = 0;
   
   return function() {return ++lastId};
}

var idFunc = makeId();

console.log(idFunc());
console.log(idFunc());
console.log(idFunc());
