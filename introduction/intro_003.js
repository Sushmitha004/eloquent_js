// program to calculate sum of n numbers using sum and range function

const range = function (arg1, arg2) {
  const arr = []
  if (arg2 > arg1) for (let i = arg1; i <= arg2; i++) arr.push(i)
  else for (let j = arg1; j >= arg2; j--) arr.push(j)
  return arr
}

const sum = function (arr) {
  let totalSum = 0
  for (let i = 0; i < arr.length; i++) totalSum += arr[i]
  return totalSum
}
console.log(sum(range(1, 10)))
