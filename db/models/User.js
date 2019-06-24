const mongoose = require("../connection")

const userSchema = new mongoose.Schema({
    username: String,
    full_name: String,
    email: String,
    starting_five: [

    ],

})

const User = mongoose.model("User", userSchema);

module.exports = User;