const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json({ limit: "10mb" }));

let db = new sqlite3.Database("fitness.db", (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
  console.log("Connected to the database.");
});

app.listen(3001, () => console.log("Listening at port 3001"));
