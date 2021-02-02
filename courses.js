var express = require('express');
var router = express.Router();
router.get("/:namecourse/:namepart",(req,res) => {
    res.json(req.params.namecourse + " " + req.params.namepart)
})
module.exports = router