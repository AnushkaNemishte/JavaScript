//You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.
//The break statement can also be used to jump out of a loop
for(let i =0;i<=10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}
//In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 5.

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

for(let i = 0 ;i<=10 ;i++){
    if(i==5){
        continue;//the continue keyword skips one iteration in the current loop and continues with the next iteration
    }
    console.log(i);
}