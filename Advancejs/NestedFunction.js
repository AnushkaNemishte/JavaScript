//Nested Function
//Nested Functions have access to variables declared in their own scope as well as outer scope
let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer();
