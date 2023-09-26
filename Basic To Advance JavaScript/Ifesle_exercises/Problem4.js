//Write a program that checks if a given year is a leap year. A leap year is divisible by 4 but not by 100, or it is divisible by 400.

let year = 2032;
if(year % 4 === 0){
    console.log(`The given year ${year} is Leap Year`);
}
else{
    console.log(`The given year ${year} is not Leap Year`);
}