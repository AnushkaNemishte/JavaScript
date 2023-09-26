// Get user input for height (in meters) and weight (in kilograms)
let height = parseFloat(prompt("Enter your height in meters:"));
let weight = parseFloat(prompt("Enter your weight in kilograms:"));

// Calculate BMI (BMI = weight / (height * height))
let bmi = weight / (height * height);

// Determine the health category based on BMI
let healthCategory;

if (bmi < 18.5) {
    healthCategory = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
    healthCategory = "Normal Weight";
} else if (bmi >= 25 && bmi < 29.9) {
    healthCategory = "Overweight";
} else {
    healthCategory = "Obese";
}

// Display the BMI and health category
console.log(`Your BMI is: ${bmi.toFixed(2)}`);
console.log(`Health Category: ${healthCategory}`);
