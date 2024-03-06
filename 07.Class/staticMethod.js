class Cat {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`${this.name} says mew mew`);
    }

    static saySpecies() {
        console.log('나는 고양이!');
    }
}

Cat.isCute = function() {
    console.log('Absolutely!');
}

// instance method
const cat1 = new Cat('kitty');
cat1.sayHello();

const cat2 = new Cat('tom');
cat2.sayHello();

// static method
Cat.saySpecies();
Cat.isCute();

