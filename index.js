import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const rawData = fs.readFileSync('./data.json', 'utf-8');
const bikes = JSON.parse(rawData);

const app = express();
const port = 3200;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/submit", (req, res) => {
    const brand = req.body.suzuki || req.body.bmw || req.body.kawasaki;

    let selectedBike;
    if (brand === "gsx8r") {
        selectedBike = bikes[0];
    } else if (brand === "h2") {
        selectedBike = bikes[1];
    } else {
        selectedBike = bikes[2];
    }

    res.render('index', { selectedBike });
});

app.listen(port, () => {
    console.log(`Currently running server on http://localhost:${port}`);
});
