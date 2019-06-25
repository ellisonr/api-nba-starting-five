const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/', (req, res) => {
	User.find({}).then(users => res.json(users));
});
//get all users

router.get('/:name', (req, res) => {
	User.find({ full_name: req.params.name }).then(user => res.json(user));
});
//get user by full name

router.post('/new', (req, res) => {
	User.create(req.body).then(user => res.json(user));
});
//create user

router.delete('/:name', (req, res) => {
	User.findOneAndDelete({ full_name: req.params.name }).then(user => {
		res.json(user);
	});
});
//delete user by full name

module.exports = router;

//ALL HAVE BEEN TESTED ON POSTMAN

//update
