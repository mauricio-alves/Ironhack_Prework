const mixedArray = [
  123,
  "abc",
  true,
  { a: 1 },
  ["js", "node", "react"],
  undefined,
];

// YOUR CODE HERE
function search(mixedArray) {
  for (i = 0; i < mixedArray.length; i++) {
    console.log(
      `The element ${mixedArray[i]} is of type: ${typeof mixedArray[i]}`
    );
  }
}

search(mixedArray);

let user = {
  username: "ironhacker",
  password: "123iron345",
};

function getCredentials(user) {
  console.log(
    `Username is: ${user.username} and the password is: ${user.password}.`
  );
}

getCredentials(user);
