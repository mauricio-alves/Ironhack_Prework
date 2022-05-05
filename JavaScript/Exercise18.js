function pickOdd(arr) {
  const oddNumbers = []; // do not remove or change this line

  for (i = 0; i < arr.length + 1; i++) {
    if (arr[i] % 3 === 0 || arr[i] === 1) {
      oddNumbers.push(arr[i]);
    } else {
      continue;
    }
  }

  return oddNumbers; // do not remove or change this line
}

console.log(pickOdd([1, 2, 3, 4]));
