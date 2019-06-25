const mongoose = require('../connection');

const startingFiveSchema = new mongoose.Schema({
	name: String,
	players: [
		{
			ref: 'Player',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

const StartingFive = mongoose.model('StartingFive', startingFiveSchema);

module.exports = StartingFive;
