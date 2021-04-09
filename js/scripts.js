// BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function () {
  let price = 0;
  price = this.size * (this.toppings.length);
  return price;
};

const pizzaOne = new Pizza(3, ["mushrooms", "sausage"]);//sample pizza


//SAMPLE USER INTERFACE LOGIC
$(document).ready(function () {
  $("#NAMEOFOFORM").submit(function (e) {
    e.preventDefault();
    const personInput = $('input#userNum').val()
    $("#result").html(beepBoop(personInput))//see next comment for sample WIP
  })
})
/*
//const personPizza = $('input#userNum').val()
$("#result").html(personPizza.price())
*/

//USER INTERFACE LOGIC
$(document).ready(function () {
  let userPizzaToppings
  let userPizzaSize
  $("#form-one").submit(function (e) {
    e.preventDefault();
    userPizzaToppings = $("#radio-one-div input[type='radio']:checked");
    $("#form-two").slideDown();
    $("#form-one").slideUp();
  })
})