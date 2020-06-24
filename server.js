const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4500;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get("/", function (req, res) {
    res.sendFile("/public/index.html")
})

app.get("/exercise", function (req, res) {
    res.sendFile("/public/exercise.html")
})

app.get("/stats", function (req, res) {
    res.sendFile("/public/stats.html")
})

app.use(require("./routes/api-routes"))
app.listen(PORT, function () {
    console.log(`APP HOSTED ON PORT ${PORT}, ------> http://localhost:${PORT} <--------`);
})