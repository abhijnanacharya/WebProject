const http=require('http');

const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url==='/home'){
        res.write('<html><head><h1>WELCOME HOME!</h1></head></html>')
    }else if(url==='/about'){
        res.write('<html><head><h1>WELCOME TO ABOUT US PAGE!</h1></head></html>')
    }if(url==='/node'){
        res.write('<html><head><h1>WELCOME MY NODE Js PROJECT!</h1></head></html>')
    }
});
server.listen(8080);