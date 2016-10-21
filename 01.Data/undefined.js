// undefined Example

var x;
console.log(x);

if ( x ) {
    console.log('if( x )');
} else {
    console.log('if ( x ) else ');
}

if ( ! x ) {
   console.log('if( !x )');
} 

if ( x == undefined ) {
    console.log('if ( x == undefined) ');
}

if ( x === undefined ) {
    console.log('if ( x === undefined )');
}

if ( x == "undefined" ) {
    console.log('if ( x == "undefined" )');
}