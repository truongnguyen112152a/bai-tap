var express = require('express');
var app = express();
var port = 8000;
var router = require('./courses')
app.use("/nodemy",router)
app.listen(port,() => console.log("running server.js"))