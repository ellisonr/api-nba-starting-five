const mongoose = require('./connection');
const User = require('./models/User');
const userData = require('./users.json');

User.deleteMany({})
.then(() => {
    User.create(userData)
    .then((users) => {
        console.log(users)
        process.exit()
    })
})
.catch((err) => {
    console.log(err)
})