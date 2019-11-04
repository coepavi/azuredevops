var express = require("express")
var app = express()
var body = require("body-parser")

app.get('/', function(req, res) {
    console.log("Azure devops")
    res.send("Testing Azure devops")
})

app.listen(8000)