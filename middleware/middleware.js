const express = require("express");


module.exports = (req, res, next) => { 
    console.log("This is the middleware");
    next();
};