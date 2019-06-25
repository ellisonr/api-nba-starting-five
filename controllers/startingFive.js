const express = require('express');
const router = express.Router();
const StartingFive = require('../db/models/StartingFive');

router.get('/', (req, res) => {
	StartingFive.find({}).then(startingFive => res.json(startingFive));
});
//get all starting fives; works

router.get('/:name', (req, res) => {
	StartingFive.find({ name: req.params.name }).then(startingFive =>
		res.json(startingFive)
	);
});
//get starting five by name; works

router.post('/new', (req, res) => {
	StartingFive.create(req.body).then(startingFive => res.json(startingFive));
});
//create a new starting five; works

router.put('/edit/:name', (req, res) => {
	StartingFive.update({ name: req.params.name }, req.body, {
		upsert: true,
	});
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

//create, delete, update
//one instance of creating a startingfive will update a full array/set
