const mongoose = require('./connection');

const User = require('./models/User');
const StartingFive = require('./models/StartingFive');
const Player = require('./models/Player');

const usersData = require('./users.json');
const startingFiveData = require('/.startingFive.json');
const playersData = require('./players.json');

const validUsers = usersData.map(user => {
	const userCopy = JSON.parse(JSON.stringify(user));
	delete userCopy.starting_five;
	return userCopy;
});

const validStartingFive = startingFiveData.map(startingFive => {
	const startingFiveCopy = JSON.parse(JSON.stringify(startingFive));
	delete startingFiveCopy.players;
	return startingFiveCopy;
});

User.deleteMany({})
	.then(() => {
		User.create(validUsers).then(createdUsers => {
			StartingFive.deleteMany({}).then(() => {
				StartingFive.create(validStartingFive).then(createdStartingFive => {
					Player.deleteMany({}).then(() => {
						Player.create(playersData).then(createdPlayers => {
							for (leti = 0; i < createdUsers.length; i++) {
								//loops through the array on new users that don't have the starting-five field
								const userFromCollection = createdUsers[i];
								const userFromUserJSON = usersData.find(user => {
									return user.username === userFromCollection.username;
								});
							}
						});
					});
				});

				Player.create(playerData).then(players => {
					console.log(users);
					process.exit();
				});
			});
		});
	})
	.catch(err => {
		console.log(err);
	});
