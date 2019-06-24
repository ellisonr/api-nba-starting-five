const mongoose = require("../connection")

const startingFiveSchema = new mongoose.Schema({
    name: String,
    players: [{
        player_id: Number
    }]
})

const StartingFive = mongoose.model("StartingFive", startingFiveSchema);

module.exports = StartingFive;