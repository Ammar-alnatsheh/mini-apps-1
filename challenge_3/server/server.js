const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Items = require('./controller.js');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../public')));

app.get('/items',(req,res) =>{
    Items.getItems()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(501).send();
    })
});

app.post('/checkout', Items.checkout);
 
const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))