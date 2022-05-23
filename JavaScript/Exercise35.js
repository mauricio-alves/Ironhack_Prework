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
  let sortedMatrix = { tech: [], food: [] };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j].category === "tech") {
        sortedMatrix.tech.unshift(matrix[i][j]);
        sortedMatrix.tech.sort((a, b) => (a.category > b.category ? -1 : 1));
      } else {
        sortedMatrix.food.push(matrix[i][j]);
        sortedMatrix.tech.sort((a, b) => (a.category > b.category ? 1 : -1));
      }
    }
  }
  return console.log(sortedMatrix);
}

sortProducts(matrix);