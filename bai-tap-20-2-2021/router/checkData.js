const express = require('express')
const router = express.Router()

router.post('/', (req,res) => {
    if(req.body.importData){
        if(typeof Number(req.body.importData) === "number" && !isNaN(Number(req.body.importData))) {
            return res.json("Đây là một số")
        }
        if(typeof req.body.importData === "string") {
            return res.json("Đây là một ký tự")
        }
    }
    return res.json("không xác định được")
})
module.exports = router