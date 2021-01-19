function reverseArray (array) {
  const arr = []
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i])
  }
  return arr
}

function reverseArrayInPlace (array) {
  let temp = 0
  for (let i = 0, n = array.length; i < Math.floor(n / 2); i++) {
    temp = array[i]
    array[i] = array[n - 1 - i]
    array[n - 1 - i] = temp
  }
  return array
}

console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
