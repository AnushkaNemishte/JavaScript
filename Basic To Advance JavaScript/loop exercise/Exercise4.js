//Write a program to calculate and print the factorial of a number N, where N is entered by the user. The factorial of N is given by: factorial = N! = N * (N-1) * (N-2) * ... * 2 * 1.
let i =1;
let fact=1;

while(i<=5){
    fact=fact*i;
    i++
}
console.log(fact);