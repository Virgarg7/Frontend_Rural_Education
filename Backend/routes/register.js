const express = require('express');
const { RegisterUser, showEvent } = require('../controllers/Register');

const Router = express.Router();

Router.post('/', RegisterUser);
Router.get('/', showEvent)

module.exports = Router;