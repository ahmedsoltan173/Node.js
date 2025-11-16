const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("request made",req.method,req.url,res.statusCode);
    //set header content type 

    res.setHeader("Content-Type","text/html");
    // res.write("<head><title>My First Page</title><link rel=stylesheet href='style.css'></link></head>");
    // res.write("<p>Hello Ahmed Soltan</p>")
    // res.end();
    
        //TODO :handle URL depends on the path and pass this url to the redFile to render 
    let path='./views';
    switch(req.url){
        case '/':
            path+='/index.ejs';
            res.statusCode=200; // set the status code of the respose 
            break;
        case '/about':
            path+='/about.ejs';
            res.statusCode=200;
            break;
        case '/about-me': // about the about.me will be redirect to about 
            // path+='/about.html';
            res.statusCode=301;
            res.setHeader('Location', '/about');
            break;
    
            default:
            path+='/404.html';
            res.statusCode=404;
            break;
    }
    //: read file
    /** send an html file to the client */
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data); //--> send the file to the client
            res.end(); // always end the request
        }
    });    
    /**only send file end here */
});

server.listen(3000,'localhost', () => {
    console.log("Server running on port localhost:3000");
});
    
