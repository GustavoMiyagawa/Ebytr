const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const listController = require('../controller/listController');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', listController.getList);
app.post('/', listController.create);

module.exports = app;
