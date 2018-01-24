var express = require('express');
var app = express();

// app.use(function (req, res) {
//     console.log("Hello");
//     res.end("Hello");
// });

app.get("/",function (request, response) {
        // console.log("Hello");
        // res.end("Hello");
        response.sendFile(__dirname+'/index.html');
    });

var port = process.env.PORT || 8080;

app.listen(port);