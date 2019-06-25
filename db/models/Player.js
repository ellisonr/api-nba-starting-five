const mongoose = require('../connection');
const uniqueValidator = require('mongoose-unique-validator');

const playerSchema = new mongoose.Schema({
	careerAPG: Number,
	careerPPG: Number,
	careerRPG: Number,
	playerID: {
		type: Number,
		unique: true,
	},
	playerImage: String,
	playerName: String,
	yearsActive: Number,
});

playerSchema.plugin(uniqueValidator);
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
