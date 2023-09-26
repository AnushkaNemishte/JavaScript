//Simulate a traffic light. Write a program that asks the user for the current traffic light color (red, yellow, or green) and prints a message based on the color (e.g., "Stop!" for red, "Slow down" for yellow, "Go!" for green).

let trafficColor = 'red'
if(trafficColor === 'red')
{
    console.log('STOP');
}
else if (trafficColor === 'yellow'){
    console.log('SLOW DOWN');
}
else if(trafficColor === 'green'){
    console.log('GO');
}
else{
    console.log("There are only 3 colors in signal dont type any other");
}