//An operator is a special symbol used to perform operations on values and variables
//1)Assignment Operators       2)Arithmetic Operators
//3)Comparison Operators       4)Logical Operators
//5)String Operators

//1)Assignment Operators
//Assignment operators assign values to JavaScript variables.
let namee = "Anushka Nemishte";
console.log(namee);

//2)Arithmetic Operators
//Arithmetic Operators are used to perform arithmetic on numbers:
let x = 5;
let y = 10;
console.log("Addition = ", x + y);
console.log("Substration = ", x - y);
console.log("Multiplication = ", x * y);
console.log("Division = ", x / y);

//3)Comparison Operators
//Comparison operators are used in logical statements to determine equality or difference between variables or values.
let a = 5;
let b = 6;
console.log("Equal", a == b);
console.log("Not Equal", a != b);
console.log("Greater than ", a > b);
console.log("Smaller than ", a < b);

//4)Logical Operators
//Logical operators are used to determine the logic between variables or values.
let p = 6;
let q = 3;
console.log("Logical Add(&&) Operator", p > q && 3 < 6); //&& operator gives true only if both conditions are true
console.log("Logical OR(||) Operator", p > q || p < q); //|| operator gives true when either 1 condition is also true
console.log("Logical NOT(!) Operator", p != q);

//5)String Operators
//These operators allow you to join one string to another easily. These operators are called “concatenate” and “concatenate assignment“. 
let firstName = "Anushka";
let lastName = "Nemishte";
console.log("FullName = ",firstName +" "+lastName);

//6)Ternary Operators
//The ternary operator is a simplified conditional operator like if / else.
const isEven = 10%2===0?"Even number":"Odd number";
console.log(isEven)

//Basic ternary operator to determine the larger of two numbers
const num1 = 45;
const num2 = 35;
const largerNumber = num1>num2 ? num1:num2
console.log("Large number is ",largerNumber)

//Ternary operator for checking if a number is even or odd
const num = 15
const isEvenOrOdd = num%2===0 ? "Even":"Odd";
console.log(`The number ${num} is ${isEvenOrOdd}`);