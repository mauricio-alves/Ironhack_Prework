function welcome(name) {
  return console.log(`Welcome ${name}`);
}

welcome("Mauricio");

function printToTwenty() {
  let result = 0;
  for (i = 0; i < 20; i++) {
    result += 1;
    console.log(result);
  }
  return console.log(result);
}
printToTwenty();

function printNumbers(number) {
  let result = 0;
  for (i = 0; i <= number - 1; i++) {
    result += 1;
    console.log(result);
  }
  return console.log(result);
}

printNumbers(32);

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

function printArrElements(ironCities) {
  for (i = 0; i <= ironCities.length - 1; i++) {
    console.log(ironCities[i]);
  }
}

printArrElements(ironCities);

let favoriteCities = ["Amsterdam", "Madrid", "Mexico City", "Miami", "Paris"];
let favoriteFood = ["Churrasco", "Lasanha", "Sushi", "Pizza"];

function printArrElements(favoriteCities) {
  for (i = 0; i <= favoriteCities.length - 1; i++) {
    console.log(favoriteCities[i]);
  }
  return console.log(favoriteCities)
}

printArrElements(favoriteCities);
printArrElements(favoriteFood);
