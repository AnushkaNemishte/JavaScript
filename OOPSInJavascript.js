//OOPs Concepts in JavaScript
//Object 
//Classes
//Encapsulation
//Abstraction
//Inheritance
//Polymorphism

//1] Object - An Object is a unique entity that contains properties and methods.
//for eg "a car " is a real-life object , which has some characteristics like color,type,model and perform certain actions like driving.
//The Characteristics of an object is called as Properties in Object-Oriented Programming and actions are called as methods.
//Objects are everywhere in javascript almost every element is an object whether it is function array or string.
//Object can be created in two ways in javascript: (a) Object Literal (b)Object Constructor

//Example Using Object constructor

//using constructor
function person (first_name,last_name,age){
    this.first_name=first_name
    this.last_name=last_name
    this.age=age
    
}
//prototype
person.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
}

//creating new instance of person object
let person1 = new person ("Anushka","Nemishte",21);
let person2 = new person ("Anuja","Nemishte",16)
 console.log(person1);
console.log(person2.first_name)
//function
// console.log(person1.getFullName());
console.log(person1.getFullName());



function todos (id,text,isCompleted){
    this.id=id
    this.text=text
    this.isCompleted=isCompleted
  
}
todos.prototype.getCompletedTask = function(){
    return `${this.text} ${this.isCompleted}`
}
let task1 = new todos (1,"Learn JavaScript",true)
console.log(task1);
console.log(task1.getCompletedTask());

//Example using Object Literal

const People = {
    fname:"Anushka",
    lname:"Nemishte",
    age:21,
    phone_number :{
        mobile:1234567897,
        landline:45678
    },
    getFullname : function (){
        return `My name is ${People.fname} ${People.lname}`
    }
}
console.log(People.getFullname());
console.log(People.age);
console.log(People.phone_number.mobile);

//2]Classes -Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 
//Before we move further into implementation, we should know unlike other Object Oriented languages there are no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype-based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuses it using the prototype. 

//Note: Even the classes provided by ECMA2015 are objects.
 
class Vehicle {
    constructor (name,maker,color){
        this.name=name
        this.maker=maker
        this.color=color
    }
    getdetails = function(){
        return `The name of the car is ${this.name} The maker of this car's is ${this.maker}`
    }
}
let Car1 = new Vehicle ("i20 Asta",'HYUNDAI',"white")
console.log(Car1);
console.log("Details -: ",Car1.getdetails());

//Abstraction - Abstraction means displaying only essential information and hiding the details.Data abstraction refers to providing only essential information about the data to the outside world,hiding the background details or implementation

//Encapsulation - The process of wrapping properties and function within a single unit is known as encapsulation.

//Encapsulation example
class student {
    constructor(name,roll_no){
        this.name=name
        this.roll_no=roll_no
    }
    address(add){
        this.add = add
    }
    getstudDetails = function(){
        return `Name of Student is ${this.name} , Roll No is ${this.roll_no}. Address of student is ${this.add}`
    }
}
const Student1 = new student ("Anushka",36)
Student1.address("Sangli")
console.log(Student1);
 console.log(Student1.getstudDetails());

 //Abstraction example
 class Employee {
    constructor(name,age,basicSal)
    {
        this.name=name;
        this.age=age;
        this.basicSal=basicSal;
        let bonus = 3000
        let CalSal = function(){
        let finalsal = basicSal + bonus
            console.log("Final Salary = ",finalsal);
        }
        this.getDetails = function(){
            console.log(`The name of employee is ${this.name} ,Age is ${this.age}`);
            CalSal()
        }
    }
 }
 Empl = new Employee("Anushka",25,10000)
 Empl.getDetails()
 
