let products = [
  {
    name: "iPhone",
    price: 799.99,
  },
  {
    name: "Samsung Galaxy S10",
    price: 900.0,
  },
];

console.log(`The price of the ${products[0].name} is R$ ${products[0].price}!`);
console.log(
  `The available phones to sell are ${products[0].name} and ${products[1].name}!`
);

products.unshift({ name: "Xiaomi", price: "850.0" });
console.log(products);

products.pop();
console.log(products);
