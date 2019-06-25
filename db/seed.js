const mongoose = require('./connection');
const User = require('./models/User');
const userData = require('./users.json');

const Player = require('./models/Player');
const playerData = require('./players.json');

const StartingFive = require('./models/StartingFive');
const startingFiveData = require('./startingFive.json');

//seed the players that are saved by the user
//seed the user model without the related model, which is the player model

User.deleteMany({})
	.then(() => {
		User.create(userData).then(users => {
			Player.deleteMany({}).then(() => {
				Player.create(playerData).then(players => {
					StartingFive.deleteMany({}).then(() => {
						StartingFive.create(startingFiveData).then(startingFive => {
							console.log(users);
							process.exit();
						});
					});
				});
			});
		});
	})
	.catch(err => {
		console.log(err);
	});
