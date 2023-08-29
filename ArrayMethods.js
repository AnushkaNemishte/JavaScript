const arr = [
    {
        id:1,
        name:"Anuu"
    },
    {
        id:2,
        name:"Anuja"
    }
]
const fruits = ["Mango","Banana","Apple"]
//for of 
for (let array of arr){
    console.log(array);
}
for (let fruit of fruits){
    console.log(fruit);
}

//for Each
//The forEach() method calls function for each element in array
//the forEach() method is not executed for empty elements

//syntax array.forEach(function(currentValue,index,arr))
//currentValue - required
//index - optional
//arr - Optional

const numbers = [1,2,3,4,5]
numbers.forEach(function(num){
    console.log(num);
})

numbers.forEach(function(num,index){
    console.log(num +" "+index);
})

numbers.forEach(function(num,index,arr){
    console.log(arr);
})

fruits.forEach(function(item,index){
    console.log(item+ " "+ index)
})

//map
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
////syntax array.map(function(currentValue,index,arr))
const numberss = [1,2,3,4,5,6]
numberss.map((item)=>{
    console.log(item)
})

const Products = [
    {
        name:"laptop",
        price:50000,
        count:5
    },
    {
        name:"Desktop",
        price:10000,
        count:2
    }
]

const totalPrice = Products.map((items)=>{
    return items.price * items.count
})
console.log(totalPrice)

const totalValue_name = Products.map((item)=>({
name:item.name,
totalValue:item.price * item.count
}))
console.log(totalValue_name)

//convert array of string numbers "1" to array of numbers 1
const str = ["1","2","3","4","5"];
const numbersss = str.map((item)=>{
    return Number(item)
}) 
console.log(numbersss)

//filter()
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.

const numarray = [1,2,3,4,5,6]

const evennum = numarray.filter((value)=>{
    return value % 2 === 0
})
console.log("Even numbers",evennum)

const oddnum = numarray.filter((value)=>{
    return value % 2 === 1
})
console.log("oddnumbers",oddnum)

const person = [
    {
        name:"Anushka",
        age:21
    },
    {
        name:"Anuja",
        age:17
    },
    {
        name:"Ravina",
        age:28
    },
    {
        name:"Riya",
        age:13
    }
]
//filter the age greater than 18
const adults = person.filter((value)=>{
    return value.age>=18
})
console.log("age",adults)

//remove duplicate numbers 
const duplicateNum = [1,2,3,4,5,1,5,4,3,2,9]
const removeDuplicate = duplicateNum.filter((value,index,arr)=>{
    return arr.indexOf(value)===index
})
console.log(removeDuplicate)

//filter() and map() together
const todos = [
    {
        id:1,
        text:"To do Homework",
        isCompleted:true
    },
    {
        id:2,
        text:"To do JavaScript",
        isCompleted:true
    },
    {
        id:3,
        text:"To go Market",
        isCompleted:false
    },
    {
        id:1,
        text:"To do Exercise",
        isCompleted:true
    }
]

    const todoCompleted = todos.filter((todo)=>{
        return todo.isCompleted === true
    }).map((todo)=>{ //this will return only text which iscomplted is true
        return todo.text
    })

    console.log(todoCompleted);
