/**
 * 에러 발생
 */
function throwStringError() {
   throw 'a';
}

function throwNumberError() {
   throw 1;
}

function throwObjectError() {
   throw { value : '1234' };
}

function throwError() {
   throw new Error('Error Message');
}

try {
   throwStringError();   
} catch (error) {
   console.log('문자열 에러 발생:', error);
}

try {
   throwNumberError();   
} catch (error) {
   console.log('Number 타입 에러 발생:', error);
}

try {
   throwObjectError();   
} catch (error) {
   console.log('객체형 타입 에러 발생:', error.value);
}

try {
   throwError();   
} catch (error) {
   console.log('Error 타입 에러 발생', error.message);
   console.log('stack trace');
   console.log(error);
}
console.log('== END ==');