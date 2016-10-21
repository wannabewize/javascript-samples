/**
 * For 반복문
 */
var array = ['IU', 'YuInna', 'Taeyon', 'Sulhyun'];

console.log('== C style For Loop')
for (var i = 0 ; i < array.length ; i++) {
   var item = array[i];
   console.log(i, item);
}

// With Object
console.log('== For-in with Object');
var obj = {
   cute: "IU",
   adorable: "YuInna",
   charm: "Taeyon",
   shine:"Sulhyun"
};

for (var prop in obj) {
   console.log('property name : ', prop + " value : " + obj[prop]);
}

// With Array
console.log('== For-in with Array');

for (var index in array) {
   console.log('index : ', index, ' element : ',array[index]);
}
