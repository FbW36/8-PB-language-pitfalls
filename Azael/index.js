/*# Pitfalls 

#### 1. NaN
**Question: Comment your answer in your js file**: What does NaN stand for? 
* Check if `"hello"` is NaN. 
* Check if `3` is NaN.
* What is the type of NaN?*/

let greeting = "hello";

let checkGreeting = isNaN(greeting);

console.log("isNaN(greeting)==>" + checkGreeting);

let number = 3;

let checkNumber = isNaN(number);

console.log("isNaN(number)==>" + checkNumber);

let checkNaN = typeof NaN;
console.log("typeof NaN==>" + checkNaN);

/*#### 2. Infinity
 * Divide Infinity by `0`.
 * Divide Infinity by Infinity.
 * Divide `1` by `0`.*/

let infinite = Infinity / 0;
console.log("infinite==>" + infinite);

let infinite1 = Infinity / Infinity;
console.log("infinite1==>" + infinite1);

let infinite2 = 1 / 0;
console.log("infinite2==>" + infinite2);
