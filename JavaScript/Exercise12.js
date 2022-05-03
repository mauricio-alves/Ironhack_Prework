function colorMix(color1, color2) {
  if (
    (color1 === `red` && color2 === `blue`) ||
    (color1 === `blue` && color2 === `red`)
  ) {
    return `Violet!`;
  } else if (
    (color1 === `red` && color2 === `yellow`) ||
    (color1 === `yellow` && color2 === `red`)
  ) {
    return `Orange!`;
  } else if (
    (color1 === `blue` && color2 === `yellow`) ||
    (color1 === `yellow` && color2 === `blue`)
  ) {
    return `Green!`;
  } else {
    return `Sorry, choose a right color!`;
  }
}

let myColor = colorMix(`blue`, `red`);
console.log(myColor);
