/**
 * 배열
 */
let array = ['Porche', 'BMW', 'Mercedes Benz'];
let ret;
let newArray;

console.log('== 배열 다루기 ==');
console.log('array : ', array);
console.log('typeof : ', typeof array); // object

// length
console.log('== length')
console.log('array : ', array);
console.log('length : ', array.length);

// 배열에 원소 추가
console.log('== push');
console.log('Before :', array);
ret = array.push('Toyota'); // [ 'Porche', 'BMW', 'Mercedes Benz', 'Toyota' ]
console.log('After :', array);
console.log('push result :', ret); 

// 배열의 마지막 원소를 제거. 제거된 원소 반환
console.log('== pop');
console.log('Before :', array);
const popped = array.pop(); // [ 'Porche', 'BMW', 'Mercedes Benz' ]
console.log('After :', array); 
console.log('pop Result : ', popped);

// 새로운 배열이 생성된다.
console.log('== concat')
const concattedArray = array.concat(['Audi']);
console.log('origin array : ', array);
console.log('concatted array : ', concattedArray);

// 배열에 원소 제거.
console.log('== delete');
let deletedArray = [...array];
console.log('Before : ', deletedArray);
const deleted = delete deletedArray[2];
console.log('delete ret :', deleted);
console.log('After :', deletedArray, 'count :', deletedArray.length);

// slice : 배열의 일부로 새로운 배열 만들기
console.log('== slice')
console.log('Before : ', array);
// 새로운 배열이 생성된다.
const slicedArray = array.slice(0, 2)
console.log('after origin array : ', array);
console.log('slice(0,2) result : ', newArray);

// splice : 배열의 일부를 치환하기
console.log('== splice');
console.log('Before : ', array);
// 치환 - array1이 변경됨
const splicedArray = array.splice(3, 1, 'Ferrari', 'Ford');
console.log('After origin array : ', array);
console.log('splice(3, 1, Ferrari, Ford) result : ',splicedArray);

// splice를 이용한 원소 제거
console.log('== splice for delete');
console.log('Before : ', array);
const splicedArray2 = array.splice(4, 1); 
console.log('After : ', array);
console.log('splice(4, 1) Result : ',splicedArray2);

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
