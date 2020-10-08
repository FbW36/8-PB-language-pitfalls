//1
// NaN stands for Not a Number.

// "hello" is not NaN;
console.log(Number.isNaN('hello'));

//Check if `3` is NaN.
console.log(isNaN(3)); // 3 is not NaN

//The type of NaN is "number".
console.log(typeof NaN);

//2
console.log(Infinity / 0); // Infinity
console.log(Infinity / Infinity); // NaN
console.log('1' / '0'); // Infinity
