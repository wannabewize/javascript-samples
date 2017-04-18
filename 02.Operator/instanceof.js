/**
 * instanceof
 */

// 넘버
console.log('== Number');
console.log('num1 = 1, num2 = new Number(1)');
var num1 = 1;
var num2 = new Number(1);
console.log('num1 typeof :', typeof num1);
console.log('num2 typeof :', typeof num2);
console.log('num1 == num2 :', num1 == num2);
console.log('num1 === num2 :', num1 === num2);
console.log('num1 instanceof Number :', num1 instanceof Number); // false
console.log('num2 instanceof Number :', num2 instanceof Number); // true

// 문자열
console.log('\n== String');
console.log("str1 = 'Hello', str2 = new String('Hello')");
var str1 = 'Hello';
var str2 = new String('Hello');
console.log('str1 typeof :', typeof str1); // string
console.log('str2 typeof :', typeof str2); // object
console.log('str1 instanceof String :', str1 instanceof String); // false
console.log('str2 instanceof String :', str2 instanceof String); // true

// 배열
console.log('\n== Array');
console.log('array1 = [1, 2, 3], array2 = new Array(1, 2, 3)');
var array1 = [1, 2, 3];
var array2 = new Array(1, 2, 3);
console.log('array1 typeof :', typeof array1); // object
console.log('array2 typeof :', typeof array2); // object
console.log('array1 == array2 :', array1 == array2); // false
console.log('array1 instanceof Array :', array1 instanceof Array); // true
console.log('array2 instanceof Array :', array2 instanceof Array); // true

// 생성자 함수
console.log('\n== Function Class');
function Clazz(name) {
   this.name = name;
}

function Klazz(name) {
   this.name = name;
}

var c = new Clazz("instance1");
var k = new Klazz("instance2");

console.log('Clazz instanceof Clazz :',c instanceof Clazz);		//true
console.log('Clazz instanceof Klazz :',c instanceof Klazz);		//false
console.log('Klazz instanceof Object :',k instanceof Object);	//true

// 클래스
console.log('\n== Class');
class MyClass {   
}

var obj = new MyClass();
console.log('obj typeof :', typeof obj); // object
console.log('ob instanceof MyClass :', obj instanceof MyClass); // true
console.log('ob instanceof Object :', obj instanceof Object); // true