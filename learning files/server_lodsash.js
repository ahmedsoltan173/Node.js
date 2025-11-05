const http = require("http");
const fs = require("fs");
const _=require("lodash");
// const express=require("express");
// const app=express();



const server = http.createServer((req, res) => {
    //loadash
    const num=_.random(1,10);
    const greet=_.once(()=>{ // this function will be call once earch request 
        console.log("greet");
    });
    greet(); // call the function 
    greet(); // will not call the function again


    console.log(num); //random number between 1 and 10

    res.setHeader("Content-Type","text/html");
    // res.write("<head><title>My First Page</title><link rel=stylesheet href='style.css'></link></head>");
    // res.write("<p>Hello Ahmed Soltan</p>")
    // res.end();
    
        //TODO :handle URL depends on the path and pass this url to the redFile to render 
    let path='./views';
    switch(req.url){
        case '/':
             path+='/index.html';
            res.statusCode=200; // set the status code of the respose 
            break;
        case '/about':
            path+='/about.html';
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
    
