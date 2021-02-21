const express = require('express')
const index = express.Router()
const path = require('path')
const user = require('./user')
const login = require('./login')
const checkData = require('./checkData')

index.use('/user', user)
index.use('/login', login)
index.use('/checkData', checkData)

index.get('/sign-up',(req,res) => {
    res.sendFile(path.join(__dirname,"../views/bai1.html"))
})
index.get('/import-data',(req,res) => {
    res.sendFile(path.join(__dirname,"../views/bai2.html"))
})
index.get('/login-view',(req,res) => {
    res.sendFile(path.join(__dirname,"../views/bai3.html"))
})
index.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname,"../views/home.html"))
})
module.exports = index

