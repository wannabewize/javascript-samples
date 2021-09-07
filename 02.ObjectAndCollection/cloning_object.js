/**
 * 객체 복제하기
 */

const obj1 = { one: "1", two: "2" };

// 객체 대입
const obj2 = obj1;

// 객체 복제
const obj3 = {...obj1};

// 객체 복제하며 프로퍼티 추가
const obj4 = {...obj1, hundred: "100" };

// 객체 복제하며 프로퍼티 추가
const obj5 = {...obj1, hundred: "100", thousand: "1000" };

// 원본 객체 수정
obj1.three = "3";

console.log('obj1 :', obj1);
console.log('obj2 :', obj2, "obj2는 obj1 같은 객체인가?", obj2 === obj1);
console.log('obj3 :', obj3, "obj3는 obj1 같은 객체인가?", obj3 === obj1);
console.log('obj4 :', obj4, "obj4는 obj1 같은 객체인가?", obj4 === obj1);
console.log('obj5 :', obj5, "obj5는 obj1 같은 객체인가?", obj5 === obj1);
