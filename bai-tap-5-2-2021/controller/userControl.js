const userModel = require('../database/models/userModel')

function createUser(data) {
    return userModel.create(data)
}
function getUser(data) {
    return userModel.find(data)
}
function updateUser(data1,data2) {
    return userModel.updateOne({
        _id: data1
    },data2)
}
function deleteUser(data) {
    return userModel.deleteOne(data)
}
function deleteManyUser(data) {
    return userModel.deleteMany(data)
}
function existsId(data) {
    return userModel.exists({
        _id: data
    })
}
function exists(data) {
    return userModel.exists(data)
}
module.exports = {
    createUser: createUser,
    getUser: getUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    exists: exists,
    deleteManyUser: deleteManyUser,
    existsId: existsId
}