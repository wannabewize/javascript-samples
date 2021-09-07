/**
 * 함수
 */

// 함수 정의와 사용
function sayHello() {
    console.log('hello');
}
sayHello();

// function expression
const hello = function() {
    console.log('Hi~');
}
hello();

// 반환값
function thankYou() {
    return 'and you?';
}
const ret = thankYou(); 

// Parameter
function say(what) {
    console.log('say ' + what);
}

say('How are you');

const sayHelloTo = function(who) {
    console.log('Hello ' + who);
} 

const ret2 = sayHello();
console.log('return value of Non-return function :', ret2); // undefined

const sayGiveMeMoney = (amount) => {
    console.log('give me money ', amount);
}
sayGiveMeMoney('all');