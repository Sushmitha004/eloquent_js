// Destructuring assignment syntax - It is a JS expression
// helps in unpacking values from array or properties from objects, into distinct variables

// Array destructuring - If you know the value you are binding is an array, you can use square brackets to “look inside” of the value, binding its contents.
// 1.
const array = [10, 20, 30]
function arr ([a1, a2, a3]) {
  return a1 + a2 + a3
}
console.log(arr(array))

// 2.
const foo = ['one', 'two', 'three']
const [red, yellow, green] = foo
console.log(red) // "one"
console.log(yellow) // "two"
console.log(green) // "three"

// 3. Assignment separate from declaration
const [a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2

// 4. Default values
const [a1 = 5, b1 = 7] = [1]
console.log(a1) // 1
console.log(b1) // 7

// 5. Swapping variables
let a2 = 1
let b2 = 3;

[a2, b2] = [b2, a2]
console.log(a2) // 3
console.log(b2) // 1

const ar = [1, 2, 3]
[ar[1], ar[2]] = [ar[2], ar[1]]
console.log(ar)

// Object destructuring
const person = {
  name: 'Anamika',
  age: 23
}

const { name, age } = person

console.log(name)
console.log(age)
