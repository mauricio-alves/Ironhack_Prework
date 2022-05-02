let turtle1 = "Leonardo";
let turtle2 = "Raphael";
let turtle3 = "Donatello";
let turtle4 = "Michelangelo";

let allTurtles = "";

allTurtles += turtle1 + " ";
allTurtles += turtle2 + " ";
allTurtles += turtle3 + " ";
allTurtles += turtle4 + " ";
console.log(allTurtles);
console.log(allTurtles.indexOf(`Donatello`));
console.log(allTurtles.length);

let firstHalfTurtles = allTurtles.slice(0, 16);
console.log(firstHalfTurtles);
let secondHalfTurtles = allTurtles.slice(17, 40);
console.log(secondHalfTurtles);

console.log(`My favorites are ${firstHalfTurtles}`);
console.log(`My least favorites are ${secondHalfTurtles}`);
