function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();


for (const item of g) {
  console.log(item);
}

const k = gen();

console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());