function add(i, j) {
	return i + j;
}

var ret = add(1,2);
console.log('add(1, 2) : ', ret);


function minus(i, j, handler) {
   var ret = i * j;
   handler(ret);
}

function handleMinus(result) {
   console.log('Result : ', result);
}

minus(5, 3, handleMinus);

function handleMultiple(i, j, handler) {
   handler(i * j);
}

handleMultiple(4, 8, function(rest) {
  console.log('run in closure : ',rest);
});







