const title = 'Star Wars';
const director = 'George Lucas';

const movie = {
    title: title,
    director: director};

// Object shorthand notation
// 키 이름과 밸류(변수/상수) 이름이 같은 경우 - 
const starwars = {
    title,
    director};

console.log(starwars);