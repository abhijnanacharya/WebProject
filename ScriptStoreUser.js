var form = document.getElementById('myForm');
var UserList = document.getElementById('users');
form.addEventListener('submit',addItem);

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
    
        var li = document.createElement('li');
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newName+" "+newEmail));
        UserList.appendChild(li);
        localStorage.setItem(obj.newEmail,JSON.stringify(obj));
    //}

}

document.addEventListener("DOMContentLoaded",Load());

function Load() {
    Object.keys(localStorage).forEach((key) => {
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        namesofUsers = JSON.parse(stringifiedDetailsOfPeople);
        


        var li = document.createElement('li');
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode((namesofUsers.newName)+" "+key));
        UserList.appendChild(li);
        
        
        
        
        
        });

}