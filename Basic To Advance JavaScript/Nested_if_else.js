let winning_number = 19;
let userGuess = Number(prompt("Guess a number"));

if (userGuess === winning_number) {
  console.log(" Congratulations Your guess is right !!!!!!");
} else {
  if (userGuess < winning_number) {
    console.log("Too low !!!!!");
  } else {
    console.log("Too high !!!!!");
  }
}
