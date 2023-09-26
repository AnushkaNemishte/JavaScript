//Falsy - If the variable value is false,zero,empty,null,undefined or Nan, its falsy and the code within the if block is not run.
//Truthy - If the variable value is anything else,such as a number that is not zero a non-empty string,an array or an object , its truthy and code in the block is run

//Falsy
//""
//null
//0
//undefined

// let firstname=""
// let firstname = undefined
let firstname=0
// let firstname = null
if(firstname){
    console.log(firstname);
}else{
    console.log("Firstname is kinda empty");//here the value is false therefore the else block got executed
}

//truthy
let f_name = "Anushka"
if(f_name){
    console.log(f_name);
}
else{
    console.log("firstname is empty");
}