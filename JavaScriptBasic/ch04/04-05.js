function func(format, var_args) {
   console.log(arguments.length);
   console.log(arguments);
   
   for(var i = 0 ; i < arguments.length ; i++ ) {
      var pattern = new RegExp('\\{' + (i-1)+ '\\}');
      console.log(pattern);
      format = format.replace(pattern, arguments[i]);      
   }
   
   console.log('format : ', format);
}

func('{0} {1}', 4, 5);

function strFunc(str) {
   str.replace('F', 'ff');
}

var aa = 'WTF';
strFunc(aa);
console.log(aa);