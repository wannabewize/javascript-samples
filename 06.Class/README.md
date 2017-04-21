# 클래스와 객체

## 객체 Literal

JavaScipt에서 객체는 {}를 이용해서 이름-값 형식으로 정의한다.

var obj = {
   prop : 'Property',

   method : function() {
      console.log('Method works');
   }
};

* object : 객체 리터럴, 프로퍼티와 메소드   

## 함수 생성자

객체 Literal은 그 순간에 필요한 객체 하나를 정의하는 용도로는 적당하지만 하나의 타입(Type)으로 사용하기에는 불편한 것이 많다. ES6에 포함된 class문법 이전에 JavaScript에는 함수(Function)을 이용해서 클래스에 해당하는 것을 정의했다.

* constructor : 생성자 함수를 이용한 객체 생성과 사용
* property : 프로퍼티 공개, 비공개

this는 현재 객체 참조자가 된다. 객체에서 this는 그 객체를 참조하게 된다. 그런데 함수도 하나의 객체가 되다보니 함수 내부에서 동작하는 함수의 경우 this는 객체가 아닌 함수가 되버린다. 이현상을 위한 방법과 Arrow Function 에서의 this 참조하기

* this.js

## class로 클래스 정의

JavaScript ES6에서 클래스를 정의하는 class 문법이 추가됐다.

* class : class를 이용한 클래스 정의와 사용
