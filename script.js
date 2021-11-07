
// let myForm = document.querySelector('#my-form');
// let nameInput = document.querySelector('#name');
// let emailInput = document.querySelector('#email');
// let msg = document.querySelector('.msg');
// let userList = document.querySelector('#users');
// let btn = document.querySelector('.btn');
// let btnOriginal = document.querySelector('.btn').style.background;
// //console.log(btnOriginal);
// document.getElementsByClassName('item')[1].style.background='green';
// for(let i = 0; i <document.getElementsByClassName('item').length ; i++){
//   document.getElementsByClassName('item')[i].style.fontWeight='bold';
// }
// document.querySelector('.btn').addEventListener('click',(e)=>{
//     console.log(document.querySelector('.btn').style.background);
//     document.querySelector('.btn').style.background= '#eccf';
//     setTimeout(function() {
//         btn.style.background='#000';
//     },1200);
// });

// document.querySelector('.btn').addEventListener('mouseover',(e)=>{
//     document.querySelector('.btn').style.background= 'green';
//     setTimeout(function() {
//         btn.style.background=btnOriginal;
//     },600);
// });

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();//Cause of error. Works fine if commented out
  
//   if(nameInput.value === '' || emailInput.value === '') {
    
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';
//     setTimeout(() => { 
//                        // msg.classList.pop();
//                          msg.innerHTML = ''
//                     }, 3000);
    
 
//   } else {
//     let li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
//     userList.appendChild(li);
//     nameInput.value = '';
//     emailInput.value = '';
 
//   }
  
// }
// for(let i=0; i<document.getElementsByTagName('li').length; i++){
//   if(i==3){
//     let lis=document.getElementsByTagName('li');
//     lis[i].textContent ='HELLO WORLD';
// }
// var itemList=document.querySelector('.items');
// //console.log(itemList);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// }
// //createElement
// var newDiv=document.createElement('div');
// console.log(newDiv);
// newDiv.className='hello';
// newDiv.id="hello1";
// newDiv.setAttribute('title', 'Hello Div');
// //Create a text Node with the
// let newDivText=document.createTextNode("Hello World");
// //Add txt to Div
// newDiv.appendChild(newDivText);

// //createElement2
// var newDiv2=document.createElement('div2');
// console.log(newDiv2);
// newDiv.className='hello2';
// newDiv.id="hello22";
// newDiv.setAttribute('title2', 'Hello Div2');
// //Create a text Node with the
// let newDivText2=document.createTextNode("Hello World 222");
// //Add txt to Div
// newDiv2.appendChild(newDivText2);

// let container=document.querySelector('header.container');
// console.log(container);
// let h1=document.querySelector('header h1');
// console.log(h1);
// container.insertBefore(newDiv, h1);
// let container2=document.querySelector('ul.items');
// console.log(container2);
// let h2=document.querySelector('#myitem1');
// console.log(h2);
// container2.insertBefore(newDiv2,h2);



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

