// BUSINESS LOGIC
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function () {
  let price = 0;
  price = this.size * this.toppings.length;
  return price;
};





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