const mongoose = require("../connection")
const Starting5 = require("./StartingFive")

const userSchema = new mongoose.Schema({
    username: String,
    full_name: String,
    email: String,
    starting_five: [Starting5],
})

const User = mongoose.model("User", userSchema);

module.exports = User;