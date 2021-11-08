var form = document.getElementById('myForm');
var UserList = document.getElementById('users');
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    let userRecords=new Array();
    var newName = document.getElementById('name').value;
    var newEmail = document.getElementById('email').value;
    userRecords=JSON.parse(localStorage.getItem('records'))?JSON.parse(localStorage.getItem('records')):[];
    if(userRecords.some((v)=>{return v.email==newEmail})){
        alert('APPOINTMENT ALREADY PRESENT WITH THE ENTERED EMAIL!!');
    }else{
        userRecords.push({
            "name":newName,
            "email":newEmail,
        });
    
        var li = document.createElement('li');
   
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newName+" "+newEmail));
        UserList.appendChild(li);
        localStorage.setItem("records",JSON.stringify(userRecords));
    }
}