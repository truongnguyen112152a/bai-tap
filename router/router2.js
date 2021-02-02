var express = require('express');
var router2 = express.Router();
router2.get("/html/bai1",(req,res) => {
    res.json("welcome to html part 1")
})
module.exports = router2