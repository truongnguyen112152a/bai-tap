const express = require('express')
const routerUser = express.Router()
const userControl = require('../controller/userControl')

routerUser.post('/create',(req,res) => {
    var name = req.body.name
    var age = req.body.age
    var country = req.body.country
    var course = req.body.course
    var arrData = [name,age,country,course]
    var arrKey = ["name","age","country","course"]
    var objData = {}
    for(index in arrData){
        if(arrData[index]){
            objData[arrKey[index]] = arrData[index]
        }
    }
    userControl.createUser(objData)
    .then((data) => {
        res.json(`tạo thành công ${name}`)
    }).catch((err) => {
        res.json(`tạo thất bại ${name}`)
    })
})
routerUser.get('/search',(req,res) => {
    var id = req.query.id
    var name = req.query.name
    var age = req.query.age
    var country = req.query.country
    var course = req.query.course
    var arrData = [id,name,age,country,course]
    var arrKey = ["id","name","age","country","course"]
    var objData = {}
    for(index in arrData){
        if(arrData[index]){
            objData[arrKey[index]] = arrData[index]
        }
    }
    userControl.exists(objData)
    .then((data) => {
        if(data){
            return userControl.getUser(objData)
                .then((data) => {
                    res.json(data)
                }).catch((err) => {
                    console.log(err)
                });
        }
        res.json("không có phần tử này")
    }).catch((err) => {
        console.log(err)
    })
})
routerUser.put('/update/:id',(req,res) => {
    var id = req.params.id
    var name = req.body.name
    var age = req.body.age
    var country = req.body.country
    var course = req.body.course
    var arrData = [name,age,country,course]
    var arrKey = ["name","age","country","course"]
    var objData = {}
    for(index in arrData){
        if(arrData[index]){
            objData[arrKey[index]] = arrData[index]
        }
    }
    userControl.existsId(id)
    .then((data) => {
        if(data){
            return  userControl.updateUser(id,objData)
                    .then((data) => {
                        res.json("cập nhật thành công")
                    }).catch((err) => {
                        res.json("cập nhật thất bại")
                    })
        }
        res.json("không có phần tử này")
    }).catch((err) => {
        console.log(err)
    })
})
routerUser.delete('/delete_one',(req,res) => {
    var id = req.query.id
    var name = req.query.name
    var age = req.query.age
    var country = req.query.country
    var course = req.query.course
    var arrData = [id,name,age,country,course]
    var arrKey = ["id","name","age","country","course"]
    var objData = {}
    for(index in arrData){
        if(arrData[index]){
            objData[arrKey[index]] = arrData[index]
        }
    }
    userControl.exists(objData)
    .then((data) => {
        if(data){
            return userControl.deleteUser(objData)
                .then((data) => {
                    res.json("xóa thành công")
                }).catch((err) => {
                    console.log(err)
                });
        }
        res.json("không có phần tử này")
    }).catch((err) => {
        console.log(err)
    })
})
routerUser.delete('/delete_many',(req,res) => {
    var id = req.query.id
    var name = req.query.name
    var age = req.query.age
    var country = req.query.country
    var course = req.query.course
    var arrData = [id,name,age,country,course]
    var arrKey = ["id","name","age","country","course"]
    var objData = {}
    for(index in arrData){
        if(arrData[index]){
            objData[arrKey[index]] = arrData[index]
        }
    }
    userControl.exists(objData)
    .then((data) => {
        if(data){
            return userControl.deleteManyUser(objData)
                .then((data) => {
                    res.json("xóa thành công")
                }).catch((err) => {
                    console.log(err)
                });
        }
        res.json("không có phần tử này")
    }).catch((err) => {
        console.log(err)
    })
})
module.exports = routerUser