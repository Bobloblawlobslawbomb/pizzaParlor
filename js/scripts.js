function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.amountOfToppings = toppings.length;
}

Pizza.prototype.price = function () {
  let price = 0;
  price = this.size * this.amountOfToppings;
  return price;
};

$(document).ready(function () {
  let userPizzaToppings
  let userPizzaSize
  $("#form-one").submit(function (e) {
    e.preventDefault();
    userPizzaToppings = $("#radio-one-div input[type='radio']:checked").val();
    $("#form-two").slideDown();
    $("#form-one").slideUp();
  })
  $("#form-two").submit(function (e) {
    e.preventDefault();
    userPizzaSize = $("#radio-two-div input[type='radio']:checked").val();
    $("#results").slideDown();
    const userPizzaOne = new Pizza(userPizzaToppings, userPizzaSize);
    $("#price-place").html("$" + userPizzaOne.price() + ".99");
    $("#form-two").slideUp();
  })
})