//data types (primitive data types)
//string - "Anushka"
//number - 2,4,5,6
//booleans - true/false
//undefined - let firstName;
//null - left firstName = null;
//BigInt - 1245444444444444444444444444444444444444444444448888888n;
//symbol

let firstName = "Anushka";
console.log(typeof firstName,firstName);

let num = 12;
console.log(typeof num,num);

let isValue = true;
console.log(typeof isValue,isValue);

let myName;
console.log(typeof myName,myName);

let fname = null;
console.log(typeof fname,fname);

//there is certain limit to how long number you can store in number 
// console.log(Number.Max_SAFE_INTEGER)
//There are two ways to write bigInt
//let bigNum = BigInt(1212231333);
//or
let bigNum = 214555546545456464646466n;
console.log(typeof bigNum,bigNum);