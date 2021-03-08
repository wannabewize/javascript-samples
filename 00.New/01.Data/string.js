//
// backquote(`)를 이용한 문자열
//

const a = 5;
const b = 10;

const str1 = a + ' + ' + b + ' = ' + (a + b);
const str2 = `${a} + ${b} = ${a + b}`;
console.log(str1);
console.log(str2);


const str3 = 'Hello \nJavascript';

// `를 이용한 문자열은 엔터 적용 가능
const str4 = `Hello 
Multi-line
String`;

console.log(str3);
console.log(str4);