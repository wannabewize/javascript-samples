/**
 * Infinity Number
 */
console.log('== Infinity ==\n');

console.log('typeof(Infinity) :',typeof(Infinity))

var val = 1 / 0;
console.log('val = 1 / 0 : ', val);
console.log('val == Infinity :', val == Infinity);

console.log('Infinity + 1 =', val + 1);
console.log('Infinity - 1 =', val - 1);

console.log('isNaN(Infinity) :', isNaN(val));


//
// -Infinity 
//
console.log('\n== -Infinity==\n');
var val2 = -1 / 0;
console.log('val2 = -1  / 0 :', (-1 / 0));
console.log('val2 == Infinity :', val2 == Infinity);
console.log('val2 == -Infinity :', val2 == -Infinity);

console.log('Infinity + -Infinity =', val + val2)
