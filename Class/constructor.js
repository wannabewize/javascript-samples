function Actor(name, movie) {
    this.name = name;
    this.movie = movie;
	
    this.act = function() {
        console.log(this.name + ' perform in ' + this.movie);
    }
};

var johansson = new Actor('Johansson', 'Avengers');
johansson.act();

var alba = new Actor('Jessica Albl', 'Into the blue');
alba.act();

console.log(johansson.constructor);
console.log(alba.constructor);


function Singer(name, best) {
   this.name = name;
   this.best = best;

   this.sing = function() {
      console.log(this.name + ' sing ' + this.best);
   }
}

var iu = new Singer('IU', '좋은날');

console.log('johansson.constructor === alba.constructor : ',johansson.constructor === alba.constructor);
console.log('iu.constructor === alba.constructor : ', iu.constructor === alba.constructor);