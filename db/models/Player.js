const mongoose = require("../connection")

const playerSchema = new mongoose.Schema({
    careerAPG: Number,
    careerPPG: Number,
    careerRPG: Number,
    playerID: Number,
    playerImage: String,
    playerName: String,
    yearsActive: Number
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;