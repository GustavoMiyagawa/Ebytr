const express = require('express');
const bodyParser = require('body-parser');

const listController = require('../controller/listController');

const app = express();
app.use(bodyParser.json());

app.get('/', listController.getList);

module.exports = app;
