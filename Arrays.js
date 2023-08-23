//Arrays - Varible that hold multiple values
//In javaScript we can put multiple data types in same array
//arrays are zero based 
const fruits = ["Mango", "Apple", "Banana", "Orange", 10, 5.6, null, undefined];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[5]);

//Array Methods
//1)length - The length property returns the length (size) of an array:
const fruitlen = fruits.length;
console.log("Fruits length", fruitlen);

//2)Array toString() -The JavaScript method toString() converts an array to a string of (comma separated) array values.
const ArraytoString = fruits.toString();
console.log("Array to String", ArraytoString);

//3)join()-The join() method also joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator:
const joinArray = fruits.join("=");
console.log("joins = ", joinArray);

//4)pop() - The pop() method removes the last element from an array:
const popmethod = fruits.pop();
console.log("pop ", popmethod);
console.log(fruits); //check last value is removed or not

//5)push() - The push() method adds a new element to an array (at the end):
const pushMethod = fruits.push("kiwi");
console.log("pushmethod", pushMethod);
console.log(fruits); //check last value  ("kiwi") is added or not

//6)shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index.

const shiftMethod = fruits.shift();
console.log("removed element", shiftMethod);
console.log(fruits);

//7)unshift()-The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const unShiftMethod = fruits.unshift("Drangon-Fruit");
console.log("added element", unShiftMethod);
console.log(fruits);

//8)Array.isArray - check if given array is array or not returns booleans
console.log(Array.isArray(fruits));

//9)indexof()
console.log(fruits.indexOf("Apple"));

//10)delete() - Warning ! Array elements can be deleted using the JavaScript operator delete Using delete leaves undefined holes in the array.Use pop() or shift() instead.

const deleteMethod = delete fruits[2];
console.log(fruits);

//using splice method for delete - With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const spliceForDelete = fruits.splice(0, 2);
console.log(spliceForDelete);
console.log(fruits);

