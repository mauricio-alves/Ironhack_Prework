// Unfinished exercise
const matrix = [
  [
    { product: "MacBook", price: 1019, category: "tech" },
    { product: "Cheerios", price: 5, category: "food" },
  ],

  [
    { product: "Snickers", price: 1.5, category: "food" },
    { product: "Air Pods", price: 129, category: "tech" },
  ],
];

function sortProducts(matrix) {
  const productsCategory = `The product: ${matrix[0][0].product} is category: ${matrix[0][0].category}`;
  console.log(productsCategory);
  matrix.forEach((elem) => {
    console.log(`The element ${elem} is of type: ${typeof elem}.`);
  });
}

sortProducts(matrix);

// function sortProducts(a, b) {
//   if (a.category < b.category) {
//     return -1;
//   }
//   if (a.category > b.category) {
//     return 1;
//   }
//   return 0;
// }

// console.log(matrix.sort(sortProducts));
