const mongoose = require('../connection');
// const StartingFive = require("./StartingFive")

const userSchema = new mongoose.Schema({
	username: String,
	full_name: String,
	email: String,
	starting_five: [
		{
			name: String,
			players: [
				{
					// type: mongoose.Schema.Types.ObjectId,
					// ref: 'Player',
					type: Number,
				},
			],
		},
	],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//when making the top 5 schema,
// for po
