/**
 * 숫자 판단하기 : isNaN
 */

console.log('== Sample codes for NaN==\n\n');

console.log('typeof NaN :', typeof NaN);

console.log('isNaN(1) :', isNaN(1));
console.log(`isNaN('1') :`, isNaN('1'));
console.log(`isNaN('Hello') :`, isNaN('Hello'));
console.log(`isNaN(0/0) :`, isNaN(0/0));
console.log(`0/0 == NaN :`, 0/0 == NaN);

console.log('\n== using undefined variable ==\n')

let x;
console.log('x :', x);
console.log(`x == undefined:`, x == undefined);
console.log('isNaN(x) :', isNaN(x));
console.log('x == NaN :', x == NaN);
console.log('x === NaN :', x === NaN);



