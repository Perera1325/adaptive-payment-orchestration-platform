const express = require("express");
const app = express();

app.get("/pay", (req, res) => {
  console.log("Payment request received");

  if (Math.random() < 0.5) {
    console.log("Payment Failed");
    return res.status(500).send("Payment Failed");
  }

  console.log("Payment Success");
  res.send("Payment Success");
});

app.listen(3000, () => {
  console.log("Payment Service running on port 3000");
});
