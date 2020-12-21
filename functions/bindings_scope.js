// binding scope

// Example 1
let x = 10
if (true) {
  let y = 20
  var z = 30
  console.log('x+y+z = ', x + y + z)
  // → 60
}
console.log('x+z = ', x + z)
// → 40
console.log('x = ', x)
// -> 10
console.log('z = ', z)
// -> 30
console.log('x+y = ', x + y)
console.log('y = ', y)
// y is not visible here
// ReferenceError: y is not defined

/*
a. var bindings - global scope
b. let bindings - local scope
*/

// Example 2
const halve = function (n) {
  return n / 2
}

let n = 10
console.log(halve(100))
// → 50
// here n is taking 100 and not 10 - because 100 is the innermost value of n
console.log(n)
// → 10

/*
a. the exception is when multiple bindings have the same name—in that case, code can see only the innermost one.
For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.
*/
