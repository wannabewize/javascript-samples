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

// Arrow Function ( ES6 )
doIt( () => {
  console.log('Arraw Function')
} );

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


// Arrow Function
add(3, 4, (ret) => {
  console.log('3 + 4 = ', ret);
});
// 파라미터가 1개는 괄호 생략 가능
add(5, 6, ret => {
  console.log('5 + 6 = ', ret);
});
add(7, 8, ()=>{
  console.log('No Parameter');
});
