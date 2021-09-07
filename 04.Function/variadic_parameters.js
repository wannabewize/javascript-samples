/**
 * 가변길이 파라미터
 */

function wantToBuy(...things) {
   console.log('things : ', things, 'Instance of array?', things instanceof Array);

   for(item of things) {
      console.log('I want to buy ' + item);
   }
}

wantToBuy('iMac', 'iPhone', 'New Macbook');

// 가변길이 파라미터는 1개만 사용 가능 - SyntaxError: Rest parameter must be last formal parameter
// function chaos1(...arg1, ...arg2) {
// }

// 가변길이 파라미터는 마지막에만 사용 - SyntaxError: Rest parameter must be last formal parameter
// function chaos2(...arg1, arg2) {
// }