var iu = {
    name: "IU",
    best: "좋은날"
};

console.log("name" in iu);			// true
console.log("friend" in iu); 		// false

var propName = "name";
console.log(propName in iu);		// true

// 프로퍼티 제거
delete iu.best		
console.log("best" in iu);       // false

var bar = "1234";
delete bar				
console.log(bar);                // 1234