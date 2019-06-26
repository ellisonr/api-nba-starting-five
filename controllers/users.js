const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const mongoose = require('../db/models/User');
const User = mongoose.model('User');

router.post('/signup', (req, res) => {
	if (req.body.email && req.body.password) {
		let newUser = {
			email: req.body.email,
			password: req.body.password,
		};
		User.findOne({ email: req.body.email }).then(user => {
			if (!user) {
				User.create(newUser).then(user => {
					if (user) {
						var payload = {
							id: newUser.id,
						};
						var token = jwt.encode(payload, config.jwtSecret);
						res.json({
							token: token,
							userId: user._id,
						});
					} else {
						res.sendStatus(401);
					}
				});
			} else {
				res.sendStatus(401);
			}
		});
	} else {
		res.sendStatus(401);
	}
});

router.post('/login', (req, res) => {
	if (req.body.email && req.body.password) {
		User.findOne({ email: req.body.email }).then(user => {
			if (user) {
				if (user.password === req.body.password) {
					var payload = {
						id: user.id,
					};
					var token = jwt.encode(payload, config.jwtSecret);
					res.json({
						token: token,
						userId: user._id,
					});
				} else {
					res.sendStatus(401);
				}
			} else {
				res.sendStatus(401);
			}
		});
	} else {
		res.sendStatus(401);
	}
});

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

router.put('/edit/:email', (req, res) => {
	User.findOneAndUpdate({ email: req.params.email }, req.body, {
		new: true,
	}).then(user => res.json(user));
});
//update user by email

router.delete('/:name', (req, res) => {
	User.findOneAndDelete({ full_name: req.params.name }).then(user => {
		res.json(user);
	});
});
//delete user by full name

module.exports = router;

//ALL HAVE BEEN TESTED ON POSTMAN
