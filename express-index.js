const http=require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Middleware 1 ");
    next();
});
app.use((req,res,next)=>{
    console.log("Middleware 2 ");
    next();
});

const server=http.createServer(app);
server.listen(8080);
