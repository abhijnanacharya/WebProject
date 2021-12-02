const http=require('http');
const fs=require('fs');

const server=http.createServer((req, res) => {
    const url=req.url;
    const method=req.method;
    
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>ENTER YOUR MESSAGE</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button>');
        res.write('</html>');
        return res.end();
    }
    
    
    if(url==='/message' && method==='POST'){
        let body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            
            fs.appendFile('./message.txt',message+'\n',(err)=>{
                //res.write(`<html><head>${message}</head></html>`);
                //res.write()
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });

        });
    }
    if(url==='/message' && method==='GET'){
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./message.txt',(err,data)=>{
            if(err){
            console.log(err);
       
            }else{
                res.write(`<html><body><p>YOUR CHAT HISTORY</p><br>${data}</body></html>`);
                res.end();
            }
        });
        fs.readFile('./message.txt',(err,data)=>{
            if(err){
                console.log(err);
                res.end();
            }else{
                res.write(`<html><body><p>YOUR MESSAGE HISTORY</p><br>${data}</body></html>`);
                res.end();
            }
        });
    }
    

});
server.listen(8080);