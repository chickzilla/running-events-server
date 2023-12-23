require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const db = require("./database/db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/testDB", async (req, res) => {
  const result = await db.collection("user").get();
  res.send(result.docs.map((doc) => doc.data()));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
