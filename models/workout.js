const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workouts: [{
        name: {
            type: String,
            required: "Please enter a name"
        },
        type: {
            type: String,
            required: "Please enter a type"
        },
        reps: {
            type: Number,
            required: "How many reps?"
        },
        sets: {
            type: Number,
            required: "How many sets?"
        },
        weight: {
            type: Number,
            required: "What weight are you working with?"
        },
        time: {
            type: Number,
            required: "How long did you go for?"
        }
    }],
    day: {
        type: Number
    }
});

const workout = mongoose.model("Workout", workoutSchema)

const workout = new Workout({})

module.exports = Workout;