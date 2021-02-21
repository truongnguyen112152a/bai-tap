const express = require('express')
const router = express.Router()
const userService = require('../service/userService')

router.post('/',(req,res) => {
    userService.exists(req.body)
    .then((data) => {
        if(!data) {
            return res.json({
                error: true,
                messenger: "Tài khoản này không tồn tại,hãy tạo tài khoản mới"
            })  
        }
        return res.json({
            error: true,
            messenger: "Đăng nhập thành công"
        })
    })
    .catch((err) => {
        res.json({
            error: false,
            messenger: "ERROR",
            value: err
        })
    });
})
// return userService.createUser(req.body)
// .then((data) => {
//     res.json({
//         error: true,
//         messenger: "Tạo tài khoản thành công"
//     })
// }).catch((err) => {
//     res.json({
//         error: false,
//         messenger: "Không tạo được tài khoản",
//         value: err
//     })
// });
module.exports = router