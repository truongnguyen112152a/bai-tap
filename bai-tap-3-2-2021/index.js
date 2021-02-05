const express = require('express');
const app = express();
const port = 3002;
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.post("/user/create", (req,res) => {
    return module.exports = [
        req.body.username,
        req.body.password,
        req.body.age,
        req.body.school]
})
app.post("/user/find", (req,res) => {
    return module.exports = [
        req.body.username,
        req.body.password]
})
app.post("/user/remove", (req,res) => {
    return module.exports = [
        req.body.id]
})
app.post("/user/find-limit", (req,res) => {
    return module.exports = [
        req.body.id]
})
app.listen(port,console.log(`running port ${port}`))