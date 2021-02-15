const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bai2',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
let userSchema = {
    username: String,
    password: String,
    age: Number,
    address: String
}
let userModel = mongoose.model("users", userSchema)
// 1. tìm tất cả bản ghi có tuổi>25
function greater25() {
    userModel.find({
        age: { $gt: 25}
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 2. tìm tất cả bản ghi có 20<tuổi<30
function greater20AndLess30() {
    userModel.find({
        age: { $gt: 20, $lt: 30}
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 3. chèn thêm một document
function createDoc() {
    userModel.create({
        username: "Trường",
        password: "686868",
        age: 9,
        address: "Hưng Yên"
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 4. hiển thị toàn bộ document
function showAll() {
    userModel.find({

    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 5. tìm address = HP
function searchHP() {
    userModel.find({
        address: "HP"
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 6. tìm doc có tên là ta hoặc tuổi<30
function searchTa() {
    userModel.find({
        $or: [{ username: "ta"}, { address: { $lt: 30}}]
        
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 7. sắp xếp theo tuổi tăng dần
function sortAge() {
    userModel.find({

    })
    .sort("age")
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}
// 8. sắp xếp theo tuổi>20 giảm dần
function sortAgegreater() {
    userModel.find({
        age: { $gt: 20}
    }).then((data) => {
        var newArr = data.sort((a,b) => a.age - b.age)
        console.log(newArr)
    }).catch((err) => {
        console.log(err);
    });
}
// 9. in ra 5 phần tử đầu tiên
function print5() {
    userModel.find({
        
    })
    .limit(5)
    .then((data) => {
        var newArr = data.sort((a,b) => a.age - b.age)
        console.log(newArr)
    }).catch((err) => {
        console.log(err);
    });
}
// 10. In ra 3 document bắt đầu từ document thứ 5
function printSkip5() {
    userModel.find({
        
    })
    .skip(5)
    .limit(3)
    .then((data) => {
        var newArr = data.sort((a,b) => a.age - b.age)
        console.log(newArr)
    }).catch((err) => {
        console.log(err);
    });
}
// 11. In ra các document có tên là thanh hoặc có tuổi nhỏ hơn 30
function searchThanh() {
    userModel.find({
        $or: [{ username: "thanh"}, { address: { $lt: 30}}]
        
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 12. Tìm người có _id:”5e54dfe448afde5434ca75b9” và cập nhật thành username là “Thai Ha”
function searchId() {
    userModel.findByIdAndUpdate({
        _id: "5e54dfe448afde5434ca75b9"
    },{
        username: "Thai Ha"
    },{
        useFindAndModify: false
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 13.Tìm người có _id:”5e54dfd1ae8eac34d01da3bf” và cập nhật thành username là “Bac Ho”	
function updateIdOne() {
    userModel.updateOne({
        _id: "5e54dfd1ae8eac34d01da3bf"
    },{
        username: "Bac Ho"
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 14. Xóa người có _id:”5e54e012d276b72fd4246734” 
function deleteId() {
    userModel.deleteOne({
        _id: "5e54e012d276b72fd4246734"
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 15. Tìm những người có cùng quê HP và cập nhật password của họ thành 1234
function updatePassword() {
    userModel.updateMany({
        address: "HP"
    },{
        password: "1234"
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}
// 16. Tìm những người có cùng quê HP và cập nhật tuổi của 1 người đầu tiên thành 1000
function findAddress() {
    userModel.find({
        address: "HP"
    })
    .limit(1)
    .then((data) => {
        userModel.updateOne({
            age: data[0].age
        },{
            age: 1000
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}
// 17. Tìm người đầu tiên có mật khẩu là 1234
function findPassword() {
    userModel.find({
        password: "1234"
    })
    .limit(1)
    .then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err);
    });
}