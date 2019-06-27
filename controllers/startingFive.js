const express = require('express');
const router = express.Router();
const StartingFive = require('../db/models/StartingFive');
const User = require('../db/models/User');

router.get('/', (req, res) => {
	StartingFive.find({})
		.populate({
			path: 'players',
			mode: 'Player',
		})
		.exec((err, startingFive) => res.json(startingFive));
});
//get all starting fives, populates player stats; works

router.get('/:name', (req, res) => {
	StartingFive.find({ name: req.params.name })
		.populate({
			path: 'players',
			mode: 'Player',
		})
		.exec((err, startingFive) => res.json(startingFive));
});
//get starting five by name, populates player stats; works

router.get('/id/:id', (req, res) => {
	StartingFive.find({ _id: req.params.id })
		.populate({
			path: 'players',
			mode: 'Player',
		})
		.exec((err, startingFive) => res.json(startingFive));
});
//get starting five by id, populates player stats; works

router.post('/new', (req, res) => {
	User.findOne({ _id: req.body.user.userId }).then(user => {
		StartingFive.create(req.body.lineup).then(createdStartingFive => {
			user.starting_five.push(createdStartingFive._id);
			user.save();
			res.json(user);
		});
	});
});
//create a new starting five; works

router.put('/edit/:name', (req, res) => {
	StartingFive.findOneAndUpdate({ name: req.params.name }, req.body, {
		new: true,
	}).then(startingFive => res.json(startingFive));
});

router.put('/id/:id', (req, res) => {
	StartingFive.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then(startingFive => res.json(startingFive));
});

router.delete('/:name', (req, res) => {
	StartingFive.findOneAndDelete({ name: req.params.name }).then(
		startingFive => {
			res.json(startingFive);
		}
	);
});
//delete starting five by name; works

module.exports = router;

//one instance of creating a startingfive will update a full array/set

// /new replace /new
//create new starting 5
//req.body.lineup: name'', players []
//findOneAndUpdate
//find user by iD which is in req.body.user.userId
//push starting 5 id into user.starting_five
