const mongoose = require('../connection');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	username: String,
	full_name: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
	starting_five: [
		{
			ref: 'StartingFive',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);

module.exports = User;
