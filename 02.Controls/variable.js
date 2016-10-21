function parent() {
   var value = "1234";
   g_value = "0000";

   {
      var value = "5678";
   }

   return value;
}

console.log(parent()); // "5678"
console.log(g_value);// "0000"
