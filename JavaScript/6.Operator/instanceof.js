function Clazz(name) {
   this.name = name;
}

function Klazz(name) {
   this.name = name;
}

var c = new Clazz("instance1");
var k = new Klazz("instance2");

console.log(c instanceof Clazz);		//true
console.log(c instanceof Klazz);		//false
console.log(k instanceof Object);	//true
