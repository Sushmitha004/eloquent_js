// Values of the type object are arbitrary collections of properties.
/* Note: Inside the braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value.
1. Object name - day1
2. properties of the object - squirrel and events
*/
const day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running']
}
console.log(day1.squirrel)
// → false
console.log(day1.events)
// -> [ 'work', 'touched tree', 'pizza', 'running' ]
console.log(day1.wolf)
// → undefined
day1.wolf = false
console.log(day1.wolf)
// → false

/*
1. The 'delete' operator when applied to an object property, will remove the named property from the object.
   'delete' - is an unary operator
2. The binary 'in' operator, when applied to a string and an object, tells you whether that object has a property with that name.
*/
const anObject = { left: 1, right: 2 }
console.log(anObject.left)
// → 1
delete anObject.left
console.log(anObject.left)
// → undefined
console.log('left' in anObject)
// → false
console.log('right' in anObject)
// → true

// To find out what properties an object has, you can use the 'Object.keys' function. You give it an object, and it returns an array of strings—the object’s property names.
console.log(Object.keys(anObject))
console.log(Object.keys(day1))

// 'Object.assign' function copies all properties from one object into another.
const objectA = { a: 1, b: 2 }
console.log(objectA)
// -> { a: 1, b: 2 }
Object.assign(objectA, { c: 3, d: 4 })
console.log(objectA)
// -> { a: 1, b: 2, c: 3, d: 4 }

// typeof array is object
const a = [1, 2, 3, 4]
console.log(typeof a)
// -> object
