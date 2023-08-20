//concatination
const fname = "Anushka";
const sentance = "The, fox ,jumps ,on ,lazy ,dog";
const age = 21;
// console.log("My name is " + fname + "and my age is " + age);
//template litrals
console.log(`My name is ${fname} and my age is ${age}`);

//length
console.log(fname.length);

//toUpperCase()
console.log(fname.toUpperCase());

//toLowerCase()
console.log(fname.toLowerCase());

//substring
//The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
console.log(fname.substring(0, 5));
console.log(fname.substring(1, 4).toUpperCase());

//split
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.(string to array)
console.log(fname.split(""));
console.log(sentance.split(","));
console.log(sentance.split());
