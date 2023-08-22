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
arr.map(function(item){
    console.log(item.name); 
})