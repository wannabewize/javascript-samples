var str = 'Hello JavaScript';
var str2 = new String('Hello JavaScript');
var str3 = new String('Hello JavaScript');

console.log(str == str2); // true
console.log(str === str2); // false

console.log(str2 == str3); // false
console.log(str2 === str3); // false
console.log(str2.toString() === str3.toString()); // true

var newStr, ret;

// 10, -1
console.log('indexof : ', str.indexOf('Sc'), str.indexOf('sc'));
// 12
console.log('lastIndexOf : ', str.lastIndexOf('ri'));

// char 타입은 없으니, string
var ch = str.charAt(2);
console.log('charAt : ', ch, typeof ch); // l, string

// 원 문자열은 그대로
newStr = str.slice(1, 4);
// Hello JavaScript ell
console.log('slice : ', str, newStr);

newStr = str.substring(1, 4);
// Hello JavaScript ell
console.log('substring : ', str, newStr);

// start, length
newStr = str.substr(1, 4);
// Hello JavaScript ello
console.log('substr : ', str, newStr);

newStr = str.split('a');
// Hello JavaScript [ 'Hello J', 'v', 'Script' ]
console.log('split : ', str, newStr);

ret = str.match(/a/g);
// [ 'a', index: 7, input: 'Hello JavaScript' ]
console.log('match : ', ret);

newStr = str.replace(/a/g, 'A');
// Hello JAvAScript
console.log('replace : ', newStr);




