/**
 * Inner Function
 */

function circle(radius) {
    var pi = 3.14;
    function area(r) {
        return r * r * pi;
    }
    return area(radius);
}
var ret = circle(3);
console.log(ret);