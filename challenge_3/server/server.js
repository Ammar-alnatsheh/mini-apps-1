const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, './../public')));
app.get('/',(re,rs) =>{
    rs.send('hello');
});
 
const PORT = 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))