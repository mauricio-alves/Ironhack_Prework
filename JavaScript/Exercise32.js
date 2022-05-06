let property = {
  owner: {
    firstName: "John",
    lastName: "Doe",
    age: 44,
  },
  isForSale: true,
  sqrm: 120,
  address: {
    street: "Happy St",
    number: 123,
    city: "Miami",
    state: "FL",
    country: "US",
  },
  amenities: ["pool", "tennis court", "private parking", "yard"],
};

function checkProperty(property) {
  if (property.isForSale === true) {
    console.log(
      `The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities.`
    );
  } else {
    console.log(
      `The home in ${property.address.street} no. ${property.address.number} is not for sale.`
    );
  }
}

checkProperty(property);
