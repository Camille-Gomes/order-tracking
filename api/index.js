require("dotenv").config();
var express = require("express");
var app = express();
const api = require("./app/routes");

const port = process.env.PORT || 5000;

app.use(`/api`, api);

app.listen(port, (err) => {
    if (err) {
        throw new Error("There is an error");
    }

    console.log(`Listening on ${port}`);
});
