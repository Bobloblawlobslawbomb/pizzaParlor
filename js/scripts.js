// BUSINESS LOGIC
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// //WIP
// function Pizza(toppings, size, amountOfToppings) {
//   this.toppings = toppings;
//   this.size = size;
//   this.amountOfToppings = amountOfToppings;
// }

// Pizza.prototype.addAmountOfToppings = function(amountOfToppings){
// this.amountOfToppings = amountOfToppings;
// }

// //WIP

Pizza.prototype.price = function () {
  let price = 0;
  price = this.size * this.toppings.length; //.val() may be a quick answer here
  return price;
};





//USER INTERFACE LOGIC
$(document).ready(function () {
  let userPizzaToppings
  let userPizzaSize
  $("#form-one").submit(function (e) {
    e.preventDefault();
    userPizzaToppings = $("#radio-one-div input[type='radio']:checked");//maybe parstInt here or .val()
    //console.log(userPizzaToppings.val())//this console logs a 3 --getting there...
    $("#form-two").slideDown();
    $("#form-one").slideUp();
  })
  $("#form-two").submit(function (e) {
    e.preventDefault();
    userPizzaSize = parseInt($("#radio-two-div input[type='radio']:checked"));
    $("#results").slideDown();
    $("#form-two").slideUp();
  })
  const userPizzaOne = new Pizza(userPizzaToppings, userPizzaSize)
  //const pizzaOne = new Pizza(["mushrooms", "sausage"], 3);//sample pizza
  //$("#price-place").html(pizzaOne.price())
  $("#price-place").html(userPizzaOne.price())
})