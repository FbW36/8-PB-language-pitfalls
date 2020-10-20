//#### 1. NaN
//**Question: Comment your answer in your js file**: What does NaN stand for? 

//Answer: Not-A-Number

//* Check if `"hello"` is NaN. 

var str = "hallo";
var checkValue = isNaN(str)
console.log("checkValue ==>", checkValue);

//* Check if `3` is NaN.
var number = 3;
var checkValue2 = isNaN(number);
console.log("checkValue2 ==>", checkValue2);

//* What is the type of NaN?

//#### 2. Infinity
//* Divide Infinity by `0`. 
console.log(Infinity/0);
//* Divide Infinity by Infinity. 
console.log(Infinity/Infinity);
//* Divide `1` by `0`.
console.log(1/0);