// 변수의 데이터 타입 - Dynamic Type

var intVal = 10;
intVal = [10, 20];
console.log(intVal);

var strVal = '문자열';
strVal = 12;
console.log(strVal);


var x = 10;
console.log('typeof x : ',typeof x);

if ( (typeof x) === 'number' ) {
    console.log('x는 Number Type');
}