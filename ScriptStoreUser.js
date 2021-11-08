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
    
        var li = document.createElement('li');
        // Create del button element
        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        // Append button to li
        //li.appendChild(deleteBtn);
        if(localStorage.getItem('obj.newEmail')!=='null'){
           alert('USER ALREADY IN DB');
        }else{
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newName+" "+newEmail));
        li.appendChild(deleteBtn);
        UserList.appendChild(li);
        localStorage.setItem(obj.newEmail,JSON.stringify(obj));
        }

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

