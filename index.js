const express = require('express');
const parser = require('body-parser');
const passport = require('./config/passport')();
const app = express();

const cors = require('cors');
app.use(cors());

const usersController = require('./controllers/users');
const playersController = require('./controllers/players');
const startingFiveController = require('./controllers/startingFive');

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(passport.initialize());

app.use('/api/users', usersController);
app.use('/api/players', playersController);
app.use('/api/startingfive', startingFiveController);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
