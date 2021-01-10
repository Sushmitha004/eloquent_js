const todoList = []
function remember (task) {
  // push() adds item to the end of the array
  todoList.push(task)
}
function getTask () {
  // shift() removes the item from the front of the array
  return todoList.shift()
}
function rememberUrgently (task) {
  // unshift() adds the item to the front of the array
  todoList.unshift(task)
}

remember('Study JS')
remember('Study HTML')
remember('Study CSS')
remember('Study React')
remember('groceries')
console.log(todoList)
getTask()
console.log(todoList)
rememberUrgently('Study JS')
console.log(todoList)

// indexOf() - To search for a specific value in an array. The method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found.
// lastIndexOf() - To search from the end instead of the start
console.log([1, 2, 3, 2, 1].indexOf(2))
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2))
// → 3
console.log([1, 2, 3, 2, 1].indexOf(4))
// -> -1

// slice() - takes start and end indices and returns an array that has only the elements between them.
// The start index is inclusive, the end index exclusive.
// When the end index is not given, slice will take all of the elements after the start index.
// You can also omit the start index to copy the entire array.
console.log([0, 1, 2, 3, 4].slice(2, 4))
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2))
// → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice())
// -> [0, 1, 2, 3, 4]

// concat() - joins 2 arrays
const a = [1, 2, 3]
const b = [2, 3, 4]
console.log(a.concat(b))
// If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.
console.log(a.concat(7))
