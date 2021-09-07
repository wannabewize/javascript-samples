// Reference Type
const array1 = [1, 2];

// 새로운 변수/상수에 대입
const array2 = array1;

// 배열 복제
const array3 = [...array1];

// 배열 복제와 함께 원소 추가
const array4 = [...array1, 100];

// 배열 복제와 함께 원소 추가
const array5 = [...array1, 100, 101];

// 원 배열 수정
array1.push(3);

console.log('array1 :', array1);
console.log('array2 :', array2, "array2는 array1 같은 배열(객체)인가?", array2 === array1);
console.log('array3 :', array3, "array3는 array1 같은 배열(객체)인가?", array3 === array1);
console.log('array4 :', array4, "array4는 array1 같은 배열(객체)인가?", array4 === array1);
console.log('array5 :', array5, "array5는 array1 같은 배열(객체)인가?", array5 === array1);
