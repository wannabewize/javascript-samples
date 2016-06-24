var num1 = 255;

var newNum;

newNum = num1.toExponential(3);
// 2.550e+2
console.log(newNum);

var num2 = 123.456789;

newNum = num2.toFixed(0);
// 123.456789 123 123.46
console.log('toFixed : ', num2, newNum, num2.toFixed(2));

newNum = num2.toPrecision(2);
// 123.456789 1.2e+2 123.5
console.log('toPrecision : ', num2, newNum, num2.toPrecision(4));