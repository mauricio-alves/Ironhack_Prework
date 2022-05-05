function countSmilies(message) {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    const char1 = message[i];
    const char2 = message[i + 1];

    if (char1 === ":" && char2 === ")") {
      count++;
    }
  }

  return count;
}

console.log(countSmilies(["Hello :), how are you doing :) :D"]));
