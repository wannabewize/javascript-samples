var array = ['Porche', 'BMW', 'Mercedes Benz'];
var array2 = new Array(3);
var array3 = new Array('Bus', 'Metro', 'Walk');
var ret;
var newArray;

console.log(array);
console.log(array2);
console.log(array3);


// array1은 그대로, 새로운 배열이 생성된다.
newArray = array.concat(['Audi']);
// [ 'Porche', 'BMW', 'Mercedes Benz' ] [ 'Porche', 'BMW', 'Mercedes Benz', 'Audi' ]
console.log('concat : ', array, newArray);

// 문자열로 변환
ret = newArray.join(' or '); 
// 'Porche or BMW or Mercedes Benz or Audi'
console.log('join : ',ret);

delete newArray[2];
console.log(newArray[2]); // undefined
// Porche and BMW and  and Audi
console.log(newArray.join(' and ')); 

// array은 그대로
newArray = array.slice(0, 2)
// [ 'Porche', 'BMW', 'Mercedes Benz' ] [ 'Porche', 'BMW' ]
console.log('slice : ', array, newArray);

// 치환 - array1이 변경됨
newArray = array.splice(3, 1, 'Ferrari', 'Ford');
// [ 'Porche', 'BMW', 'Mercedes Benz', 'Ferrari', 'Ford' ] []
console.log('splice1 : ',array, newArray);

// 삭제
newArray = array.splice(4, 1); 
// [ 'Porche', 'BMW', 'Mercedes Benz', 'Ferrari' ] [ 'Ford' ]
console.log('splice2 : ',array, newArray);

ret = array.pop(); 
//[ 'Porche', 'BMW', 'Mercedes Benz' ] Ferrari
console.log('pop : ',array, ret);

ret = array.push('Toyota');
// [ 'Porche', 'BMW', 'Mercedes Benz', 'Toyota' ] 4
console.log(array, ret); 

ret = array.shift();
// [ 'BMW', 'Mercedes Benz', 'Toyota' ] Porche
console.log('shift : ', array, ret);

ret = array.unshift('Lamborghini');
//  [ 'Lamborghini', 'BMW', 'Mercedes Benz', 'Toyota' ] 4
console.log('unshift : ', array, ret);

// reverse : 역순으로 변경
array.reverse();
// [ 'Toyota', 'Mercedes Benz', 'BMW', 'Lamborghini' ]
console.log('reverse : ', array);

array.sort();
// [ 'BMW', 'Lamborghini', 'Mercedes Benz', 'Toyota' ]
console.log('sort : ', array);

array.sort(function sortFunc(item1, item2) {
   return item1.length > item2.length;
});
// [ 'BMW', 'Toyota', 'Lamborghini', 'Mercedes Benz' ]
console.log('sort2 : ', array);

// 4
console.log('length : ', array.length);

// 'BMW,Toyota,Lamborghini,Mercedes Benz'
console.log(array.toString());
