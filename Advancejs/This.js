//The Javascript this keyword which is used in a function , refers to the object it belongs to .
//It makes functions reusable by letting you decide the object value
//this value is determined entirely by how a function is called

//normal function
// function myName(yourname) {
//   console.log(`My name is ${yourname}`);
// }
// myName("Anushka");

//How to determine 'this'?
//1) Imlicit binding  2) Explicit binding 3)New binding  4)Default binding
//1)Imlicit binding

// const person = {
//   name: "Anushka",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// person.sayMyName();

//2)Explicit binding
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }
// sayMyName.call(person);

//3)new binding
function People(name) {
  this.name = name;
}

const p1 = new People("Anushka");
const p2 = new People("Anuja");

console.log(p1.name, p2.name);
