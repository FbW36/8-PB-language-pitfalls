//1. NaN

//Question: Comment your answer in your js file: What does NaN stand for?
//NaN is the short way of "Not -a- Number" value. Indicates that a value is not a legal number.

//Check if "hello" is NaN.
let value1 = "hello";
console.log(isNaN(value1));
//The output is "True" because is Not-a-Number value"

//Check if 3 is NaN.
let value2 = 3;
console.log(isNaN(value2)); //it's false because 3 it is a number.

//What is the type of NaN?
console.log(typeof isNaN);

//*********************************
//2. Infinity

//Divide Infinity by 0.

let number1 = 1;
let number0 = 0;

let numberIn = Infinity;
console.log(numberIn / number0);

//Divide Infinity by Infinity.
console.log(numberIn / numberIn);
//Not sure why I'm having NaN as output :c

//Divide 1 by 0.
console.log(number1 / number0);
