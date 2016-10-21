function func1(arg) {
   console.log(arguments);
   console.log('callee', arguments.callee);
   //arguments.callee();
}

function func2() {
   func1(1);   
}

func2();