//Develop a program for a movie theater that calculates the ticket price based on the age of the customer (child, adult, senior) and whether it's a matinee or evening show using nested if-else statements.
// Constants for ticket prices
const CHILD_PRICE_MATINEE = 70;
const CHILD_PRICE_EVENING = 100;
const ADULT_PRICE_MATINEE = 125;
const ADULT_PRICE_EVENING = 150;
const SENIOR_PRICE_MATINEE = 100;
const SENIOR_PRICE_EVENING = 125;

// Get user input for age and show time
let age = Number(prompt("Enter your age:"));
let isMatinee = confirm("Is it a matinee show? (OK for Yes, Cancel for No)");

// Initialize a variable to store the ticket price
let ticketPrice;

// Use nested if-else statements to determine the ticket price
if (age < 0) {
    console.log("Invalid age.");
} else if (age < 18) { // Child
    if (isMatinee) {
        ticketPrice = CHILD_PRICE_MATINEE;
    } else {
        ticketPrice = CHILD_PRICE_EVENING;
    }
} else if (age < 65) { // Adult
    if (isMatinee) {
        ticketPrice = ADULT_PRICE_MATINEE;
    } else {
        ticketPrice = ADULT_PRICE_EVENING;
    }
} else { // Senior
    if (isMatinee) {
        ticketPrice = SENIOR_PRICE_MATINEE;
    } else {
        ticketPrice = SENIOR_PRICE_EVENING;
    }
}

// Display the ticket price
console.log(`Ticket Price: ${ticketPrice}rs`);