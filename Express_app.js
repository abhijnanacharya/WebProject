//const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method ="POST"><input type="text" name="title">
    
    <select name="size" id="size" >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
    </select>
        <button type="submit">Add Product</button></form>`);
});

app.post('/product',(req,res, next)=>{
    console.log(req.body);
    res.redirect('/');
});


app.use('/',(req,res,next)=>{
    res.send(`<h1>Welcome Home!!</h1>`);
    
});

app.listen(3000);
