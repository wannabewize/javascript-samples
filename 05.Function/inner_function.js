/**
 * Inner Function
 */

 function goodNight() {
    function say() {
        console.log('good night');        
    }

    say();
}

goodNight();
// Error
//say();


function circle(radius) {
    var pi = 3.14;
    function area(r) {
        return r * r * pi;
    }
    return area(radius);
}
var ret = circle(3);
console.log(ret);