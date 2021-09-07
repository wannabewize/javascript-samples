/**
 * 이름없는 함수 정의하자 마자 호출하기.
 * IIFE : Immediately Invoked Function Expression
 */

// 파라미터 없는 함수 정의와 호출
(function(){
   console.log('IIFE Test1');
})();

// with Parameter
(function(arg){
   console.log('IIFE Test2 - argumanet : ', arg.name);
})({'name':'value'});

// Arrow Function
(() => {
   console.log("IIFE Test - Arrow Function");
})();

((arg1, arg2) => {
   console.log(`${arg1} + ${arg2} = ${arg1 + arg2}`)
})(1, 2);