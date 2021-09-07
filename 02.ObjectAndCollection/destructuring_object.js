/**
 * 구조 분해 할당(Destructuring)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const counting = { one: '일', two: '이', three: '삼', four: '사'};

// 객체 내 원소 대입
const one = counting.one;

// 객체 내 two, three 원소 대입
const {two, three} = counting;
console.log(`two : ${two}, three : ${three}`);

// 없는 원소 접근
const {four, nine} = counting;
console.log(`four : ${four}, nine : ${nine}`);

// 이름 변경
const {two: item} = counting;
console.log('item :', item);