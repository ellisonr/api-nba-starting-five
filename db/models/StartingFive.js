const mongoose = require('../connection');

const startingFiveSchema = new mongoose.Schema({
	name: String,
	players: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Player',
		},
	],
});

const StartingFive = mongoose.model('StartingFive', startingFiveSchema);

module.exports = StartingFive;
