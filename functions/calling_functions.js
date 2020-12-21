// Calling functions

/* Important points:
1. Functions must be in scope when they are called.
2. The scope of a function is the function in which it is declared (or the entire program,if it is declared at the top level).
*/

// function hoisting (apperance of the function code with respect to calling the function)
// 1. When function declaration is used to define a function, the function can be hoisted below the call
console.log(square(5))

function square (n) { return n * n }

// 2. Function hoisting only works with function declarations—not with function expressions.
console.log(square1) // square is hoisted with an initial value undefined.
console.log(square1(5)) // ReferenceError: Cannot access 'square1' before "initialization
const square1 = function (n) {
  return n * n
}
