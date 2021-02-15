const express = require('express')
const app = express()
var port = 3002

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const router = require('./router/index')
app.use('/', router)
app.listen(port,() => console.log(`server connect port ${port}`))