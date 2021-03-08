const array = ['one', 'two', 'three', 'four'];

// 인덱스를 이용한 순회
console.log('C style For loop');
for(let i = 0 ; i < array.length ; i++) {
   const item = array[i];
   console.log(item)
}

// for-of
console.log('For of');
for(const item of array) {
   console.log(item);
}

console.log('For-Each');
array.forEach( (value, index, array) => {
   console.log(`forEach ${value} = ${index}`);
});
