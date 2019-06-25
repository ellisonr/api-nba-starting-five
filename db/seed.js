const mongoose = require('./connection');
const User = require('./models/User');
const userData = require('./users.json');

//seed the players that are saved by the user
//seed the user model without the related model, which is the player model


User.deleteMany({}).then(() => {
    User.create(userData).then((users) => {
        console.log(users)
        process.exit()
    })
    .catch((err) => {
        console.log(err)
    })
})

        // users.forEach(user => {
        //     user.starting_five.push({name: "my starting five"})
        // })
        // Users.save()