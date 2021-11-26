//const { default: axios } = require("axios");

var form = document.getElementById('myForm');
var UserList = document.getElementById('users');
form.addEventListener('submit',addItem);
// Delete event
UserList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    let userRecords=new Array();
    var newName = document.getElementById('name').value;
    var newEmail = document.getElementById('email').value;
    //userRecords=JSON.parse(localStorage.getItem('records'))?JSON.parse(localStorage.getItem('records')):[];
    //if(userRecords.some((v)=>{return v.email==newEmail})){
      //  alert('APPOINTMENT ALREADY PRESENT WITH THE ENTERED EMAIL!!');
    //}else{
        const obj={
           /* "name":*/newName,
            /*"email":*/newEmail,
        };
    axios.post("https://crudcrud.com/api/95cdf2e008cb4fd5b4c6c3ec562459cb/UserDat",obj)
    .then(response => {
        var li = document.createElement('li');
        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        // Append button to li
        //li.appendChild(deleteBtn);
        
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(obj.newName+" "+obj.newEmail));
        li.appendChild(deleteBtn);
        UserList.appendChild(li);
    })
    .catch(error => console.error("Something went wrong"));
    }
        
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        console.log(li);
        UserList.removeChild(li);
        //localStorage.removeItem(e.newEmail);
      }
    }
  }

document.addEventListener("DOMContentLoaded",Load());

function Load() {
    Object.keys(localStorage).forEach((key) => {
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        namesofUsers = JSON.parse(stringifiedDetailsOfPeople);
        


        var li = document.createElement('li');
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode((namesofUsers.newName)+" "+key));
         // Create del button element
         var deleteBtn = document.createElement('button');

         // Add classes to del button
         deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 
         // Append text node
         deleteBtn.appendChild(document.createTextNode('X'));
 
         // Append button to li
         li.appendChild(deleteBtn);
        UserList.appendChild(li);
        
        });

}

