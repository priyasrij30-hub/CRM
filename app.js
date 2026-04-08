const express = require('express');
const app = express();
app.use(express.json());

let customers = [];

// Add Customer
app.post('/add', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: "Name and age are required" });
    }

    customers.push({ name, age });
    res.send("Customer added"); // Only message, not the array
});

// View Customers
app.get('/view', (req, res) => {
    res.json(customers); // Full array of customers
});

app.listen(3000, () => console.log("Running on port 3000"));