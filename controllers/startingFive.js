const express = require("express");
const router = express.Router();

const StartingFive = require("../db/models/StartingFive");

router.get("/", (req, res) => {
    StartingFive.find({}).then(startingfive => res.json(startingfive));
});

router.get("/:name", (req, res) => {
    StartingFive.find({ name: req.params.name})
    .then(startingfive => res.json(startingfive));
})

//find the starting five name
//find the player ID of the player 


module.exports = router