const express = require('express');
const bcrypt = require('bcrypt');
const Login = require('../models/login');

const login = async (req, res) => {
    const { phone_no, password } = req.body.eventObj;

    try {
        // Check if the user exists
        const user = await Login.findOne({ password });

        console.log(password);
        console.log(user)

        if (!user) {
            return res.status(401).json({ message: 'Invalid phone number' });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Password is correct, login successful
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const showEvent = async (req, res) => {
    try {
        const eventData = await Login.find({}).exec();
        res.status(200).send(eventData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    login,
    showEvent
}
