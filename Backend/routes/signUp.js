const express = require('express');
const { signUp, showEvent } = require('../controllers/signUp');

const Router = express.Router();

Router.post('/', signUp);
Router.get('/', showEvent)

module.exports = Router;
