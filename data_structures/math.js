// Math object - has number related utility functions: Math.max() - maximum, Math.min() - minimum, Math.sqrt() - square root
// Also has trignometry. cos(), sin(), tan(). Reverse of these functions - acos(), asin(), atan(). As well as Math.PI - for PI value
function randomPointOnCircle (radius) {
  const angle = Math.random() * 2 * Math.PI
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)
  }
}
console.log(randomPointOnCircle(2))
// Math.random() - returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it.

// Math.floor() - (ounds down to the nearest whole number)
console.log(Math.floor(2.5))
// -> 2

// Math.ceil() - (rounds up to a whole number)
console.log(Math.ceil(2.5))
// --> 3

// Math.round() - to the nearest whole number
console.log(Math.round(2.5))
// --> 3
console.log(Math.round(2.4))
// -> 2

// Math.abs() - which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.
console.log(Math.abs(-211))
// 211

// Math.sqrt() -sqaure root of a number
console.log(Math.sqrt(4))
// --> 2
