/**
 * 날짜 다루기
 */
var d = new Date();
console.log(d);

console.log('timezone offset : ', d.getTimezoneOffset()/60);

// 0, 15
console.log('hour : ', d.getHours(), d.getUTCHours());

console.log('GMT : ', d.toGMTString());
console.log('UTC : ', d.toUTCString());
console.log('Local : ', d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());


var d2 = new Date(2016, 11, 24, 23, 59, 59);
console.log('GMT : ', d2.toGMTString());
console.log('GMT : ', d2.toLocaleString());


var interval = Date.parse('2015/12/24 12:23:34');
var d3 = new Date(interval);
console.log(d3.toLocaleString());

var interval2 = Date.parse('2016-05-01 15-10-10');
var d4 = new Date(interval2);
console.log(d4.toLocaleString()); // Invalid Date
