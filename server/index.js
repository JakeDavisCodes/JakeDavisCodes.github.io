require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// MIDDLE WARE
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../'))); // SERVE CLIENT FILES

app.listen(3000);
console.log('LISTENING AT PORT: 3000');
