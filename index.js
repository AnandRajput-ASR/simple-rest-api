const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Simple REST API!');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Anand' },
        { id: 2, name: 'Raj' },
    ]);
});

app.get('/products', (req, res) => {
    res.json([
        { id: 101, name: 'Laptop' },
        { id: 102, name: 'Phone' },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
