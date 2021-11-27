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
        const obj={
            newName,
            newEmail,
        };
    axios.post("https://crudcrud.com/api/95cdf2e008cb4fd5b4c6c3ec562459cb/UserDat",obj)
    .then(response => {
        showDetails(response.data);
    })
    .catch(error => console.error(`Something went wrong: ${error.message}`));
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

function showDetails(response){
    console.log(response);
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
        li.appendChild(document.createTextNode(response.newName+" "+response.newEmail));
        li.appendChild(deleteBtn);
        UserList.appendChild(li);

}

document.addEventListener("DOMContentLoaded",()=> {
    axios.get("https://crudcrud.com/api/95cdf2e008cb4fd5b4c6c3ec562459cb/UserDat")
    .then(response=>{
        for(var i=0; i<response.data.length; i++){
            showDetails(response.data[i]);
        }
    })
    .catch(err=>console.error(err));
});


      



