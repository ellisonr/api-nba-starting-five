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
//get all starting fives, populates player stats

router.get('/:name', (req, res) => {
	StartingFive.find({ name: req.params.name })
		.populate({
			path: 'players',
			mode: 'Player',
		})
		.exec((err, startingFive) => res.json(startingFive));
});
//get single starting five by name, populates player stats

router.get('/id/:id', (req, res) => {
	StartingFive.find({ _id: req.params.id })
		.populate({
			path: 'players',
			mode: 'Player',
		})
		.exec((err, startingFive) => res.json(startingFive));
});
//get single starting five by _id, populates player stats

router.post('/new', (req, res) => {
	User.findOne({ _id: req.body.user.userId }).then(user => {
		StartingFive.create(req.body.lineup).then(createdStartingFive => {
			user.starting_five.push(createdStartingFive._id);
			user.save();
			res.json(user);
		});
	});
});
//create a new starting five

router.put('/edit/:name', (req, res) => {
	StartingFive.findOneAndUpdate({ name: req.params.name }, req.body, {
		new: true,
	}).then(startingFive => res.json(startingFive));
});
//update single starting five by name

router.put('/id/:id', (req, res) => {
	StartingFive.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then(startingFive => res.json(startingFive));
});
//update single starting five by _id

router.delete('/:name', (req, res) => {
	StartingFive.findOneAndDelete({ name: req.params.name }).then(
		startingFive => {
			res.json(startingFive);
		}
	);
});
//delete single starting five by name

router.delete('/id/:id', (req, res) => {
	StartingFive.findOneAndDelete({ _id: req.params.id }).then(startingFive => {
		res.json(startingFive);
	});
});
//delete single starting five by _id

module.exports = router;
