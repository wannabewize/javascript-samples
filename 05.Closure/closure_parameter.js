/**
 * 클로저를 파라미터로
 */


var hello = 'Hello';

function sayWhat(msg) {
  console.log(msg);
}

sayWhat(hello);

//
// Function Parameter
var sayHello = function() {
  console.log('Hello');
}

function say(what) {
  what();
}

say(sayHello)

//
// Inline
function doIt(what) {
  what();
}

doIt( function() {
  console.log('just do it!');
});


//
// Clousre Parameter
function add(i, j, handler) {
  var ret = i + j;
  handler(ret);
}

function handleAddResult(sum) {
  console.log('Handling Result : ', sum);
}

add(1, 2, handleAddResult);

add(1, 2, function(ret) {
  console.log('1 + 2 = ', ret);
});
