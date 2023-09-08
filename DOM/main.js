const addForm =document.getElementById('add-form')
var itemlist = document.getElementById('items')
itemlist.addEventListener('click',removeItem)


//form submit event
addForm.addEventListener('submit',addItems)

//add item
function addItems(e){
e.preventDefault()

//get inputValue
const newItem = document.getElementById('item').value;

//create new li element
const li = document.createElement('li')
//add class
li.className='list-group-item d-flex justify-content-between'
console.log(li);
//  Add text node with input value
li.appendChild(document.createTextNode(newItem))

//create delete button
const deletee = document.createElement('button')
//add classes to delete button
deletee.className="btn btn-danger btn-sm"
//Append textNode
deletee.appendChild(document.createTextNode('X'))
//append delete button to li
li.appendChild(deletee)
// append li to list
itemlist.appendChild(li)

}

//Remove Item
function removeItem(e){
if(e.target.classList.contains("btn-danger")){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        console.log(li);
        itemlist.removeChild(li)
    }
}
}