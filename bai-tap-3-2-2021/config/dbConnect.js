const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/post',
{useNewUrlParser: true, useUnifiedTopology: true});
let postSchema = {
    content: String,
    title: String,
    comment: String
}
let port = mongoose.model("content", postSchema)
// Bài 1:
function create() {
    port.create({
        content: "hello",
        title: "ahahaha",
        comment: "ezzezez"
    })
}
function find() {
    port.find()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
function print() {
    port.find({
        _id: "601ccab10843a13a58d66a6f"
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
function uptodate() {
    port.updateOne({
        _id: "601ccab10843a13a58d66a6f"
    },{
        content: "new hello"
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
// Bài 2:
let userSchema = {
    username: String,
    password: String,
    age: Number,
    school: String
}
let user = mongoose.model("user", userSchema)
function createUser() {
    user.create({
        username: "Truong4",
        password: "5555",
        age: "14",
        school: "Nodemy4"  
    })
}
function findUser() {
    user.find({
        username: "Truong1",
        password: "8888"
    })
    .then(data => {
        if(data.length > 0) return console.log("đã tìm thấy",data)
        console.log("không tìm thấy user nào")
    })
    .catch(err => console.log(err))
}
function remove() {
    user.deleteOne({ _id : "601cdf674d7193132049f3c4" })
    .then(data => console.log(data))
}
function printUser() {
    user.find()
    .limit(3)
    .then(data => console.log(data))
}
// Bài 3
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
var insert = []
app.post("/user/create", (req,res) => {
    insert = [
        req.body.username,
        req.body.password,
        req.body.age,
        req.body.school
    ]
        user.create({
            username: insert[0],
            password: insert[1],
            age: insert[2],
            school: "insert[3]"  
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    res.json(insert)
})
app.post("/user/find", (req,res) => {
    return [
        req.body.username,
        req.body.password
    ]
})
app.post("/user/remove", (req,res) => {
    return [
        req.body.id
    ]
})
app.post("/user/find-limit", (req,res) => {
    return [
        req.body.id
    ]
})
app.listen(3000,console.log(`running port 3000`))

clientCreate()