const user = {
  name: "Bob",
  surname: "Martin",
  age: 25,
  address: {
    country: "USA",
  },
};

function printBio(user) {
  return `This is ${user.name} ${user.surname} from ${user.address.country}.`;
}
