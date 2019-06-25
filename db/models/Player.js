const mongoose = require("../connection")

const playerSchema = new mongoose.Schema({
    person_id: Number,
    name: String,
    image_url: String,
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;