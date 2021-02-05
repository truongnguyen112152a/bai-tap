const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
// Bài 1
app.use(express.static("./public"))
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/view/home.html"))
})
app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"/view/login.html"))
})
app.get("/download",(req,res) => {
    res.download("./public/image/Video-shows-Super-Mario-64-HD-playing-on-the-Apple-iPhone-6.png","Video-shows-Super-Mario-64-HD-playing-on-the-Apple-iPhone-6.png")
})
// Bài 2
var router1 = require("./router/router1")
var router2 = require("./router/router2")
app.use("/nodemy",router1)
app.use("/nodemy",router2)
app.listen(port,() => console.log("Hello World"))