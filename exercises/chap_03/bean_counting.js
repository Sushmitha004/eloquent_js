function countBs (string) {
  const str = string
  const ch = 'B'
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      counter++
    }
  }
  return counter
}

function countChar (string, char) {
  const s = string
  const c = char
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++
    }
  }
  return count
}

console.log(countBs('BBC'))
console.log(countChar('kakkerlak', 'k'))
