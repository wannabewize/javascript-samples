/**
 * null, undefined
 */

console.log('typeof null : ', typeof null);
console.log('typeof undefined : ', typeof undefined);

var x;
console.log('x =', x);

if ( x == null ) {
   console.log('x == null' );
}
else {
   console.log('x != null' );
}

if ( x === null ) {
   console.log('x === null' );
}
else {
   console.log('x !== null' );
}

//
// null 대입
//

console.log('null 대입');
x = null;
console.log('x =', x);

if ( x ) {
   console.log('if ( x )');
}
else {
   console.log('if ( x ) else');
}

if ( !x ) {
   console.log('if ( !x )');
}

if ( x == undefined ) {
   console.log('x == undefined' );
}
else {
   console.log('x != undefined' );
}

if ( x === undefined ) {
   console.log('x === undefined' );
}
else {
   console.log('x !== undefined' );
}