const mongoose = require("../connection")

const StartingFiveSchema = new mongoose.Schema({
    name: String,
    players: []
    //the player ID that's given to us
})

// const StartingFive = mongoose.model("StartingFive", startingFiveSchema);

module.exports = StartingFiveSchema;

// WE DON'T NEED THIS MODEL ANYMORE RIGHT?