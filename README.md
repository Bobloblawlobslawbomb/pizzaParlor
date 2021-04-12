# _Giancarlo's Authentic Italian Pizza Parlor Pricer_

#### _this program gives you an accurate price for a pizza pie_

## By _**Giancarlo Vigneri**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _JQuery_
* _Markdown_
* _Arrays and Loops_
* _Constructors_
* _Objects_
* _prototype method(s)_
* _TDD_
* _Whale Songs_

## Description
_This program presents the user with two groupings of radio buttons. The first set purports to allow the user to "pick a topping" for their pizza. Upon submitting your topping choice the user is presented with another group of radio buttons which represent possible sizes for this hypothetical pizza. Upon submitting the users desired size, the user is then shown the price for their pizza object (an'information pizza'). Based on my observations; The user at this point usually just wants a real pizza. So the user calls Dorminoes and gets that 5.99 mix'n'match pizza deal._

## Setup/Installation Requirements

1. Navigate to (https://github.com/Bobloblawlobslawbomb/pizzaParlor)
2. Clone or download 'pizzaParlor'
3. Double click index.html or right-click, (select 'open with...') and choose which program to open or view files
4. Once page has loaded you will be presented with a 'friendly statement' and a set of radio boxes which represent topping choices. 
5. Next the user must chosse one of the topping choices and press the button labeled "Choose Topping"
6. The page will then display another set of radio boxes which allow the user to select a size for their pizza.
7. Once the user has made their selection and pressed the new button labeled "Gimmie a Price". The user is presented with the price of their pizza using the formula: (price = this.size * this.amountOfTopppings ('this' refers to the users information pizza))

## Known Bugs

* _User is only able to get one topping on their pizza (but honestly it's my pizzaria, this is just how we make them here)_

## Planned update(s)

* allow the user to order more than one topping on their pizza -- either with new forms or via a different selection type, possibly checkboxes.

* recalculate prices of individual toppings to be more varied

# Tests/Specs:

### _function Pizza_
Describe: function Pizza
"a constructor function to make pizza objects with properties of: toppings, size, amountOfToppings" 
Test: it will make a pizza object
Code:
> const pizzaOne = new Pizza(["mushrooms","olives"],3);
>pizzaOne
Expected Output: 
Pizza {toppings: Array(2), size: 3, amountOfToppings: 2}

### _Pizza.prototype.price()_
Describe: Pizza.prototype.price()
"a Pizza prototype method that determines the price of the pizza it is called on"
Code:
> const pizzaOne = new Pizza(["mushrooms","olives"],3);
>pizzaOne.price()
Expected Output:
6
---
##### Background pizza image attributed to:
Photo by: Ivan Torres https://unsplash.com/photos/MQUqbmszGGM
On unsplash.com

## License [GPL] (https://choosealicense.com/licenses/gpl-3.0/)

_if you do run into any issues or have questions, ideas, or concerns; I would greatly encourage you to send feedback or make a contribution to the code_

## Contact Information

_Contact Giancarlo Vigneri at: bobloblaw.vigneri@gmail.com_