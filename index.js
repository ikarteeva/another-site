const express = require('express');
const cors = require('cors');
const bodyPasrser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const bodyParser = require('body-parser');
const user = require('./routes/user');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log("Success");
});

mongoose.connection.on('error', (err) => {
    console.log("Fail: " + err);
});

app.get('/', (req, res) => {
    res.send('Main page');
});

app.use('/user', user);


app.listen(port, () => {
    console.log("Сервер работает на: " + port);
})