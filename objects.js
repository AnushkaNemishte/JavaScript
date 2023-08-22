const Person = {
    fname:"Anushka",
    lname:"Nemishte",
    age:21,
    hobbies:["Dance","cook","code"],
    Address:{
        street:"100ft ",
        city:"Sangli",
        state:"Maharastra"
    }

}
console.log(Person);
console.log(Person.hobbies[1]);
console.log(Person.Address.state);

//Destructuring - is a javascript expression that make it possible to unpack values from arrays or properties from objects into a distinct variables.
//That is we can extract data from arrays and objects and assign them to variables

const {fname,lname,Address:{city}}=Person
console.log(fname);
console.log(city);

//Arrays of object

const todos = [
    {
        id:1,
        task:"Complete javascript tutorial",
        isCompleted:"true"
    },
    {
        id:2,
        task:" Buy Veggiess",
        isCompleted:"true"
    },
    {
        id:1,
        task:" Go outside",
        isCompleted:"false"
    }
]
console.log(todos);
console.log(todos[1].task);

//convert into json 
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

//loop through array
//for of
for(let todo of todos){
    console.log(todo.task);
}
