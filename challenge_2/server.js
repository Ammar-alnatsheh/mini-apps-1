const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));

app.post('/', (req, res) => {
    res.status(201);
    res.send(req.body);
});

 
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))