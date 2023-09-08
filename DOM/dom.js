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
// const header = document.querySelector('#main-header');
// header.remove()
// header.style.borderBottom = 'solid 5px black '

// const input = document.querySelector('input')
// input.value="item 6"

// const submit = document.querySelector('input[type=submit]')
// submit.value="Send"


//query selector all -grabs more than one thing
// const headers = document.querySelectorAll('.title')
// console.log(headers);
// headers[0].textContent = "JSKFSIWHEFh" 
// headers[1].textContent="hgjkgkhlh"

// const odd = document.querySelectorAll('li:nth-child(odd')
// for (var i = 0;i<odd.length ; i++ ){
//     odd[i].style.background = '#f4f4f4'
// }

//TRAVERSING THE DOM
//parent nodes
// const item_list = document.getElementById('items')
// console.log(item_list.parentNode);
// item_list.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(item_list.parentNode.parentNode); 

// parent element - parent nodes and parent elements are both same
// console.log(item_list.parentNode);
// item_list.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(item_list.parentNode.parentNode); 

//Childnodes
// console.log(item_list.childNodes);
// console.log(item_list.children);
// item_list.children[1].style.backgroundColor = "yellow"

//firstchild
// console.log(item_list.firstChild);

//firstElementChild
// console.log(item_list.firstElementChild);
// item_list.firstElementChild.textContent="Hello first Element"

//last child
// console.log(item_list.lastChild);

//lastElementChild
// console.log(item_list.lastElementChild);
// item_list.lastElementChild.textContent="Hello last element"

//nextSibling
// console.log(item_list.nextSibling);
//nextElementSibling
// console.log(item_list.nextElementSibling);

// const headers = document.getElementsByClassName('title')
// console.log(headers);
// console.log(headers[1].nextElementSibling);

//previousSibling
// console.log(item_list.previousSibling);
//previousElementSibling
// console.log(item_list.previousElementSibling);
// item_list.previousElementSibling.style.color="green"

//creating dom element from javascript and insert them
//createElement
// const newDiv = document.createElement('div')

//add className 
// newDiv.className="hello"
//add id
// newDiv.id="hello"
//add attribute
// newDiv.setAttribute('title','hello title')
//create text node
// const newDivText = document.createTextNode('Hii Anushka')
//Add text to div
// newDiv.appendChild(newDivText)
// console.log(newDiv);
//Add div to DOM
//header madlya container madye before H1
// var addDivDom = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// addDivDom.insertBefore(newDiv,h1)

//Events
//addEventListener
// const newbtn = document.getElementById('btnn').addEventListener('click',function(){
//     console.log("clicked btn");
// })
// const btn = document.getElementById('btnn').addEventListener('click',btnFunction)

// function btnFunction(e){
    // document.querySelector('#header-title').textContent="Text Changed";
    // document.querySelector('#main').style.backgroundColor="grey";
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    //type of event
    // console.log(e.type);
// }

//Mouse Events
// const button = document.getElementById('btnn');
// button.addEventListener('click',runEvent)
// button.addEventListener('mousedown',runEvent)
// button.addEventListener('mouseover',runEvent)
// function runEvent (e){
// console.log('Event Type: ',e.type);
// }

// const box = document.getElementById('box')
// box.addEventListener('mouseenter',runEvent)

// function runEvent(){
//     console.log('mouseEnter');
// }

//var itemInput = document.querySelector('input[type="text"]')
// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)
// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

// function runEvent(e){
//      console.log('Event type: ',e.type);
    //console.log(e.target.value);
//    const output =  document.getElementsByClassName('output')
//    output.innerHTML = '<h3>'+ e.target.value +'</h3>'
// //}

// const form = document.querySelector('form')
// form.addEventListener('submit',runEvent);

// function runEvent(e){
//     e.preventDefault()
//     console.log("Event type",e.type);
// }

// const select = document.querySelector('select')
// select.addEventListener('change',runEvent)
// function runEvent(e){
//          console.log("Event type",e.type);
//          console.log(e.target.value);
//      }