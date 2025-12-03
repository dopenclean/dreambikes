// index.js
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Needed to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read data.json (make sure data.json is in the same folder as this file)
const rawData = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
const bikes = JSON.parse(rawData);

const app = express();

// View engine + views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
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

  res.render("index", { selectedBike });
});

// Local dev only
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3200;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export for Vercel (serverless function)
export default app;
