// # 8 - PB - language - pitfalls

// # Pitfalls

// #### 1. NaN

// * Check if `"hello"` is NaN.
let str = "hello";
let checkValue = isNaN(str);
console.log(checkValue); // true
// What does NaN stand for? Not-a-Number

// * Check if `3` is NaN.
let number = 3;
let checkValue2 = isNaN(number);
console.log(checkValue2); // false -- '3' is a number

// * What is the type of NaN?
// Number

// #### 2. Infinity
//     * Divide Infinity by`0`.
// * Divide Infinity by Infinity.
// * Divide`1` by`0`.
