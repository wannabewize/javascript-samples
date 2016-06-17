console.log('a' || 'b'); // a
console.log(false || 'b');
console.log(undefined || 'b');

var input;
var var1 = input || 'default';
console.log(var1); // default

var var2;
if ( input ) {
   var2 = 'default';
}
console.log(var2);

console.log('a' && 'b'); // b
console.log(false && 'b'); // false
console.log(undefined && 'b'); // undefined

var var3 = input && 'default';
console.log(var2); // undefined
