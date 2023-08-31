//Single Element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//Multiple element selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const ul =document.querySelector('.items')
// ul.remove() //removes all elements
// ul.lastElementChild.remove() //removes last element
// ul.firstElementChild.textContent="good morning" //adds to the first element of ul
// ul.lastElementChild.innerHTML="<h1>helloo<h1>"

//change style
// const btn = document.querySelector('.btn')
// btn.style.background = 'yellow'
// btn.style.color = "black"

//events
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='#ccc'
//     document.querySelector('h1').classList.add('bg-dark')
// })

const myform = document.getElementById('my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myform.addEventListener('submit',onSubmit)


function onSubmit(e){
e.preventDefault();
console.log(nameInput.value);
console.log(emailInput.value);
if(nameInput.value === '' &&  emailInput.value === ''){
    msg.classList.add('error')
msg.innerHTML="please enter all fields"
setTimeout(()=>msg.remove(),3000)
}
else{
   const li = document.createElement('li')
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
  userList.appendChild(li)

   //clear field
   nameInput.value=""
   emailInput.value=""
}
}