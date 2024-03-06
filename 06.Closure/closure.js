/**
 * 클로저
 */

// 함수를 객체처럼 사용하기
var hello = function () {
  console.log('Hello');
}

function sayHello() {
  // 함수를 반환
  return hello;
}

// 호출의 결과는 함수
var ret = sayHello();
ret();


// with inner function
function sayHi() {
  function hi() {
    console.log('hi');
  }
  return hi;
}

var ret2 = sayHi();
ret2();


// with inline arrow-function
//
function sayThankyou() {
  return () => {
    console.log('Thank you');
  };
}

var ret3 = sayThankyou();
ret3();



