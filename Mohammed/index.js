// 1.

/*
NaN: is a JavaScript property, it stands for Not A Number.
we can check for this value using the function isNaN() 
*/

let var1 = "hello";
let var2 = "3";
let chekForNaN = var1 ? "'hello' is a NaN value'" : "'hello' is not a NaN value";
console.log(chekForNaN);

chekForNaN = var2 ? "'3' is a NaN value'" : "'3' is not a NaN value";
console.log(chekForNaN);

console.log("The type of a NaN is ", typeof NaN);

// 2.
console.log(5/0); // Infinity
console.log(Infinity / 0); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(Infinity / 0); // Infinity