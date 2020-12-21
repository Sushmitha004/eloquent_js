// Functions can be created in 2 ways
/*
1. A function definition/declaration/statement consists of the function keyword, followed by:

-> The name of the function.
-> A list of parameters to the function, enclosed in parentheses and separated by commas.
-> The JavaScript statements that define the function, enclosed in curly brackets, {...}.
*/

function square (number) {
  return number * number
}
console.log(square(2))

// 2. function expression - also called as anonymous functions
const square1 = function (number) { return number * number }
const x = square1(4)
console.log(x)

/*
However, a name can be provided with a function expression. Providing a name allows the function
to refer to itself, and also makes it easier to identify the function in a debugger's stack
traces:
*/
const factorial = function fact (n) { return n < 2 ? 1 : n * fact(n - 1) }

console.log(factorial(3))
