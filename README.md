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

_Pizza.prototype.price()_
Describe: Pizza.prototype.price()
"a Pizza prototype method that determines the price of the pizza it is called on"
Code:
> const pizzaOne = new Pizza(3,["mushrooms","olives"]);
>pizzaOne.price()
Expected Output:
6