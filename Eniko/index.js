// 1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?

//NaN means not a number. This helps us when we want to know if a value is displayed as a number or not.

// Check if "hello" is NaN.
console.log("Check if hello is NaN", isNaN("hello"));
// Check if 3 is NaN.
console.log("Check if 3 is NaN", isNaN(3));

// What is the type of NaN?
// 2. Infinity
console.log("Infinity", isNaN(Infinity));
// Divide Infinity by 0.
console.log("Divide Infinity by 0", Infinity / 0);
// Divide Infinity by Infinity.
console.log(isNaN(Infinity / Infinity));
// Divide 1 by 0.
console.log("Divide 1 by 0", isNaN(1 / 0));