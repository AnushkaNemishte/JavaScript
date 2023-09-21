//string indexing

let myName = 'Anushka';

//A N U S H K A
//1 2 3 4 5 6 7

//length of string 
//myName.length
console.log(myName.length);
//last Index : length - 1
console.log(myName[myName.length-1]);

//String methods
//remove white spaces use trim()

let fname = "     Anushka     "
console.log(fname.length);
let newfname = fname.trim() //strings are immutable so we cannot perform opration with same string it will not change origial string
console.log(newfname.length);

//make all characters in uppercase (capital)
let nName = "anUja"
let upperCaseName = nName.toUpperCase()
console.log(upperCaseName);

//make all chars in lowercase(small)
let lowerCaseName = nName.toLowerCase();
console.log(lowerCaseName);

//slice()  - slice(start index ,end index)
let useSlice = nName.slice(1,3) //start from index one and end on 3 but will not print 3
console.log(useSlice);

//slice() - start index - it takes all character from 1 to end
let UseeSlice = nName.slice(1)
console.log(UseeSlice);

//replace() 
let fullName = "Deepeka Padukon"
let newName = fullName.replace('Padukon','Sigh') //write what we have to replace with
console.log(newName);

//concate()
let Fname = "Anushka"
let Lname = "Nemishte"
let FullName = Fname +" ".concat(Lname)
console.log(FullName);