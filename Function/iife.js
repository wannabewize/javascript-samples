// IIFE : Immediately Invoked Function Expression
(function(){
   console.log('IIFE Test1');
})();

// with Parameter
(function(arg){
   console.log('IIFE Test2 - argumanet : ', arg.name);
})({'name':'value'});