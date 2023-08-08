//Closure in action that is inner function can have  acess to the outer function variables/parameters as well as the global variables.
//Lexical scope/environment is the ability for function scope to access variables from the parent scope .
//A closure is the combination of a function and the lexical environment within which that function was declared.

function outer(){
    let counter = 1
    function inner(){
        counter++
        console.log(counter);
    }
    inner()
}
outer()

// function outerfun(a){
//     let b=10
//     function innerfun(){
//         sum=a+b
//         console.log(`The sum is ${sum}`);
//     }
//     innerfun()
// }
// outerfun(15)

//[The return statement does not execute the inner function - function is executed only when followed by (), but rather the return statement returns the entire body of the function.]

function outerfun(a){
        let b=10
        function innerfun(){
            sum=a+b
            console.log(`The sum is ${sum}`);
        }
        return innerfun
    }
    let inner = outerfun(15)
    console.dir(inner);

    //In javascript , when we return a function from another function , we are effectively returning a combination of the function definition along with the function's scope.This would let the function defination have an associated peristent memory which could hold on to live data between executions.That combination of the function and its scope chain is what is called a closure in javascript. 