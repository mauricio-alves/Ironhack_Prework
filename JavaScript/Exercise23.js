let student = {
  firstName: "Ana",
  lastName: "Blair",
  course: {
    name: "Web Development",
    type: "part-time",
  },
  attendedIn: "Madrid",
  address: {
    street: "Happy Street",
    number: 123,
    city: "Barcelona",
    zip: 08015,
    country: "Spain",
  },
};

console.log(student.course.name); // => Web Development
console.log(student.address.street); // => Happy Street
console.log(
  `${student.firstName} moved from ${student.address.city} to ${student.attendedIn} to take ${student.course.type} ${student.course.name} course`
); // => Ana moved from Barcelona to Madrid to take part-time Web Development course.
