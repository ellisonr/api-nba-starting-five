const express = require('express');
const parser = require('body-parser');

const usersController = require('./controllers/users');
const playersController = require('./controllers/players');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use('/api/users', usersController);
app.use('/api/players', playersController);

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

// app.get("/", (req, res) => {
//     res.redirect("/api/users")
// });
//or to page with everyone's starting five?
