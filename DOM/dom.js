// console.dir(document)
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms[0]);

//Get Element by id
// const hearderTitle = document.getElementById('header-title');
// console.log(hearderTitle);
//change text in header-title
// hearderTitle.textContent="Hello"
// hearderTitle.innerText="Good Bye"
//change text color 
// hearderTitle.style.color="yellow"

// const header = document.getElementById("main-header");
// header.style.border="3px solid black"

// const items = document.getElementById('items');
// items.innerHTML="<h3>Hii Annuu<h3/>"

//Get Element by ClassName
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Heello";
// items[0].style.background = "red"
//gives error if we want to give bg color to all items
//items.style.background="yellow"

//we have to loop for it
// for (i=0 ; i<items.length ; i++ ){
//     items[i].style.background="grey"
// }

// Get elements by TagName - works just like className
// const hearder1 = document.getElementsByTagName('h1');
// console.log(hearder1);
// hearder1[0].style.background="yellow"

//querySelector
const header = document.querySelector('#main-header');
// header.remove()
header.style.borderBottom = 'solid 5px black '

const input = document.querySelector('input')
input.value="item 6"

const submit = document.querySelector('input[type=submit]')
submit.value="Send"


//query selector all -grabs more than one thing
const headers = document.querySelectorAll('.title')
console.log(headers);
headers[0].textContent = "JSKFSIWHEFh" 

const odd = document.querySelectorAll('li:nth-child(odd')
for (var i = 0;i<odd.length ; i++ ){
    odd[i].style.background = '#f4f4f4'
}