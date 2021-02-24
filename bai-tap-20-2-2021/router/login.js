const express = require('express')
const addressUser = express.Router()
const userService = require('../service/userService')

addressUser.post('/',(req,res) => {
    userService.exists(req.body) // sửa lại điều kiện
    .then((data) => {
        if(data) {
            return res.json({
                error: false,
                messenger: "Đăng nhập thành công",
                value: 1
            })
        }
        return res.json({
            error: true,
            messenger: "Đăng nhập thất bại",
            value: 0
        })
    }).catch((err) => {
        res.json({
            error: true,
            messenger: "ERROR",
            value: err
        })
    });
})

module.exports = addressUser