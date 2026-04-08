const express = require('express');
const app = express();
app.use(express.json());

let customers = [];

// v1 - Add Customer
app.post('/add', (req, res) => {
    customers.push(req.body);
    res.send("Customer added");
});

app.listen(3000, () => console.log("Running on port 3000"));