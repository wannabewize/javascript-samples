console.log('== primitive type ==');
var a = 10;
var b = a;
a = 20;
console.log(b); // 10

console.log('== reference type ==');
var c = { foo : 10 };
var d = c;
c.foo = 20;

console.log(d.foo);  //  20