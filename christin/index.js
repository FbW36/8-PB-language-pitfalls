// 1. NaN
//Question: Comment your answer in your js file: What does NaN stand for?

// Not a Number

//Check if "hello" is NaN.

let hello = "hello";

let checkNan = hello !== isNaN ? true : false; // true
console.log(checkNan);

// Check if 3 is NaN.

let num = 3;
let checkNan2 = num === NaN ? true : false; // false
console.log(checkNan2);

//What is the type of NaN?
let isNan = Number(NaN);

console.log(isNan);

// nan is nan

// 2. Infinity

//Divide Infinity by 0.

console.log(Infinity / 0);

// Divide Infinity by Infinity.

console.log(Infinity / Infinity);

//Divide 1 by 0.

console.log(1 / 0);
