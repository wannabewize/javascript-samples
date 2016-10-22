/**
 * 변수 스코프
 */

console.log('== Example1 ==');
var value1 = 0;
{
	var value1 = 1;
}
console.log('value1 = ', value1);


console.log('== Example2 ==');

for ( var value2 = 0 ; value2 < 10 ; value2++ ) {

}

console.log('value2 = ', value2);


console.log('== Example3 ==');

var value3 = 1;
function fn() {	
	var value3 = 2;
	console.log('value3 = ', value3);
}

console.log('value3 = ', value3); // 1
fn(); // 2
console.log('value3 = ', value3); // 1