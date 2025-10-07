const express = require("express");
const connectDB = require("./database/dbConn");
const app = express();

require("dotenv").config();
const port = process.env.SERVER_PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello there !");
});

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
