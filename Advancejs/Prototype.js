// What is Prototype in JavaScript
// A prototype is an existing inbuilt functionality in JavaScript. Whenever we create a JavaScript function, JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object.

function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const person1 = new Person("Anushka", "Nemishte");
const person2 = new Person("Anuja", "Nemishte");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName());
console.log(person2.getFullName());
