// Not a Number / function isNAN checks if value is not a number, gives back 'false' if value is a number

let str = 'hello'
console.log(isNaN(str)) // true = not a number

let num = 3
console.log(isNaN(num)) // false = a number

console.log(typeof NaN) // number

let infinityByZero = Infinity / 0 // Infinity
console.log(infinityByZero)

let infinityByInfinity = Infinity / Infinity // NaN
console.log(infinityByInfinity)

let oneByZero = 1 / 0 // Infinity
console.log(oneByZero)