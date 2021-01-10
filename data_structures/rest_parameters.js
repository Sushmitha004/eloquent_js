// rest parameters - bound to an array containing all further arguments
function max (...numbers) {
  let result = -Infinity
  for (const number of numbers) {
    if (number > result) result = number
  }
  return result
}
console.log(max(4, 1, 9, -2))
// → 9

// three-dot notation is used to call a function with an array of arguments.
const num = [2, 1, 0, -5, 6]
console.log(max(...num))

function min (...numbers) {
  let result = Infinity
  for (const number of numbers) {
    if (number < result) result = number
  }
  return result
}
console.log(min(4, 1, 9, -2))
// --> -2

// arguments can be included too
const numbers = [5, 1, 7]
console.log(max(...numbers))
// → 7

console.log(max(9, ...numbers, 2))
// → 9

// Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.

const words = ['never', 'fully']
console.log(['will', ...words, 'understand'])
// → ["will", "never", "fully", "understand"]
