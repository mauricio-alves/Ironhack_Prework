myArray = ["Mauricio", 34, "Vitoria da Conquista", 438, "dog"];
console.log(myArray);

let lastElement = myArray.pop();
console.log(lastElement);
console.log(myArray);

let firstElement = myArray.shift();
console.log(firstElement);
console.log(myArray);

myArray.unshift(lastElement);
console.log(myArray);

myArray.push(firstElement);
console.log(myArray);
