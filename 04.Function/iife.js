// IIFE : Immediately Invoked Function Expression
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