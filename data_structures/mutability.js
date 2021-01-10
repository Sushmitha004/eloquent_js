// numbers, strings, and Booleans, are all immutable

// With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.
const object1 = { value: 10 }
const object2 = object1
const object3 = { value: 10 }
console.log(object1 === object2)
// → true
console.log(object1 === object3)
// → false
object1.value = 15
console.log(object2.value)
// → 15
console.log(object3.value)
// → 10
// The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

// though a const binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.
const score = { visitors: 0, home: 0 }
// This is okay
score.visitors = 1
score.home = 1
console.log(score)
// This isn't allowed
// TypeError: Assignment to constant variable.
score = { visitors: 2, home: 2 }
console.log(score)
