const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/employees');
const db = mongoose.connection;

db.on('error', function(err){
  console.log(err);
});
db.once('open', function(){
  console.log('connection established');
});

const dataRoute = require('./routes/data');


// sets view folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(dataRoute);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
