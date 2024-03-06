/**
 * Scope Chain
 */

function outFn() {
  var value = 2;

  function inFn() {
    console.log('value : ', value++);
  }

  inFn();
}

outFn();
outFn();