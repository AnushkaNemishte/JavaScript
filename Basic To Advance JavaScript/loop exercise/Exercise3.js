//Sum of Natural Numbers: Write a program to calculate and print the sum of all natural numbers from 1 to N, where N is entered by the user. The formula for the sum of natural numbers is: sum = (N * (N + 1)) / 2.

let sum=0;
let i = 1;

while(i<=10){
    sum=sum+i; 
    i++
}
console.log("total",sum);