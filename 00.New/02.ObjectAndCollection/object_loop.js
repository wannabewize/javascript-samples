const starwars = {
   title: '새로운 희망',
   year: 1977,
   director: '조지 루카스'
}

// 객체 내 모든 키 배열
const keys = Object.keys(starwars);
for (const key of keys) {
   const value = starwars[key];
   console.log('prop : ', key, ' value :', value);
}

// 객체 내 키를 이용한 순회
console.log('For in');
for (const prop in starwars) {
   console.log('prop : ', prop, ' value : ', starwars[prop]);
}
