// 1. NaN
let str = "hallo"
let checkValue = isNaN(str);
console.log("checkValue ==>", checkValue); // true

let num = 3;
let checkValue2 = isNaN(num);
console.log("checkValue2 ==>", checkValue2); // false

console.log(typeof (NaN)); // NaN is the type of number.

// 2. Infinity
console.log(Infinity / 0); // Infinity
console.log(Infinity / Infinity); // NaN
console.log(1 / 0); // Infinity