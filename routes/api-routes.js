const express = require("express")
const router = express.Router()
const db = require("../models/workout")

// c
router.post("/api/workouts", function (req, res) {
    db.create({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        day: req.body.day
    }).then(function (result) {
        res.send(result)
    })
})

// r
router.get("/api/workouts", function (req, res) {
    db.find({}).sort({
            day: 1
        }) // 1 = ascending, -1 = ascending for some reason
        .then(function (result) {
            res.json(result)
        })
})

// u   Maybe not needed
router.update("/api/?????", function (req, res) {

})

// d   Maybe not needed
router.get("/api/?????", function (req, res) {

})