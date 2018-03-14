// 'use strict'

console.log('== Redeclaration');

var varValue = 1;
var varValue = 2;
console.log(varValue);

// Redeclaration Error on let
let letVal1 = 1;
// Error
// let letVal1 = 2; 


console.log('== Hoisting');

console.log('value2 : ', varValue2);
var varValue2 = 10

console.log('letVal2 = ', letValue2); // Error
let letValue2 = 10;