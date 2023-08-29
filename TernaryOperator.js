//The expression consists of 3 opperands : the condition , value if true , and value if false
//condition ? value if true : value if false
const age = 8
const vote = age>=18 ? "You can vote ":"Visit after you become 18";
console.log(vote);

const x = 11;
const color = x == 10 ? "red":"blue";
console.log(color);
switch(color){
    case "red":console.log("color is red");
    break;
    case 'blue':console.log("color is blue");
    break;
    default:
        console.log("go home");
}