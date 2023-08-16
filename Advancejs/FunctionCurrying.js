//Curring is a process in programming in which we transform a function with multiple arguments into a sequence of nesting function that take one argument at a time
//ex-: function f(a,b,c) is transformed to f(a)(b)(c)

//Normal function
// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(2, 2, 2));

//curring function

function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
const curriedfunction = sum(10)(10)(10);
console.log(curriedfunction);
