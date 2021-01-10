// 1: here 'length' is the property used for getting length of the string
const myString = 'Helloworld'
console.log('string length is: ', myString.length)

// TypeError: Cannot read property 'length' of null
// console.log(null.length)

// TypeError: Cannot read property 'length' of undefined
// console.log(undefined.length)

// to find number of elements in the array
const arr = [1, 2, 3, 4]
console.log('Number of elements in the array are:', arr.length)
console.log('Number of elements in the array are:', arr['length'])

// 2: max is a Math property to get the max value between mentioned values
const a = 10
const b = 20
console.log('max value is: ', Math.max(a, b))
