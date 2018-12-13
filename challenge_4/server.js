const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
 
// app.get('/', function (req, res) {
//   res.send('Hello World');
// })
 
const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

 
