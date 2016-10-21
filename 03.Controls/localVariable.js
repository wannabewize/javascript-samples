var globalVariable = 100;


function sayHello() {
    var localVariable = 90;

    console.log('global variable : ', globalVariable);
    console.log('local variable : ', localVariable);

    // var 없이 정의하면 global
    globalVariable2 = 80;
}

sayHello();

console.log('gloval variable : ', globalVariable);
console.log('gloval variable2 : ', globalVariable2);
console.log('local variable : ', localVariable); // Error