const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0;

for (i = 0; i < prices.length; i++) {
  sum += prices[i];
}

console.log(`O total é ${sum}`);

sum = Math.round(sum);
console.log(`O total é ${sum}`);
