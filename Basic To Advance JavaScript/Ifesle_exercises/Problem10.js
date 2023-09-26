//Write a program that determines whether a given alphabet character is a vowel or a consonant using if-else statements.

let alphabet = prompt("Enter alphabet")

if(alphabet === "A" || alphabet ==="a" || alphabet ==="E" || alphabet ==="e" ||alphabet === "I" ||alphabet === "i" ||alphabet === "O" || alphabet ==="o" ||alphabet === "U" ||alphabet === "u"){
    console.log(`Entered alphabet ${alphabet} is vowel`);
}
else{
    console.log(`Entered alphabet ${alphabet} is consonent`);
}