// return keywords

const makeNoise = function() {
  console.log('Pling!')
}

console.log(makeNoise())
// → Pling!
// -> undefined

/*
a. A return keyword without an expression after it will cause the function to return undefined.
b. Functions that don’t have a return statement at all, such as makeNoise, similarly return undefined.
*/
