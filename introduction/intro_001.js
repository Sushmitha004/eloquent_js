// Program to add numbers

let total = 0
let count = 1
let compare
do {
  compare = count
  compare -= 11
  if (compare === 0) {
    break
  } else {
    total += count
    count += 1
  }
} while (compare !== 0)
console.log(total)
