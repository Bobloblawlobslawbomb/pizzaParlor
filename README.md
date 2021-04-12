# Tests/Specs:

_function Pizza_
Describe: function Pizza
"a constructor function to make pizza objects with properties of: toppings, size, amountOfToppings" 
Test: it will make a pizza object
Code:
> const pizzaOne = new Pizza(["mushrooms","olives"],3);
>pizzaOne
Expected Output: 
Pizza {toppings: Array(2), size: 3, amountOfToppings: 2}

_Pizza.prototype.price()_
Describe: Pizza.prototype.price()
"a Pizza prototype method that determines the price of the pizza it is called on"
Code:
> const pizzaOne = new Pizza(["mushrooms","olives"],3);
>pizzaOne.price()
Expected Output:
6