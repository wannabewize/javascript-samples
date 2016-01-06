var x = 'global x';
var y = 'global y';

function func() {
   var x = 'local x';
   y = '???';
   
   console.log('x', x);
   console.log('y', y);
}

console.log('== func 호출 전');
console.log('x', x);
console.log('y', y);

console.log('== func 호출');
func();

console.log('== func 호출 후');
console.log('x', x);
console.log('y', y);
