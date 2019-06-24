const mongoose = require('./connection');
const User = require('./models/User');
const StartingFive = require('./models/StartingFive')
const userData = require('./users.json');
const startingFiveData = require('./startingFive.json')

StartingFive.deleteMany({}).then(() => {
    StartingFive.create(startingFiveData).then((starting5) => {
        User.deleteMany({}).then(() => {
            User.create(userData).then((users) => {
                console.log(users)
                console.log(starting5)
                process.exit()
            })
        })
            .catch((err) => {
            console.log(err)
        })
    })
})