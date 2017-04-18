/**
 * For 반복문
 */
var array = ['IU', 'YuInna', 'Taeyon', 'Sulhyun'];
var obj = {
   cute: "IU",
   adorable: "YuInna",
   charm: "Taeyon",
   shine:"Sulhyun"
};


console.log('== C style For Loop')
for (var i = 0 ; i < array.length ; i++) {
   var item = array[i];
   console.log(i, item);
}

//
// For-In
//

// 배열과 For-In
console.log('== For-in with Array');

for (var index in array) {
   console.log('index : ', index, ' element : ',array[index]);
}

// 객체와 For-In
console.log('== For-in with Object');
for (var prop in obj) {
   console.log('property name : ', prop + " value : " + obj[prop]);
}

//
// For Each
//
console.log('== For Each with Array');
array.forEach( (value, index, array) => {
    console.log(index, value)
});

