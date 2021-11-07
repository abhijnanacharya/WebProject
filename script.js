
let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');
let btn = document.querySelector('.btn');
let btnOriginal = document.querySelector('.btn').style.background;
//console.log(btnOriginal);
document.getElementsByClassName('item')[1].style.background='green';
for(let i = 0; i <document.getElementsByClassName('item').length ; i++){
  document.getElementsByClassName('item')[i].style.fontWeight='bold';
}
document.querySelector('.btn').addEventListener('click',(e)=>{
    console.log(document.querySelector('.btn').style.background);
    document.querySelector('.btn').style.background= '#eccf';
    setTimeout(function() {
        btn.style.background='#000';
    },1200);
});

document.querySelector('.btn').addEventListener('mouseover',(e)=>{
    document.querySelector('.btn').style.background= 'green';
    setTimeout(function() {
        btn.style.background=btnOriginal;
    },600);
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();//Cause of error. Works fine if commented out
  
  if(nameInput.value === '' || emailInput.value === '') {
    
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => { 
                       // msg.classList.pop();
                         msg.innerHTML = ''
                    }, 3000);
    
 
  } else {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
 
  }
  
}
for(let i=0; i<document.getElementsByTagName('li').length; i++){
  if(i==3){
    let lis=document.getElementsByTagName('li');
    lis[i].textContent ='HELLO WORLD';
}
var itemList=document.querySelector('.items');
//console.log(itemList);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
}
//createElement
var newDiv=document.createElement('div');
console.log(newDiv);
newDiv.className='hello';
newDiv.id="hello1";
newDiv.setAttribute('title', 'Hello Div');
//Create a text Node with the
let newDivText=document.createTextNode("Hello World");
//Add txt to Div
newDiv.appendChild(newDivText);

//createElement2
var newDiv2=document.createElement('div2');
console.log(newDiv2);
newDiv.className='hello2';
newDiv.id="hello22";
newDiv.setAttribute('title2', 'Hello Div2');
//Create a text Node with the
let newDivText2=document.createTextNode("Hello World 222");
//Add txt to Div
newDiv2.appendChild(newDivText2);

let container=document.querySelector('header.container');
console.log(container);
let h1=document.querySelector('header h1');
console.log(h1);
container.insertBefore(newDiv, h1);
let container2=document.querySelector('ul.items');
console.log(container2);
let h2=document.querySelector('#myitem1');
console.log(h2);
container2.insertBefore(newDiv2,h2);
