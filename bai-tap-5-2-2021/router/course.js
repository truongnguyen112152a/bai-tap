const express = require('express')
const routerCourse = express.Router()

routerCourse.post('/',(req,res) => {
    var course = req.body.course
})

module.exports = routerCourse