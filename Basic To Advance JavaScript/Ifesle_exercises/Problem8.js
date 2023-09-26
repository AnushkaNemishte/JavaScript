// Develop a simple calculator program that takes two numbers and an operator (+, -, *, /) as input and performs the corresponding arithmetic operation using if-else .

let num1 = Number(prompt("Enter number 1"))
let num2 = Number(prompt("Enter number 2"))
let operator = prompt('Enter an operator (+, -, *, /)')

if(operator === "+"){
    console.log("Addition = ",num1+num2);
}
else if (operator === '-'){
    console.log("Substraction = ",num1-num2);
}else if(operator === '*'){
    console.log("Multiplication = ",num1*num2);
}else if(operator === '/'){
    console.log("Division = ",num1/num2);
}else{
    console.log('you enter wrong operator');
}
