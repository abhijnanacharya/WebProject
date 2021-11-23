const posts = [
    { title: 'Post 1', body:'This is Post 1'},
    { title: 'Post 2', body:'This is Post 2'},
];

function getPosts(){ 
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.getElementById('posts').innerHTML=output;
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },1000);
}

createPost({title: 'Post 3', body:'This is Post 3'},getPosts);
createPost({title: 'Post 4', body:'This is Post 4'},getPosts);
var btn = document.getElementById('btn');
var timer={};
btn.addEventListener("click",()=>{
count=0;
clearInterval(timer);
timer=setInterval(()=>{
    count++;
    document.getElementById("time").innerHTML=`Last Updated ${count} seconds ago`;
    },1000);
});

var btnDelete =document.getElementById('btn_del');
console.log(btnDelete);
console.log(posts);

  const delPost=(()=>{
    
        return new Promise((resolve, reject)=>{
           
            setTimeout(()=>{
            let idx=posts.length;
            if(idx===0){
               reject('Array Size Empty');
            }else 
            {   posts.pop();
                //getPosts();
                resolve();
            }
      },2000);
    
});
    
    
});  

/*btnDelete.addEventListener("click",() =>{
 delPost().then(getPosts).catch(err=>console.log(err));   
});*/

btnDelete.addEventListener("click", async function del(){
    try{
        const obj=await delPost();
        getPosts();
    }catch(err){
        alert(`ERROR: ${err}`);
    }
    
}); 
