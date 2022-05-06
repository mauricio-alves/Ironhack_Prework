const prices = [5, 7.99, 9.99, 0.99, 21];

function sum(prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    result += prices[i];
  }
  console.log(result);
}

sum(prices);

const greeting = ["hello"];

function stringToLetters(greeting) {
  var message = greeting[0].split("");
  console.log(message);
}

stringToLetters(greeting);

function countDown() {
  for (i = 1; i <= 100; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      console.log("Ironhack");
    } else if (i % 4 === 0) {
      console.log("Hey");
    } else if (i % 6 === 0) {
      console.log("There");
    } else if (i % 7 === 0) {
      continue;
    } else if (i === 34) {
      console.log("34!");
    } else {
      console.log(i);
    }
  }
}

countDown();
