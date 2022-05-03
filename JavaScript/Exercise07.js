let rock = "rock";
let scissors = "scissors";
let paper = "paper";

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

let firstPossibility =
  firstPlayerChoice === rock && secondPlayerChoice === scissors;
let secondPossibility =
  firstPlayerChoice === paper && secondPlayerChoice === rock;
let thirdPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === paper;

let fourthPossibility =
  firstPlayerChoice === scissors && secondPlayerChoice === rock;
let fifthPossibility =
  firstPlayerChoice === rock && secondPlayerChoice === paper;
let sixthPossibility =
  firstPlayerChoice === paper && secondPlayerChoice === scissors;

let seventhPossibility = firstPlayerChoice === secondPlayerChoice;

switch (firstPlayerChoice === rock && secondPlayerChoice === scissors) {
  case firstPossibility:
  case secondPossibility:
  case thirdPossibility:
    console.log(`First player won!`);
    break;

  case fourthPossibility:
  case fifthPossibility:
  case sixthPossibility:
    console.log(`Second player won!`);
    break;

  case seventhPossibility:
    console.log(`It's a tie! play again.`);
    break;

  default:
    console.log(`Something went wrong!`);
    break;
}
