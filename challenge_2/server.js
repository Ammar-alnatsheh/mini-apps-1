const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const CSV = require('./CsvGenerator');
const PORT = 3000;

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

app.post('/', (req, res) => {
    CSV.generate(req.body, data => {
            res.status(200);
            res.send(data);
    });
});

 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
