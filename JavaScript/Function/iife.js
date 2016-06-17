// IIFE : Immediately Invoked Function Expression
(function(){
   console.log('IIFE Test1');
})();

(function(arg){
   console.log('IIFE Test2 - argumanet : ', arg.name);
})({'name':'value'});