// Get user input for temperature value and unit (Celsius or Fahrenheit)
let temperature = parseFloat(prompt("Enter the temperature value:"));
let unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit):").toUpperCase();

// Initialize a variable to store the converted temperature
let convertedTemperature;

// Use a switch statement to perform the conversion
switch (unit) {
    case 'C':
        convertedTemperature = (temperature * 9/5) + 32;
        console.log(`${temperature}°C is equal to ${convertedTemperature}°F`);
        break;
    case 'F':
        convertedTemperature = (temperature - 32) * 5/9;
        console.log(`${temperature}°F is equal to ${convertedTemperature}°C`);
        break;
    default:
        console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
}
