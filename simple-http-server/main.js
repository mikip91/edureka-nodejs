
//Creating a Server
// var http = require('http');
// var express = require('express');

// function handlerFunction(req, res)
// {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end("<h1> Hello World !!</h1>");
// }

// var server = http.createServer(handlerFunction);
// var port= 3000;

// server.listen(port);

// console.log("action at http://localhost:3000");


//Export example
var util = require('./util.js');
console.log("Country Code for China:", util.getCountryCode('China'));