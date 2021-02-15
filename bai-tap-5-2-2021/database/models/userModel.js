const mongoose = require('../config/connectDB')
let userSchema = {
    name: String,
    age: Number,
    country: String,
    course: String
}
let userModel = mongoose.model("content", userSchema)

module.exports = userModel