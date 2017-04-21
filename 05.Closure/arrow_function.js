// Arrow Function

// function object
const helloFn = () => {
    console.log('Hello JavaScript');
}
helloFn()

const greet = (who) => {
    console.log('Hello' + who);
}

greet(' ArrowFunction');


// parameter
function doIt(what) {
  what();
}

doIt( () => {
  console.log('Arraw Function')
} );


// return

function getRandom(num) {
    return () => {
        return Math.floor( Math.random() * num )
    }
}

const randomFn = getRandom(10);
for ( var i = 0 ; i < 10 ; i++ ) {
    console.log('random : ' + randomFn());
}
