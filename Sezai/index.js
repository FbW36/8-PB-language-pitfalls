//1.

// What does NaN stand for?
// Not a Number


// "hello" NaN?
let str = "hello";
let checkValue = isNaN(str)
console.log("checkValue ==>", checkValue); // NaN is TRUE

// 3 NaN?
let num1 = 3
let checkValue1 = isNaN(num1);
console.log("checkValue1 ==>", checkValue1); // NaN is FALSE

// What is the type of NaN?
// isNaN('hello'); TRUE with strings because its Not-a-Number
// isNaN(3); FALSE with Numbers because it is a Number