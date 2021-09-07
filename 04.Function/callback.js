/**
 * 콜백(Callback) 함수
 */


// 콜백을 사용하지 않는 일반 함수
function add(i, j) {
    return i + j;
}

const result1 = add(1, 2);
console.log("1 + 2 = " + result1);

// 콜백을 사용하는 함수
function add2(i, j, callback) {
    callback(i + j);
}

// 함수 파라미터에 함수를 대입한다.
function addResultHandler(result) {
    console.log("3 + 4 = " + result);
}

add2(3, 4, addResultHandler);

// inline 방식으로 사용하기
add2(5, 6, function(result) {
    console.log("5 + 6 = " + result);
});

// inline - arrow function 으로 사용
add2(7, 8, (result) => {
    console.log("7 + 8 = " + result);
});

// 콜백이 2개인 함수
function devide(i, j, success, fail) {
    if ( isNaN(i) || isNaN(j) || j == 0) {
        fail('에러!');
    }
    else {
        success(i / j);
    }
}

devide(1, 2,
    (ret) => {
        console.log('1 / 2 =', ret)
    },
    (err) => {
        console.log('1 / 2 =', err)
    }
);

devide(1, 0,
    (ret) => {
        console.log('1 / 0 =', ret)
    },
    (err) => {
        console.log('1 / 0 =', err)
    }
);