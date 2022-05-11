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

matrix.forEach(elem => {
  console.log(`The element ${elem} is of type: ${typeof elem}.`);
});


for (let key in matrix) {
  console.log(key);
}
console.log('tech' in matrix);

// let sortedMatrix = value.map((v, i) => {
//   return { i, value: someSlowOperation(v) };
// });

// sortedMatrix.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// const result = sortedMatrix.map(v => matrix[v.i]);

// function sortProducts(matrix) {
//   // let productsCategory = `The product: ${matrix[0][0].product} is category: ${matrix[0][0].category}`;
//   // console.log(productsCategory);
//   let sortedMatrix = [];
//   for (i = 0; i <= matrix.length; i++) {
//     if (matrix[0][0].category === "tech") {
//       sortedMatrix.push(matrix[0][0]);
//     }
//   }
//   console.log(sortedMatrix);
// }

// matrix.sort(function (a, b) {
//   return a.value - b.value;
// });

// sortProducts(matrix);

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
