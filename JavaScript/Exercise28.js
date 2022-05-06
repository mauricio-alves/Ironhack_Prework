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
}
printToTwenty();

function printNumbers(number) {
  let result = 0;
  for (i = 0; i < number - 1; i++) {
    result += 1;
    console.log(result);
  }
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
  console.log(ironCities);
}

printArrElements(ironCities);
