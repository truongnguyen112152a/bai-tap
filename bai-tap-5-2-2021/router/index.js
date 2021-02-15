const express = require('express')
const index = express.Router()

const user = require('./user')
const course = require('./course')

index.use('/user',user)
index.use('/course',course)

module.exports = index

