const obj = {
  firstName: "Jobayer",
  lastName: "Ahmed",
  age: 27,
};

const way1 = obj.age;
const way2 = obj["lastName"];
// console.log(way1);
// console.log(way2);
//
//
// Function Method in object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
