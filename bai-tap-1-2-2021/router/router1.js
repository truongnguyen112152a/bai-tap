var express = require('express');
var router1 = express.Router();
router1.get("/javascript/bai1",(req,res) => {
    res.json("welcome to javascript part 1")
})
router1.get("/javascript/bai2",(req,res) => {
    res.json("welcome to javascript part 2")
})
module.exports = router1