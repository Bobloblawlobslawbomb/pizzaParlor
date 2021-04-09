# Tests/Specs:

_function Pizza_
Describe: function Pizza
"a constructor function to make pizza objects" 
Test: it will make a pizza object
Code:
> const pizzaOne = new Pizza(3,["mushrooms","olives"]);
>pizzaOne
Expected Output: 
Pizza {size: 3, toppings: Array(2)}
