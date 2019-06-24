const mongoose = require("../connection")

const startingFiveSchema = new mongoose.Schema({
    name: String,
    players: [
                
    ]
})

const StartingFive = mongoose.model("StartingFive", startingFiveSchema);

module.exports = StartingFive;