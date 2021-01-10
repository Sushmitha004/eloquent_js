// String, number, boolean - immutable
let kim = "Kim"
kim.age = 88
console.log(kim.age)
// --> undefined

// built-in properties of strings
// 1. slice()
console.log('coconut'.slice(4, 7))

// 2. indexOf()
console.log('coconut'.indexOf('o'))

// 3. trim() - removes whitespace (spaces, newlines, tabs, and similar characters)
console.log('okay \n')
// --> prints okay with the new line
console.log('okay \n'.trim())
// trims the new line and prints only 'okay'

// 4. zeroPad function - padStart() - takes desired length(including the existing string) and padding character as arguments
console.log(String(6).padStart(3, '0'))
// --> 006
console.log(String('sush').padStart(1, 'mitha'))
// --> doesn't append

// 4. split()
const sentence = 'Secretarybirds specialize in stomping'
const words = sentence.split(' ')
console.log(words)
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(' ') + '.')
// → Secretarybirds. specialize. in. stomping

const sentence2 = 'Hiworld.Welcome.'
const words2 = sentence2.split('.')
console.log(words2)
console.log(words2.length)

// 5. repeat() - strings can be repeated using this method
console.log('LA'.repeat(3))
// --> LALALA

// Accessing the individual characters in a string looks like accessing array elements
const string = 'abc'
console.log('String length', string.length)
// → 3
console.log('char at index number 1 is:', string[1])
// → b
