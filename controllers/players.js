const express = require('express');
const router = express.Router();

const Player = require('../db/models/Player');
const User = require('../db/models/User');

router.get('/', (req, res) => {
	Player.find({}).then(players => res.json(players));
});
//get all players

router.get('/:name', (req, res) => {
	Player.find({ playerName: req.params.name }).then(player =>
		res.json(player)
	);
});
//get player by playerName

router.post('/new', (req, res) => {
	// User.create(req.body.
	Player.create(req.body).then(player => res.json(player));
});
//create player
//req.body.TopFive

router.delete('/:name', (req, res) => {
	Player.findOneAndDelete({ playerName: req.params.name }).then(player => {
		res.json(player);
	});
});
//delete player by playerName

router.delete('/delete', (req, res) => {
	Player.deleteMany(req.body).then(player => {
		res.json(player);
	});
});
//delete many?

module.exports = router;
