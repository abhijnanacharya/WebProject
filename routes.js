const express= require('express');
const router=express.Router();
const fs=require('fs');

router.get("/login",(req,res,next)=>{
    res.send(`<form onsubmit="window.localStorage.setItem('username', document.getElementById('username').value)"
     action="/Room" method ="POST"><input id='username' type="text" name="title">
        <button type="submit">Enter Room</button></form>`);
});

router.use("/Room",(req,res, next)=>{
    res.send(`<div id="room"></div>
    <form action="/Room_save" method="POST" id="chatBox">  
    <input id='chatBox' type="text" placeholder="Enter your text here...." name=chatBox> <button type="submit"> Send</button>
    </form>`);
    //next();
});

router.post("/Room_save",(req, res,next)=>{
    let body=[];
    console.log(req.body);
    req.on('data', (chunk)=>{
        body.push(chunk);
        console.log(chunk);
    });
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split('=')[1];
        //if (typeof window !== 'undefined') {
            //console.log(localStorage.getItem("username"));
        //}
        

        fs.appendFile('./messages.txt',`: ${message} \n`,(err)=>{
            return res.end();
        });
        res.redirect("/Room")
    });
});
module.exports=router;