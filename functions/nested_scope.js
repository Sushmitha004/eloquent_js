// Nested scope

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) {
      unit += 's'
    }
    console.log(`${ingredientAmount} ${unit} ${name}`)
  }
  ingredient(1, 'can', 'chickpeas')
  ingredient(0.25, 'cup', 'tahini')
  ingredient(0.25, 'cup', 'lemon juice')
  ingredient(1, 'clove', 'garlic')
  ingredient(2, 'tablespoon', 'olive oil')
  ingredient(0.5, 'teaspoon', 'cumin')
}

/* a. The code inside the ingredient function can see the factor binding from the outer function
But its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

b. In simple words, it means the children scope has access to the variables defined in the parent
scope. For instance, If I were to define a function and declare a variable inside it and inside
the very same function, define another function, then I should be able to use that variable
the inner function because of lexical scoping.

c. It can be seen from the example, the variables declared in outerFunction() are accessed by
innerfunction(), this is lexical scoping.

d. Nested functions have access to variables declared in their outer scope.
*/
