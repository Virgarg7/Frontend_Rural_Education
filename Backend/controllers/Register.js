const express = require('express');
const bcrypt = require('bcrypt');
const Register = require('../models/register');


const RegisterUser = async (req, res) => {
    const { name, email, street, city, country, state, zip_code } = req.body;

    // Validation
    if (country.toLowerCase() !== 'india') {
        return res.status(400).json({ message: 'Country must be India' });
    }

    // List of states in India
    const statesInIndia = [
        "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
        "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
        "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
        "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
        "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    if (!statesInIndia.includes(state)) {
        return res.status(400).json({ message: 'Invalid state for India' });
    }

    try {
        // Check if the user with the given email already exists
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = new Register({ name, email, street, city, country, state, zip_code });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const showEvent = async (req, res) => {
    try {
        const eventData = await Register.find({}).exec();
        res.status(200).send(eventData);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    RegisterUser,
    showEvent
}
