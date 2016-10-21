/**
 * 배열
 */
var array = ['Porche', 'BMW', 'Mercedes Benz'];
var ret;
var newArray;

console.log('array : ', array);
console.log('typeof : ', typeof array); // object

// length
console.log('== length')
console.log('array : ', array);
console.log('length : ', array.length);

console.log('== push');
console.log('Before :', array);
ret = array.push('Toyota'); // [ 'Porche', 'BMW', 'Mercedes Benz', 'Toyota' ]
console.log('After :', array);
console.log('push result :', ret); 

console.log('== pop');
console.log('Before :', array);
ret = array.pop(); // [ 'Porche', 'BMW', 'Mercedes Benz' ]
console.log('After :', array); 
console.log('pop Result : ', ret);

// 새로운 배열이 생성된다.
console.log('== concat')
newArray = array.concat(['Audi']);
console.log('origin : ', array);
console.log('newArray : ', newArray);

console.log('== delete');
console.log('Before : ', newArray)
ret = delete newArray[2];
console.log('delete ret :', ret);
console.log('After :', newArray);

console.log('== slice')
console.log('Before : ', array);
// array은 그대로
newArray = array.slice(0, 2)
console.log('After : ', array);
console.log('slice(0,2) result : ', newArray);

console.log('== splice');
console.log('Before : ', array);
// 치환 - array1이 변경됨
newArray = array.splice(3, 1, 'Ferrari', 'Ford');
console.log('After : ', array);
console.log('splice(3, 1, Ferrari, Ford) result : ',newArray);

// 삭제
console.log('== splice for delete');
console.log('Before : ', array);
newArray = array.splice(4, 1); 
console.log('After : ', array);
console.log('splice(4, 1) Result : ',newArray);


console.log('== shift');
console.log('Before :', array);
ret = array.shift();
console.log('After :', array);
console.log('shift result :', ret);

console.log('== unshift');
console.log('Before :', array);
ret = array.unshift('Lamborghini');
console.log('After :', array);
console.log('unshift(Lamborghini) result : ', ret);

// reverse : 역순으로 변경
console.log('== reverse');
console.log('Before :', array);
ret = array.reverse();
console.log('After :', array);
console.log('reverse result : ', ret);

console.log('== sort');
console.log('Before :', array);
newArray = array.sort();
console.log('After :', array);
console.log('sort result : ', newArray);

console.log('== sort2');
console.log('Before :', array);
array.sort(function sortFunc(item1, item2) {
   return item1.length > item2.length;
});
console.log('After :', array);

// 문자열로 변환
console.log('== join');
console.log('array : ', array)
ret = array.join(' or '); 
console.log('join : ',ret);

// 문자열로
console.log('== toString');
console.log('array : ', array);
console.log('toString result :',array.toString());


//
// Array 타입
//
var array2 = new Array(3);
var array3 = new Array('Bus', 'Metro', 'Walk');

console.log('new Array(3) :',array2);
console.log('new Array("item") :',array3);
