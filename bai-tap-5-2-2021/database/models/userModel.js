const mongoose = require('../config/connectDB')
let userSchema = {
    name: String,
    age: Number,
    country: String,
    course: String
}
let user = mongoose.model("content", userSchema)

module.exports = user