// Optional Arguments

// 1. If too many arguments are passed to a function in js, it ignores the extra ones.
function square (x) { return x * x }
console.log(square(4, true, 'hedgehog'))
// -> 16

// 2. If you pass too few, the missing parameters get assigned the value "undefined".
function minus (a, b) {
  if (b === undefined) return -a
  else return a - b
}
console.log(minus(10))
// → -10
console.log(minus(10, 5))
// → 5

function minus1 (a, b) {
  return a - b
}
// 10 - undefined = NaN
console.log(minus1(10))
// → NaN
console.log(minus1(10, 5))
// → 5

// Advantages and disadvantages
/*
Advantage: this behavior can be used to allow a function to be called with different numbers of arguments.
For example, this minus function tries to imitate the - operator by acting on either one or two arguments.
*/
// Disadvantage: No messages will be given out in case if you enter wrong number of arguments while calling the function.

// If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
// For example, this version of power makes its second argument optional. If you don’t provide it or pass the value undefined, it will default to two, and the function will behave like square.
function power (base, exponent = 2) {
  let result = 1
  for (let count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}
// here the exponent argument will take 2 as it's value
console.log(power(4))
// → 16

// here the exponent argument will take 6 as it's value
console.log(power(2, 6))
// → 64
