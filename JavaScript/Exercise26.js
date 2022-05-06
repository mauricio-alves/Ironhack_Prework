let pizzas = [
  { type: "pineapple", size: "M" },
  { type: "pepperoni", size: "S" },
  { type: "pineapple", size: "S" },
  { type: "mushrooms", size: "L" },
];

function filterPizzas(pizzas) {
  let myPizzas = [];
  for (i = 0; i < pizzas.length; i++) {
    if (pizzas[i].type !== "pineapple") {
      myPizzas.push(pizzas[i]);
    }
  }
  return console.log(myPizzas);
}

filterPizzas(pizzas);
