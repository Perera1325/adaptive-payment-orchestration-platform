const express = require("express");
const app = express();

app.get("/pay", (req, res) => {
  console.log("Fallback payment used");
  res.send("Fallback Payment Success");
});

app.listen(3001, () => {
  console.log("Fallback Service running on port 3001");
});
