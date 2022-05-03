function calculator(symbol, number1, number2) {
  switch (
    symbol === `+` ||
    symbol === `-` ||
    symbol === `*` ||
    symbol === `/`
  ) {
    case symbol === `+`:
      console.log(number1 + number2);
      break;

    case symbol === `-`:
      console.log(number1 - number2);
      break;

    case symbol === `*`:
      console.log(number1 * number2);
      break;

    case symbol === `/`:
      console.log(number1 / number2);
      break;

    default:
      console.log(`ERROR! Please put a valid math symbol!`);
      break;
  }
}

calculator(`+`, 2, 7);
