const express = require('express');
const app = express();

app.get('/pay', (req, res) => {
    const success = Math.random() > 0.5;

    if (success) {
        res.status(200).send("Payment Success");
    } else {
        res.status(500).send("Payment Failed");
    }
});

app.listen(3000, () => {
    console.log("Payment service running on port 3000");
});