

const http=require('http');
const fs=require('fs');




http.createServer(function (req, res){

    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is home page')
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is About Page')
        res.end();
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is the contact page')
        res.end();
    }



    fs.writeFile('demo.txt','Hello World',function (err){
        if(err){
            res.end("File Writing Fail")
        }else{
            res.end("File Writing Success")
        }
    })





}).listen(5500,function (){
    console.log("App Running 5500....")
});