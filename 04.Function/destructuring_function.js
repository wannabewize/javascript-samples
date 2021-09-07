/**
 * 구조 분해 할당, Object Shorthand
 */

// 일반 파라미터
function showIt1(title, director) {
    console.log(`showIt1 - 제목 : ${title}, 감독 : ${director}`);
}

showIt1('새로운 희망', '조지 루카스');

// 객체가 파라미터인 경우
function showIt2(movie) {
    console.log(`showIt2 - 제목 : ${movie.title}, 감독 : ${movie.director}`);
}

const movie1 = {title: '제국의 역습', director: '어빈 커슈너'};
showIt2(movie1);
// 파라미터에 객체 리터럴
showIt2({title: '제국의 역습', director: '어빈 커슈너'});


// 파라미터에 object - destructuring
function showIt3({title, director}) {
    console.log(`showIt3 - 제목 : ${title}, 감독 : ${director}`);
}

// 객체 생성 후 호출
const movie2 = {title: '제다이의 귀환', director: '리처드 마퀸드'};
showIt3(movie2);

// Object shorthand로 호출
const title = '제다이의 귀환';
const director = '리처드 마퀸드';
showIt3({title, director});


// 객체 반환
function getCharactorInfo() {
    const character = '아나킨 스카이워커';
    const actor = '헤이든 크리스텐슨';
    return {character, actor}
}

// 함수 반환값을 destructuring
const {character, actor} = getCharactorInfo();
console.log(`character: ${character}, actor: ${actor}`);