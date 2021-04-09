// BUSINESS LOGIC
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let pizzaOne = new Pizza(3, ["mushrooms", "sausage"]);

Pizza.prototype.price = function () {
  let price = 0;
  price = this.size * (this.toppings.length);
  return price;
};


//SAMPLE USER INTERFACE LOGIC
$(document).ready(function () {
  $("#NAMEOFOFORM").submit(function (e) {
    e.preventDefault();
    const personInput = $('input#userNum').val()
    $("#result").html(beepBoop(personInput))
  })
})

//USER INTERFACE LOGIC