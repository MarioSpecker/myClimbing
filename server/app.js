const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const hall = require('./routes/hall.route'); // Imports routes 
// initialize our express app
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/clinbingdb');



app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));

app.use('/halls', hall);


let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});