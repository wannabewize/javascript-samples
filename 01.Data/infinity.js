/**
 * Infinity Number
 */

var val = 1 / 0;
console.log('1 / 0 : ', val );

var val2 = -1 / 0;
console.log('-1  / 0 =', (-1/0) )

console.log('Infinity + 1 =', val + 1);
console.log('Infinity - 1 =', val - 1);
console.log('Infinity + -Infinity =',val + val2)

if ( isNaN(val) ) {
   console.log('isNaN(Infinity) 비교 성공');
}

if ( val == Infinity ) {
   console.log('val은 Infinity');
}

if ( val2 == Infinity ) {
   console.log('val2는 Infinity');
}
else {
   console.log('val2는 Infinity가 아니다.');
}



