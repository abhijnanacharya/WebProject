
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