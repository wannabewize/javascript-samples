// 컴파일 단계
console.log(f(4));	// 16

var f = 0;

function f(x) {
    return x * x;
}

// 런타임 단계
console.log(f); 	// 0
