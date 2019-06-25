const mongoose = require('../connection');

const StartingFiveSchema = new mongoose.Schema({
	name: String,
	players: [
		{
			ref: 'Player',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

const StartingFive = mongoose.model('StartingFive', StartingFiveSchema);

module.exports = StartingFive;
