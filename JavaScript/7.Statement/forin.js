var obj = {
   prop1: "a",
   prop2: "b",
   prop3: "c"
};

for (var name in obj) {
   console.log('property name : ', name + " value : " + obj[name]);
}
