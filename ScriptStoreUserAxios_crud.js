var form = document.getElementById('myForm');
var UserList = document.getElementById('listOfUsers');
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
    axios.post("https://crudcrud.com/api/7669c8f2beef47998699d6be72e22757/UserDat",obj)
    .then(response => {
        showDetails(response.data);
    })
    .catch(error => console.error(`Something went wrong: ${error.message}`));
    }
        
function removeItem(userId){
   const parentNode=document.getElementById('listOfUsers');
   const childToBeDelete=document.getElementById(userId);
   if(childToBeDelete){
       parentNode.removeChild(childToBeDelete);
   }
}


function showDetails(user){
    document.getElementById('name').value='';
    document.getElementById('email').value='';

    const parentNode=document.getElementById('listOfUsers');
    const childHTML = `<li id="${user._id}"> ${user.newName} ---- ${user.newEmail}
                        <button onclick=delUser('${user._id}')>DELETE</button>
                        <button onclick=editUser('${user._id}','${user.newName}','${user.newEmail}')>EDIT</button>
                        </li>`;
                        parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

document.addEventListener("DOMContentLoaded",()=> {
    axios.get("https://crudcrud.com/api/7669c8f2beef47998699d6be72e22757/UserDat")
    .then((response)=>{
        for(var i=0; i<response.data.length; i++){
            showDetails(response.data[i]);
        }
    })
    .catch((err)=>console.error(err.message));
});

function delUser(userId){
    axios.delete(`https://crudcrud.com/api/7669c8f2beef47998699d6be72e22757/UserDat/${userId}`)
    .then(response=>{
        removeItem(userId);
    })
    .catch(err=>console.error(err));    
}


      



