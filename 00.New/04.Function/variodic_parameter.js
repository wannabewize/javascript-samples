// 가변길이 파라미터
function addAll(...arg) {
    let result = 0;
    for(const item of arg) {
        result += item;
    }
    return result;
}

const sum1 = addAll(1);
console.log( sum1 );

const sum2 = addAll(1, 2, 3);
console.log( sum2 );

// 가변길이 파라미터는 1개만 사용 가능
// function chaos(...arg1, ...arg2) {
// }

// 가변길이 파라미터는 마지막에만 사용
// function chaos(...arg1, arg2) {
// }