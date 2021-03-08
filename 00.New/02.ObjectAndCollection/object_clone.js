const obj1 = { one: "1", two: "2" };

const obj2 = obj1;

// 객체 복제
const obj3 = {...obj1};

const obj4 = {...obj1, hundred: "100" };

const obj5 = {...obj1, hundred: "100", thousand: "1000" };

// 원본 객체 수정
obj1.three = "3";

console.log('obj1 :', obj1);
console.log('obj2 :', obj2);
console.log('obj3 :', obj3);
console.log('obj4 :', obj4);
console.log('obj5 :', obj5);