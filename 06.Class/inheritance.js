/**
 * Class 상속
 */

// 부모 클래스
class Person {
   // constructor는 1개만
   constructor(name) {
      // 프로퍼티 선언
      this.name = name;
   }

   greeting = () => {
      console.log('Hello');
   }

   // 메소드
   introduce() {
      console.log(`I am ${this.name}.`);
   }
}

const luke = new Person('Luke');
luke.greeting();
luke.introduce();

// 상속
class Jedi extends Person {
   constructor(name, color) {
      // 부모 클래스의 생성자 호출 - name 초기화
      super(name);
      this.color = color;
   }

   // 재정의
   introduce() {
      console.log(`I am ${this.name}. My light savor's color is ${this.color}.`);
   }
}

const obiwan = new Jedi('Obiwan', 'blue');
obiwan.greeting();
obiwan.introduce();

