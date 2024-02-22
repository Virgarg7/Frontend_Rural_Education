const express = require('express');
const { login, showEvent } = require('../controllers/login');

const Router = express.Router();

Router.post('/', login);
Router.get('/', showEvent)

module.exports = Router;