const express = require('express');
const router = express.Router();
const Player = require('../db/models/Player');

router.get('/', (req, res) => {
	Player.find({}).then(players => res.json(players));
});
//get all players

router.get('/:name', (req, res) => {
	Player.find({ playerName: req.params.name }).then(player =>
		res.json(player)
	);
});
//get single player by playerName

router.post('/new', (req, res) => {
	// User.create(req.body.
	Player.create(req.body).then(player => res.json(player));
});
//create player

router.put('/id/:id', (req, res) => {
	Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then(player => res.json(player));
});
//update player by _id

router.delete('/:name', (req, res) => {
	Player.findOneAndDelete({ playerName: req.params.name }).then(player => {
		res.json(player);
	});
});
//delete single player by playerName

router.delete('/id/:id', (req, res) => {
	Player.findOneAndDelete({ _id: req.params.id }).then(player => {
		res.json(player);
	});
});
//delete single player by _id

module.exports = router;
