function reverseArray (array) {
  const arr = []
  for (let i = array.length - 1; i >= 0; i--) {
    arr.unshift(array[i])
  }
  return arr
}

function reverseArrayInPlace () {
  let arrInPlace = []
  return arrInPlace
}

console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
