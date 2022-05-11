let ironCities = [
  "Amsterdam",
  "Barcelona",
  "Berlin",
  "Lisbon",
  "Madrid",
  "Mexico City",
  "Miami",
  "Paris",
  "Sao Paulo",
];

function printEvens(ironCities) {
  let result = [];
  for (i = 0; i <= ironCities.length - 1; i++) {
    if (i % 2 === 0) {
      result.push(ironCities[i]);
    }
  }
  for (i = 0; i <= result.length - 1; i++) {
    console.log(result[i]);
  }
}

printEvens(ironCities);
