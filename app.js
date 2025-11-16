const http = require("http");
const fs = require("fs");
const _=require("lodash");
const express=require("express");
const app=express();
app.set("view engine","ejs");
//enable send body 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//middleware to serve static files  development mode 
const morgan = require("morgan");

app.listen(3000);





//use middleware
var middleware= require("./middleware/middleware");
app.use(middleware);
// diffrent use of middleware 
app.use(morgan('dev')); //combined //tiny //dev logs 


//Middleware for static files 
app.use(express.static('public'));






app.get("/", (req, res) => {
    // res.send("<p>Hello World, This is Ahmed Soltan</p>");
    res.sendFile('./views/index.html',{root:__dirname});
});
var routes=require("./routes/routes");
app.use('',routes);
//redirects
app.get("/about-me", (req, res) => {
    res.redirect("/about"); 
});









/**
 * Middleware
 */
//404 page 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});
