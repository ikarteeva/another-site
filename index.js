const express = require('express');
const cors = require('cors');
const bodyPasrser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Main page');
});

app.listen(port, () => {
    console.log("Сервер работает на: " + port);
})