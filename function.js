// function greet() {
//   console.log("Good morning Anushka!!!");
// }
// greet();

//greet using name dynamic
function greet(username) {
  console.log("Good Morning " + username);
}
greet("Anushka");
greet("Anuja");
greet("Sherya");

//add 2 numbers
function add(num1, num2) {
  return num1 + num2;
}
const sum = add(89, 45);
console.log("Sum = ", sum);

function mul(a, b) {
  return a * b;
}

const multi = mul(5, 4);
console.log("Multiplication = ", multi);

//arrow Function

const arrowSum = (p, q) => {
  return p / q;
};
console.log("Division = ", arrowSum(78, 5));
