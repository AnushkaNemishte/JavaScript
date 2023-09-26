//Write a program that takes a student's score as input and assigns a letter grade (A, B, C, D, or F) based on the score. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

//Grade Calculator
let marks = 68;
if(marks>=90 && marks <= 100){
    console.log('A Grade');
}
else if (marks>=80 && marks<=89){
    console.log('B Grade');
}
else if (marks >= 70 && marks <=79){
    console.log('C Grade');
}
else if(marks >=60 && marks <=69){
    console.log('D Grade');
}
else{
    console.log('F failed');
}