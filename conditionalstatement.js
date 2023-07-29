const num = -5
if(num>0)
{
    console.log(`The number ${num} is Positive number`);
}
else if(num === 0)
{
    console.log(`The number ${num} is Neutral Number`);
}
else {
    console.log(`The number ${num} is Negative number`);
}

const num1 = 10
if(num1%2==0){
    console.log(`The number ${num1} is Even Number`);
}
else{
    console.log(`The number ${num1} is Odd Number`);
}

const year = 2020;
if(year%4==0)
{
    console.log(`The year ${year} is Leap year`);
}
else
{
    console.log(`The year ${year} is Not Leap year`);
}

const age = 21
if(age>=18){
    console.log("You are adult and you can vote");
}
else{
    console.log("You are kid");
}

const marks=83
if(marks>=90)
{
    console.log("Passed with A++");
}
else if (marks >=80)
{
    console.log("Passed with A+");
}
else if(marks>=70){
    console.log("Passed with A");
}
else if(marks >=60)
{
    console.log("Passed with B");
}
else if(marks >=50)
{
    console.log("Passed with C");
}
else{
    console.log("Fail");
}

const numb = 25
if(numb>0){
    if(numb%2==0){
        console.log("The Number is Positive & Even Number");
    }
    else{
        console.log("The Number is Positive & Odd Number");
    }
}else if(numb == 0){
    console.log("The number is neutral");
}
else{
    console.log("The number is negative number");
}

let day = "Sunday"
if(day==="Saturday" || day === "Sunday"){
    console.log("Its Weekend");
}
else{
    console.log("Its a weekday");
}

let isRaining = false;
let msg = isRaining?"Dont forget your umbrella":"Enjoy the weather";
console.log(msg);