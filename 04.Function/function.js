/**
 * 함수
 */

function sayHello() {
    console.log('hello');
}
sayHello();

// function expression
var hello = function() {
    console.log('Hi~');
}
hello();

// Return
function thankYou() {
    return 'and you?';
}
var ret = thankYou(); 

// Parameter
function say(what) {
    console.log('say ' + what);
}

say('How are you');

var sayHelloTo = function(who) {
    console.log('Hello ' + who);
} 


var ret2 = sayHello();
console.log('return value of Non-return function :', ret2); // undefined
